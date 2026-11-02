import type { Metadata } from "next";
import { MonitorArt } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { CtaBand, PageHero, ProcessSteps, SectionHeading, ServiceGrid } from "@/components/Sections";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development, branding, content, SEO, paid advertising, social media and ecommerce — services that work together to grow your business.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Services that drive real <span className="text-gradient">business growth.</span>
          </>
        }
        intro="A complete set of digital, creative and marketing services that work together to build your brand, attract customers and grow your business."
        art={<MonitorArt />}
      >
        <ButtonLink href="/contact">Start a Project</ButtonLink>
        <ButtonLink href="#services" variant="secondary" arrow={false}>
          Browse Services
        </ButtonLink>
      </PageHero>

      <section id="services" className="container-page scroll-mt-24 py-16 md:py-24">
        <ServiceGrid services={services} />
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                One process, <span className="text-gradient">every service.</span>
              </>
            }
            intro="Whichever services you choose, every project follows the same clear, collaborative steps."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        body="Tell us what you want to achieve and we'll recommend the right mix of services."
      />
    </>
  );
}
