/* eslint-disable @next/next/no-html-link-for-pages -- this page renders outside the locale root layout, so a full page load into it is intended. */
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "404 · Igor Duspara",
  description: "This page doesn't exist.",
  robots: { index: false },
};

/** Shown for URLs that match no route at all. It bypasses the locale layout, so it's bilingual. */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="grid min-h-dvh place-items-center bg-background p-6 text-foreground">
        <main className="max-w-md text-center">
          <p className="font-mono text-sm text-muted-foreground">404</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
            I couldn&apos;t find that page.
          </h1>
          <p lang="de" className="mt-2 text-muted-foreground">
            Diese Seite konnte ich leider nicht finden.
          </p>
          <nav aria-label="Language" className="mt-8 flex justify-center gap-3">
            <a
              href="/en"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Go to the homepage
            </a>
            <a
              href="/de"
              lang="de"
              className="inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium"
            >
              Zur Startseite
            </a>
          </nav>
        </main>
      </body>
    </html>
  );
}
