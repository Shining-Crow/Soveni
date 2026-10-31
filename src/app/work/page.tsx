import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyCard, CtaBand, PageHero } from "@/components/Sections";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected projects delivered by Soveni.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const studies = await getCaseStudies();
  // Our Work stays unpublished until verified, authorised case studies exist.
  if (studies.length === 0) notFound();

  return (
    <>
      <PageHero eyebrow="Our Work" title="Selected projects." />
      <section className="container-page py-16 md:py-24">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
