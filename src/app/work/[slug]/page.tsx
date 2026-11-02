import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";
import { getCaseStudies, getCaseStudy } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <>
      <PageHero eyebrow={study.clientName} title={study.title} intro={study.summary} />

      {study.imageUrl && (
        <div className="container-page pt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.imageUrl}
            alt={`${study.title} project visual`}
            className="card aspect-[16/9] w-full object-cover"
          />
        </div>
      )}

      <section className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="eyebrow">Our role</h2>
          <p className="mt-4 text-xl leading-relaxed">{study.role}</p>
          {study.outcome && (
            <>
              <h2 className="eyebrow mt-10">Outcome</h2>
              <p className="mt-4 leading-relaxed text-muted">{study.outcome}</p>
            </>
          )}
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="eyebrow">Deliverables</h2>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {study.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4 py-4">
                <Icon name="check" className="mt-0.5 size-5 shrink-0 text-sky" />
                {d}
              </li>
            ))}
          </ul>
          {study.attribution && <p className="mt-6 text-sm text-subtle">{study.attribution}</p>}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
