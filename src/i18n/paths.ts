import type { Locale } from "./config";

export type AppPath =
  | ""
  | "/portfolio"
  | "/blog"
  | "/imprint"
  | "/privacy"
  | `/blog/${string}`
  | `/portfolio/${string}`;

/** Builds a locale-prefixed, root-relative path, e.g. `localePath("de", "/blog")` → `/de/blog`. */
export function localePath(locale: Locale, path: AppPath = ""): `/${Locale}${AppPath}` {
  return `/${locale}${path}`;
}

/** Replaces the locale segment of an existing pathname. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const [, , ...rest] = pathname.split("/");
  return `/${target}${rest.length ? `/${rest.join("/")}` : ""}`;
}
