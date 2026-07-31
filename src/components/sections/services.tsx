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
  outcome: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Site vitrine",
    description: "Une présence premium, rapide et claire pour présenter votre activité.",
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
    <section
      className="relative isolate overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      id="services"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgb(34_211_238_/_0.13),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-28 top-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-6 h-96 w-96 rounded-full bg-accent-violet/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <Container className="relative">
        <Divider className="mb-8 opacity-70 sm:mb-10" variant="gradient" />
        <FadeUp>
          <SectionHeading
            className="relative"
            description="Sites web, applications, API et outils métiers conçus avec une attention particulière portée à la performance, l'expérience utilisateur et la maintenabilité."
            eyebrow="Services"
            title="Des solutions digitales pensées pour durer."
          />
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <Card
                  className="group relative h-full min-h-[15.5rem] overflow-hidden border-white/10 bg-[linear-gradient(155deg,rgb(255_255_255_/_0.075),rgb(255_255_255_/_0.026)_48%,rgb(47_124_255_/_0.045))] shadow-[0_22px_80px_rgb(0_0_0_/_0.28)]"
                  interactive
                  variant="glass"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 size-32 rounded-full bg-accent-cyan/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-24 w-full translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgb(47_124_255_/_0.12),transparent_64%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <CardHeader className="relative">
                    <span className="inline-flex size-11 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan shadow-[0_0_28px_rgb(34_211_238_/_0.1)]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-5 rounded-md border border-white/10 bg-background/35 px-3 py-2 text-[0.72rem] font-medium leading-5 text-foreground/70 transition-colors duration-200 group-hover:border-accent-cyan/25 group-hover:text-foreground">
                      {service.outcome}
                    </div>
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
