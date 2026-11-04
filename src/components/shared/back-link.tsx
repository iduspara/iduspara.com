import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

export function BackLink<T extends string>({
  href,
  children,
}: {
  href: Route<T>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
    >
      <ArrowLeftIcon aria-hidden className="size-4" />
      {children}
    </Link>
  );
}
