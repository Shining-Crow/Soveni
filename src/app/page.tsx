import Image from "next/image";
import dashboardLaptop from "../../public/images/dashboard-laptop.png";
import office from "../../public/images/office.png";
import { GlowWave } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
  CaseStudyCard,
  CtaBand,
  FaqList,
  ProcessSteps,
  SectionHeading,
  ServiceMarquee,
  backdropHeightClass,
  backdropTextClass,
  HeroBackdrop,
} from "@/components/Sections";
import { themes, type ServiceTheme } from "@/content/defaults";
import { getCaseStudies, getHomeFaqs, getServices } from "@/lib/content";

const pillars = [
  { icon: "target", title: "Strategy", body: "Business-focused" },
  { icon: "bulb", title: "Creativity", body: "Ideas that connect" },
  { icon: "brackets", title: "Technology", body: "Built for performance" },
  { icon: "users", title: "Collaboration", body: "An extension of your team" },
];

export default async function HomePage() {
  const [services, caseStudies, faqs] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getHomeFaqs(),
  ]);
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      {/* 1. Hero and growth goals */}
      <section className="hero-frame border-b-0">
        <div aria-hidden="true" className="hero-grid" />
        <GlowWave className="absolute top-40 right-0 -z-10 h-[26rem] w-full opacity-60" />
        <div className="relative">
          <HeroBackdrop image={dashboardLaptop} position="65% center" />
          <div
            className={`container-page relative flex items-center pt-14 pb-12 md:pt-20 lg:pb-16 ${backdropHeightClass}`}
          >
            <div className={backdropTextClass}>
              <p className="eyebrow motion-safe:animate-rise">Digital growth agency</p>
              <h1 className="mt-5 text-[2.75rem] leading-[1.03] text-balance motion-safe:animate-rise sm:text-6xl lg:text-[4.1rem]">
                A stronger presence. A clearer <span className="text-gradient">direction.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise">
                We help ambitious brands grow through strategic thinking, creative design and digital
                solutions that work.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Start a Project</ButtonLink>
                <ButtonLink href="/services" variant="secondary" arrow={false}>
                  Explore Our Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="container-page relative pb-20 md:pb-24">
          <ul className="grid gap-5 md:grid-cols-3">
            {(Object.keys(themes) as ServiceTheme[]).map((key) => {
              const theme = themes[key];
              const related = services.filter((s) => s.theme === key);
              return (
                <li key={key} className="card card-hover group flex flex-col p-7">
                  <Icon name={theme.icon} className="icon-glow size-9 text-sky" />
                  <h2 className="mt-5 text-xl">{theme.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{theme.title}</p>
                  {related.length > 0 && (
                    <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-subtle">
                      {related.map((s) => s.title.replace(/\s*\(.*\)$/, "")).join(" · ")}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 2. Services */}
      <section className="relative isolate overflow-hidden border-y border-line bg-[radial-gradient(50rem_24rem_at_75%_0%,rgb(10_92_255/0.18),transparent_70%)]">
        <GlowWave className="absolute right-0 bottom-0 -z-10 h-64 w-full opacity-80 md:h-80" />
        <div className="container-page pt-20 md:pt-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-3 !text-fg">
                Our services
                <span aria-hidden="true" className="h-px w-12 bg-accent" />
              </p>
              <h2 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
                Everything you need <br className="hidden sm:block" />
                to grow <span className="text-gradient pr-1 italic">online</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="self-start !rounded-full border-accent/60 shadow-[0_0_24px_-6px_rgb(31_139_255/0.7)] md:self-auto"
            >
              View All Services
            </ButtonLink>
          </div>
        </div>
        <ServiceMarquee services={services} />
      </section>

      {/* 3. Authorised projects (only when approved case studies exist) */}
      {featured.length > 0 && (
        <section className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow="Our work"
            title={
              <>
                Real projects. <span className="text-gradient">Real results.</span>
              </>
            }
            intro="A selection of projects we have delivered for startups and growing businesses."
            action={
              <ButtonLink href="/work" variant="ghost">
                View All Projects
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((study) => (
              <li key={study.slug}>
                <CaseStudyCard study={study} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 4. About */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute inset-[8%] -z-10 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="card overflow-hidden shadow-[0_30px_80px_-30px_rgb(31_139_255/0.6)]">
              <Image
                src={office}
                alt="Modern meeting room with an illuminated Soveni sign"
                placeholder="blur"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">About Soveni</p>
            <h2 className="mt-4 text-3xl leading-[1.1] md:text-5xl">
              A collaborative partner in your <span className="text-gradient">growth.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              We lead every project directly and remain your single point of contact from the first
              conversation to launch and beyond. When a project needs specialist skills, we bring in
              trusted collaborators and manage them for you.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {pillars.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <Icon name={p.icon} className="icon-glow mt-0.5 size-6 shrink-0 text-sky" />
                  <div>
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="/about" variant="ghost">
                More about us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="relative overflow-hidden border-y border-line bg-surface">
        <GlowWave className="absolute right-0 bottom-0 h-56 w-full opacity-40" />
        <div className="container-page relative py-20 md:py-28">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A clear, collaborative process from start to{" "}
                <span className="text-gradient">growth.</span>
              </>
            }
            action={
              <ButtonLink href="/how-we-work" variant="ghost">
                See how we work
              </ButtonLink>
            }
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 text-3xl leading-[1.1] md:text-4xl">
            Frequently <span className="text-gradient">asked.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll help.
          </p>
        </div>
        <div className="md:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* 7. Enquiry CTA */}
      <CtaBand />
    </>
  );
}
