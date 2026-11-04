import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Minimal macOS-style title bar used around project covers and demos. */
export function WindowChrome({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-card shadow-card", className)}>
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-3 py-2">
        <span aria-hidden className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center text-xs text-muted-foreground">
          {title}
        </span>
        <span aria-hidden className="w-[42px] shrink-0" />
      </div>
      {children}
    </div>
  );
}
