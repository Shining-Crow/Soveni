import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CtaBand, FaqList, PageHero } from "@/components/Sections";
import { getService, getServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

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

  return (
    <>
      <PageHero eyebrow={service.title} title={service.headline} intro={service.intro}>
        <ButtonLink href={`/contact?service=${service.slug}`}>Start a Project</ButtonLink>
        <ButtonLink href="/services" variant="secondary" arrow={false}>
          All services
        </ButtonLink>
      </PageHero>

      <section className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="eyebrow">Why it matters</p>
          <p className="mt-5 text-xl leading-relaxed md:text-2xl">{service.need}</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="eyebrow">What's included</h2>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {service.inclusions.map((item) => (
              <li key={item} className="flex items-start gap-4 py-4">
                <Icon name="check" className="mt-0.5 size-5 shrink-0 text-champagne" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-surface/50">
        <div className="container-page py-16 md:py-24">
          <h2 className="text-3xl tracking-tight md:text-4xl">How we deliver it</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step} className="card p-6">
                <span className="text-sm text-champagne tabular-nums">0{i + 1}</span>
                <p className="mt-4 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          {service.exclusions.length > 0 && (
            <div className="mt-12 max-w-3xl">
              <h3 className="eyebrow">Good to know</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.exclusions.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <h2 className="text-3xl tracking-tight md:col-span-4 md:text-4xl">Questions</h2>
          <div className="md:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </section>
      )}

      <section className="container-page pb-4">
        <h2 className="eyebrow">Related services</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="card flex min-h-16 items-center justify-between gap-4 px-5 py-4 hover:border-champagne/50"
              >
                {s.title}
                <Icon name="arrow" className="size-4 shrink-0 text-champagne" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Talk to us about ${service.title.toLowerCase()}.`} />
    </>
  );
}
