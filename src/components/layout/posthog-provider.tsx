"use client";

import { PostHogProvider as PHProvider } from "@posthog/react";
import posthog from "posthog-js";
import { useEffect } from "react";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip PostHog when no token is set (e.g. local dev without .env.local).
    if (!token) return;
    posthog.init(token, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: "2026-08-30",
      // Privacy settings described in content/pages/*/privacy.mdx. Keep both in sync.
      // No cookies, localStorage or sessionStorage. Requires cookieless mode in the project settings.
      cookieless_mode: "always",
      respect_dnt: true,
      disable_session_recording: true,
      disable_surveys: true,
      enable_heatmaps: false,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
