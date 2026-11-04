"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

import { cn } from "@/lib/utils";

export interface NavItem {
  href: string;
  label: string;
}

/** Navigation links with `aria-current` for the active section. */
export function NavLinks({
  items,
  className,
  linkClassName,
  closePopover,
}: {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  /** Id of a popover to hide after navigating (client navigations keep the layout mounted). */
  closePopover?: string;
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {items.map(({ href, label }) => {
        const isPage = !href.includes("#");
        const active = isPage && (pathname === href || pathname.startsWith(`${href}/`));
        return (
          <li key={href}>
            <Link
              href={href as Route}
              aria-current={active ? "page" : undefined}
              onClick={
                closePopover
                  ? () => document.getElementById(closePopover)?.hidePopover()
                  : undefined
              }
              className={cn(
                "inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none aria-[current=page]:text-foreground",
                linkClassName,
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
