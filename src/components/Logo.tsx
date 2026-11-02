import Link from "next/link";

/** Text wordmark placeholder until the approved logo is supplied. */
export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-semibold tracking-[0.14em] text-fg md:text-2xl"
      aria-label="Soveni home"
    >
      <span className="text-gradient">S</span>OVENI
    </Link>
  );
}
