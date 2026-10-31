import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { HeroArt } from "@/components/HeroArt";
import { Icon } from "@/components/Icon";
import {
  CaseStudyCard,
  CtaBand,
  FaqList,
  ProcessSteps,
  SectionHeading,
  ServiceGrid,
} from "@/components/Sections";
import { themes, type ServiceTheme } from "@/content/defaults";
import { getCaseStudies, getHomeFaqs, getServices } from "@/lib/content";

export default async function HomePage() {
  const [services, caseStudies, faqs] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getHomeFaqs(),
  ]);
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <HeroArt className="absolute top-1/2 -right-40 aspect-square w-[34rem] -translate-y-1/2 opacity-40 sm:-right-24 sm:opacity-60 md:w-[44rem] lg:-right-16 lg:opacity-100" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent"
        />
        <div className="container-page relative py-20 md:py-32 lg:py-40">
          <p className="eyebrow motion-safe:animate-rise">Strategy / Design / Digital / Growth</p>
          <h1 className="mt-6 max-w-3xl text-[2.75rem] leading-[1.02] tracking-tight motion-safe:animate-rise sm:text-6xl lg:text-7xl">
            A stronger presence.
            <span className="block text-champagne">A clearer direction.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise">
            We are Soveni, a digital agency helping ambitious businesses design, build and grow
            meaningful online experiences.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start a Project</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 2. Authorised projects (only when approved case studies exist) */}
      {featured.length > 0 && (
        <section className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected projects."
            action={
              <ButtonLink href="/work" variant="ghost">
                View all projects
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {featured.map((study) => (
              <li key={study.slug}>
                <CaseStudyCard study={study} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 3. Business-needs paths */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Where can we help?"
          title="Start with what your business needs."
          intro="Most clients come to us with one of three goals. Each path brings together the services that move it forward."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {(Object.keys(themes) as ServiceTheme[]).map((key) => {
            const theme = themes[key];
            const related = services.filter((s) => s.theme === key);
            return (
              <li key={key} className="card flex flex-col p-7 md:p-8">
                <p className="text-sm text-champagne">{theme.label}</p>
                <h3 className="mt-4 text-2xl leading-snug">{theme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{theme.description}</p>
                <ul className="mt-6 space-y-1 border-t border-line pt-4">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex min-h-11 items-center justify-between gap-4 text-sm hover:text-champagne"
                      >
                        {s.title}
                        <Icon name="arrow" className="size-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 4. All seven services */}
      <section className="border-y border-line bg-surface/50">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Our services"
            title="End-to-end digital services for growing businesses."
            intro="From strategy to launch and beyond, we help you build a brand, reach the right people and turn interest into enquiries."
            action={
              <ButtonLink href="/services" variant="ghost">
                View all services
              </ButtonLink>
            }
          />
          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>
        </div>
      </section>

      {/* 5. About and collaborator model */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">About Soveni</p>
          <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight md:text-5xl">
            One partner. The right specialists.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-muted md:col-span-6 md:col-start-7">
          <p>
            Soveni brings together strategy, design, development and marketing under one roof. We
            lead every project directly and remain your single point of contact from the first
            conversation to launch and beyond.
          </p>
          <p>
            When a project needs specialist skills, we bring in trusted collaborators and manage
            them for you — so you get the depth of a larger agency without the overheads.
          </p>
          <ButtonLink href="/about" variant="ghost">
            More about us
          </ButtonLink>
        </div>
      </section>

      {/* 6. Process */}
      <section className="border-y border-line bg-surface/50">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="How we work"
            title="A clear process, from first call to continuous improvement."
            action={
              <ButtonLink href="/how-we-work" variant="ghost">
                See how we work
              </ButtonLink>
            }
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight md:text-4xl">
            Frequently asked.
          </h2>
        </div>
        <div className="md:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* 8. Enquiry CTA */}
      <CtaBand />
    </>
  );
}
