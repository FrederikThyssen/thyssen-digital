import { ArrowRight, Boxes, Code2, Database, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const trustItems = ["La Pince", "Fred Music", "TruckMaps"];

const floatingCards = [
  {
    label: "Architecture",
    value: "API fiable",
    icon: Code2,
    className: "left-0 top-16",
  },
  {
    label: "Performance",
    value: "Interface rapide",
    icon: ShieldCheck,
    className: "right-0 top-28",
  },
  {
    label: "Produit",
    value: "Stack maintenable",
    icon: Boxes,
    className: "bottom-16 left-4",
  },
  {
    label: "Données",
    value: "Modèle propre",
    icon: Database,
    className: "bottom-6 right-8",
  },
];

export function Hero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-background pt-28"
      id="accueil"
    >
      <HeroBackground />

      <Container className="relative grid min-h-[calc(100vh-7rem)] max-w-[82rem] gap-12 pb-16 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-20">
        <div className="relative z-10 max-w-3xl">
          <div>
            <Badge className="gap-2 rounded-full border-white/10 bg-white/[0.045] px-3 py-2 text-[0.625rem] text-foreground/80 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgb(80_227_255_/_0.9)]" />
              Freelance premium
            </Badge>
          </div>

          <div>
            <h1 className="mt-8 max-w-3xl text-[clamp(3rem,6vw,5.35rem)] font-semibold leading-[0.92] tracking-normal text-foreground">
              <span className="block">Concevoir.</span>
              <span className="block bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-transparent">
                Développer.
              </span>
              <span className="block bg-gradient-to-r from-accent-cyan via-primary to-accent-violet bg-clip-text text-transparent">
                Performer.
              </span>
            </h1>
          </div>

          <div>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Développement web, applications sur mesure, automatisations et
              interfaces élégantes. Je transforme vos idées en produits digitaux
              fiables, rapides et évolutifs.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              className="min-h-14 rounded-xl border-white/10 bg-[linear-gradient(135deg,rgb(19_80_255),rgb(34_167_255)_45%,rgb(140_83_255))] px-6 shadow-[0_0_42px_rgb(47_124_255_/_0.38)] hover:bg-[linear-gradient(135deg,rgb(31_111_255),rgb(80_227_255)_45%,rgb(124_58_237))]"
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Discutons de votre projet
            </Button>
            <Button
              className="min-h-14 rounded-xl border-white/12 bg-white/[0.035] px-6 text-foreground backdrop-blur-md hover:border-white/20 hover:bg-white/[0.065]"
              href="#realisations"
              size="lg"
              variant="secondary"
            >
              Voir mes réalisations
            </Button>
          </div>

          <div>
            <div className="mt-14 border-t border-white/10 pt-6">
              <p className="text-xs text-subtle-foreground">Ils m&apos;ont fait confiance</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-medium text-foreground/70">
                {trustItems.map((item) => (
                  <span className="inline-flex items-center gap-2" key={item}>
                    <span className="size-4 rounded-full border border-white/20 bg-white/[0.04]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative min-h-[440px] lg:min-h-[660px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgb(80_227_255_/_0.28),transparent_24%),radial-gradient(circle_at_74%_54%,rgb(140_109_255_/_0.24),transparent_31%)] blur-2xl" />
          <HologramMark />
          <div className="absolute inset-x-[4%] bottom-20 h-32 rounded-[50%] border border-primary/35 bg-primary/10 blur-[1px]" />
          <div className="absolute inset-x-[16%] bottom-28 h-16 rounded-[50%] border border-accent-violet/45" />
          <div className="absolute bottom-36 left-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />

          <div className="absolute inset-0">
            {floatingCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className={[
                    "absolute hidden min-w-44 rounded-2xl border border-white/10 bg-background/42 p-4 shadow-[0_20px_80px_rgb(0_0_0_/_0.34)] backdrop-blur-xl md:block",
                    item.className,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={item.label}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.625rem] uppercase tracking-[0.22em] text-subtle-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                    <span className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/15 text-accent-cyan">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgb(47_124_255_/_0.24),transparent_35%),radial-gradient(circle_at_76%_40%,rgb(80_227_255_/_0.18),transparent_30%),radial-gradient(circle_at_90%_62%,rgb(140_109_255_/_0.22),transparent_34%),linear-gradient(180deg,#070b14_0%,#05070d_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgb(80_227_255_/_0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgb(80_227_255_/_0.45)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_22%_28%,white_0_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute bottom-0 left-1/2 h-48 w-[150vw] -translate-x-1/2 rounded-[50%] border-t border-primary/35 bg-[radial-gradient(ellipse_at_center,rgb(47_124_255_/_0.24),transparent_56%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgb(0_0_0_/_0.58)_100%)]" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_20%_20%,white_0_1px,transparent_1px)] bg-[size:17px_17px]" />
    </div>
  );
}

function HologramMark() {
  return (
    <div className="absolute left-1/2 top-1/2 grid size-[min(86vw,39rem)] -translate-x-1/2 -translate-y-1/2 place-items-center">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgb(47_124_255_/_0.12),transparent_60%)]" />
      <div className="absolute inset-10 rounded-full border border-primary/15" />
      <div className="absolute inset-20 rounded-full border border-accent-cyan/15" />
      <div className="absolute bottom-[15%] h-24 w-[72%] rounded-[50%] border border-white/10 bg-background/35 shadow-[0_24px_80px_rgb(0_0_0_/_0.4)] backdrop-blur-md" />
      <div className="absolute bottom-[17%] h-10 w-[54%] rounded-[50%] border border-accent-violet/35" />
      <svg className="relative z-10 h-[72%] w-[84%] drop-shadow-[0_0_38px_rgb(80_227_255_/_0.46)]" viewBox="0 0 420 360">
        <defs>
          <linearGradient id="hero-td" x1="52" x2="368" y1="50" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2f7cff" />
            <stop offset=".46" stopColor="#50e3ff" />
            <stop offset="1" stopColor="#8c6dff" />
          </linearGradient>
          <linearGradient id="hero-td-line" x1="60" x2="360" y1="70" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7bdfff" />
            <stop offset=".7" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path
          d="M42 54h216c78 0 132 55 132 126S336 306 258 306H136V120H62L42 54Zm190 190h32c38 0 66-26 66-64s-28-64-66-64h-32v128Z"
          fill="url(#hero-td)"
          fillOpacity=".16"
          stroke="url(#hero-td-line)"
          strokeWidth="2"
        />
        <path
          d="M42 54h216c78 0 132 55 132 126S336 306 258 306H136V120H62L42 54Zm190 190h32c38 0 66-26 66-64s-28-64-66-64h-32v128Z"
          fill="none"
          stroke="#dff8ff"
          strokeOpacity=".2"
          strokeWidth="8"
        />
        <path d="M136 120v186" stroke="#50e3ff" strokeOpacity=".72" strokeWidth="2" />
        <path d="M232 116v128" stroke="#50e3ff" strokeOpacity=".48" strokeWidth="2" />
        <path d="M70 74h190" stroke="white" strokeOpacity=".38" strokeWidth="2" />
      </svg>
      <div className="absolute bottom-[20%] rounded-full border border-white/10 bg-background/60 px-8 py-3 text-xs font-medium uppercase tracking-[0.24em] text-accent-cyan backdrop-blur-md">
        Thyssen Digital
      </div>
    </div>
  );
}
