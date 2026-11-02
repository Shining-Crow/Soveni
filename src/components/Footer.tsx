import Link from "next/link";
import type { ServiceContent, SiteSettings } from "@/content/defaults";
import type { NavItem } from "@/lib/nav";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { SocialLinks } from "./Sections";

export function Footer({
  nav,
  services,
  settings,
}: {
  nav: NavItem[];
  services: ServiceContent[];
  settings: SiteSettings;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-glow/10 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A digital growth agency helping ambitious brands build presence, attract the right
            audience and grow online.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {settings.contactEmail && (
              <li>
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="inline-flex items-center gap-2.5 text-fg hover:text-sky"
                >
                  <Icon name="mail" className="size-4 text-sky" />
                  {settings.contactEmail}
                </a>
              </li>
            )}
            {settings.contactPhone && (
              <li>
                <a
                  href={`tel:${settings.contactPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-fg hover:text-sky"
                >
                  <Icon name="phone" className="size-4 text-sky" />
                  {settings.contactPhone}
                </a>
              </li>
            )}
            {settings.companyLocation && (
              <li className="inline-flex items-center gap-2.5 text-muted">
                <Icon name="pin" className="size-4 text-sky" />
                {settings.companyLocation}
              </li>
            )}
          </ul>
          <SocialLinks settings={settings} className="mt-6" />
        </div>

        <nav aria-label="Services" className="md:col-span-5">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted transition-colors hover:text-fg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative border-t border-line">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.companyName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="hover:text-fg">Privacy</Link></li>
            <li><Link href="/cookies" className="hover:text-fg">Cookies</Link></li>
            <li><Link href="/terms" className="hover:text-fg">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
