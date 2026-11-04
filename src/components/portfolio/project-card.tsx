import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "@/components/shared/external-link";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import type { ProjectMeta } from "@/types/content";
import { formatMessage } from "@/utils/format-message";

import { WindowChrome } from "./window-chrome";

interface ProjectCardProps {
  project: ProjectMeta;
  dict: Dictionary;
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
export function ProjectCard({
  project,
  dict,
  headingLevel: Heading = "h3",
  priority,
}: ProjectCardProps) {
  const caseStudyHref = localePath(project.locale, `/portfolio/${project.slug}`);

  return (
    <article className="group interactive relative flex w-full surface-card gap-4 overflow-hidden p-4 focus-within:ring-3 focus-within:ring-ring/50 sm:flex-col sm:gap-0 sm:p-0">
      <div className="aspect-square w-20 shrink-0 self-start overflow-hidden rounded-lg sm:hidden">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          width={1440}
          height={900}
          sizes="80px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="size-full object-cover object-left-top"
        />
      </div>

      <div className="hidden sm:block">
        <WindowChrome title={project.title} className="rounded-none shadow-none">
          <div className="aspect-16/10 overflow-hidden bg-muted">
            <ViewTransition name={`project-cover-${project.slug}`} share="morph" default="none">
              <Image
                src={project.cover}
                alt={project.coverAlt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </ViewTransition>
          </div>
        </WindowChrome>
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:p-5">
        <Badge
          variant="outline"
          className={
            project.status === "active" ? "w-fit border-brand/30 bg-brand/10 text-brand" : "w-fit"
          }
        >
          <span
            aria-hidden
            className={`mr-1.5 inline-block size-1.5 rounded-full ${project.status === "active" ? "bg-brand" : "bg-muted-foreground"}`}
          />
          {dict.portfolio.status[project.status]}
        </Badge>
        <Heading className="mt-2 font-heading text-lg font-semibold tracking-tight">
          <Link
            href={caseStudyHref}
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
        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-3 text-sm font-medium">
          <ExternalLink
            href={project.url}
            newTabLabel={dict.a11y.opensInNewTab}
            className="inline-flex items-center gap-1 text-brand underline-offset-4 hover:underline"
          >
            {formatMessage(dict.portfolio.visit, { name: project.title })}
            <ArrowUpRightIcon aria-hidden className="size-3.5" />
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
