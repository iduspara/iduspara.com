import { Section } from "@/components/shared/section";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about" title={dict.about.title}>
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-pretty">
        {dict.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
