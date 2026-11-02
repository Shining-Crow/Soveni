import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import brandingImage from "../../../../public/images/services/branding-graphic-design.png";
import contentImage from "../../../../public/images/services/content-creation.png";
import ecommerceImage from "../../../../public/images/services/ecommerce-marketplace.png";
import paidAdsImage from "../../../../public/images/services/paid-advertising.png";
import seoImage from "../../../../public/images/services/seo.png";
import socialImage from "../../../../public/images/services/social-media-management.png";
import webImage from "../../../../public/images/services/web-design-development.png";
import { BrowserStackArt, LaptopArt } from "@/components/Artwork";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
  AccentTitle,
  Breadcrumbs,
  CtaBand,
  FaqList,
  PageHero,
  ServiceGrid,
} from "@/components/Sections";
import { getService, getServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

const strengths = [
  { icon: "bolt", label: "Modern & Scalable" },
  { icon: "devices", label: "Built for Every Device" },
  { icon: "gauge", label: "Fast & Optimised" },
  { icon: "layers", label: "Business-Focused" },
];

/** Hero backdrop per service. Services without one fall back to the drawn browser art. */
const heroImages: Record<string, StaticImageData> = {
  "web-design-development": webImage,
  "branding-graphic-design": brandingImage,
  "content-creation": contentImage,
  seo: seoImage,
  "paid-advertising": paidAdsImage,
  "social-media-management": socialImage,
  "ecommerce-marketplace": ecommerceImage,
};

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const [service, services] = await Promise.all([getService(slug), getServices()]);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const shortTitle = service.title.replace(/\s*\(.*\)$/, "");
  const heroImage = heroImages[service.slug];

  return (
    <>
      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: shortTitle },
            ]}
          />
        }
        title={<AccentTitle text={service.title} />}
        intro={service.intro}
        background={heroImage}
        // The artwork sits in the right half of each image; keep it in view when cropped.
        backgroundPosition="90% center"
        art={heroImage ? undefined : <BrowserStackArt title={shortTitle.split(" ")[0]} />}
      >
        <ButtonLink href={`/contact?service=${service.slug}`}>Start a Project</ButtonLink>
        <ButtonLink href="/contact" variant="secondary" arrow={false}>
          Discuss Your Idea
        </ButtonLink>
      </PageHero>

      <section className="border-b border-line bg-surface">
        <ul className="container-page grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <li
              key={s.label}
              className={`flex flex-col items-center gap-3 text-center text-sm font-semibold ${
                i > 0 ? "lg:border-l lg:border-line" : ""
              }`}
            >
              <Icon name={s.icon} className="icon-glow size-8 text-sky" />
              {s.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page grid items-center gap-12 py-20 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="card relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#1a2c4a,#0b1424)] px-6 pt-12 pb-10">
            <LaptopArt title={shortTitle.split(" ")[0]} />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">What&apos;s included</p>
          <h2 className="mt-4 text-3xl leading-[1.1] md:text-4xl">{service.headline}</h2>
          <ul className="mt-8 space-y-4">
            {service.inclusions.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sky">
                  <Icon name="check" className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why it matters</p>
            <p className="mt-5 text-xl leading-relaxed md:text-2xl">{service.need}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-3xl md:text-4xl">How we deliver it</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.process.map((step, i) => (
                <li key={step} className="card card-hover p-6">
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-accent/50 bg-[#0a2550] text-xs font-bold tabular-nums shadow-[0_0_16px_rgb(31_139_255/0.45)]">
                    0{i + 1}
                  </span>
                  <p className="mt-4 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            {service.exclusions.length > 0 && (
              <div className="mt-10">
                <h3 className="eyebrow">Good to know</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {service.exclusions.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Common <span className="text-gradient">questions.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </section>
      )}

      <section className="container-page pb-4">
        <h2 className="text-2xl md:text-3xl">Related services</h2>
        <div className="mt-8">
          <ServiceGrid services={others} />
        </div>
      </section>

      <CtaBand title={`Talk to us about ${shortTitle}.`} />
    </>
  );
}
