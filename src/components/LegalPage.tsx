import { PageHero } from "./Sections";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`Last updated ${updated}`} />
      <article className="container-page prose-legal max-w-3xl py-16 md:py-20">
        <p className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm !text-sky">
          Draft — this text must be reviewed and approved before launch.
        </p>
        {children}
      </article>
    </>
  );
}
