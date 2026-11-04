import { BotIcon, PlugIcon, RocketIcon, ShieldCheckIcon, type LucideIcon } from "lucide-react";

import { Section } from "@/components/shared/section";
import type { Dictionary } from "@/i18n/dictionaries";

const icons: LucideIcon[] = [BotIcon, ShieldCheckIcon, PlugIcon, RocketIcon];

export function AiWorkflow({ dict }: { dict: Dictionary }) {
  return (
    <Section id="ai" title={dict.ai.title} lead={dict.ai.lead}>
      <figure className="mb-6 surface-card overflow-hidden">
        <figcaption className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-2.5 text-xs font-medium text-muted-foreground">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 truncate text-center">{dict.ai.snippetLabel}</span>
        </figcaption>
        <pre className="overflow-x-auto p-4 font-mono text-[0.8125rem] leading-relaxed sm:p-5">
          <code>
            {dict.ai.snippet.map((line, index) => (
              <span
                key={line}
                className={
                  index === 0
                    ? "text-muted-foreground"
                    : index === 1
                      ? "text-brand"
                      : line.startsWith("✓")
                        ? "text-brand"
                        : "text-foreground"
                }
              >
                {line}
                {"\n"}
              </span>
            ))}
          </code>
        </pre>
      </figure>
      <ul className="grid gap-4 sm:grid-cols-2">
        {dict.ai.principles.map(({ title, body }, index) => {
          const Icon = icons[index % icons.length];
          return (
            <li key={title} className="surface-card p-6">
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
