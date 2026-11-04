import type { Experience, SkillGroup } from "@/types/profile";

/**
 * Career data, written in the first person.
 * Edit this file to update the experience timeline and skills.
 */
export const experience: Experience[] = [
  {
    company: "Finanztip GmbH",
    url: "https://www.finanztip.de",
    role: { en: "Senior Front-End Developer", de: "Senior Front-End-Entwickler" },
    employment: { en: "Full-time", de: "Festanstellung" },
    start: "2023-05",
    summary: {
      en: "I work on the front end of Finanztip, Germany's independent consumer finance guide, with a focus on usability, performance and SEO.",
      de: "Ich arbeite am Front-End von Finanztip, Deutschlands unabhängigem Verbraucher-Finanzratgeber, mit Fokus auf Usability, Performance und SEO.",
    },
    highlights: {
      en: [],
      de: [],
    },
  },
  {
    company: "BANOVO GmbH",
    url: "https://www.banovo.de",
    role: { en: "Front-End Developer", de: "Front-End-Entwickler" },
    employment: { en: "Full-time", de: "Festanstellung" },
    start: "2019-02",
    end: "2023-05",
    summary: {
      en: "I led the redesign of the company website and migrated it to HubSpot CMS, with a strong focus on performance and SEO.",
      de: "Ich habe das Redesign der Unternehmenswebsite verantwortet und sie auf HubSpot CMS migriert, mit starkem Fokus auf Performance und SEO.",
    },
    highlights: {
      en: [
        "I planned and executed the migration to HubSpot CMS.",
        "I improved page speed and organic search visibility.",
      ],
      de: [
        "Ich habe die Migration auf HubSpot CMS geplant und umgesetzt.",
        "Ich habe Ladezeiten und organische Sichtbarkeit verbessert.",
      ],
    },
  },
  {
    company: "CHECK24 GmbH",
    url: "https://www.check24.de",
    role: { en: "Full-Stack Developer", de: "Full-Stack-Entwickler" },
    employment: { en: "Freelance", de: "Freiberuflich" },
    start: "2013-08",
    end: "2019-02",
    summary: {
      en: "I maintained and evolved the term life insurance calculator, designed parts of the web architecture and helped define company standards.",
      de: "Ich habe den Risikolebensversicherungs-Rechner gepflegt und weiterentwickelt, Teile der Web-Architektur entworfen und Unternehmensstandards mitgestaltet.",
    },
    highlights: {
      en: [
        "I designed parts of the web architecture behind the calculator.",
        "I helped define and roll out company-wide development standards.",
      ],
      de: [
        "Ich habe Teile der Web-Architektur hinter dem Rechner entworfen.",
        "Ich habe unternehmensweite Entwicklungsstandards mitdefiniert und eingeführt.",
      ],
    },
  },
  {
    company: "HIHC Horvat Real Estate GmbH",
    role: { en: "Full-Stack Developer", de: "Full-Stack-Entwickler" },
    employment: { en: "Freelance", de: "Freiberuflich" },
    start: "2012-09",
    summary: {
      en: "I built and still maintain a real estate portal, including an automated FTP import for property listings.",
      de: "Ich habe ein Immobilienportal entwickelt und betreue es bis heute, inklusive eines automatisierten FTP-Imports für Objekte.",
    },
    highlights: { en: [], de: [] },
  },
  {
    company: "Svijet Medija d.o.o.",
    role: {
      en: "Administrator, Developer & Project Lead",
      de: "Administrator, Entwickler & Projektleiter",
    },
    employment: { en: "Full-time", de: "Festanstellung" },
    start: "2008-09",
    end: "2012-08",
    summary: {
      en: "I ran infrastructure, developed web projects and led them from idea to launch.",
      de: "Ich habe die Infrastruktur betreut, Webprojekte entwickelt und sie von der Idee bis zum Launch geleitet.",
    },
    highlights: { en: [], de: [] },
  },
  {
    company: "Mape Servis d.o.o.",
    role: { en: "Full-Stack Developer", de: "Full-Stack-Entwickler" },
    employment: { en: "Full-time", de: "Festanstellung" },
    start: "2006-06",
    end: "2008-09",
    summary: {
      en: "My first professional role: I maintained and developed the website of a publishing company.",
      de: "Meine erste Festanstellung: Ich habe die Website eines Verlags gepflegt und weiterentwickelt.",
    },
    highlights: { en: [], de: [] },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Front-end", de: "Front-End" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "shadcn/ui",
      "Vue",
      "Nuxt",
    ],
  },
  {
    title: { en: "Back-end", de: "Back-End" },
    items: ["Node.js", "PHP", "Symfony", "Zend Framework", "SQL", "REST", "GraphQL"],
  },
  {
    title: { en: "Quality & tooling", de: "Qualität & Tooling" },
    items: ["Cypress", "Behat", "TDD", "Sentry", "Git", "CI/CD", "Postman", "Jira"],
  },
  {
    title: { en: "AI-assisted development", de: "KI-gestützte Entwicklung" },
    items: ["Claude Code", "Cursor", "Codex", "MCP", "Agent workflows", "Context engineering"],
  },
  {
    title: { en: "Product & craft", de: "Produkt & Handwerk" },
    items: [
      "UI/UX design",
      "Accessibility",
      "Web performance",
      "SEO",
      "PWA / SSR",
      "Figma",
      "Sketch",
    ],
  },
];
