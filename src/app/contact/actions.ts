"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { enquirySchema, type EnquiryInput, type EnquiryState } from "@/lib/enquiry";
import { hasDatabase, prisma } from "@/lib/prisma";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const MIN_FILL_TIME_MS = 3000;

function hashIp(ip: string) {
  const salt = process.env.ENQUIRY_IP_SALT ?? "soveni";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

async function notify(enquiry: EnquiryInput) {
  const { RESEND_API_KEY, ENQUIRY_NOTIFY_TO, ENQUIRY_NOTIFY_FROM } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_NOTIFY_TO || !ENQUIRY_NOTIFY_FROM) return;

  const lines = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Business: ${enquiry.businessName}`,
    `Website: ${enquiry.website ?? "—"}`,
    `Phone: ${enquiry.phone ?? "—"}`,
    `Services: ${enquiry.services.join(", ")}`,
    `Budget: ${enquiry.budget ?? "—"}`,
    `Timing: ${enquiry.timing ?? "—"}`,
    "",
    enquiry.description,
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: ENQUIRY_NOTIFY_FROM,
      to: ENQUIRY_NOTIFY_TO.split(",").map((s) => s.trim()),
      reply_to: enquiry.email,
      subject: `New enquiry: ${enquiry.businessName}`,
      text: lines.join("\n"),
    }),
  });
  if (!res.ok) console.error("[enquiry] notification failed", res.status, await res.text());
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    businessName: String(formData.get("businessName") ?? ""),
    website: String(formData.get("website") ?? ""),
    services: formData.getAll("services").map(String),
    description: String(formData.get("description") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    timing: String(formData.get("timing") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    consent: String(formData.get("consent") ?? ""),
  };

  // Anti-spam: honeypot field and minimum time to complete the form.
  const startedAt = Number(formData.get("startedAt"));
  if (formData.get("company_url") || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const parsed = enquirySchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof EnquiryInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof EnquiryInput;
      fieldErrors[key] ??= issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  if (!hasDatabase) {
    console.warn("[enquiry] DATABASE_URL not set — enquiry not stored", parsed.data.email);
    return {
      status: "error",
      message: "Our enquiry form is temporarily unavailable. Please try again shortly.",
      values,
    };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  const ipHash = hashIp(ip);

  try {
    const recent = await prisma.enquiry.count({
      where: { ipHash, createdAt: { gte: new Date(Date.now() - RATE_LIMIT_WINDOW_MS) } },
    });
    if (recent >= RATE_LIMIT_MAX) {
      return {
        status: "error",
        message: "We've received several enquiries from you recently. Please try again later.",
        values,
      };
    }

    const { consent, ...data } = parsed.data;
    await prisma.enquiry.create({
      data: {
        ...data,
        consent: consent === "on",
        ipHash,
        userAgent: h.get("user-agent")?.slice(0, 300),
      },
    });
  } catch (error) {
    console.error("[enquiry] failed to store", error);
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please try again.",
      values,
    };
  }

  try {
    await notify(parsed.data);
  } catch (error) {
    console.error("[enquiry] notification error", error);
  }

  return { status: "success" };
}
