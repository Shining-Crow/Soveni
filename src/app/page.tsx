import { GlowWave, LaptopPhoneArt, RibbonArt } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
  CaseStudyCard,
  CtaBand,
  FaqList,
  ProcessSteps,
  SectionHeading,
  ServiceTile,
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
        <div className="container-page relative grid items-center gap-14 pt-14 pb-12 md:pt-20 lg:grid-cols-12 lg:pb-16">
          <div className="lg:col-span-6">
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
          <LaptopPhoneArt className="motion-safe:animate-rise lg:col-span-6" />
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

      {/* 2. Services on a light band */}
      <section className="relative bg-paper text-paper-ink">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            tone="light"
            eyebrow="Our services"
            title={
              <>
                Everything you need <br className="hidden sm:block" />
                to grow online.
              </>
            }
            action={
              <ButtonLink href="/services" variant="ghost" className="!text-accent hover:!text-paper-ink">
                View All Services
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {services.map((s) => (
              <li key={s.slug}>
                <ServiceTile service={s} />
              </li>
            ))}
          </ul>
        </div>
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
          <div className="relative lg:col-span-5">
            <div className="card relative aspect-[5/4] overflow-hidden">
              <RibbonArt className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-ink/60 p-5 backdrop-blur-md">
                <p className="text-sm text-muted">One partner. The right specialists.</p>
                <p className="mt-1 text-lg font-semibold">Strategy, design and technology — together.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
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
