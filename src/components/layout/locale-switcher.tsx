"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

import { localeTags, locales, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";
import { cn } from "@/lib/utils";

/** Two plain links (EN · DE) that keep the current path. No dropdown, no extra JS. */
export function LocaleSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex items-center rounded-lg border p-0.5">
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={switchLocalePath(pathname, locale) as Route}
              hrefLang={localeTags[locale].lang}
              lang={localeTags[locale].lang}
              aria-current={locale === current ? "true" : undefined}
              prefetch={false}
              className={cn(
                "inline-flex min-h-8 min-w-9 items-center justify-center rounded-md px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                locale === current && "bg-muted text-foreground",
              )}
            >
              <span aria-hidden>{locale}</span>
              <span className="sr-only">{localeTags[locale].label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
