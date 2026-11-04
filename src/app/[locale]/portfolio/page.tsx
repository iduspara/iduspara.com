import type { Metadata } from "next";

import { ProjectGrid } from "@/components/portfolio/project-grid";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/portfolio",
    title: dict.portfolio.metaTitle,
    description: dict.portfolio.metaDescription,
  });
}

export default async function PortfolioPage() {
  const locale = await getLocale();
  const [dict, projects] = await Promise.all([getDictionary(locale), getProjects(locale)]);

  return (
    <>
      <PageHeader title={dict.portfolio.title} lead={dict.portfolio.lead} />
      <Container className="pb-20">
        <ProjectGrid
          projects={projects.map((p) => p.meta)}
          dict={dict}
          headingLevel="h2"
          prioritizeFirst
        />
      </Container>
    </>
  );
}
