import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { localeTags, locales, type Locale } from "@/i18n/config";
import { localePath, type AppPath } from "@/i18n/paths";
import { getPosts, getProjects } from "@/lib/content";

type Entry = MetadataRoute.Sitemap[number];

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

function entry(path: AppPath, available: readonly Locale[], extra: Partial<Entry> = {}): Entry[] {
  const languages: Record<string, string> = Object.fromEntries(
    available.map((l) => [localeTags[l].lang, absolute(localePath(l, path))]),
  );
  if (available.length === locales.length) languages["x-default"] = absolute(path || "/");
  return available.map((locale) => ({
    url: absolute(localePath(locale, path)),
    alternates: { languages },
    ...extra,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postsByLocale, projectsByLocale] = await Promise.all([
    Promise.all(locales.map((l) => getPosts(l))),
    Promise.all(locales.map((l) => getProjects(l))),
  ]);

  const postSlugs = new Map<string, { locales: Locale[]; lastModified: string }>();
  postsByLocale.flat().forEach(({ meta }) => {
    const current = postSlugs.get(meta.slug) ?? {
      locales: [],
      lastModified: meta.updated ?? meta.date,
    };
    current.locales.push(meta.locale);
    postSlugs.set(meta.slug, current);
  });

  const projectSlugs = new Map<string, Locale[]>();
  projectsByLocale.flat().forEach(({ meta }) => {
    projectSlugs.set(meta.slug, [...(projectSlugs.get(meta.slug) ?? []), meta.locale]);
  });

  return [
    ...entry("", locales, { priority: 1 }),
    ...entry("/portfolio", locales, { priority: 0.8 }),
    ...entry("/blog", locales, { priority: 0.8 }),
    ...entry("/imprint", locales, { priority: 0.1 }),
    ...entry("/privacy", locales, { priority: 0.1 }),
    ...[...projectSlugs].flatMap(([slug, available]) =>
      entry(`/portfolio/${slug}`, available, { priority: 0.7 }),
    ),
    ...[...postSlugs].flatMap(([slug, { locales: available, lastModified }]) =>
      entry(`/blog/${slug}`, available, { lastModified, priority: 0.6 }),
    ),
  ];
}
