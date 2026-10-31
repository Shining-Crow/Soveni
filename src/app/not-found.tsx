import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl tracking-tight md:text-6xl">This page couldn't be found.</h1>
      <p className="mt-4 max-w-lg text-muted">It may have moved, or the link may be incorrect.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Our services
        </ButtonLink>
      </div>
    </section>
  );
}
