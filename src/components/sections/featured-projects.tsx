import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { ProjectGrid } from "@/components/portfolio/project-grid";
import { Section } from "@/components/shared/section";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import type { ProjectMeta } from "@/types/content";

export function FeaturedProjects({
  locale,
  dict,
  projects,
}: {
  locale: Locale;
  dict: Dictionary;
  projects: ProjectMeta[];
}) {
  return (
    <Section id="portfolio" title={dict.portfolio.featured} lead={dict.portfolio.lead}>
      <ProjectGrid projects={projects} />
      <p className="mt-8">
        <Link
          href={localePath(locale, "/portfolio")}
          className="inline-flex min-h-10 items-center gap-1.5 font-medium underline-offset-4 hover:underline"
        >
          {dict.portfolio.viewAll}
          <ArrowRightIcon aria-hidden className="size-4" />
        </Link>
      </p>
    </Section>
  );
}
