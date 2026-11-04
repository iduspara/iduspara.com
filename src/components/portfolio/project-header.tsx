import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/shared/external-link";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types/content";
import { formatDate } from "@/utils/format-date";
import { formatMessage } from "@/utils/format-message";

/**
 * Cover screenshot. On phones it is placed after the write-up (see the page), so the
 * title stays the LCP element; from `md` upwards it sits right below the header.
 */
export function ProjectCover({ project }: { project: ProjectMeta }) {
  return (
    <figure className="overflow-hidden rounded-2xl border bg-muted">
      <Image
        src={project.cover}
        alt={project.coverAlt}
        width={1440}
        height={900}
        sizes="(min-width: 1024px) 960px, 100vw"
        loading="eager"
        className="w-full"
      />
    </figure>
  );
}

export function ProjectHeader({ project, dict }: { project: ProjectMeta; dict: Dictionary }) {
  const facts = [
    { term: dict.portfolio.role, value: project.role },
    {
      term: dict.portfolio.since,
      value: (
        <time dateTime={project.since}>{formatDate(project.since, project.locale, "year")}</time>
      ),
    },
    { term: "Status", value: dict.portfolio.status[project.status] },
  ];

  return (
    <header>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">{project.tagline}</p>

      <dl className="mt-8 grid gap-4 border-y py-5 text-sm sm:grid-cols-3">
        {facts.map(({ term, value }) => (
          <div key={term}>
            <dt className="text-muted-foreground">{term}</dt>
            <dd className="mt-0.5 font-medium">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ExternalLink
          href={project.url}
          newTabLabel={dict.a11y.opensInNewTab}
          className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
        >
          {formatMessage(dict.portfolio.visit, { name: project.title })}
          <ArrowUpRightIcon aria-hidden />
        </ExternalLink>
        {project.links.map((link) => (
          <ExternalLink
            key={link.href}
            href={link.href}
            newTabLabel={dict.a11y.opensInNewTab}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
          >
            {link.label}
          </ExternalLink>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="sr-only">{dict.portfolio.stack}</h2>
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item}>
              <Badge variant="secondary">{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
