"use client";

import {
  BriefcaseBusinessIcon,
  CheckIcon,
  FolderKanbanIcon,
  LanguagesIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  NewspaperIcon,
  SearchIcon,
  SparklesIcon,
  SunIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useEffectEvent, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { siteConfig } from "@/config/site";
import { localeTags, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath, switchLocalePath } from "@/i18n/paths";
import { cn } from "@/lib/utils";

import { getNavItems } from "./site-nav";

function navIcon(href: string): LucideIcon {
  if (href.includes("/portfolio")) return FolderKanbanIcon;
  if (href.includes("/blog")) return NewspaperIcon;
  if (href.includes("#ai")) return SparklesIcon;
  if (href.includes("#contact")) return MailIcon;
  if (href.includes("#experience")) return BriefcaseBusinessIcon;
  return UserIcon;
}

function CommandPalette({
  open,
  onOpenChange,
  locale,
  dict,
  projects,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: Locale;
  dict: Dictionary;
  projects: { slug: string; title: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [emailCopied, setEmailCopied] = useState(false);

  const run = (action: () => void) => {
    onOpenChange(false);
    action();
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={dict.a11y.commandPalette}
      description={dict.command.placeholder}
    >
      <Command>
        <CommandInput placeholder={dict.command.placeholder} />
        <CommandList>
          <CommandEmpty>{dict.command.empty}</CommandEmpty>
          <CommandGroup heading={dict.command.groups.navigation}>
            {getNavItems(locale, dict).map((item) => {
              const Icon = navIcon(item.href);
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => run(() => router.push(item.href as Route))}
                >
                  <Icon aria-hidden />
                  {item.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
          {projects.length > 0 ? (
            <>
              <CommandSeparator />
              <CommandGroup heading={dict.command.groups.projects}>
                {projects.map((project) => (
                  <CommandItem
                    key={project.slug}
                    onSelect={() =>
                      run(() =>
                        router.push(localePath(locale, `/portfolio/${project.slug}`) as Route),
                      )
                    }
                  >
                    <FolderKanbanIcon aria-hidden />
                    {project.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ) : null}
          <CommandSeparator />
          <CommandGroup heading={dict.command.groups.actions}>
            <CommandItem
              onSelect={async () => {
                try {
                  await navigator.clipboard.writeText(siteConfig.email);
                  setEmailCopied(true);
                  window.setTimeout(() => setEmailCopied(false), 1600);
                } catch {
                  /* clipboard may be unavailable */
                }
              }}
            >
              {emailCopied ? <CheckIcon aria-hidden /> : <MailIcon aria-hidden />}
              {emailCopied ? dict.command.emailCopied : dict.command.copyEmail}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={dict.command.groups.theme}>
            <CommandItem onSelect={() => run(() => setTheme("system"))}>
              <MonitorIcon aria-hidden />
              {dict.command.themeSystem}
            </CommandItem>
            <CommandItem onSelect={() => run(() => setTheme("light"))}>
              <SunIcon aria-hidden />
              {dict.command.themeLight}
            </CommandItem>
            <CommandItem onSelect={() => run(() => setTheme("dark"))}>
              <MoonIcon aria-hidden />
              {dict.command.themeDark}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={dict.command.groups.language}>
            <CommandItem
              onSelect={() => run(() => router.push(switchLocalePath(pathname, "en") as Route))}
            >
              <LanguagesIcon aria-hidden />
              {dict.command.languageEn}
              <span className="ml-auto text-xs text-muted-foreground">{localeTags.en.label}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => run(() => router.push(switchLocalePath(pathname, "de") as Route))}
            >
              <LanguagesIcon aria-hidden />
              {dict.command.languageDe}
              <span className="ml-auto text-xs text-muted-foreground">{localeTags.de.label}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

/** Lightweight ⌘K affordance; opens the palette mounted by `CommandMenu`. */
export function CommandMenuTrigger({ label }: { label: string }) {
  return (
    <button
      type="button"
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "hidden h-9 gap-1.5 px-2 text-muted-foreground md:inline-flex",
      )}
      aria-label={label}
      onClick={() => {
        window.dispatchEvent(new Event("open-command-menu"));
      }}
    >
      <SearchIcon aria-hidden className="size-4" />
      <kbd className="pointer-events-none rounded border bg-muted px-1 font-sans text-[10px] font-medium">
        ⌘K
      </kbd>
    </button>
  );
}

/**
 * Lazy-feeling command palette: stays unmounted until the first ⌘K / trigger click,
 * so the cmdk + dialog chunk is not on the critical path.
 */
export function CommandMenu({
  locale,
  dict,
  projects,
}: {
  locale: Locale;
  dict: Dictionary;
  projects: { slug: string; title: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setReady(true);
      setOpen((value) => !value);
    }
  });

  const onOpenEvent = useEffectEvent(() => {
    setReady(true);
    setOpen(true);
  });

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-menu", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-menu", onOpenEvent);
    };
  }, []);

  if (!ready) return null;

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      locale={locale}
      dict={dict}
      projects={projects}
    />
  );
}
