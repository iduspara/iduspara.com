import { BotIcon, PlugIcon, RocketIcon, ShieldCheckIcon, type LucideIcon } from "lucide-react";

import { Section } from "@/components/shared/section";
import type { Dictionary } from "@/i18n/dictionaries";

const icons: LucideIcon[] = [BotIcon, ShieldCheckIcon, PlugIcon, RocketIcon];

export function AiWorkflow({ dict }: { dict: Dictionary }) {
  return (
    <Section id="ai" title={dict.ai.title} lead={dict.ai.lead}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {dict.ai.principles.map(({ title, body }, index) => {
          const Icon = icons[index % icons.length];
          return (
            <li key={title} className="rounded-2xl border p-6">
              <Icon aria-hidden className="size-5 text-brand" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-balance">{title}</h3>
              <p className="mt-2 text-pretty text-muted-foreground">{body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
