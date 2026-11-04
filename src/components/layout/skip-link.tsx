export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#content"
      className="sr-only rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
    >
      {label}
    </a>
  );
}
