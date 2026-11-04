import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "@/components/shared/external-link";
import { Section } from "@/components/shared/section";
import { experience } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatDate } from "@/utils/format-date";
import { formatMessage } from "@/utils/format-message";

export function ExperienceTimeline({
  locale,
  dict,
  years,
}: {
  locale: Locale;
  dict: Dictionary;
  years: number;
}) {
  return (
    <Section
      id="experience"
      title={dict.experience.title}
      lead={formatMessage(dict.experience.lead, { years })}
      className="bg-muted/40"
    >
      <ol className="relative space-y-10 border-l pl-6 sm:pl-8">
        {experience.map((job) => {
          const isCurrent = !job.end;
          return (
            <li key={`${job.company}-${job.start}`} className="relative">
              <span
                aria-hidden
                className={`absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-background sm:-left-[calc(2rem+5px)] ${isCurrent ? "bg-brand" : "bg-muted-foreground/50"}`}
              />
              <article aria-labelledby={`job-${job.start}`}>
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 id={`job-${job.start}`} className="font-heading text-lg font-semibold">
                    {job.role[locale]}{" "}
                    <span className="font-normal text-muted-foreground">
                      @{" "}
                      {job.url ? (
                        <ExternalLink
                          href={job.url}
                          newTabLabel={dict.a11y.opensInNewTab}
                          className="underline-offset-4 hover:text-foreground hover:underline"
                        >
                          {job.company}
                        </ExternalLink>
                      ) : (
                        job.company
                      )}
                    </span>
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                    <time dateTime={job.start}>{formatDate(job.start, locale, "month")}</time>
                    {" – "}
                    {job.end ? (
                      <time dateTime={job.end}>{formatDate(job.end, locale, "month")}</time>
                    ) : (
                      dict.experience.present
                    )}
                  </p>
                </header>
                <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  {job.employment[locale]}
                  {isCurrent ? <Badge variant="outline">{dict.experience.current}</Badge> : null}
                </p>
                <p className="mt-3 max-w-3xl text-pretty">{job.summary[locale]}</p>
                {job.highlights[locale].length > 0 ? (
                  <ul className="mt-3 max-w-3xl list-disc space-y-1 pl-5 text-muted-foreground marker:text-border">
                    {job.highlights[locale].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
