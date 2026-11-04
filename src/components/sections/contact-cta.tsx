import { MailIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

export function ContactCta({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <div className="surface-card px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {dict.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {dict.contact.lead}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-5")}
          >
            <MailIcon aria-hidden />
            {dict.contact.email}
          </a>
          <p className="mt-8 text-sm text-muted-foreground">{dict.contact.orFind}</p>
          <SocialLinks
            label={dict.a11y.socialLinks}
            newTabLabel={dict.a11y.opensInNewTab}
            showText
            className="mt-3 justify-center"
          />
        </div>
      </Container>
    </section>
  );
}
