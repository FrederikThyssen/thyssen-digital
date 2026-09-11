import { Gauge, Lock, Search, Wrench } from "lucide-react";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
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
    <section className="border-b border-border bg-background-secondary py-20 sm:py-24">
      <Container>
        <FadeUp>
          <p className="text-sm font-medium text-muted-foreground">
            Standards de production
          </p>
        </FadeUp>

        <Stagger
          className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.06}
        >
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.label}>
                <div className="border-t border-border pt-6">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-subtle-foreground">{item.label}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
