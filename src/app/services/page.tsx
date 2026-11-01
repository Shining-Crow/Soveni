import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero, ServiceGrid } from "@/components/Sections";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI solutions, SaaS, backend and APIs, cloud and DevOps, UI/UX design and QA — delivered by one team.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end digital solutions for modern businesses."
        intro="From strategy to launch and beyond, we help you create digital products, brands and experiences that drive real business results."
      >
        <ButtonLink href="/contact">Start a Project</ButtonLink>
      </PageHero>
      <section className="container-page py-16 md:py-24">
        <ServiceGrid services={services} />
      </section>
      <CtaBand
        title="Not sure where to start?"
        body="Tell us what you want to achieve and we'll recommend the right mix of services."
      />
    </>
  );
}
