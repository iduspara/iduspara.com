import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

function Anchor({ href = "", children, ...props }: ComponentProps<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- MDX links are not typed routes
      <Link href={href as any} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

interface FigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
}

/** Optimised image with an optional caption. Width and height are required to prevent layout shift. */
function Figure({ src, alt, width, height, caption }: FigureProps) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 672px, 100vw"
        className="rounded-xl border"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Callout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <aside
      className={cn("not-prose my-6 rounded-xl border bg-muted/50 p-4 text-sm leading-relaxed")}
    >
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div className="text-muted-foreground [&_p]:m-0">{children}</div>
    </aside>
  );
}

export const mdxComponents: MDXComponents = {
  a: Anchor,
  Figure,
  Callout,
};
