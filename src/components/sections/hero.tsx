import { ArrowRight, ChevronDown } from "lucide-react";

import { FadeUp, SlowZoomBackground, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";

const trustItems = ["La Pince", "Fred Music", "TruckMaps", "Nomad Trans", "RoadLink"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-background"
      id="accueil"
    >
      <SlowZoomBackground
        className="absolute inset-0 bg-contain bg-[position:62%_center] bg-no-repeat lg:bg-center"
        image="/images/hero-definitif.png"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_7_13_/_0.82),rgb(5_7_13_/_0.54)_42%,rgb(5_7_13_/_0.12)_72%,rgb(5_7_13_/_0.02))] lg:bg-[linear-gradient(90deg,rgb(5_7_13_/_0.78),rgb(5_7_13_/_0.5)_38%,rgb(5_7_13_/_0.08)_67%,rgb(5_7_13_/_0))]"
      />

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-6 pb-12 pt-32 sm:px-10 lg:px-[5.45vw] lg:pb-[10.2vh] lg:pt-36">
        <Stagger className="max-w-xl lg:max-w-[48rem] xl:max-w-[52rem]" staggerDelay={0.07}>
          <StaggerItem>
            <h1
              className="text-[clamp(2.76rem,12.88vw,4.69rem)] font-semibold leading-[0.98] tracking-normal text-foreground lg:text-[clamp(3.68rem,5.05vw,5.32rem)]"
              id="hero-title"
            >
            <span className="block">Des solutions</span>
            <span className="block">digitales,</span>
            <span className="block max-w-full bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-transparent drop-shadow-[0_0_18px_rgb(34_211_238_/_0.14)]">
              conçues pour performer.
            </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-[36rem] text-base leading-8 text-foreground/76 lg:max-w-[44rem] lg:text-[1.28rem] lg:leading-9">
            Développement web, applications sur mesure, automatisations et interfaces
            élégantes. Je transforme vos idées en produits digitaux fiables, rapides et
            évolutifs.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-12 lg:gap-8">
              <Button
                className="min-h-14 rounded-2xl border-white/10 bg-[linear-gradient(135deg,#136fff,#0bbcff_47%,#7d2cff)] px-6 shadow-[0_0_48px_rgb(47_124_255_/_0.48)] lg:min-h-16 lg:px-8 lg:text-base"
                href="#contact"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
              >
                Discutons de votre projet
              </Button>
              <Button
                className="min-h-14 rounded-2xl border-white/12 bg-white/[0.035] px-6 text-foreground backdrop-blur-md lg:min-h-16 lg:px-8 lg:text-base"
                href="#realisations"
                size="lg"
                variant="secondary"
              >
                Voir mes réalisations
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-12 lg:mt-14">
              <p className="text-xs text-foreground/42">Ils m&apos;ont fait confiance</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-medium text-foreground/64 lg:gap-x-11">
              {trustItems.map((item) => (
                <span className="inline-flex items-center gap-2" key={item}>
                  <span className="size-5 rounded-full border border-white/18 bg-white/[0.04]" />
                  {item}
                </span>
              ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeUp className="absolute bottom-7 left-1/2 -translate-x-1/2 lg:bottom-8" delay={0.4}>
          <a
            aria-label="Faire défiler vers les services"
            className="inline-flex size-10 items-center justify-center text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            href="#services"
          >
            <ChevronDown aria-hidden="true" className="size-7" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
