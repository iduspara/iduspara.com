import { cacheLife } from "next/cache";

import { siteConfig } from "@/config/site";
import { hasLocale, localeTags, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPosts } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function buildFeed(locale: Locale) {
  "use cache";
  cacheLife("max");

  const [dict, posts] = await Promise.all([getDictionary(locale), getPosts(locale)]);
  const home = new URL(localePath(locale, "/blog"), siteConfig.url).toString();
  const self = new URL(`/${locale}/rss.xml`, siteConfig.url).toString();

  const items = posts
    .map(({ meta }) => {
      const url = new URL(localePath(locale, `/blog/${meta.slug}`), siteConfig.url).toString();
      return `    <item>
      <title>${escape(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(meta.description)}</description>
      <pubDate>${new Date(meta.date).toUTCString()}</pubDate>
${meta.tags.map((tag) => `      <category>${escape(tag)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${siteConfig.name} — ${dict.blog.title}`)}</title>
    <link>${home}</link>
    <description>${escape(dict.blog.lead)}</description>
    <language>${localeTags[locale].lang}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

export async function GET(_request: Request, { params }: RouteContext<"/[locale]/rss.xml">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return new Response("Not found", { status: 404 });

  return new Response(await buildFeed(locale), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
