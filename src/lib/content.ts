import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { cacheLife } from "next/cache";
import { z } from "zod";

import type { Locale } from "@/i18n/config";
import type { ContentEntry, PostMeta, ProjectMeta } from "@/types/content";
import { readingTime } from "@/utils/reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

type Collection = "blog" | "portfolio" | "pages";

/** YAML turns unquoted dates into `Date` objects; normalise everything to `YYYY-MM-DD`. */
const isoDate = z
  .union([z.string(), z.date()])
  .transform((value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value))
  .pipe(z.string().regex(/^\d{4}(-\d{2}){0,2}$/, "Expected YYYY, YYYY-MM or YYYY-MM-DD"));

/** Search engines cut meta descriptions at roughly 160 characters. */
const metaDescription = z.string().min(50).max(160);

const postSchema = z.object({
  title: z.string().min(1),
  description: metaDescription,
  date: isoDate,
  updated: isoDate.optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const projectSchema = z.object({
  title: z.string().min(1),
  tagline: z.string().min(1),
  description: metaDescription,
  role: z.string().min(1),
  since: isoDate,
  status: z.enum(["active", "maintained", "archived"]),
  stack: z.array(z.string()).min(1),
  cover: z.string().startsWith("/"),
  coverAlt: z.string().min(1),
  url: z.url(),
  links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  featured: z.boolean().default(false),
  order: z.number().int().default(100),
});

async function readCollection(collection: Collection, locale: Locale) {
  const dir = path.join(CONTENT_DIR, collection, locale);
  const files = (await readdir(dir).catch(() => [] as string[])).filter((f) => f.endsWith(".mdx"));

  return Promise.all(
    files.map(async (file) => {
      const raw = await readFile(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        data,
        body: content,
        file: `${collection}/${locale}/${file}`,
      };
    }),
  );
}

function parse<T extends z.ZodType>(schema: T, data: unknown, file: string): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Invalid frontmatter in content/${file}:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

const showDrafts = process.env.NODE_ENV !== "production";

export async function getPosts(locale: Locale): Promise<ContentEntry<PostMeta>[]> {
  "use cache";
  cacheLife("max");

  const entries = await readCollection("blog", locale);
  return entries
    .map(({ slug, data, body, file }) => ({
      meta: { ...parse(postSchema, data, file), slug, locale, readingMinutes: readingTime(body) },
      body,
    }))
    .filter(({ meta }) => showDrafts || !meta.draft)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export async function getPost(locale: Locale, slug: string) {
  const posts = await getPosts(locale);
  return posts.find((post) => post.meta.slug === slug);
}

export async function getProjects(locale: Locale): Promise<ContentEntry<ProjectMeta>[]> {
  "use cache";
  cacheLife("max");

  const entries = await readCollection("portfolio", locale);
  return entries
    .map(({ slug, data, body, file }) => ({
      meta: { ...parse(projectSchema, data, file), slug, locale },
      body,
    }))
    .sort((a, b) => a.meta.order - b.meta.order);
}

export async function getProject(locale: Locale, slug: string) {
  const projects = await getProjects(locale);
  return projects.find((project) => project.meta.slug === slug);
}

/** Locales in which a given slug exists — used for hreflang and the language switcher. */
export async function getAvailableLocales(
  collection: "blog" | "portfolio",
  slug: string,
  candidates: readonly Locale[],
): Promise<Locale[]> {
  const results = await Promise.all(
    candidates.map(async (locale) => {
      const items = collection === "blog" ? await getPosts(locale) : await getProjects(locale);
      return items.some((item) => item.meta.slug === slug) ? locale : null;
    }),
  );
  return results.filter((l): l is Locale => l !== null);
}

/** Simple MDX pages such as the imprint and privacy policy (`content/pages/{locale}/{name}.mdx`). */
export async function getPage(locale: Locale, name: "imprint" | "privacy"): Promise<string> {
  "use cache";
  cacheLife("max");

  const raw = await readFile(path.join(CONTENT_DIR, "pages", locale, `${name}.mdx`), "utf8");
  return matter(raw).content;
}
