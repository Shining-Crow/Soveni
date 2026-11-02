import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCaseStudies, getServices, getSettings } from "@/lib/content";
import { primaryNav, siteUrl } from "@/lib/nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Soveni — Digital agency", template: "%s | Soveni" },
  description:
    "Soveni is a UK digital agency helping ambitious businesses design, build and grow meaningful online experiences.",
  openGraph: { type: "website", siteName: "Soveni", locale: "en_GB" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#03060d" };

export const revalidate = 300;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [services, caseStudies, settings] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getSettings(),
  ]);
  const nav = primaryNav(caseStudies.length > 0);

  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header nav={nav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer nav={nav} services={services} settings={settings} />
      </body>
    </html>
  );
}
