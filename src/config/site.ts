export const siteConfig = {
  name: "Igor Duspara",
  shortName: "iduspara",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iduspara.com",
  email: "igor.duspara@iduspara.com",
  location: "Munich, Germany",
  careerStart: 2006,
  xHandle: "@igor_duspara",
  /** Display figure for Shadcn Builder; update when the GitHub count moves. */
  githubStars: "600+",
  socials: {
    github: "https://github.com/iduspara",
    linkedin: "https://www.linkedin.com/in/igor-duspara-b97aa1300/",
    x: "https://x.com/igor_duspara",
    xing: "https://www.xing.com/profile/Igor_Duspara",
    productHunt: "https://www.producthunt.com/@iduspara",
  },
} as const;

export type SiteConfig = typeof siteConfig;
