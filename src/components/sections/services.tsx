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
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Site vitrine",
    description: "Une présence premium, rapide et claire pour présenter votre activité.",
    icon: Monitor,
  },
  {
    title: "Application Web",
    description: "Des interfaces robustes pour vos clients, équipes ou opérations.",
    icon: AppWindow,
  },
  {
    title: "Refonte",
    description: "Moderniser l'expérience sans perdre ce qui fait déjà votre force.",
    icon: RefreshCw,
  },
  {
    title: "API",
    description: "Des fondations fiables pour connecter vos outils et vos données.",
    icon: Braces,
  },
  {
    title: "Base de données",
    description: "Des modèles structurés pour soutenir la croissance du produit.",
    icon: Database,
  },
  {
    title: "Interface d'administration",
    description: "Des outils internes efficaces, lisibles et pensés pour le quotidien.",
    icon: PanelsTopLeft,
  },
  {
    title: "Automatisation",
    description: "Des workflows qui réduisent les tâches répétitives et les frictions.",
    icon: Gauge,
  },
  {
    title: "Maintenance",
    description: "Un accompagnement durable pour garder un produit propre et stable.",
    icon: Wrench,
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-28" id="services">
      <Container>
        <Divider className="mb-16" variant="gradient" />
        <FadeUp>
          <SectionHeading
            description="Sites web, applications, API et outils métiers conçus avec une attention particulière portée à la performance, l'expérience utilisateur et la maintenabilité."
            eyebrow="Services"
            title="Des solutions digitales pensées pour durer."
          />
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <Card className="h-full" interactive variant="glass">
                  <CardHeader>
                    <span className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-accent-cyan">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
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
