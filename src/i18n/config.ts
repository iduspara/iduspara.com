export const locales = ["en", "de"] as const;
export const defaultLocale = "en" satisfies Locale;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags used for <html lang>, Intl APIs and Open Graph. */
export const localeTags: Record<Locale, { lang: string; og: string; label: string }> = {
  en: { lang: "en", og: "en_US", label: "English" },
  de: { lang: "de", og: "de_DE", label: "Deutsch" },
};
