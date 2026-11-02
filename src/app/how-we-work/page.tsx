import type { Metadata } from "next";
import codeLaptop from "../../../public/images/code-laptop.png";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero, ProcessSteps, processSteps } from "@/components/Sections";

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
    "Sitemap, user flows and campaign plans",
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
        title={
          <>
            A clear, collaborative process from start to{" "}
            <span className="text-gradient">growth.</span>
          </>
        }
        intro="A proven process that turns your goals into real results, with clarity, collaboration and continuous improvement."
        background={codeLaptop}
        backgroundPosition="60% center"
        below={<ProcessSteps />}
      />

      <section className="container-page py-20 md:py-24">
        <p className="eyebrow">Step by step</p>
        <h2 className="mt-4 text-3xl md:text-5xl">
          What happens at <span className="text-gradient">each stage.</span>
        </h2>
        <ol className="mt-12 space-y-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="card card-hover grid gap-8 p-7 md:grid-cols-12 md:p-10">
              <div className="flex gap-5 md:col-span-5">
                <span className="icon-tile size-14 shrink-0">
                  <Icon name={step.icon} className="icon-glow size-7" />
                </span>
                <div>
                  <span className="text-sm font-bold text-sky tabular-nums">Step 0{i + 1}</span>
                  <h3 className="mt-1 text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
                </div>
              </div>
              <ul className="space-y-3 md:col-span-6 md:col-start-7 md:self-center">
                {detail[step.title].map((d) => (
                  <li key={d} className="flex items-start gap-3 border-b border-line pb-3 text-sm">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-sky" />
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-4">
        <div className="card flex flex-col gap-6 p-7 md:flex-row md:items-center md:p-10">
          <span className="icon-tile size-14 shrink-0">
            <Icon name="clock" className="icon-glow size-7" />
          </span>
          <div>
            <h2 className="text-2xl">What we need from you</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              Projects move fastest when we have your business information, brand assets and
              content early, and when feedback arrives promptly at each approval stage. We will tell
              you exactly what is needed and when.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
