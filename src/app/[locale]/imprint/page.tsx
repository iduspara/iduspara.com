import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPage } from "@/lib/content";
import { MdxContent } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/imprint",
    title: dict.imprint.title,
    description: dict.imprint.metaDescription,
  });
}

export default async function ImprintPage() {
  const locale = await getLocale();
  const [dict, source] = await Promise.all([getDictionary(locale), getPage(locale, "imprint")]);

  return (
    <>
      <PageHeader title={dict.imprint.title} lead={dict.imprint.lead} />
      <Container className="pb-20">
        <div className="prose-site max-w-3xl">
          <MdxContent source={source} />
        </div>
      </Container>
    </>
  );
}
