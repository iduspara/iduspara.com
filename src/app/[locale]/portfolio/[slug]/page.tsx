import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCover, ProjectHeader } from "@/components/portfolio/project-header";
import { BackLink } from "@/components/shared/back-link";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getAvailableLocales, getProject, getProjects } from "@/lib/content";
import { MdxContent } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { projectJsonLd } from "@/lib/structured-data";
import { formatMessage } from "@/utils/format-message";

export async function generateStaticParams() {
  const projects = await getProjects(await getLocale());
  return projects.map(({ meta }) => ({ slug: meta.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const [dict, project] = await Promise.all([getDictionary(locale), getProject(locale, slug)]);
  if (!project) notFound();

  return buildMetadata({
    locale,
    path: `/portfolio/${slug}`,
    title: formatMessage(dict.portfolio.caseStudyTitle, { name: project.meta.title }),
    description: project.meta.description,
    availableLocales: await getAvailableLocales("portfolio", slug, locales),
    image: project.meta.cover,
  });
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/portfolio/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const [dict, project] = await Promise.all([getDictionary(locale), getProject(locale, slug)]);
  if (!project) notFound();

  return (
    <Container className="pt-8 pb-20 sm:pt-12">
      <JsonLd data={projectJsonLd(project.meta)} />
      <BackLink href={localePath(locale, "/portfolio")}>{dict.portfolio.back}</BackLink>
      <article className="mt-6 flex flex-col">
        <ProjectHeader project={project.meta} dict={dict} />
        <div className="order-last mt-12 md:order-none md:mt-10">
          <ProjectCover project={project.meta} />
        </div>
        <div className="prose-site mt-12 max-w-3xl">
          <MdxContent source={project.body} />
        </div>
      </article>
    </Container>
  );
}
