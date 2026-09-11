import {
  AppWindow,
  Braces,
  Database,
  Gauge,
  Monitor,
  PanelsTopLeft,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Site vitrine",
    description: "Une présence rapide, claire et soignée pour présenter votre activité.",
    outcome: "Image de marque, conversion, SEO local",
    icon: Monitor,
  },
  {
    title: "Application Web",
    description: "Des interfaces robustes pour vos clients, équipes ou opérations.",
    outcome: "Parcours fluides, logique métier, produit évolutif",
    icon: AppWindow,
  },
  {
    title: "Refonte",
    description: "Moderniser l'expérience sans perdre ce qui fait déjà votre force.",
    outcome: "Structure clarifiée, design actuel, performance",
    icon: RefreshCw,
  },
  {
    title: "API",
    description: "Des fondations fiables pour connecter vos outils et vos données.",
    outcome: "Endpoints propres, sécurité, intégrations",
    icon: Braces,
  },
  {
    title: "Base de données",
    description: "Des modèles structurés pour soutenir la croissance du produit.",
    outcome: "Données fiables, requêtes optimisées, scalabilité",
    icon: Database,
  },
  {
    title: "Interface d'administration",
    description: "Des outils internes efficaces, lisibles et pensés pour le quotidien.",
    outcome: "Gestion simple, droits, tableaux de bord",
    icon: PanelsTopLeft,
  },
  {
    title: "Automatisation",
    description: "Des workflows qui réduisent les tâches répétitives et les frictions.",
    outcome: "Gain de temps, moins d'erreurs, suivi clair",
    icon: Gauge,
  },
  {
    title: "Maintenance",
    description: "Un accompagnement durable pour garder un produit propre et stable.",
    outcome: "Corrections, évolutions, stabilité long terme",
    icon: Wrench,
  },
];

export function ServicesSection() {
  return (
    <section className="border-b border-border py-20 sm:py-24 lg:py-28" id="services">
      <Container>
        <FadeUp>
          <SectionHeading
            description="Sites web, applications, API et outils métiers conçus avec une attention particulière portée à la performance, l'expérience utilisateur et la maintenabilité."
            eyebrow="Services"
            title="Des solutions digitales pensées pour durer."
          />
        </FadeUp>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem className="bg-background" key={service.title}>
                <Card className="h-full rounded-none border-0 bg-transparent" variant="outline">
                  <CardHeader>
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardDescription>{service.description}</CardDescription>
                    <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-subtle-foreground">
                      {service.outcome}
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
