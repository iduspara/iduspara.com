import type { ComponentProps } from "react";

interface ExternalLinkProps extends Omit<ComponentProps<"a">, "target" | "rel"> {
  href: string;
  /** Screen-reader hint appended to the link text, e.g. "(opens in a new tab)". */
  newTabLabel?: string;
}

/** Link to another site. Opens in a new tab and says so to assistive tech. */
export function ExternalLink({ children, newTabLabel, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {newTabLabel ? <span className="sr-only"> {newTabLabel}</span> : null}
    </a>
  );
}
