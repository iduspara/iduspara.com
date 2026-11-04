import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

interface SectionProps extends Omit<ComponentProps<"section">, "title"> {
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Visually hide the heading but keep it for assistive tech and the document outline. */
  hideTitle?: boolean;
}

/** A landmark section labelled by its own `<h2>`. */
export function Section({
  id,
  title,
  lead,
  hideTitle,
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-20 py-16 sm:py-20", className)}
      {...props}
    >
      <Container>
        <header className={cn("mb-10 max-w-2xl", hideTitle && "sr-only")}>
          <h2
            id={headingId}
            className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            {title}
          </h2>
          {lead ? <p className="mt-3 text-pretty text-muted-foreground">{lead}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
