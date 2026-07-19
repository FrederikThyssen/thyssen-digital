import { ArrowRight, Check, Sparkle } from "lucide-react";

import {
  BackgroundGlow,
  BackgroundGrid,
  NoiseOverlay,
} from "@/components/backgrounds";
import { FadeIn, FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { BrandMarkPlaceholder } from "@/components/ui/brand-mark-placeholder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND_NAME, BRAND_SIGNATURE } from "@/lib/constants";

const colorSamples = [
  ["Background", "bg-background"],
  ["Secondary", "bg-background-secondary"],
  ["Surface", "bg-surface"],
  ["Elevated", "bg-surface-elevated"],
  ["Primary", "bg-primary"],
  ["Cyan", "bg-accent-cyan"],
  ["Violet", "bg-accent-violet"],
];

export default function Home() {
  return (
    <main
      id="contenu"
      className="relative isolate min-h-screen overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Galerie de controle temporaire: a remplacer ou refondre au Sprint 2. */}
      <BackgroundGrid />
      <BackgroundGlow position="top-left" size="lg" tone="blue" />
      <BackgroundGlow
        className="hidden sm:block"
        intensity="low"
        position="bottom-right"
        size="md"
        tone="cyan"
      />
      <NoiseOverlay />

      <Container className="space-y-12">
        <FadeUp className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="flex items-center gap-4">
            <BrandMarkPlaceholder />
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-foreground">
                {BRAND_NAME}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {BRAND_SIGNATURE}
              </p>
            </div>
          </div>

          <SectionHeading
            className="lg:justify-self-end"
            eyebrow="Fondations techniques"
            title="Design language codé et prêt à assembler."
            description="Cette page contrôle les primitives visuelles réutilisables du Sprint 1.5 sans introduire le Hero, la navigation ou les contenus marketing finaux."
          />
        </FadeUp>

        <Divider variant="gradient" />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card variant="glass">
            <CardHeader>
              <Badge variant="accent">Buttons</Badge>
              <CardTitle>Actions sobres</CardTitle>
              <CardDescription>
                États, tailles, liens et icônes restent lisibles et tactiles.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-3">
              <Button trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}>
                Primary
              </Button>
              <Button variant="secondary" leadingIcon={<Check aria-hidden="true" className="size-4" />}>
                Secondary
              </Button>
              <Button variant="ghost" trailingIcon={<Sparkle aria-hidden="true" className="size-4" />}>
                Ghost
              </Button>
              <Button size="sm" variant="secondary">
                Small
              </Button>
              <Button size="lg" href="https://thyssen-digital.example">
                Link
              </Button>
              <Button disabled variant="secondary">
                Disabled
              </Button>
            </CardContent>
          </Card>

          <GlassPanel className="p-5">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge>Neutral</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <Divider />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {colorSamples.map(([label, colorClass]) => (
                <div className="rounded-md border border-border bg-muted p-3" key={label}>
                  <div className={`mb-3 h-12 rounded-sm ${colorClass}`} />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["glass", "Transparence faible, profondeur douce."],
            ["surface", "Surface standard pour blocs de contenu."],
            ["outline", "Cadre discret sans masse visuelle."],
          ].map(([variant, description]) => (
            <Card
              interactive
              key={variant}
              variant={variant as "glass" | "surface" | "outline"}
            >
              <CardHeader>
                <CardTitle className="capitalize">{variant}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  Une base réutilisable qui garde la retenue Luxe Tech.
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card variant="surface">
            <CardHeader>
              <Badge variant="outline">Typography</Badge>
              <CardTitle>Hiérarchie compacte</CardTitle>
              <CardDescription>
                Des tailles lisibles et espacées pour préparer les compositions du
                Sprint 2.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight text-foreground">
                Maîtrise, précision, performance.
              </h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                Le langage visuel privilégie les proportions, les contrastes
                mesurés et les micro-interactions discrètes.
              </p>
              <p className="text-sm uppercase tracking-[0.22em] text-subtle-foreground">
                Luxe Tech / contrôle visuel
              </p>
            </CardContent>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <Badge variant="accent">Motion</Badge>
              <CardTitle>Entrées réutilisables</CardTitle>
              <CardDescription>
                Les primitives respectent la préférence de réduction du mouvement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Stagger className="grid gap-3 sm:grid-cols-3">
                {["Fade", "Scale", "Stagger"].map((label) => (
                  <StaggerItem key={label}>
                    <div className="rounded-md border border-border bg-surface p-4 text-sm font-medium text-foreground">
                      {label}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <FadeIn>
                  <Badge>FadeIn</Badge>
                </FadeIn>
                <FadeUp>
                  <Badge variant="outline">FadeUp</Badge>
                </FadeUp>
                <ScaleIn>
                  <Badge variant="accent">ScaleIn</Badge>
                </ScaleIn>
              </div>
            </CardContent>
          </Card>
        </section>

      </Container>
    </main>
  );
}
