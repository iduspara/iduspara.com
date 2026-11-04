import type { Dictionary } from "@/i18n/dictionaries";
import type { ProjectMeta } from "@/types/content";

import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: ProjectMeta[];
  dict: Dictionary;
  headingLevel?: "h2" | "h3";
  /** Set when the grid is at the top of the page, so the first image is the LCP candidate. */
  prioritizeFirst?: boolean;
}

export function ProjectGrid({ projects, dict, headingLevel, prioritizeFirst }: ProjectGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <li key={project.slug} className="flex">
          <ProjectCard
            project={project}
            dict={dict}
            headingLevel={headingLevel}
            priority={prioritizeFirst && index === 0}
          />
        </li>
      ))}
    </ul>
  );
}
