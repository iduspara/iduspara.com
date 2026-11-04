import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";

import type { NavItem } from "./nav-links";

export function getNavItems(locale: Locale, dict: Dictionary): NavItem[] {
  const home = localePath(locale);
  return [
    { href: localePath(locale, "/portfolio"), label: dict.nav.portfolio },
    { href: `${home}#ai`, label: dict.nav.ai },
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#experience`, label: dict.nav.experience },
    { href: localePath(locale, "/blog"), label: dict.nav.blog },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];
}
