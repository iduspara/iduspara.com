import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import avatar from "@/assets/avatar.jpg";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { cn } from "@/lib/utils";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-16 sm:pt-20 sm:pb-20">
      <Container className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
            <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-brand" />
            {dict.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-heading text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl"
          >
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
            {dict.hero.lead}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon aria-hidden className="size-4" />
            {dict.hero.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/portfolio")}
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
            >
              {dict.hero.ctaPrimary}
              <ArrowRightIcon aria-hidden />
            </Link>
            <Link
              href={`${localePath(locale)}#contact`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="order-first md:order-none">
          <Image
            src={avatar}
            alt={dict.hero.avatarAlt}
            width={224}
            height={224}
            sizes="(min-width: 768px) 224px, 128px"
            quality={85}
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            className="size-32 rounded-full object-cover shadow-card md:size-56"
          />
        </div>
      </Container>
    </section>
  );
}
