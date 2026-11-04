import Link from "next/link";

import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import type { PostMeta } from "@/types/content";
import { formatDate } from "@/utils/format-date";
import { formatMessage } from "@/utils/format-message";

export function PostCard({
  post,
  dict,
  headingLevel: Heading = "h3",
}: {
  post: PostMeta;
  dict: Dictionary;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative rounded-2xl border p-6 transition-colors focus-within:ring-3 focus-within:ring-ring/50 hover:bg-muted/40">
      <p className="text-sm text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date, post.locale)}</time>
        <span aria-hidden> · </span>
        {formatMessage(dict.blog.readingTime, { minutes: post.readingMinutes })}
      </p>
      <Heading className="mt-2 font-heading text-xl font-semibold tracking-tight text-balance">
        <Link
          href={localePath(post.locale, `/blog/${post.slug}`)}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {post.title}
        </Link>
      </Heading>
      <p className="mt-2 text-pretty text-muted-foreground">{post.description}</p>
    </article>
  );
}
