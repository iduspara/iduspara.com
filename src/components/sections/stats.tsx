import { Container } from "@/components/shared/container";
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
    { value: "600+", label: dict.stats.stars },
    { value: "70%", label: dict.stats.frontend },
  ];

  return (
    <section aria-label={dict.stats.label}>
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse gap-1 bg-background p-5 sm:p-6">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="font-heading text-3xl font-semibold tracking-tight">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
