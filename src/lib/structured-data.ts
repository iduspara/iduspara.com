import { siteConfig } from "@/config/site";
import { localeTags, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import type { PostMeta, ProjectMeta } from "@/types/content";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();
const personId = `${siteConfig.url}/#person`;

export function personJsonLd(locale: Locale, jobTitle: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: absolute(localePath(locale)),
    image: absolute("/images/avatar.jpg"),
    jobTitle,
    description,
    email: `mailto:${siteConfig.email}`,
    worksFor: { "@type": "Organization", name: "Finanztip GmbH", url: "https://www.finanztip.de" },
    address: { "@type": "PostalAddress", addressLocality: "Munich", addressCountry: "DE" },
    knowsLanguage: ["hr", "de", "en"],
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: absolute(localePath(locale)),
    description,
    inLanguage: localeTags[locale].lang,
    author: { "@id": personId },
  };
}

export function blogPostingJsonLd(post: PostMeta) {
  const url = absolute(localePath(post.locale, `/blog/${post.slug}`));
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: localeTags[post.locale].lang,
    keywords: post.tags.join(", "),
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    author: { "@type": "Person", "@id": personId, name: siteConfig.name, url: siteConfig.url },
  };
}

export function projectJsonLd(project: ProjectMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.description,
    url: project.url,
    image: absolute(project.cover),
    dateCreated: project.since,
    inLanguage: localeTags[project.locale].lang,
    keywords: project.stack.join(", "),
    creator: { "@type": "Person", "@id": personId, name: siteConfig.name },
  };
}
