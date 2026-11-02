import type { Metadata } from "next";
import { GlowWave } from "@/components/Artwork";
import { Icon } from "@/components/Icon";
import { SocialLinks } from "@/components/Sections";
import { getServices, getSettings } from "@/lib/content";
import { EnquiryForm } from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Soveni. Tell us what you need and we'll be in touch.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ service?: string }> };

const nextSteps = [
  "We review your enquiry, usually within one working day.",
  "We arrange a short call to understand your goals.",
  "We send a clear proposal with scope, cost and timings.",
];

export default async function ContactPage({ searchParams }: Props) {
  const [{ service }, services, settings] = await Promise.all([
    searchParams,
    getServices(),
    getSettings(),
  ]);

  const details = [
    settings.contactEmail && {
      icon: "mail",
      label: "Email",
      value: settings.contactEmail,
      href: `mailto:${settings.contactEmail}`,
    },
    settings.contactPhone && {
      icon: "phone",
      label: "Phone",
      value: settings.contactPhone,
      href: `tel:${settings.contactPhone.replace(/\s/g, "")}`,
    },
    settings.companyLocation && {
      icon: "pin",
      label: "Location",
      value: settings.companyLocation,
    },
  ].filter(Boolean) as { icon: string; label: string; value: string; href?: string }[];

  return (
    <section className="hero-frame">
      <div aria-hidden="true" className="hero-grid" />
      <GlowWave className="absolute right-0 bottom-0 -z-10 h-72 w-full md:h-96" />
      <div className="container-page relative grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className="lg:col-span-5 xl:col-span-4">
          <p className="eyebrow motion-safe:animate-rise">Get in touch</p>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] text-balance motion-safe:animate-rise sm:text-5xl lg:text-6xl">
            Let&apos;s build something <span className="text-gradient">great.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted motion-safe:animate-rise">
            Tell us about your project, goals or idea — we&apos;d love to hear from you.
          </p>

          {details.length > 0 && (
            <ul className="mt-10 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-center gap-4">
                  <span className="icon-tile size-12 shrink-0">
                    <Icon name={d.icon} className="icon-glow size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-muted transition-colors hover:text-sky">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-muted">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="eyebrow">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-[#0a2550] text-xs font-bold text-fg tabular-nums">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <SocialLinks settings={settings} className="mt-10" />
        </div>

        <div className="lg:col-span-7 xl:col-span-8">
          <div className="rounded-3xl border border-line-strong bg-[#08101e]/85 p-6 lg:p-12 shadow-[0_40px_100px_-30px_rgb(10_92_255/0.55)] backdrop-blur-xl md:p-10">
            <EnquiryForm
              services={services.map(({ slug, title }) => ({ slug, title }))}
              preselected={service}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
