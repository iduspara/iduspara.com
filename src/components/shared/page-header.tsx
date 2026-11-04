import type { ReactNode } from "react";

import { Container } from "./container";

export function PageHeader({
  title,
  lead,
  children,
}: {
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Container className="pt-12 pb-10 sm:pt-20 sm:pb-14">
      <header className="max-w-2xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {lead ? <p className="mt-4 text-lg text-pretty text-muted-foreground">{lead}</p> : null}
        {children}
      </header>
    </Container>
  );
}
