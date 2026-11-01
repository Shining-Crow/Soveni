import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Soveni is a UK digital agency that combines strategy, design, engineering and testing with a trusted network of specialists.",
  alternates: { canonical: "/about" },
};

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
        title="A digital agency built around your growth."
        intro="We help small and medium-sized businesses look established online, reach the right customers and turn interest into enquiries."
      >
        <ButtonLink href="/contact">Start a Project</ButtonLink>
      </PageHero>

      <section className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="eyebrow">Our model</p>
          <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight md:text-4xl">
            One accountable team, with specialists when you need them.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-muted md:col-span-6 md:col-start-7">
          <p>
            Soveni combines business development, strategy and technical delivery. Our core team
            leads every engagement — scoping the work, managing the schedule and staying accountable
            for quality.
          </p>
          <p>
            For specialist skills such as native mobile or machine learning engineering, we work with a
            vetted network of collaborators. Before any project starts we agree the scope, cost,
            deadline and who is responsible for each part, so you always have one point of contact.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface/50">
        <div className="container-page py-16 md:py-24">
          <h2 className="text-3xl tracking-tight md:text-4xl">What we believe</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="card p-7">
                <h3 className="text-xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
