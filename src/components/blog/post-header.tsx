import type { Dictionary } from "@/i18n/dictionaries";
import type { PostMeta } from "@/types/content";
import { formatDate } from "@/utils/format-date";
import { formatMessage } from "@/utils/format-message";

export function PostHeader({ post, dict }: { post: PostMeta; dict: Dictionary }) {
  return (
    <header className="border-b pb-8">
      <p className="text-sm text-muted-foreground">
        <span className="sr-only">{dict.blog.published}: </span>
        <time dateTime={post.date}>{formatDate(post.date, post.locale)}</time>
        {post.updated ? (
          <>
            <span aria-hidden> · </span>
            {dict.blog.updated}{" "}
            <time dateTime={post.updated}>{formatDate(post.updated, post.locale)}</time>
          </>
        ) : null}
        <span aria-hidden> · </span>
        {formatMessage(dict.blog.readingTime, { minutes: post.readingMinutes })}
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-pretty text-muted-foreground">{post.description}</p>
    </header>
  );
}
