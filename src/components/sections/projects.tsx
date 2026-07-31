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
    description:
      "Application GPS communautaire pensée pour les chauffeurs poids lourds, avec itinéraires adaptés, signalements et points d'intérêt utiles sur la route.",
    stack: ["React Native", "Node.js", "Express", "TypeScript", "PostgreSQL"],
    highlights: ["GPS poids lourds", "Communauté", "Signalements"],
    image: "/images/image-truckmaps.png",
    imageAlt: "Interface TruckMaps affichée sur un écran GPS de camion.",
    imagePosition: "center",
    featured: true,
  },
  {
    name: "Fred Music",
    description:
      "Refonte complète d'un site événementiel et ajout de solutions techniques pour faciliter l'organisation des événements.",
    stack: ["Site vitrine", "Responsive", "SEO", "Administration"],
    highlights: ["Refonte", "Événementiel", "Organisation"],
    image: "/images/image-fredmusic.png",
    imageAlt: "Page Fred Music présentant une offre mariage premium.",
    imagePosition: "center top",
    featured: false,
  },
  {
    name: "La Pince",
    description:
      "Projet de gestion de budget personnel avec analyses et différentes statistiques pour un suivi clair des revenus et des dépenses.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker"],
    highlights: ["Budget", "Analyses", "Statistiques"],
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
            description="Des interfaces réelles, des contextes concrets et des choix techniques pensés pour servir des usages précis."
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
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={project.featured ? "lg:px-8" : undefined}>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} variant={project.featured ? "accent" : "neutral"}>
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {project.highlights.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-background/35 px-3 py-2 text-xs font-medium text-foreground/72 transition-colors duration-200 group-hover:border-accent-cyan/25 group-hover:text-foreground"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
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
