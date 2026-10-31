import type { MetadataRoute } from "next";
import { getCaseStudies, getServices } from "@/lib/content";
import { siteUrl } from "@/lib/nav";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, studies] = await Promise.all([getServices(), getCaseStudies()]);
  const paths = [
    "/",
    "/services",
    "/about",
    "/how-we-work",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...(studies.length ? ["/work", ...studies.map((s) => `/work/${s.slug}`)] : []),
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path === "/" ? "" : path}` }));
}
