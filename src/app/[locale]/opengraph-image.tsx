import { notFound } from "next/navigation";

import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "Igor Duspara · Senior Front-End Developer & Product Builder";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return renderOgImage({
    eyebrow: dict.hero.eyebrow.replace(" 👋", ""),
    title: dict.hero.title,
    subtitle: dict.hero.lead,
  });
}
