import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

interface StatsProps {
  dict: Dictionary;
  years: number;
  products: number;
}

export function Stats({ dict, years, products }: StatsProps) {
  const stats = [
    { value: `${years}+`, label: dict.stats.years },
    { value: String(products), label: dict.stats.products },
    { value: siteConfig.githubStars, label: dict.stats.stars },
    { value: "100", label: dict.stats.lighthouse },
  ];

  return (
    <section aria-label={dict.stats.label} className="py-4">
      <Container>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex surface-card flex-col-reverse gap-1 p-5 sm:p-6">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="font-heading text-3xl font-semibold tracking-tight text-brand tabular-nums">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
