import Image from "next/image";

import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
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
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="realisations">
      <BackgroundGrid className="opacity-[0.035]" />
      <NoiseOverlay />
      <BackgroundGlow
        className="hidden lg:block"
        intensity="medium"
        position="top-right"
        size="lg"
        tone="blue"
      />
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="bottom-left"
        size="lg"
        tone="violet"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/45 to-transparent"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading
            description="Le contexte, la mission et le résultat de chaque projet : les technologies restent secondaires."
            eyebrow="Réalisations"
            title="Des projets concrets."
          />
        </FadeUp>

        <Stagger className="mt-10 grid gap-5 lg:grid-cols-2">
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
    <Card
      className="group relative h-full overflow-hidden border-white/10 bg-[linear-gradient(145deg,rgb(255_255_255_/_0.07),rgb(255_255_255_/_0.024)_48%,rgb(140_109_255_/_0.045))] shadow-[0_28px_110px_rgb(0_0_0_/_0.32)]"
      interactive
      variant="glass"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 size-64 rounded-full bg-accent-cyan/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/4 size-72 rounded-full bg-accent-violet/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-70"
      />
      <div
        className={
          project.featured
            ? "grid gap-1 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
            : undefined
        }
      >
        <CardHeader className="relative p-4">
          <ProjectVisual project={project} />
        </CardHeader>
        <div className="relative">
          <CardHeader className={project.featured ? "lg:p-8" : undefined}>
            {project.featured ? (
              <Badge className="mb-2" variant="accent">
                Projet phare
              </Badge>
            ) : null}
            <CardTitle className={project.featured ? "text-2xl" : "text-xl"}>
              {project.name}
            </CardTitle>
            <CardDescription className={project.featured ? "max-w-lg" : undefined}>
              {project.context}
            </CardDescription>
          </CardHeader>
          <CardContent className={project.featured ? "lg:px-8" : undefined}>
            <div className="grid gap-2">
              <CaseStudyRow label="Mission" text={project.mission} />
              <CaseStudyRow label="Solution" text={project.solution} />
              <CaseStudyRow label="Résultat" text={project.result} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
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
    <div className="rounded-md border border-white/10 bg-background/35 px-3 py-2 transition-colors duration-200 group-hover:border-accent-cyan/25">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-cyan">
        {label}
      </p>
      <p className="mt-1 text-xs leading-5 text-foreground/78">{text}</p>
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className={
        project.featured
          ? "group/image relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-background-secondary shadow-[0_28px_100px_rgb(0_0_0_/_0.38)] sm:aspect-[16/10]"
          : "group/image relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-background-secondary shadow-[0_20px_70px_rgb(0_0_0_/_0.3)]"
      }
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-white/10 bg-background/45 px-4 backdrop-blur-md"
      >
        <span className="size-2 rounded-full bg-primary/70" />
        <span className="size-2 rounded-full bg-accent-cyan/70" />
        <span className="size-2 rounded-full bg-accent-violet/70" />
      </div>
      <Image
        alt={project.imageAlt}
        className="object-cover transition duration-500 ease-standard group-hover/image:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover/image:scale-100"
        fill
        priority={project.featured}
        sizes={
          project.featured
            ? "(min-width: 1024px) 50vw, 100vw"
            : "(min-width: 1024px) 33vw, 100vw"
        }
        src={project.image}
        style={{ objectPosition: project.imagePosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgb(3_6_13_/_0.62)),radial-gradient(circle_at_50%_0%,rgb(34_211_238_/_0.14),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"
      />
    </div>
  );
}
