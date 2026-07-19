import { ArrowRight } from "lucide-react";

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

const projects = [
  {
    name: "TruckMaps",
    description: "Projet principal.",
    accent: "from-primary/30 via-accent-cyan/20 to-transparent",
    stack: ["Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Fred Music",
    description: "Site vitrine premium.",
    accent: "from-accent-violet/30 via-primary/15 to-transparent",
    stack: ["Identité", "Vitrine", "Performance"],
  },
  {
    name: "La Pince",
    description: "Application de gestion développée durant la formation CDA.",
    accent: "from-accent-cyan/25 via-surface-hover to-transparent",
    stack: ["Gestion", "Interface", "CDA"],
  },
];

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

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.name}>
              <Card
                className={index === 0 ? "h-full lg:col-span-1" : "h-full"}
                interactive
                variant="glass"
              >
                <CardHeader>
                  <ProjectVisual accent={project.accent} name={project.name} />
                  <CardTitle className="mt-2 text-xl">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant={index === 0 ? "accent" : "neutral"}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    href="#contact"
                    size="sm"
                    trailingIcon={
                      <ArrowRight aria-hidden="true" className="size-4" />
                    }
                    variant={index === 0 ? "primary" : "secondary"}
                  >
                    Découvrir le projet
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ProjectVisual({ accent, name }: { accent: string; name: string }) {
  return (
    <div
      aria-label={`Composition abstraite pour ${name}`}
      className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background-secondary"
      role="img"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute left-5 top-5 h-20 w-28 rounded-md border border-border-strong bg-surface-glass backdrop-blur-md" />
      <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full border border-border bg-surface" />
      <div className="absolute inset-x-6 bottom-7 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent" />
      <div className="absolute right-8 top-8 grid gap-2">
        <span className="h-1.5 w-16 rounded-full bg-foreground/70" />
        <span className="h-1.5 w-10 rounded-full bg-muted-foreground/50" />
      </div>
    </div>
  );
}
