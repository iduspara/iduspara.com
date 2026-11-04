import { RssIcon } from "lucide-react";
import type { Metadata } from "next";

import { PostList } from "@/components/blog/post-list";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/blog",
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
  });
}

export default async function BlogPage() {
  const locale = await getLocale();
  const [dict, posts] = await Promise.all([getDictionary(locale), getPosts(locale)]);

  return (
    <>
      <PageHeader title={dict.blog.title} lead={dict.blog.lead}>
        <a
          href={`/${locale}/rss.xml`}
          className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <RssIcon aria-hidden className="size-4" />
          {dict.blog.rss}
        </a>
      </PageHeader>
      <Container className="pb-20">
        <div className="max-w-3xl">
          <PostList posts={posts.map((p) => p.meta)} dict={dict} headingLevel="h2" />
        </div>
      </Container>
    </>
  );
}
