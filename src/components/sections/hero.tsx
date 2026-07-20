import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trustItems = ["La Pince", "Fred Music", "TruckMaps", "Nomad Trans", "RoadLink"];

export function Hero() {
  return (
    <section className="relative isolate -mb-8 overflow-hidden bg-background px-3 pt-[5.8rem] sm:px-6 lg:-mb-56" id="accueil">
      <HeroBackground />

      <div className="relative mx-auto max-w-[82rem] overflow-hidden rounded-b-2xl border-x border-b border-white/10 bg-background/28 px-6 pb-8 pt-10 shadow-[0_24px_110px_rgb(0_0_0_/_0.34)] sm:px-10 lg:min-h-[500px] lg:px-12 lg:pb-8 lg:pt-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10 max-w-[42rem]">
            <Badge className="gap-2 rounded-full border-white/10 bg-white/[0.045] px-3 py-2 text-[0.625rem] text-foreground/82 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_rgb(47_124_255_/_0.95)]" />
              Freelance premium
            </Badge>

            <h1 className="mt-4 text-[clamp(2.75rem,3.04vw,3.42rem)] font-semibold leading-[1.01] tracking-normal text-foreground">
              <span className="block">Des solutions</span>
              <span className="block">digitales puissantes,</span>
              <span className="block bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-transparent sm:whitespace-nowrap">
                conçues pour performer.
              </span>
            </h1>

            <p className="mt-4 max-w-[37rem] text-base leading-[1.65] text-muted-foreground">
              Développement web, applications sur mesure, automatisations et
              interfaces élégantes. Je transforme vos idées en produits digitaux
              fiables, rapides et évolutifs.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                className="min-h-12 rounded-xl border-white/10 bg-[linear-gradient(135deg,rgb(19_80_255),rgb(34_167_255)_46%,rgb(140_83_255))] px-6 shadow-[0_0_46px_rgb(47_124_255_/_0.44)] hover:bg-[linear-gradient(135deg,rgb(31_111_255),rgb(80_227_255)_44%,rgb(124_58_237))]"
                href="#contact"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
              >
                Discutons de votre projet
              </Button>
              <Button
                className="min-h-12 rounded-xl border-white/12 bg-white/[0.035] px-6 text-foreground backdrop-blur-md hover:border-white/20 hover:bg-white/[0.065]"
                href="#realisations"
                size="lg"
                variant="secondary"
              >
                Voir mes réalisations
              </Button>
            </div>

            <div className="mt-7">
              <p className="text-xs text-subtle-foreground">Ils m&apos;ont fait confiance</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-9 gap-y-4 text-[0.8125rem] font-medium text-foreground/66">
                {trustItems.map((item) => (
                  <span className="inline-flex items-center gap-2" key={item}>
                    <span className="grid size-5 place-items-center rounded-full border border-white/20 bg-white/[0.035]">
                      <span className="size-2 rounded-full bg-white/25" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="relative min-h-[390px] lg:min-h-[430px]">
            <PremiumScene />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#05070d_0%,#070b14_58%,#05070d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgb(80_227_255_/_0.22),transparent_31%),radial-gradient(circle_at_88%_58%,rgb(140_109_255_/_0.2),transparent_34%),radial-gradient(circle_at_48%_102%,rgb(47_124_255_/_0.28),transparent_38%)]" />
      <div className="absolute inset-0 opacity-[0.058] bg-[linear-gradient(to_right,rgb(80_227_255_/_0.62)_1px,transparent_1px),linear-gradient(to_bottom,rgb(80_227_255_/_0.48)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_18%_24%,white_0_1px,transparent_1px)] bg-[size:19px_19px]" />
      <div className="absolute bottom-0 left-1/2 h-52 w-[150vw] -translate-x-1/2 rounded-[50%] border-t border-primary/35 bg-[radial-gradient(ellipse_at_center,rgb(47_124_255_/_0.28),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgb(0_0_0_/_0.62)_100%)]" />
    </div>
  );
}

function PremiumScene() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-x-0 bottom-14 h-56 bg-[linear-gradient(180deg,transparent,rgb(5_7_13_/_0.72))]" />
      <MountainSilhouette />
      <div className="absolute left-[5%] top-[5%] h-[78%] w-[90%] rounded-full bg-[radial-gradient(circle,rgb(80_227_255_/_0.26),transparent_56%)] blur-3xl" />
      <div className="absolute right-[-3%] top-[19%] h-[67%] w-[58%] rounded-full bg-[radial-gradient(circle,rgb(124_58_237_/_0.28),transparent_62%)] blur-3xl" />
      <div className="absolute left-[14%] top-[5%] h-[58%] w-px bg-gradient-to-b from-transparent via-accent-cyan/60 to-transparent" />
      <div className="absolute right-[13%] top-[1%] h-[66%] w-px bg-gradient-to-b from-transparent via-accent-violet/65 to-transparent" />
      <div className="absolute left-[30%] top-[3%] h-[48%] w-px bg-gradient-to-b from-transparent via-primary/55 to-transparent" />
      <div className="absolute right-[5%] top-[12%] h-56 w-px bg-gradient-to-b from-transparent via-white/55 to-transparent shadow-[0_0_28px_rgb(80_227_255_/_0.55)]" />

      <div className="absolute left-[55%] top-[32%] size-[min(82vw,32.5rem)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -inset-6 rounded-full border border-primary/14" />
        <div className="absolute inset-9 rounded-full border border-accent-cyan/12" />
        <HologramSvg />
      </div>

      <div className="absolute bottom-[21%] left-[55%] h-28 w-[70%] -translate-x-1/2 rounded-[50%] border border-primary/35 bg-[radial-gradient(ellipse_at_center,rgb(47_124_255_/_0.22),transparent_66%)] shadow-[0_0_86px_rgb(47_124_255_/_0.3)]" />
      <div className="absolute bottom-[24%] left-[55%] h-14 w-[53%] -translate-x-1/2 rounded-[50%] border border-accent-violet/50" />
      <div className="absolute bottom-[31%] left-[55%] h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_30px_rgb(80_227_255_/_0.7)]" />
      <div className="absolute bottom-[30%] left-[55%] -translate-x-1/2 rounded-full border border-white/10 bg-background/78 px-8 py-3 text-xs font-medium uppercase tracking-[0.24em] text-accent-cyan shadow-[0_0_28px_rgb(47_124_255_/_0.24)] backdrop-blur-md">
        Thyssen Digital
      </div>
    </div>
  );
}

function HologramSvg() {
  return (
    <svg
      className="absolute inset-0 size-full drop-shadow-[0_0_42px_rgb(80_227_255_/_0.48)]"
      viewBox="0 0 420 360"
    >
      <defs>
        <filter id="hero-td-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur result="blur" stdDeviation="7" />
          <feColorMatrix
            in="blur"
            result="glow"
            type="matrix"
            values="0 0 0 0 0.20 0 0 0 0 0.78 0 0 0 0 1 0 0 0 .85 0"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hero-td-fill" x1="54" x2="374" y1="44" y2="318" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1f6fff" stopOpacity=".92" />
          <stop offset=".44" stopColor="#22d3ee" stopOpacity=".9" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity=".92" />
        </linearGradient>
        <linearGradient id="hero-td-side" x1="112" x2="346" y1="54" y2="314" gradientUnits="userSpaceOnUse">
          <stop stopColor="#061221" stopOpacity=".9" />
          <stop offset=".5" stopColor="#154f88" stopOpacity=".56" />
          <stop offset="1" stopColor="#4f21a8" stopOpacity=".72" />
        </linearGradient>
        <linearGradient id="hero-td-stroke" x1="58" x2="365" y1="58" y2="308" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dff8ff" />
          <stop offset=".48" stopColor="#50e3ff" />
          <stop offset="1" stopColor="#8c6dff" />
        </linearGradient>
      </defs>
      <path
        d="M44 54h214c78 0 132 55 132 126S336 306 258 306H136V120H62L44 54Zm190 190h30c39 0 67-26 67-64s-28-64-67-64h-30v128Z"
        fill="url(#hero-td-fill)"
        filter="url(#hero-td-glow)"
        opacity=".64"
      />
      <path
        d="M146 120h88v124h31c39 0 66-26 66-64 0-37-27-63-66-63h-31l24-63c78 0 132 55 132 126S336 306 258 306H146V120Z"
        fill="url(#hero-td-side)"
        opacity=".7"
      />
      <path
        d="M44 54h214c78 0 132 55 132 126S336 306 258 306H136V120H62L44 54Zm190 190h30c39 0 67-26 67-64s-28-64-67-64h-30v128Z"
        fill="none"
        stroke="url(#hero-td-stroke)"
        strokeWidth="3"
      />
      <path
        d="M44 54h214c78 0 132 55 132 126S336 306 258 306H136V120H62L44 54Zm190 190h30c39 0 67-26 67-64s-28-64-67-64h-30v128Z"
        fill="none"
        stroke="#e8fbff"
        strokeOpacity=".42"
        strokeWidth="7"
      />
      <path d="M136 120v186" stroke="#dff8ff" strokeOpacity=".72" strokeWidth="3" />
      <path d="M234 116v128" stroke="#dff8ff" strokeOpacity=".58" strokeWidth="3" />
      <path d="M78 74h180" stroke="white" strokeOpacity=".55" strokeWidth="3" />
      <path d="M61 72h190c64 0 106 43 106 108 0 64-42 108-106 108H158" fill="none" stroke="#0b1220" strokeOpacity=".5" strokeWidth="18" />
      <path d="M88 66l-28 54M136 120l98-4M136 306l98-62M258 54l-24 62" stroke="#8fdcff" strokeOpacity=".18" strokeWidth="1" />
      <path d="M84 86h280M112 258h238" stroke="#50e3ff" strokeDasharray="6 14" strokeOpacity=".14" />
      <path d="M111 66h118l-93 54H61L44 54h199Z" fill="#55f0ff" opacity=".26" />
      <path d="M286 64c58 12 94 58 94 116 0 52-30 95-79 112 44-32 62-72 57-118-5-47-28-84-72-110Z" fill="#a855f7" opacity=".24" />
    </svg>
  );
}

function MountainSilhouette() {
  return (
    <svg
      className="absolute bottom-10 right-0 h-52 w-[88%] text-black/65"
      fill="currentColor"
      viewBox="0 0 760 220"
    >
      <path d="M0 220V165l80-62 44 28 88-86 52 58 34-27 76 84 58-50 48 28 92-105 70 94 38-20 80 75v38H0Z" />
      <path d="M0 220v-36l92-54 64 28 102-74 88 65 44-24 96 55 80-40 102 52 92-20v48H0Z" opacity=".55" />
    </svg>
  );
}
