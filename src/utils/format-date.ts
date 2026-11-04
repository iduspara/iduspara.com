import { localeTags, type Locale } from "@/i18n/config";

type DateStyle = "long" | "month" | "year";

const options: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  long: { year: "numeric", month: "long", day: "numeric" },
  month: { year: "numeric", month: "short" },
  year: { year: "numeric" },
};

/**
 * Formats ISO dates (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`) for display.
 * Uses UTC so server and client always agree.
 */
export function formatDate(value: string, locale: Locale, style: DateStyle = "long"): string {
  const [year, month = 1, day = 1] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat(localeTags[locale].lang, {
    ...options[style],
    timeZone: "UTC",
  }).format(date);
}
