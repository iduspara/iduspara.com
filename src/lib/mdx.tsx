import { cacheLife } from "next/cache";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx/mdx-components";

const prettyCode: PrettyCodeOptions = {
  theme: { light: "github-light-high-contrast", dark: "github-dark" },
  keepBackground: false,
  defaultLang: "plaintext",
};

/**
 * Compiles MDX at build time. Syntax highlighting (Shiki) runs here too,
 * so no highlighting JavaScript ships to the browser.
 */
export async function MdxContent({ source }: { source: string }) {
  "use cache";
  cacheLife("max");

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            { behavior: "wrap", properties: { className: ["heading-anchor"] } },
          ],
          [rehypePrettyCode, prettyCode],
        ],
      },
    },
  });

  return content;
}
