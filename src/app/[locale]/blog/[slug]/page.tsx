import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostHeader } from "@/components/blog/post-header";
import { BackLink } from "@/components/shared/back-link";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getAvailableLocales, getPost, getPosts } from "@/lib/content";
import { MdxContent } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { blogPostingJsonLd } from "@/lib/structured-data";

/** Cache Components needs at least one param; the placeholder simply renders a 404. */
const NO_POSTS_PLACEHOLDER = "_";

export async function generateStaticParams() {
  const posts = await getPosts(await getLocale());
  if (posts.length === 0) return [{ slug: NO_POSTS_PLACEHOLDER }];
  return posts.map(({ meta }) => ({ slug: meta.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const post = await getPost(locale, slug);
  if (!post) notFound();

  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.meta.title,
    description: post.meta.description,
    type: "article",
    publishedTime: post.meta.date,
    modifiedTime: post.meta.updated,
    availableLocales: await getAvailableLocales("blog", slug, locales),
  });
}

export default async function PostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const [dict, post] = await Promise.all([getDictionary(locale), getPost(locale, slug)]);
  if (!post) notFound();

  return (
    <Container className="pt-8 pb-20 sm:pt-12">
      <JsonLd data={blogPostingJsonLd(post.meta)} />
      <BackLink href={localePath(locale, "/blog")}>{dict.blog.back}</BackLink>
      <article className="mt-6 max-w-3xl">
        <PostHeader post={post.meta} dict={dict} />
        <div className="prose-site mt-10">
          <MdxContent source={post.body} />
        </div>
      </article>
    </Container>
  );
}
