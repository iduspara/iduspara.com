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
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
