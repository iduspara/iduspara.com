import { MenuIcon, XIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NavLinks, type NavItem } from "./nav-links";

const POPOVER_ID = "mobile-nav";

interface MobileNavProps {
  items: NavItem[];
  labels: { open: string; close: string; nav: string; title: string };
}

/**
 * Mobile menu built on the native Popover API: opening, closing, Esc and light-dismiss
 * work without any JavaScript, and focus returns to the trigger when it closes.
 */
export function MobileNav({ items, labels }: MobileNavProps) {
  return (
    <>
      <button
        type="button"
        popoverTarget={POPOVER_ID}
        aria-label={labels.open}
        className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "md:hidden")}
      >
        <MenuIcon aria-hidden />
      </button>
      <div
        id={POPOVER_ID}
        popover="auto"
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-72 max-w-[85vw] border-l material p-6 text-popover-foreground shadow-lg backdrop:bg-black/20"
      >
        <div className="flex items-center justify-between">
          <p className="font-semibold">{labels.title}</p>
          <button
            type="button"
            popoverTarget={POPOVER_ID}
            popoverTargetAction="hide"
            aria-label={labels.close}
            className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
          >
            <XIcon aria-hidden />
          </button>
        </div>
        <nav aria-label={labels.nav} className="mt-4">
          <NavLinks
            items={items}
            className="flex flex-col gap-1"
            linkClassName="w-full px-3 text-base"
            closePopover={POPOVER_ID}
          />
        </nav>
      </div>
    </>
  );
}
