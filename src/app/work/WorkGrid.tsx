"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/Sections";
import type { CaseStudyContent } from "@/content/defaults";

const ALL = "All Projects";

/** Case study grid with category pills built from each study's tags. */
export function WorkGrid({ studies }: { studies: CaseStudyContent[] }) {
  const [filter, setFilter] = useState(ALL);
  const categories = [ALL, ...Array.from(new Set(studies.flatMap((s) => s.tags)))];
  const visible = filter === ALL ? studies : studies.filter((s) => s.tags.includes(filter));

  return (
    <>
      {categories.length > 2 && (
        <div role="group" aria-label="Filter projects" className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(c)}
                className={`min-h-12 shrink-0 rounded-xl border px-7 text-sm font-semibold transition-all ${
                  active
                    ? "border-accent bg-accent text-white shadow-[0_8px_30px_-8px_rgb(31_139_255/0.8)]"
                    : "border-line bg-white/[0.02] text-muted hover:border-accent/50 hover:text-fg"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((study) => (
          <li key={study.slug}>
            <CaseStudyCard study={study} />
          </li>
        ))}
      </ul>
    </>
  );
}
