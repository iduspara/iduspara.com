import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale, localeTags, locales, type Locale } from "@/i18n/config";
import { localePath, type AppPath } from "@/i18n/paths";

interface BuildMetadataOptions {
  locale: Locale;
  path?: AppPath;
  title?: string;
  description: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  /** Locales in which this page exists. Defaults to all locales. */
  availableLocales?: readonly Locale[];
  /**
   * Root-relative or absolute image URL. Defaults to the locale's generated Open Graph card.
   * Routes with their own `opengraph-image` file (blog posts) override this automatically.
   */
  image?: string;
}

/** Google shows roughly 60 characters of a title. */
const MAX_TITLE_LENGTH = 60;
const TITLE_SUFFIX = ` · ${siteConfig.name}`;

/** Maps each available locale to its URL, plus an x-default entry where one applies. */
function buildLanguageAlternates(path: AppPath, availableLocales: readonly Locale[]) {
  const languages: Record<string, string> = {};
  for (const l of availableLocales) languages[localeTags[l].lang] = localePath(l, path);
  // x-default points to the language-neutral URL, which redirects by Accept-Language.
  if (availableLocales.length === locales.length) {
    languages["x-default"] = path || "/";
  } else if (availableLocales.includes(defaultLocale)) {
    languages["x-default"] = localePath(defaultLocale, path);
  }
  return languages;
}

/** Drops the " · Igor Duspara" suffix when it would be cut off in search results. */
function buildDocumentTitle(title: string | undefined): Metadata["title"] {
  if (!title) return undefined;
  return title.length + TITLE_SUFFIX.length > MAX_TITLE_LENGTH ? { absolute: title } : title;
}

/** Builds consistent metadata with canonical URLs, hreflang alternates and Open Graph tags. */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
  availableLocales = locales,
  image = `/${locale}/opengraph-image`,
}: BuildMetadataOptions): Metadata {
  const languages = buildLanguageAlternates(path, availableLocales);
  const documentTitle = buildDocumentTitle(title);

  return {
    ...(documentTitle ? { title: documentTitle } : {}),
    description,
    alternates: {
      canonical: localePath(locale, path),
      languages,
      types: {
        "application/rss+xml": [{ url: `/${locale}/rss.xml`, title: `${siteConfig.name} · Blog` }],
      },
    },
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: localeTags[locale].og,
      alternateLocale: availableLocales.filter((l) => l !== locale).map((l) => localeTags[l].og),
      url: localePath(locale, path),
      ...(title ? { title } : {}),
      description,
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [siteConfig.url] } : {}),
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.xHandle,
      site: siteConfig.xHandle,
      ...(title ? { title } : {}),
      description,
      images: [image],
    },
  };
}
