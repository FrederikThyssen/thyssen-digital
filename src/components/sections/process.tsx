import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Comprendre vos objectifs, votre contexte et les contraintes réelles.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Structurer l'expérience, les parcours et les fondations techniques.",
  },
  {
    number: "03",
    title: "Développement",
    description: "Construire proprement avec des bases maintenables et performantes.",
  },
  {
    number: "04",
    title: "Livraison",
    description: "Valider, optimiser et préparer une mise en production sereine.",
  },
  {
    number: "05",
    title: "Accompagnement",
    description: "Faire évoluer le produit avec méthode après le lancement.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-28" id="a-propos">
      <Container>
        <FadeUp>
          <SectionHeading
            description="Une approche claire pour transformer une ambition digitale en produit fiable, élégant et durable."
            eyebrow="Processus"
            title="Un accompagnement structuré."
          />
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <Card className="h-full" interactive variant="outline">
                <CardContent className="p-5">
                  <Badge variant="outline">{step.number}</Badge>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
