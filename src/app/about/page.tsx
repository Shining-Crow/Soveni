import type { Metadata } from "next";
import { RibbonArt } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Soveni is a UK digital growth agency combining strategy, creativity and technology to help businesses grow.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { icon: "target", title: "Strategy", body: "Business-focused" },
  { icon: "bulb", title: "Creativity", body: "Ideas that connect" },
  { icon: "brackets", title: "Technology", body: "Built for performance" },
  { icon: "users", title: "Collaboration", body: "A true extension of your team" },
];

const values = [
  {
    title: "Clarity first",
    body: "Plain-English advice, clear proposals and no jargon. You will always know what we are doing and why.",
  },
  {
    title: "Built to perform",
    body: "Good design matters, but only if it helps your business. We focus on work that drives enquiries and sales.",
  },
  {
    title: "Honest by default",
    body: "We set realistic expectations, report results truthfully and never promise what we cannot deliver.",
  },
  {
    title: "Partners, not suppliers",
    body: "We aim to be the team you call first — invested in your growth long after launch day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Soveni"
        title={
          <>
            A collaborative partner in your <span className="text-gradient">growth.</span>
          </>
        }
        intro="We combine strategy, creativity and technology to create meaningful digital experiences that help businesses grow."
        art={
          <div className="relative aspect-[6/5]">
            <RibbonArt className="absolute inset-0 h-full w-full" />
          </div>
        }
        wave={false}
      >
        <ButtonLink href="/contact">Start a Project</ButtonLink>
      </PageHero>

      <section className="border-b border-line bg-surface">
        <ul className="container-page grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className={`flex flex-col gap-3 px-2 lg:px-8 ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <Icon name={p.icon} className="icon-glow size-9 text-sky" />
              <h2 className="text-lg">{p.title}</h2>
              <p className="-mt-2 text-sm text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="card relative aspect-[4/3] overflow-hidden bg-[radial-gradient(ellipse_at_30%_40%,#0f3a8a,#050b18_70%)]">
            <svg viewBox="0 0 400 300" aria-hidden="true" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="ap-s" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4cc4ff" />
                  <stop offset="1" stopColor="#0a5cff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {Array.from({ length: 22 }, (_, i) => (
                <ellipse
                  key={i}
                  cx={170 + i * 3}
                  cy={150 - i}
                  rx={60 + i * 7}
                  ry={30 + i * 4}
                  transform={`rotate(${-30 + i * 4} 200 150)`}
                  fill="none"
                  stroke="url(#ap-s)"
                  strokeOpacity={0.15 + (i % 4) * 0.12}
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-4 text-3xl leading-[1.15] md:text-4xl">
            We work as an extension of your team — focused on your goals, your audience and your
            long-term growth.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Our core team leads every engagement — scoping the work, managing the schedule and
              staying accountable for quality.
            </p>
            <p>
              For specialist skills we work with a vetted network of collaborators. Before any project
              starts we agree the scope, cost, deadline and who is responsible for each part, so you
              always have one point of contact.
            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/how-we-work" variant="ghost">
              See how we work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Our values</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            What we <span className="text-gradient">believe.</span>
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title} className="card card-hover flex gap-5 p-7">
                <span className="text-sm font-bold text-sky tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="text-xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
