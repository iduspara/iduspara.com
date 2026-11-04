import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { skillGroups } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/** Compact chip groups shown under About instead of a full Skills section. */
const featuredSkillGroups = ["Front-end", "AI-assisted development", "Product & craft"] as const;

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const groups = skillGroups.filter((group) =>
    featuredSkillGroups.includes(group.title.en as (typeof featuredSkillGroups)[number]),
  );

  return (
    <Section id="about" title={dict.about.title}>
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-pretty">
        {dict.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          {dict.about.skillsTitle}
        </h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title.en}>
              <p className="mb-2 text-sm font-medium">{group.title[locale]}</p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.slice(0, 6).map((item) => (
                  <li key={item}>
                    <Badge variant="secondary" className="h-7 px-2.5 text-sm font-normal">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
