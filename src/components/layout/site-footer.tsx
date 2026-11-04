import Link from "next/link";

import { Container } from "@/components/shared/container";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getBuildInfo } from "@/lib/build-time";

export async function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { year } = await getBuildInfo();
  const links = [
    { href: localePath(locale, "/imprint"), label: dict.footer.imprint },
    { href: localePath(locale, "/privacy"), label: dict.footer.privacy },
    { href: `/${locale}/rss.xml`, label: dict.blog.rss },
  ] as const;

  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
          <p>
            <Link
              href={localePath(locale, "/blog/relaunching-my-site-with-nextjs-16")}
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              {dict.footer.proof}
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <SocialLinks label={dict.a11y.socialLinks} newTabLabel={dict.a11y.opensInNewTab} />
          <nav aria-label={dict.a11y.footerNav}>
            <ul className="flex flex-wrap gap-x-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  {href.endsWith(".xml") ? (
                    <a
                      href={href}
                      className="inline-flex min-h-10 items-center rounded px-2 underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="inline-flex min-h-10 items-center rounded px-2 underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
