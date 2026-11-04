import type { Locale } from "@/i18n/config";

export interface PostMeta {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectMeta {
  slug: string;
  locale: Locale;
  title: string;
  tagline: string;
  description: string;
  role: string;
  since: string;
  status: "active" | "maintained" | "archived";
  stack: string[];
  cover: string;
  coverAlt: string;
  url: string;
  links: ProjectLink[];
  featured: boolean;
  order: number;
}

export interface ContentEntry<T> {
  meta: T;
  body: string;
}
