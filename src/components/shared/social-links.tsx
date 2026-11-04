import type { ComponentType, SVGProps } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ExternalLink } from "./external-link";
import { GitHubIcon, LinkedInIcon, ProductHuntIcon, XIcon, XingIcon } from "./icons";

const items: { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: siteConfig.socials.x, Icon: XIcon },
  { label: "XING", href: siteConfig.socials.xing, Icon: XingIcon },
  { label: "Product Hunt", href: siteConfig.socials.productHunt, Icon: ProductHuntIcon },
];

interface SocialLinksProps {
  label: string;
  newTabLabel: string;
  showText?: boolean;
  className?: string;
}

export function SocialLinks({ label, newTabLabel, showText, className }: SocialLinksProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map(({ label: name, href, Icon }) => (
        <li key={name}>
          <ExternalLink
            href={href}
            newTabLabel={newTabLabel}
            className={cn(
              "inline-flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
              showText && "border px-3 text-sm font-medium",
            )}
          >
            <Icon className="size-4" />
            <span className={showText ? undefined : "sr-only"}>{name}</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
