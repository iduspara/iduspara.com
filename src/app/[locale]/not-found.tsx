import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <PageHeader title={dict.notFound.title} lead={dict.notFound.lead}>
      <Link
        href={localePath(locale)}
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-5")}
      >
        {dict.notFound.home}
      </Link>
    </PageHeader>
  );
}
