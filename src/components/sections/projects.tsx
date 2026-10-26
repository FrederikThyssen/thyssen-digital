import { existsSync } from "node:fs";
import path from "node:path";

import { ArrowUpRight, ImageIcon } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home, projects, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

// Evaluated at build time (static page): lets a project card ship before its screenshot exists.
function hasPublicImage(src: string): boolean {
  return existsSync(path.join(process.cwd(), "public", src));
}

export function ProjectsSection() {
  return (
    <Section id="realisations">
      <Container>
        <SectionHeading
          description={home.projects.description}
          eyebrow={home.projects.eyebrow}
          highlight={home.projects.titleHighlight}
          title={home.projects.title}
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <li className={index === 0 ? "reveal-scale md:col-span-2" : "reveal-scale"} key={project.id}>
              <ProjectCard
                featured={index === 0}
                hasImage={hasPublicImage(project.image)}
                project={project}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ProjectCard({
  featured = false,
  hasImage,
  project,
}: {
  featured?: boolean;
  hasImage: boolean;
  project: Project;
}) {
  return (
    <Card
      className={cn(
        "card-glow group flex h-full flex-col overflow-hidden",
        featured && "md:grid md:grid-cols-[1.35fr_1fr]",
      )}
      interactive
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-subtle",
          featured && "md:aspect-auto md:min-h-[24rem] md:border-b-0 md:border-r",
        )}
      >
        {hasImage ? (
          <Image
            alt={project.imageAlt}
            className="object-cover transition-transform duration-700 ease-expressive group-hover:scale-[1.05] motion-reduce:transform-none"
            fill
            sizes={featured ? "(min-width: 768px) 720px, 100vw" : "(min-width: 768px) 600px, 100vw"}
            src={project.image}
            style={{ objectPosition: project.imagePosition }}
          />
        ) : (
          <div className="bg-dots absolute inset-0 flex flex-col items-center justify-center gap-2 text-subtle-foreground">
            <ImageIcon aria-hidden="true" className="size-8" />
            <span className="font-display text-lg font-semibold text-ink/70">{project.name}</span>
          </div>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:justify-center md:p-10")}>
        {featured && project.kicker ? (
          <p className="mb-3 text-sm font-semibold text-primary">{project.kicker}</p>
        ) : null}
        <h3
          className={cn(
            "font-display font-semibold text-ink",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {project.name}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">{project.description}</p>
        {project.partnerNote ? (
          <p className="mt-3 text-sm font-medium text-primary">{project.partnerNote}</p>
        ) : null}

        <div className="mt-auto pt-5">
          {project.url ? (
            <a
              className="inline-flex min-h-11 items-center gap-1 rounded-md text-sm font-semibold text-ink transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.linkLabel}
              <span className="sr-only"> (nouvel onglet)</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          ) : null}
          <ul aria-label="Technologies" className="mt-3 flex flex-wrap gap-1.5">
            {project.badges.map((item) => (
              <li key={item}>
                <Badge variant="neutral">{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
