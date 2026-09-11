import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Comprendre vos objectifs, votre contexte et les contraintes réelles.",
    deliverable: "Cadrage clair",
  },
  {
    number: "02",
    title: "Conception",
    description: "Structurer l'expérience, les parcours et les fondations techniques.",
    deliverable: "Architecture + UX",
  },
  {
    number: "03",
    title: "Développement",
    description: "Construire proprement avec des bases maintenables et performantes.",
    deliverable: "Produit fonctionnel",
  },
  {
    number: "04",
    title: "Livraison",
    description: "Valider, optimiser et préparer une mise en production sereine.",
    deliverable: "Mise en ligne",
  },
  {
    number: "05",
    title: "Accompagnement",
    description: "Faire évoluer le produit avec méthode après le lancement.",
    deliverable: "Suivi durable",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-border py-20 sm:py-24 lg:py-28" id="a-propos">
      <Container>
        <FadeUp>
          <SectionHeading
            description="Une approche claire pour transformer une ambition digitale en produit fiable, élégant et durable."
            eyebrow="Processus"
            title="Un accompagnement structuré."
          />
        </FadeUp>

        <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="h-full border-t border-border pt-6">
                <p className="text-sm font-medium text-accent">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
                <p className="mt-5 text-sm text-subtle-foreground">
                  {step.deliverable}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
