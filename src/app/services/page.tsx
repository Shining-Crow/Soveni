import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero, ServiceGrid } from "@/components/Sections";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, branding, content, SEO, paid advertising, social media and ecommerce — managed by one team.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow online, under one roof."
        intro="We plan, design and manage the services that help businesses look professional, get found and win more customers."
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
