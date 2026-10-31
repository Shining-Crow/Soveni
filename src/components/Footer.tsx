import Link from "next/link";
import type { ServiceContent, SiteSettings } from "@/content/defaults";
import type { NavItem } from "@/lib/nav";
import { Logo } from "./Logo";

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
    <footer className="border-t border-line bg-surface/40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A digital agency helping ambitious businesses design, build and grow meaningful online
            experiences.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {settings.contactEmail && (
              <li>
                <a href={`mailto:${settings.contactEmail}`} className="text-fg hover:text-champagne">
                  {settings.contactEmail}
                </a>
              </li>
            )}
            {settings.contactPhone && (
              <li>
                <a
                  href={`tel:${settings.contactPhone.replace(/\s/g, "")}`}
                  className="text-fg hover:text-champagne"
                >
                  {settings.contactPhone}
                </a>
              </li>
            )}
            {settings.companyLocation && <li className="text-muted">{settings.companyLocation}</li>}
          </ul>
        </div>

        <nav aria-label="Services" className="md:col-span-5">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted hover:text-fg">
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
                <Link href={item.href} className="text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
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
