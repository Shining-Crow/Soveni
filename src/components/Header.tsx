"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { NavItem } from "@/lib/nav";
import { ButtonLink } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 transition-colors hover:text-fg ${
                      active
                        ? "text-fg after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-champagne"
                        : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" className="hidden !px-5 !py-2.5 sm:inline-flex">
            Start a Project
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-6">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 items-center justify-between border-b border-line text-2xl ${
                  active ? "text-champagne" : "text-fg"
                }`}
              >
                {item.label}
                <Icon name="arrow" className="size-5 text-subtle" />
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="mt-8 w-full">
            Start a Project
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
