import Link from "next/link";
import type { CaseStudyContent, FaqContent, ServiceContent } from "@/content/defaults";
import { ButtonLink } from "./Button";
import { Icon } from "./Icon";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-[1.1] font-normal tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </div>
      {(intro || action) && (
        <div className="md:col-span-5">
          {intro && <p className="leading-relaxed text-muted">{intro}</p>}
          {action && <div className="mt-4">{action}</div>}
        </div>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-champagne/10 blur-3xl"
      />
      <div className="container-page relative py-16 md:py-28">
        <p className="eyebrow motion-safe:animate-rise">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] tracking-tight text-balance motion-safe:animate-rise md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted motion-safe:animate-rise">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: ServiceContent }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group flex h-full flex-col gap-4 p-6 transition-colors hover:border-champagne/50"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line text-champagne">
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm text-champagne">
        Learn more
        <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        <span className="sr-only">about {service.title}</span>
      </span>
    </Link>
  );
}

export function ServiceGrid({ services }: { services: ServiceContent[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <li key={s.slug}>
          <ServiceCard service={s} />
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudyContent }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="card group block overflow-hidden transition-colors hover:border-champagne/50"
    >
      <div className="aspect-[16/10] bg-raised">
        {study.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={study.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">{study.title}</h3>
          <Icon name="arrow" className="size-4 shrink-0 text-champagne" />
        </div>
        <p className="mt-1 text-sm text-muted">{study.clientName}</p>
        {study.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
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
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg [&::-webkit-details-marker]:hidden">
            {faq.question}
            <Icon
              name="plus"
              className="size-5 shrink-0 text-champagne transition-transform group-open:rotate-45"
            />
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
    body: "We learn about your business, customers and goals, and review what you already have.",
  },
  {
    title: "Shape",
    body: "We agree the plan, structure and creative direction with you before any build begins.",
  },
  {
    title: "Deliver",
    body: "We produce the work in stages, sharing progress so there are no surprises at launch.",
  },
  {
    title: "Refine",
    body: "We measure what is working and keep improving it, so results build over time.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, i) => (
        <li key={step.title} className="card p-6">
          <span className="text-sm text-champagne tabular-nums">0{i + 1}</span>
          <h3 className="mt-6 text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({
  title = "Let's build what's next.",
  body = "Have a project in mind? Tell us a little about it and we'll get back to you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="card relative overflow-hidden px-6 py-14 md:px-14 md:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-32 size-96 rounded-full bg-champagne/15 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl tracking-tight text-balance md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-muted">{body}</p>
          </div>
          <ButtonLink href="/contact" className="self-start md:self-auto">
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
