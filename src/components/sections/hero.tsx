import { ArrowRight } from "lucide-react";

import {
  BackgroundGlow,
  BackgroundGrid,
  NoiseOverlay,
} from "@/components/backgrounds";
import { FadeIn, FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";

const capabilities = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "API",
  "Performance",
  "SEO",
  "Animations",
];

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
      id="accueil"
    >
      <BackgroundGrid />
      <BackgroundGlow position="top-left" size="lg" tone="blue" />
      <BackgroundGlow
        className="hidden md:block"
        intensity="low"
        position="bottom-right"
        size="lg"
        tone="cyan"
      />
      <BackgroundGlow
        className="hidden xl:block"
        intensity="low"
        position="center"
        size="md"
        tone="violet"
      />
      <NoiseOverlay />

      <Container className="grid gap-14 pb-20 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28">
        <div className="max-w-4xl">
          <FadeUp>
            <Badge variant="accent">Studio digital premium</Badge>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="mt-8 text-[clamp(3rem,12vw,8.2rem)] font-semibold leading-[0.88] tracking-normal text-foreground">
              <span className="block">Concevoir.</span>
              <span className="block">Développer.</span>
              <span className="block">Performer.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Nous concevons des sites web, applications et expériences digitales
              élégantes, rapides et pensées pour accompagner durablement la
              croissance de votre entreprise.
            </p>
          </FadeUp>

          <FadeUp
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            delay={0.24}
          >
            <Button
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Parler de votre projet
            </Button>
            <Button href="#realisations" size="lg" variant="secondary">
              Découvrir nos réalisations
            </Button>
          </FadeUp>
        </div>

        <FadeIn
          aria-hidden="true"
          className="relative min-h-[420px] lg:min-h-[560px]"
        >
          <GlassPanel className="absolute left-1/2 top-1/2 w-[min(100%,34rem)] -translate-x-1/2 -translate-y-1/2 p-5 sm:p-6">
            <div className="rounded-lg border border-border bg-background/40 p-4">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-subtle-foreground">
                    Interface system
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Performance-ready stack
                  </p>
                </div>
                <span className="rounded-sm border border-border bg-surface px-2 py-1 text-xs text-accent-cyan">
                  Live
                </span>
              </div>
              <Stagger className="grid gap-3 sm:grid-cols-2">
                {capabilities.slice(0, 4).map((item) => (
                  <StaggerItem key={item}>
                    <Card variant="outline">
                      <CardContent className="p-4">
                        <p className="text-sm font-medium text-foreground">
                          {item}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </GlassPanel>

          <div aria-hidden="true">
            {capabilities.slice(4).map((item, index) => (
              <ScaleIn
                className={[
                  "absolute rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur-md",
                  index === 0 && "left-0 top-10",
                  index === 1 && "right-0 top-24",
                  index === 2 && "bottom-20 left-4",
                  index === 3 && "bottom-8 right-8",
                ]
                  .filter(Boolean)
                  .join(" ")}
                delay={0.18 + index * 0.06}
                key={item}
              >
                {item}
              </ScaleIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
