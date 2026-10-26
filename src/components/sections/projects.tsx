import { existsSync } from "node:fs";
import path from "node:path";

import { ExternalLink, ImageIcon } from "lucide-react";
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
import { home, projects, type Project } from "@/content/site";

// Evaluated at build time (static page): lets a project card ship before its screenshot exists.
function hasPublicImage(src: string): boolean {
  return existsSync(path.join(process.cwd(), "public", src));
}

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
            description={home.projects.description}
            eyebrow={home.projects.eyebrow}
            title={home.projects.title}
          />
        </FadeUp>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard hasImage={hasPublicImage(project.image)} project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ProjectCard({ hasImage, project }: { hasImage: boolean; project: Project }) {
  return (
    <Card
      className="group relative flex h-full flex-col overflow-hidden border-white/10 bg-[linear-gradient(145deg,rgb(255_255_255_/_0.07),rgb(255_255_255_/_0.024)_48%,rgb(140_109_255_/_0.045))] shadow-[0_28px_110px_rgb(0_0_0_/_0.32)]"
      interactive
      variant="glass"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 size-64 rounded-full bg-accent-cyan/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-70"
      />
      <CardHeader className="relative p-4">
        <ProjectVisual hasImage={hasImage} project={project} />
      </CardHeader>
      <CardHeader className="relative">
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className="text-foreground/78">{project.description}</CardDescription>
        {project.partnerNote ? (
          <p className="text-sm font-medium text-accent-cyan">{project.partnerNote}</p>
        ) : null}
      </CardHeader>
      <CardContent className="relative mt-auto">
        {project.url ? (
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-semibold text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.linkLabel}
            <span className="sr-only"> (nouvel onglet)</span>
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        ) : null}
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
          {project.badges.map((item) => (
            <li key={item}>
              <Badge variant="neutral">{item}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectVisual({ hasImage, project }: { hasImage: boolean; project: Project }) {
  return (
    <div className="group/image relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-background-secondary shadow-[0_20px_70px_rgb(0_0_0_/_0.3)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-white/10 bg-background/45 px-4 backdrop-blur-md"
      >
        <span className="size-2 rounded-full bg-primary/70" />
        <span className="size-2 rounded-full bg-accent-cyan/70" />
        <span className="size-2 rounded-full bg-accent-violet/70" />
      </div>
      {hasImage ? (
        <Image
          alt={project.imageAlt}
          className="object-cover transition duration-500 ease-standard group-hover/image:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover/image:scale-100"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={project.image}
          style={{ objectPosition: project.imagePosition }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-9 text-subtle-foreground">
          <ImageIcon aria-hidden="true" className="size-8" />
          <span className="text-sm font-medium text-muted-foreground">{project.name}</span>
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgb(3_6_13_/_0.62)),radial-gradient(circle_at_50%_0%,rgb(34_211_238_/_0.14),transparent_42%)]"
      />
    </div>
  );
}
