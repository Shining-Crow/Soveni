import type { Metadata } from "next";
import { CtaBand, PageHero, processSteps } from "@/components/Sections";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Understand, Shape, Deliver, Refine — the process behind every Soveni project.",
  alternates: { canonical: "/how-we-work" },
};

const detail: Record<string, string[]> = {
  Understand: [
    "An initial call to understand your business and goals",
    "Review of your current website, brand and channels",
    "A written proposal with scope, cost and timeline",
  ],
  Shape: [
    "Sitemap, content plan or campaign structure",
    "Visual direction for desktop and mobile",
    "Your approval before production begins",
  ],
  Deliver: [
    "Work produced in stages with regular previews",
    "Testing across devices, browsers and accessibility needs",
    "Launch, handover and editor training",
  ],
  Refine: [
    "Monitoring performance, enquiries and feedback",
    "Plain-English reporting on what is working",
    "Ongoing improvements through care and growth plans",
  ],
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A clear process, with no surprises."
        intro="Every project follows four stages. You will know what is happening, what we need from you and what comes next."
      />

      <section className="container-page py-16 md:py-24">
        <ol className="space-y-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="card grid gap-6 p-7 md:grid-cols-12 md:p-10">
              <div className="md:col-span-5">
                <span className="text-sm text-champagne tabular-nums">0{i + 1}</span>
                <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </div>
              <ul className="space-y-3 md:col-span-6 md:col-start-7 md:self-center">
                {detail[step.title].map((d) => (
                  <li key={d} className="border-b border-line pb-3 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-4">
        <div className="card p-7 md:p-10">
          <h2 className="text-2xl">What we need from you</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            Projects move fastest when we have your business information, brand assets and content
            early, and when feedback arrives promptly at each approval stage. We will tell you
            exactly what is needed and when.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
