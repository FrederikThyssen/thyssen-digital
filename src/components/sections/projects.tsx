import { Clock } from "lucide-react";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type ProjectCaseStudy } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28" id="realisations">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="center"
        size="lg"
        tone="blue"
      />
      <Container>
        <FadeUp>
          <SectionHeading eyebrow="Réalisations" title="Des projets concrets." />
        </FadeUp>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-2">
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

function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  const Visual = project.visual;

  return (
    <Card
      className={[
        "h-full transition-transform duration-200 ease-standard motion-reduce:transform-none",
        "hover:-translate-y-1",
      ]
        .filter(Boolean)
        .join(" ")}
      interactive
      variant="glass"
    >
      <div
        className={
          project.featured
            ? "grid gap-2 lg:grid-cols-[1.18fr_0.82fr] lg:items-center"
            : undefined
        }
      >
        <CardHeader>
          <Visual />
        </CardHeader>
        <div>
          <CardHeader>
            {project.featured ? (
              <Badge className="mb-2" variant="accent">
                Projet phare
              </Badge>
            ) : null}
            {project.name === "La Pince" ? (
              <Badge className="mb-2" variant="outline">
                Projet d&apos;équipe - Lead Backend
              </Badge>
            ) : null}
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} variant={project.featured ? "accent" : "neutral"}>
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              leadingIcon={<Clock aria-hidden="true" className="size-4" />}
              href={`/projets/${project.slug}`}
              size="sm"
              variant={project.featured ? "primary" : "secondary"}
            >
              Lire l&apos;étude de cas
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
