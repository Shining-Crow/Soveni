import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowcaseArt } from "@/components/Artwork";
import { CtaBand, PageHero } from "@/components/Sections";
import { getCaseStudies } from "@/lib/content";
import { WorkGrid } from "./WorkGrid";

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
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Selected projects and <span className="text-gradient">success stories.</span>
          </>
        }
        intro="A collection of our recent work, showing how we help brands build, grow and perform online."
        art={<ShowcaseArt />}
      />
      <section className="container-page py-16 md:py-24">
        <WorkGrid studies={studies} />
      </section>
      <CtaBand />
    </>
  );
}
