import type { Locale } from "@/i18n/config";

export type Localized<T = string> = Record<Locale, T>;

export interface Experience {
  company: string;
  url?: string;
  role: Localized;
  employment: Localized;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, undefined = present
  summary: Localized;
  highlights: Localized<string[]>;
}

export interface SkillGroup {
  title: Localized;
  items: string[];
}
