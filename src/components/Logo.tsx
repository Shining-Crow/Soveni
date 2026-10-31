import Link from "next/link";

/** Text wordmark placeholder until the approved logo is supplied. */
export function Logo() {
  return (
    <Link
      href="/"
      className="text-lg font-medium tracking-[0.42em] text-fg md:text-xl"
      aria-label="Soveni home"
    >
      SOVENI
    </Link>
  );
}
