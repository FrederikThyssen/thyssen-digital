import { Gauge, Lock, Search, Wrench } from "lucide-react";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const standards = [
  {
    label: "Performance",
    value: "Rapide",
    description: "Interfaces légères, assets maîtrisés et parcours pensés pour charger vite.",
    icon: Gauge,
  },
  {
    label: "SEO",
    value: "Structuré",
    description: "Pages lisibles par les moteurs, metadata propres et contenu hiérarchisé.",
    icon: Search,
  },
  {
    label: "Sécurité",
    value: "Sérieux",
    description: "Formulaires, données et accès conçus avec des bases propres dès le départ.",
    icon: Lock,
  },
  {
    label: "Maintenance",
    value: "Durable",
    description: "Code typé, composants réutilisables et architecture facile à faire évoluer.",
    icon: Wrench,
  },
];

export function StandardsSection() {
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-14">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="center"
        size="lg"
        tone="cyan"
      />
      <Container className="relative">
        <FadeUp>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-cyan/35 to-transparent" />
            <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-accent-cyan">
              Standards de production
            </p>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-violet/35 to-transparent" />
          </div>
        </FadeUp>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.label}>
                <Card
                  className="group h-full overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.05),rgb(255_255_255_/_0.02))] shadow-[0_18px_70px_rgb(0_0_0_/_0.22)]"
                  interactive
                  variant="glass"
                >
                  <CardContent className="relative p-5">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <span className="inline-flex size-10 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">
                      {item.value}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
