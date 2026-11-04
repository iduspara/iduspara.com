import type { Dictionary } from "@/i18n/dictionaries";
import type { PostMeta } from "@/types/content";

import { PostCard } from "./post-card";

export function PostList({
  posts,
  dict,
  headingLevel,
}: {
  posts: PostMeta[];
  dict: Dictionary;
  headingLevel?: "h2" | "h3";
}) {
  if (posts.length === 0) return <p className="text-muted-foreground">{dict.blog.empty}</p>;
  return (
    <ul className="grid gap-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} dict={dict} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
