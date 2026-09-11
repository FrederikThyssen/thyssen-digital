import Image from "next/image";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    name: "TruckMaps",
    context:
      "Les chauffeurs poids lourds manquent d'outils GPS pensés pour leurs contraintes de gabarit et d'itinéraire.",
    mission: "Concevoir une application mobile complète, de l'API à l'interface embarquée.",
    solution:
      "Itinéraires adaptés, signalements communautaires et points d'intérêt, sur une base React Native et Node.js.",
    result:
      "Une application fonctionnelle qui aide les chauffeurs à mieux préparer et suivre leur route.",
    stack: ["React Native", "Node.js", "Express", "TypeScript", "PostgreSQL"],
    image: "/images/image-truckmaps.png",
    imageAlt: "Interface TruckMaps affichée sur un écran GPS de camion.",
    imagePosition: "center",
    featured: true,
  },
  {
    name: "Fred Music",
    context:
      "Un site événementiel vieillissant, difficile à faire évoluer pour présenter les offres mariage.",
    mission: "Reprendre entièrement le site : identité numérique, structure des pages et back-office.",
    solution: "Refonte responsive, administration de contenu et bases techniques pour le SEO.",
    result: "Un site remis en production, plus simple à tenir à jour au quotidien.",
    stack: ["Site vitrine", "Responsive", "SEO", "Administration"],
    image: "/images/image-fredmusic.png",
    imageAlt: "Page Fred Music présentant une offre mariage.",
    imagePosition: "center top",
    featured: false,
  },
  {
    name: "La Pince",
    context: "Suivre ses revenus et dépenses sans dépendre d'un tableur complexe.",
    mission: "Développer un outil de gestion de budget personnel, du backend à l'interface.",
    solution: "Analyses et statistiques sur une base React, Node.js/Express, Prisma et PostgreSQL.",
    result: "Un dashboard clair pour un suivi budgétaire simple, déployé avec Docker.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker"],
    image: "/images/la-pince-image.png",
    imageAlt: "Landing page et dashboard financier du projet La Pince.",
    imagePosition: "center top",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section className="border-b border-border py-20 sm:py-24 lg:py-28" id="realisations">
      <Container>
        <FadeUp>
          <SectionHeading
            description="Le contexte, la mission et le résultat de chaque projet : les technologies restent secondaires."
            eyebrow="Réalisations"
            title="Des projets concrets."
          />
        </FadeUp>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem
              className={project.featured ? "lg:col-span-2" : undefined}
              key={project.name}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Card className="h-full overflow-hidden" interactive variant="surface">
      <div
        className={
          project.featured
            ? "grid lg:grid-cols-2 lg:items-center"
            : undefined
        }
      >
        <div className="p-6 pb-0 lg:p-8 lg:pb-8">
          <ProjectVisual project={project} />
        </div>
        <div>
          <CardHeader className={project.featured ? "lg:pl-0 lg:pr-8" : undefined}>
            {project.featured ? (
              <Badge variant="accent">Projet phare</Badge>
            ) : null}
            <CardTitle className={project.featured ? "text-2xl" : "text-xl"}>
              {project.name}
            </CardTitle>
            <CardDescription className="max-w-lg">{project.context}</CardDescription>
          </CardHeader>
          <CardContent className={project.featured ? "lg:pl-0 lg:pr-8" : undefined}>
            <dl className="grid gap-3 border-t border-border pt-5">
              <CaseStudyRow label="Mission" text={project.mission} />
              <CaseStudyRow label="Solution" text={project.solution} />
              <CaseStudyRow label="Résultat" text={project.result} />
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} variant="neutral">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-subtle-foreground">{label}</dt>
      <dd className="text-sm leading-6 text-muted-foreground">{text}</dd>
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-background-secondary">
      <Image
        alt={project.imageAlt}
        className="object-cover"
        fill
        priority={project.featured}
        sizes="(min-width: 1024px) 50vw, 100vw"
        src={project.image}
        style={{ objectPosition: project.imagePosition }}
      />
    </div>
  );
}
