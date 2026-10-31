export type NavItem = { href: string; label: string };

export function primaryNav(showWork: boolean): NavItem[] {
  return [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    ...(showWork ? [{ href: "/work", label: "Our Work" }] : []),
    { href: "/about", label: "About" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact" },
  ];
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);
