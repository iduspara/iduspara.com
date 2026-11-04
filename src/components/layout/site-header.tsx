import Link from "next/link";

import { Container } from "@/components/shared/container";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { getNavItems } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = getNavItems(locale, dict);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={localePath(locale)}
          aria-label={dict.a11y.home}
          className="inline-flex min-h-10 items-center rounded-lg font-semibold tracking-tight focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          Igor Duspara
        </Link>

        <nav aria-label={dict.a11y.mainNav} className="hidden md:block">
          <NavLinks items={items} className="flex items-center gap-1" />
        </nav>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher current={locale} label={dict.a11y.languageNav} />
          <ThemeToggle labels={dict.theme} />
          <MobileNav
            items={items}
            labels={{
              open: dict.a11y.openMenu,
              close: dict.a11y.closeMenu,
              nav: dict.a11y.mobileNav,
              title: "Igor Duspara",
            }}
          />
        </div>
      </Container>
    </header>
  );
}
