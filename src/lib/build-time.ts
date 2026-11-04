import { cacheLife } from "next/cache";

import { siteConfig } from "@/config/site";
import { yearsSince } from "@/utils/years-since";

/**
 * Values derived from the current date. They are cached for the lifetime of the build,
 * so every page stays fully static and refreshes on the next deploy.
 */
export async function getBuildInfo() {
  "use cache";
  cacheLife("max");
  const now = new Date();
  return {
    year: now.getUTCFullYear(),
    yearsOfExperience: yearsSince(siteConfig.careerStart, now),
  };
}
