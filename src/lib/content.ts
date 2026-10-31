import { cache } from "react";
import { hasDatabase, prisma } from "./prisma";
import * as defaults from "@/content/defaults";
import type {
  CaseStudyContent,
  FaqContent,
  ServiceContent,
  SiteSettings,
} from "@/content/defaults";

/**
 * Reads content from Supabase via Prisma, falling back to the bundled defaults
 * when no database is configured or it is unreachable.
 */
async function withFallback<T>(label: string, query: () => Promise<T>, fallback: T): Promise<T> {
  if (!hasDatabase) return fallback;
  try {
    return await query();
  } catch (error) {
    console.error(`[content] ${label} failed, using defaults`, error);
    return fallback;
  }
}

export const getServices = cache(
  (): Promise<ServiceContent[]> =>
    withFallback(
      "getServices",
      async () => {
        const rows = await prisma.service.findMany({
          where: { published: true },
          orderBy: { order: "asc" },
          include: { faqs: { orderBy: { order: "asc" } } },
        });
        return rows.length ? rows : defaults.services;
      },
      defaults.services,
    ),
);

export async function getService(slug: string) {
  const all = await getServices();
  return all.find((s) => s.slug === slug) ?? null;
}

export const getHomeFaqs = cache(
  (): Promise<FaqContent[]> =>
    withFallback(
      "getHomeFaqs",
      async () => {
        const rows = await prisma.faq.findMany({
          where: { showOnHome: true },
          orderBy: { order: "asc" },
        });
        return rows.length ? rows : defaults.homeFaqs;
      },
      defaults.homeFaqs,
    ),
);

export const getCaseStudies = cache(
  (): Promise<CaseStudyContent[]> =>
    withFallback(
      "getCaseStudies",
      () =>
        prisma.caseStudy.findMany({
          where: { published: true, clientPermission: true },
          orderBy: { order: "asc" },
        }),
      defaults.caseStudies,
    ),
);

export async function getCaseStudy(slug: string) {
  const all = await getCaseStudies();
  return all.find((c) => c.slug === slug) ?? null;
}

export const getSettings = cache(
  (): Promise<SiteSettings> =>
    withFallback(
      "getSettings",
      async () => {
        const rows = await prisma.siteSetting.findMany();
        const fromDb = Object.fromEntries(rows.map((r) => [r.key, r.value]));
        return { ...defaults.siteSettings, ...fromDb };
      },
      defaults.siteSettings,
    ),
);
