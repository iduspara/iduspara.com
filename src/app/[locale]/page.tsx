import { About } from "@/components/sections/about";
import { AiWorkflow } from "@/components/sections/ai-workflow";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { LatestPosts } from "@/components/sections/latest-posts";
import { Stats } from "@/components/sections/stats";
import { JsonLd } from "@/components/shared/json-ld";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getBuildInfo } from "@/lib/build-time";
import { getPosts, getProjects } from "@/lib/content";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { formatMessage } from "@/utils/format-message";

export default async function HomePage() {
  const locale = await getLocale();
  const [dict, { yearsOfExperience }, projects, posts] = await Promise.all([
    getDictionary(locale),
    getBuildInfo(),
    getProjects(locale),
    getPosts(locale),
  ]);
  const description = formatMessage(dict.meta.description, { years: yearsOfExperience });
  const featured = projects.filter((p) => p.meta.featured).map((p) => p.meta);

  return (
    <>
      <JsonLd
        data={[
          personJsonLd(locale, "Senior Front-End Developer", description),
          websiteJsonLd(locale, description),
        ]}
      />
      <Hero locale={locale} dict={dict} />
      <FeaturedProjects locale={locale} dict={dict} projects={featured.slice(0, 4)} />
      <Stats dict={dict} years={yearsOfExperience} products={projects.length} />
      <AiWorkflow dict={dict} />
      <About locale={locale} dict={dict} />
      <ExperienceTimeline locale={locale} dict={dict} years={yearsOfExperience} />
      <LatestPosts locale={locale} dict={dict} posts={posts.slice(0, 3).map((p) => p.meta)} />
      <ContactCta dict={dict} />
    </>
  );
}
