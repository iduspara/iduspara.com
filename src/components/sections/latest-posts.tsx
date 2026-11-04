import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PostList } from "@/components/blog/post-list";
import { Section } from "@/components/shared/section";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import type { PostMeta } from "@/types/content";

export function LatestPosts({
  locale,
  dict,
  posts,
}: {
  locale: Locale;
  dict: Dictionary;
  posts: PostMeta[];
}) {
  return (
    <Section id="blog" title={dict.blog.latest} lead={dict.blog.lead} className="bg-muted/40">
      <PostList posts={posts} dict={dict} />
      {posts.length > 0 ? (
        <p className="mt-8">
          <Link
            href={localePath(locale, "/blog")}
            className="inline-flex min-h-10 items-center gap-1.5 font-medium underline-offset-4 hover:underline"
          >
            {dict.blog.viewAll}
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </p>
      ) : null}
    </Section>
  );
}
