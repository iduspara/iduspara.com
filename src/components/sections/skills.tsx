import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { skillGroups } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" title={dict.skills.title} lead={dict.skills.lead}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title.en}>
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {group.title[locale]}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="secondary" className="h-7 px-3 text-sm font-normal">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
