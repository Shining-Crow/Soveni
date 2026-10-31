import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { getServices, getSettings } from "@/lib/content";
import { EnquiryForm } from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Soveni. Tell us what you need and we'll be in touch.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ service?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const [{ service }, services, settings] = await Promise.all([
    searchParams,
    getServices(),
    getSettings(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell us what you're working on."
        intro="Share a few details and we'll come back to you with next steps — usually within one working day."
      />
      <section className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <EnquiryForm
            services={services.map(({ slug, title }) => ({ slug, title }))}
            preselected={service}
          />
        </div>
        <aside className="space-y-8 lg:col-span-3 lg:col-start-10">
          <div>
            <h2 className="eyebrow">What happens next</h2>
            <ol className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
              <li>1. We review your enquiry.</li>
              <li>2. We arrange a short call to understand your goals.</li>
              <li>3. We send a clear proposal with scope, cost and timings.</li>
            </ol>
          </div>
          {settings.contactEmail && (
            <div>
              <h2 className="eyebrow">Prefer email?</h2>
              <a
                href={`mailto:${settings.contactEmail}`}
                className="mt-4 inline-block text-champagne hover:text-fg"
              >
                {settings.contactEmail}
              </a>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
