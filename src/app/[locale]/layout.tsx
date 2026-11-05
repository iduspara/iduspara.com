import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locale as localeParam } from "next/root-params";

import { PostHogProvider } from "@/components/layout/posthog-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/config/site";
import { hasLocale, localeTags, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getBuildInfo } from "@/lib/build-time";
import { buildMetadata } from "@/lib/seo";
import { formatMessage } from "@/utils/format-message";

import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
/** Only used in code blocks, so it is not preloaded. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/** Every route must be fully prerendered at build time. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await localeParam();
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { yearsOfExperience } = await getBuildInfo();

  return {
    ...buildMetadata({
      locale,
      title: dict.meta.title,
      description: formatMessage(dict.meta.description, { years: yearsOfExperience }),
      type: "profile",
    }),
    // Must come after the spread: child pages render as "Page · Igor Duspara".
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.meta.title, template: `%s · ${siteConfig.name}` },
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    formatDetection: { telephone: false, address: false, email: false },
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await localeParam();
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={localeTags[locale].lang}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SkipLink label={dict.a11y.skipToContent} />
            <SiteHeader locale={locale} dict={dict} />
            <main id="content" tabIndex={-1} className="flex-1 focus:outline-none">
              {children}
            </main>
            <SiteFooter locale={locale} dict={dict} />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
