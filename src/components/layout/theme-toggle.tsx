"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { buttonVariants } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { formatMessage } from "@/utils/format-message";

const order = ["system", "light", "dark"] as const;
type ThemeName = (typeof order)[number];

export interface ThemeToggleLabels {
  system: string;
  light: string;
  dark: string;
  switchTo: string;
}

/** Cycles System → Light → Dark. A single button keeps the client bundle tiny. */
export function ThemeToggle({ labels }: { labels: ThemeToggleLabels }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const current: ThemeName =
    mounted && order.includes(theme as ThemeName) ? (theme as ThemeName) : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = current === "light" ? SunIcon : current === "dark" ? MoonIcon : MonitorIcon;

  return (
    <button
      type="button"
      className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
      onClick={() => setTheme(next)}
      aria-label={formatMessage(labels.switchTo, { current: labels[current] })}
      title={labels[current]}
    >
      <Icon aria-hidden />
    </button>
  );
}
