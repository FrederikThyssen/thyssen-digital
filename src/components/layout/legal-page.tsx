import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fr } from "@/lib/typography";

export const legalLinkClassName =
  "font-medium text-primary underline underline-offset-4 transition-colors duration-200 hover:text-primary-hover";

export function LegalPage({
  children,
  description,
  eyebrow,
  title,
}: {
  children: ReactNode;
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <div className="border-b border-border bg-background-secondary">
          <Container className="py-14 sm:py-20">
            <SectionHeading as="h1" description={fr(description)} eyebrow={eyebrow} title={title} />
          </Container>
        </div>
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl space-y-10 text-base leading-7 text-muted-foreground">
            {children}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}
