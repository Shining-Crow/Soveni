"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { budgetOptions, timingOptions, type EnquiryState } from "@/lib/enquiry";
import { submitEnquiry } from "./actions";

const inputClass =
  "mt-2 block min-h-12 w-full rounded-xl border border-line-strong bg-[#050b17] px-4 py-3 text-base text-fg placeholder:text-subtle transition-all focus:border-accent focus:shadow-[0_0_0_4px_rgb(31_139_255/0.15)] focus:outline-none aria-[invalid=true]:border-red-400";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="ml-1.5 font-normal text-subtle">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({
  services,
  preselected,
}: {
  services: { slug: string; title: string }[];
  preselected?: string;
}) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, {
    status: "idle",
  });
  const [startedAt, setStartedAt] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => setStartedAt(String(Date.now())), []);
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="py-6 md:py-10">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_0_30px_rgb(31_139_255/0.6)]">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="mt-6 text-3xl tracking-tight">Thank you — we've got it.</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">
          We'll review your enquiry and reply by email, usually within one working day.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};
  const v = (key: string) => (typeof values[key] === "string" ? (values[key] as string) : undefined);
  const selected = Array.isArray(values.services)
    ? values.services
    : preselected
      ? [preselected]
      : [];
  const a11y = (key: keyof typeof errors) =>
    errors[key] ? { "aria-invalid": true, "aria-describedby": `${key}-error` } : {};

  return (
    <form action={action} noValidate className="space-y-6" key={JSON.stringify(values)}>
      <div>
        <h2 className="text-2xl md:text-3xl">Send us a message</h2>
        <p className="mt-2 text-sm text-muted">Fields marked optional can be left blank.</p>
      </div>
      {state.status === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" required defaultValue={v("name")} className={inputClass} {...a11y("name")} />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required defaultValue={v("email")} className={inputClass} {...a11y("email")} />
        </Field>
        <Field id="businessName" label="Business name" error={errors.businessName}>
          <input id="businessName" name="businessName" autoComplete="organization" required defaultValue={v("businessName")} className={inputClass} {...a11y("businessName")} />
        </Field>
        <Field id="website" label="Website or social profile" optional error={errors.website}>
          <input id="website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.co.uk" defaultValue={v("website")} className={inputClass} {...a11y("website")} />
        </Field>
      </div>

      <fieldset aria-describedby={errors.services ? "services-error" : undefined}>
        <legend className="text-sm font-medium">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => (
            <label
              key={s.slug}
              className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-line-strong px-4 py-2 text-sm transition-colors hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent/15 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sky"
            >
              <input
                type="checkbox"
                name="services"
                value={s.title}
                defaultChecked={selected.includes(s.title) || selected.includes(s.slug)}
                className="size-4 accent-[var(--color-accent)]"
              />
              {s.title}
            </label>
          ))}
        </div>
        {errors.services && (
          <p id="services-error" className="mt-2 text-sm text-red-300">
            {errors.services}
          </p>
        )}
      </fieldset>

      <Field id="description" label="Project details" error={errors.description}>
        <textarea id="description" name="description" rows={6} required defaultValue={v("description")} placeholder="What would you like to achieve, and is there anything we should know?" className={`${inputClass} resize-y`} {...a11y("description")} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field id="budget" label="Budget" optional>
          <select id="budget" name="budget" defaultValue={v("budget") ?? ""} className={inputClass}>
            <option value="">Select…</option>
            {budgetOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="timing" label="Timing" optional>
          <select id="timing" name="timing" defaultValue={v("timing") ?? ""} className={inputClass}>
            <option value="">Select…</option>
            {timingOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" defaultValue={v("phone")} className={inputClass} {...a11y("phone")} />
        </Field>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]" {...a11y("consent")} />
          <span>
            I agree that Soveni may use these details to respond to my enquiry, as described in the{" "}
            <Link href="/privacy" className="text-fg underline underline-offset-4 hover:text-sky">
              privacy notice
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-red-300">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" disabled={pending} className={buttonClass("primary", "w-full !py-4 disabled:opacity-60 sm:w-auto sm:!px-10")}>
        {pending ? "Sending…" : "Send Message"}
        <Icon name="arrow" className="size-4" />
      </button>
    </form>
  );
}
