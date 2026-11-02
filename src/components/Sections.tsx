import Link from "next/link";
import type {
  CaseStudyContent,
  FaqContent,
  ServiceContent,
  SiteSettings,
} from "@/content/defaults";
import { GlowWave } from "./Artwork";
import { ButtonLink } from "./Button";
import { Icon } from "./Icon";

/** Renders a title with its final words in the blue highlight, e.g. "Web Design &" / "Development". */
export function AccentTitle({ text }: { text: string }) {
  const paren = text.match(/^(.*?)\s*(\(.*\))$/);
  if (paren) {
    return (
      <>
        <span className="text-gradient">{paren[1]}</span>
        <span className="mt-2 block text-[0.45em] font-semibold tracking-normal text-muted">
          {paren[2]}
        </span>
      </>
    );
  }
  const amp = text.lastIndexOf(" & ");
  const cut = amp > -1 ? amp + 2 : text.lastIndexOf(" ");
  if (cut < 1) return <span className="text-gradient">{text}</span>;
  return (
    <>
      {text.slice(0, cut)} <span className="text-gradient">{text.slice(cut + 1)}</span>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  tone = "dark",
  align = "split",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  action?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "split" | "center";
}) {
  const muted = tone === "light" ? "text-slate-600" : "text-muted";
  const eyebrowColor = tone === "light" ? "!text-accent" : "";
  if (align === "center") {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-[1.1] text-balance md:text-5xl">{title}</h2>
        {intro && <p className={`mx-auto mt-5 max-w-2xl leading-relaxed ${muted}`}>{intro}</p>}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-[1.1] text-balance md:text-5xl">{title}</h2>
      </div>
      {(intro || action) && (
        <div className="md:col-span-5 md:text-right">
          {intro && <p className={`leading-relaxed md:text-left ${muted}`}>{intro}</p>}
          {action && <div className="mt-4">{action}</div>}
        </div>
      )}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="motion-safe:animate-rise">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-subtle">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-sky">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  breadcrumbs,
  title,
  intro,
  children,
  art,
  below,
  wave = true,
}: {
  eyebrow?: string;
  breadcrumbs?: React.ReactNode;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
  art?: React.ReactNode;
  /** Full-width content inside the hero, under the text (e.g. the process steps). */
  below?: React.ReactNode;
  wave?: boolean;
}) {
  return (
    <section className="hero-frame">
      <div aria-hidden="true" className="hero-grid" />
      {wave && (
        <GlowWave className="absolute right-0 bottom-0 -z-10 h-48 w-full opacity-70 md:h-64" />
      )}
      <div
        className={`container-page relative grid items-center gap-12 py-16 md:py-24 ${
          art ? "lg:grid-cols-12 lg:py-20" : ""
        }`}
      >
        <div className={art ? "lg:col-span-6" : "max-w-4xl"}>
          {breadcrumbs}
          {eyebrow && <p className="eyebrow motion-safe:animate-rise">{eyebrow}</p>}
          <h1
            className={`mt-5 text-[2.5rem] leading-[1.05] text-balance motion-safe:animate-rise sm:text-5xl ${
              art ? "lg:text-[3.6rem]" : "md:text-6xl"
            }`}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise">
              {intro}
            </p>
          )}
          {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {art && <div className="motion-safe:animate-rise lg:col-span-6">{art}</div>}
      </div>
      {below && <div className="container-page relative pb-20 md:pb-24">{below}</div>}
    </section>
  );
}

/** Large dark card used on the services hub and service pages. */
export function ServiceCard({ service, wide }: { service: ServiceContent; wide?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`card card-hover group relative flex h-full overflow-hidden p-7 md:p-8 ${
        wide ? "flex-col gap-6 sm:flex-row sm:items-center" : "flex-col"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 size-48 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/20"
      />
      <span className="icon-tile size-14 shrink-0">
        <Icon name={service.icon} className="icon-glow size-7" />
      </span>
      <div className={wide ? "flex-1" : "mt-7"}>
        <h3 className="text-xl leading-snug md:text-[1.4rem]">{service.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold text-sky ${
          wide ? "" : "mt-auto pt-7"
        }`}
      >
        <span className={wide ? "sr-only" : ""}>Learn more</span>
        <span className="inline-flex size-9 items-center justify-center rounded-full border border-accent/30 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <Icon name="arrow" className="size-4" />
        </span>
        <span className="sr-only">about {service.title}</span>
      </span>
    </Link>
  );
}

/** Three columns; a lone final card stretches full width, as in the services design. */
export function ServiceGrid({ services }: { services: ServiceContent[] }) {
  const lastWide = services.length % 3 === 1;
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const wide = lastWide && i === services.length - 1;
        return (
          <li key={s.slug} className={wide ? "md:col-span-2 lg:col-span-3" : ""}>
            <ServiceCard service={s} wide={wide} />
          </li>
        );
      })}
    </ul>
  );
}

/** Compact light tile for the homepage services strip. */
export function ServiceTile({ service }: { service: ServiceContent }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white px-3 py-6 text-center shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-16px_rgb(31_139_255/0.45)]"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-4 text-sm leading-snug font-semibold tracking-normal text-paper-ink">
        {service.title.replace(/\s*\(.*\)$/, "")}
      </h3>
    </Link>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudyContent }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="card card-hover group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-raised">
        {study.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={study.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg">{study.title}</h3>
          <Icon
            name="arrow"
            className="size-4 shrink-0 text-sky transition-transform group-hover:translate-x-1"
          />
        </div>
        <p className="mt-1 text-sm text-muted">{study.clientName}</p>
        {study.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sky">
            {study.tags.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-line-strong" />}
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

export function FaqList({ faqs }: { faqs: FaqContent[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="card group px-6 open:border-accent/40">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/30 text-sky transition-all group-open:rotate-45 group-open:bg-accent group-open:text-white">
              <Icon name="plus" className="size-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export const processSteps = [
  {
    title: "Understand",
    icon: "search",
    short: "Learn your goals, audience and challenges.",
    body: "We learn about your business, customers and goals, and review what you already have.",
  },
  {
    title: "Shape",
    icon: "layers",
    short: "Create a clear strategy and roadmap.",
    body: "We agree the plan, structure and creative direction with you before any build begins.",
  },
  {
    title: "Deliver",
    icon: "brackets",
    short: "Bring the plan to life with precision.",
    body: "We produce the work in stages, sharing progress so there are no surprises at launch.",
  },
  {
    title: "Refine",
    icon: "chart",
    short: "Analyse, optimise and grow together.",
    body: "We measure what is working and keep improving it, so results build over time.",
  },
];

/** Numbered step cards joined by arrows, as in the How We Work design. */
export function ProcessSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="relative grid gap-x-6 gap-y-12 pt-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="absolute top-[4.6rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block"
      />
      {processSteps.map((step, i) => (
        <li key={step.title} className="group relative">
          <div className="card card-hover relative h-full p-6 pt-10">
            <span className="absolute -top-5 left-6 inline-flex size-10 items-center justify-center rounded-full border border-accent/50 bg-[#0a2550] text-sm font-bold text-white tabular-nums shadow-[0_0_20px_rgb(31_139_255/0.5)]">
              0{i + 1}
            </span>
            <span className="icon-tile size-16">
              <Icon name={step.icon} className="icon-glow size-8" />
            </span>
            <h3 className="mt-7 text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {detailed ? step.body : step.short}
            </p>
          </div>
          {i < processSteps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-[4.6rem] -right-[1.15rem] z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-accent lg:inline-flex"
            >
              <Icon name="arrow" className="size-4" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function SocialLinks({
  settings,
  className = "",
}: {
  settings: SiteSettings;
  className?: string;
}) {
  const links = [
    { href: settings.socialX, icon: "x", label: "X" },
    { href: settings.socialInstagram, icon: "instagram", label: "Instagram" },
    { href: settings.socialLinkedin, icon: "linkedin", label: "LinkedIn" },
  ].filter((l) => l.href);
  if (links.length === 0) return null;
  return (
    <ul className={`flex gap-3 ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Soveni on ${l.label}`}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-line-strong text-fg transition-colors hover:border-accent hover:bg-accent/15 hover:text-sky"
          >
            <Icon name={l.icon} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title = "Let's build something great.",
  body = "Have a project in mind? Tell us a little about it and we'll get back to you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="relative isolate overflow-hidden rounded-3xl border border-accent/30 bg-[linear-gradient(120deg,#061a3d_0%,#0a2f78_55%,#1167e6_100%)] px-6 py-14 shadow-[0_30px_80px_-30px_rgb(31_139_255/0.7)] md:px-14 md:py-20">
        <GlowWave className="absolute inset-x-0 bottom-0 -z-10 h-full w-full opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-sky/30 blur-3xl"
        />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl text-balance md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/75">{body}</p>
          </div>
          <ButtonLink
            href="/contact"
            className="self-start !bg-none !bg-white !text-paper-ink hover:!bg-paper md:self-auto"
          >
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
