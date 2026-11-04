<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Writing content

Applies to everything a reader sees: blog posts and case studies in `content/`, and copy in `src/messages/*.json`. Every post exists in English and German with the same file name.

### Facts

- Only describe what the code actually does. Check a claim against the repo before writing it (e.g. don't mention CI if there is none).
- Code samples are excerpts from the repo, with the file path as the code block title. Mark anything else clearly as an example.
- Never invent experiences, numbers, anecdotes or employer details. Ask the author for them.

### Style

The text should read like the author wrote it, not like AI-generated content.

- No em dashes (—). Use a period, comma, colon or parentheses instead. En dashes (–) are fine for ranges like `2019 – 2023`.
- No semicolons in running text. Split into two sentences or use a comma.
- Avoid "not X, but Y" / "X is not A. It is B." contrasts. Say what something is.
- No punchy one-liners or aphorisms to close a section or post ("The habit matters more than any single audit."). End on a plain, concrete sentence.
- No showy metaphors ("craft signal, not a trophy", "pays the rent", "training data lies"). Use plain words.
- Don't overuse "boring", "honest", "deliberately", "real" or "actually".
- Don't open with meta sentences like "That sounds like a slogan, so this post is about…".
- Prefer short, direct sentences and first person ("I").
- German uses „…“ quotes and addresses the reader as "du". Avoid Denglisch where a normal German word works (e.g. "ausliefern" instead of "shippen").

### Frontmatter

- `description` must be 50–160 characters (validated by Zod in `src/lib/content.ts`).
- No `tags`. The site doesn't use them.
- New posts start with `draft: true`.
