"use client";

import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, ViewTransition } from "react";

import { WindowChrome } from "@/components/portfolio/window-chrome";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/shared/external-link";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types/content";

function StatusBadge({ status, label }: { status: ProjectMeta["status"]; label: string }) {
  return (
    <Badge
      variant="outline"
      className={status === "active" ? "border-brand/30 bg-brand/10 text-brand" : undefined}
    >
      <span
        aria-hidden
        className={`mr-1.5 inline-block size-1.5 rounded-full ${status === "active" ? "bg-brand" : "bg-muted-foreground"}`}
      />
      {label}
    </Badge>
  );
}

function CopyCommand({ dict }: { dict: Dictionary }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(dict.portfolio.installCommand);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard may be unavailable */
        }
      }}
      className="mt-4 flex w-full items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-muted"
      aria-label={copied ? dict.portfolio.commandCopied : dict.portfolio.copyCommand}
    >
      <code className="min-w-0 flex-1 truncate">{dict.portfolio.installCommand}</code>
      {copied ? (
        <CheckIcon aria-hidden className="size-3.5 shrink-0 text-brand" />
      ) : (
        <CopyIcon aria-hidden className="size-3.5 shrink-0 text-muted-foreground" />
      )}
    </button>
  );
}

function HeroProject({ project, dict }: { project: ProjectMeta; dict: Dictionary }) {
  const caseStudyHref = localePath(project.locale, `/portfolio/${project.slug}`);

  return (
    <article className="group interactive relative surface-card overflow-hidden">
      <div className="grid md:grid-cols-[1.15fr_0.85fr]">
        <WindowChrome title={project.title} className="rounded-none shadow-none md:rounded-none">
          <div className="aspect-16/10 overflow-hidden bg-muted md:aspect-auto md:min-h-72">
            <ViewTransition name={`project-cover-${project.slug}`} share="morph" default="none">
              <Image
                src={project.cover}
                alt={project.coverAlt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 640px, 100vw"
                loading="eager"
                fetchPriority="high"
                className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </ViewTransition>
          </div>
        </WindowChrome>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <StatusBadge status={project.status} label={dict.portfolio.status[project.status]} />
          <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
            <Link
              href={caseStudyHref}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-pretty text-muted-foreground">{project.tagline}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((item) => (
              <li key={item}>
                <Badge variant="outline">{item}</Badge>
              </li>
            ))}
          </ul>
          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            <ExternalLink
              href={project.url}
              newTabLabel={dict.a11y.opensInNewTab}
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
            >
              {dict.portfolio.downloadMac}
              <ArrowUpRightIcon aria-hidden />
            </ExternalLink>
            <Link
              href={caseStudyHref}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 px-4")}
            >
              {dict.portfolio.viewProject}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SideProject({
  project,
  dict,
  detail,
}: {
  project: ProjectMeta;
  dict: Dictionary;
  detail: "command" | "stars";
}) {
  const caseStudyHref = localePath(project.locale, `/portfolio/${project.slug}`);

  return (
    <article className="group interactive relative flex surface-card flex-col overflow-hidden">
      <WindowChrome title={project.title} className="rounded-none shadow-none">
        <div className="aspect-16/10 overflow-hidden bg-muted">
          <ViewTransition name={`project-cover-${project.slug}`} share="morph" default="none">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              width={1440}
              height={900}
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
              className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </ViewTransition>
        </div>
      </WindowChrome>
      <div className="flex flex-1 flex-col p-5">
        <StatusBadge status={project.status} label={dict.portfolio.status[project.status]} />
        <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
          <Link
            href={caseStudyHref}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-pretty text-muted-foreground">{project.tagline}</p>
        {detail === "command" ? (
          <div className="relative z-10 mt-auto">
            <CopyCommand dict={dict} />
          </div>
        ) : (
          <p className="relative z-10 mt-auto pt-4 text-sm font-medium text-brand tabular-nums">
            {siteConfig.githubStars} {dict.stats.stars}
          </p>
        )}
        <div className="relative z-10 mt-3">
          <ExternalLink
            href={project.url}
            newTabLabel={dict.a11y.opensInNewTab}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            {dict.portfolio.visitShort}
            <ArrowUpRightIcon aria-hidden className="size-3.5" />
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects({
  locale,
  dict,
  projects,
}: {
  locale: Locale;
  dict: Dictionary;
  projects: ProjectMeta[];
}) {
  const [hero, ...rest] = projects;
  const cupertino = rest.find((p) => p.slug === "cupertino-ui");
  const builder = rest.find((p) => p.slug === "shadcn-builder");
  const others = rest.filter((p) => p.slug !== "cupertino-ui" && p.slug !== "shadcn-builder");

  return (
    <Section id="portfolio" title={dict.portfolio.featured} lead={dict.portfolio.lead}>
      <div className="grid gap-6">
        {hero ? <HeroProject project={hero} dict={dict} /> : null}
        <div className="grid gap-6 sm:grid-cols-2">
          {cupertino ? <SideProject project={cupertino} dict={dict} detail="command" /> : null}
          {builder ? <SideProject project={builder} dict={dict} detail="stars" /> : null}
          {others.map((project) => (
            <SideProject key={project.slug} project={project} dict={dict} detail="stars" />
          ))}
        </div>
      </div>
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
