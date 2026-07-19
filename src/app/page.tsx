import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND_NAME, BRAND_SIGNATURE } from "@/lib/constants";

export default function Home() {
  return (
    <main id="contenu" className="flex min-h-screen items-center py-16 sm:py-24">
      {/* Page de controle temporaire: a remplacer au Sprint 2. */}
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="grid size-12 place-items-center rounded-md border border-border bg-surface text-sm font-semibold tracking-[0.18em] text-foreground shadow-soft"
            >
              TD
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-foreground">
                {BRAND_NAME}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {BRAND_SIGNATURE}
              </p>
            </div>
          </div>

          <SectionHeading
            eyebrow="Fondations techniques"
            title="Le socle du projet est opérationnel."
            description="Next.js, TypeScript strict, Tailwind CSS et les premiers tokens Luxe Tech sont en place pour préparer les prochains sprints."
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>
              Primary
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section
          aria-label="Échantillons du design system"
          className="rounded-xl border border-border bg-surface p-5 shadow-soft"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Design tokens
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Surfaces, accents et états de base.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">
              <Check aria-hidden="true" className="size-3.5 text-accent-cyan" />
              Strict
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Background", "bg-background"],
              ["Muted", "bg-muted"],
              ["Surface", "bg-surface"],
              ["Primary", "bg-primary"],
              ["Cyan", "bg-accent-cyan"],
              ["Violet", "bg-accent-violet"],
            ].map(([label, colorClass]) => (
              <div
                className="rounded-md border border-border bg-muted p-3"
                key={label}
              >
                <div className={`mb-3 h-14 rounded-sm ${colorClass}`} />
                <p className="text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
