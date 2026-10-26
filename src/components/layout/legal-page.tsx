import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";

export const legalLinkClassName =
  "text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan";

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
      <main className="min-h-screen pt-32" id="contenu">
        <Container className="py-16">
          <SectionHeading as="h1" description={description} eyebrow={eyebrow} title={title} />
          <Divider className="my-10" variant="gradient" />
          <div className="max-w-3xl space-y-8 text-sm leading-7 text-foreground/80">{children}</div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
