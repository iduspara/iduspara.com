import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { localePath } from "@/i18n/paths";
import type { ProjectMeta } from "@/types/content";

interface ProjectCardProps {
  project: ProjectMeta;
  headingLevel?: "h2" | "h3";
  /** Set for the first card at the top of a page so its image loads with high priority. */
  priority?: boolean;
}

/**
 * Compact row with a thumbnail on phones, large cover card from `sm` upwards.
 * Keeping the phone thumbnail small leaves the page's heading as the LCP element,
 * which keeps mobile performance at 100. The whole card is clickable through a
 * stretched link on the title.
 */
export function ProjectCard({ project, headingLevel: Heading = "h3", priority }: ProjectCardProps) {
  return (
    <article className="group relative flex w-full gap-4 overflow-hidden rounded-2xl border bg-card p-4 transition-shadow focus-within:ring-3 focus-within:ring-ring/50 hover:shadow-md sm:flex-col sm:gap-0 sm:p-0">
      <div className="aspect-square w-20 shrink-0 self-start overflow-hidden rounded-lg border bg-muted sm:aspect-16/10 sm:w-auto sm:self-auto sm:rounded-none sm:border-0 sm:border-b">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 80px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="size-full object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02] sm:object-top"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col sm:p-5">
        <Heading className="font-heading text-lg font-semibold">
          <Link
            href={localePath(project.locale, `/portfolio/${project.slug}`)}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </Heading>
        <p className="mt-1 text-sm text-pretty text-muted-foreground sm:text-base">
          {project.tagline}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>
              <Badge variant="outline">{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
