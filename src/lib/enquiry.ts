import { z } from "zod";

export const budgetOptions = [
  "Under £2,500",
  "£2,500 – £5,000",
  "£5,000 – £10,000",
  "£10,000+",
  "Not sure yet",
] as const;

export const timingOptions = ["As soon as possible", "Within 1–3 months", "3 months+", "Just exploring"] as const;

const optional = (schema: z.ZodString) =>
  z
    .string()
    .trim()
    .transform((v) => v || undefined)
    .pipe(schema.optional());

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  businessName: z.string().trim().min(2, "Please enter your business name.").max(160),
  website: optional(z.string().max(300)),
  services: z.array(z.string().max(80)).min(1, "Please choose at least one service.").max(10),
  description: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(4000),
  budget: optional(z.string().max(60)),
  timing: optional(z.string().max(60)),
  phone: optional(z.string().regex(/^[+\d\s()-]{7,20}$/, "Please enter a valid phone number.")),
  consent: z.literal("on", { errorMap: () => ({ message: "Please confirm you have read the privacy notice." }) }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof EnquiryInput, string>>;
      values?: Record<string, string | string[]>;
    };
