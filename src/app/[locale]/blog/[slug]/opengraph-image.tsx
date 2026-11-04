import { notFound } from "next/navigation";

import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPost, getPosts } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/og";
import { formatDate } from "@/utils/format-date";

export const size = ogSize;
export const contentType = "image/png";
export async function generateStaticParams() {
  const all = await Promise.all(
    locales.map(async (locale) =>
      (await getPosts(locale)).map(({ meta }) => ({ locale, slug: meta.slug })),
    ),
  );
  const params = all.flat();
  return params.length > 0 ? params : [{ locale: locales[0], slug: "_" }];
}

export const alt = "Blog post by Igor Duspara";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const [dict, post] = await Promise.all([getDictionary(locale), getPost(locale, slug)]);
  if (!post) notFound();

  return renderOgImage({
    eyebrow: `${dict.blog.title} · ${formatDate(post.meta.date, locale)}`,
    title: post.meta.title,
    subtitle: post.meta.description,
  });
}
