import "server-only";

import { notFound } from "next/navigation";
import { locale as localeParam } from "next/root-params";

import { hasLocale, type Locale } from "./config";
import type en from "@/messages/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  de: () => import("@/messages/de.json").then((m) => m.default),
};

/** Resolves the current locale from the `[locale]` root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await localeParam();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

export async function getDictionary(locale?: Locale): Promise<Dictionary> {
  return dictionaries[locale ?? (await getLocale())]();
}
