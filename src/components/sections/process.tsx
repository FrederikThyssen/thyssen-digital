import { BackgroundGlow } from "@/components/backgrounds";
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
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="a-propos">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="center"
        size="lg"
        tone="cyan"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading
            description="Une approche claire pour transformer une ambition digitale en produit fiable, élégant et durable."
            eyebrow="Processus"
            title="Un accompagnement structuré."
          />
        </FadeUp>

        <FadeUp className="mt-12 hidden lg:block">
          <div className="relative h-px bg-gradient-to-r from-primary/0 via-accent-cyan/55 to-accent-violet/0">
            <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_28px_rgb(34_211_238_/_0.65)]" />
          </div>
        </FadeUp>

        <Stagger className="mt-6 grid gap-4 lg:grid-cols-5">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <Card
                className="h-full border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.045),rgb(255_255_255_/_0.018))] shadow-[0_18px_70px_rgb(0_0_0_/_0.22)] backdrop-blur-md"
                interactive
                variant="outline"
              >
                <CardContent className="p-5">
                  <Badge className="border-accent-cyan/30 bg-primary/10 text-accent-cyan" variant="outline">
                    {step.number}
                  </Badge>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                  <p className="mt-6 rounded-md border border-white/10 bg-background/35 px-3 py-2 text-xs font-medium text-accent-cyan">
                    {step.deliverable}
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
