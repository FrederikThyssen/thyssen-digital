import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";

const trustItems = ["La Pince", "Fred Music", "TruckMaps", "Nomad Trans", "RoadLink"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-background"
      id="accueil"
    >
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        <Image
          alt=""
          className="size-full object-cover"
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 100vw, 0px"
          src="/images/image8.png"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-0 lg:hidden">
        <Image
          alt=""
          className="size-full object-cover object-[58%_center]"
          fill
          priority
          quality={100}
          sizes="(max-width: 1023px) 100vw, 0px"
          src="/images/image9.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_7_13_/_0.82),rgb(5_7_13_/_0.5)_62%,rgb(5_7_13_/_0.22))]" />
      </div>

      <div className="sr-only">
        <h1 id="hero-title">Des solutions digitales puissantes, conçues pour performer.</h1>
        <p>
          Développement web, applications sur mesure, automatisations et interfaces
          élégantes. Je transforme vos idées en produits digitaux fiables, rapides et
          évolutifs.
        </p>
      </div>

      <div className="relative z-10 hidden min-h-svh lg:block">
        <div
          aria-hidden="true"
          className="absolute left-[5.28%] top-[20.9%] flex h-[3.9rem] w-[14rem] items-center rounded-2xl border border-white/[0.07] bg-[#050713]/80 pl-3 shadow-[0_0_42px_rgb(19_80_255_/_0.12)] backdrop-blur-md"
        >
          <BrandLogo
            decorative
            imageClassName="h-[3.25rem]"
            tone="accent"
            variant="mark"
          />
        </div>
        <a
          aria-label="Discutons de votre projet"
          className="absolute left-[5.45%] top-[63.55%] h-[3.35rem] w-[17.65rem] rounded-[1rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
          href="#contact"
        />
        <a
          aria-label="Voir mes réalisations"
          className="absolute left-[25.05%] top-[63.55%] h-[3.35rem] w-[14.3rem] rounded-[1rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
          href="#realisations"
        />
        <a
          aria-label="Faire défiler vers les services"
          className="absolute bottom-[3.1%] left-1/2 size-12 -translate-x-1/2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
          href="#services"
        />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-6 pb-12 pt-32 sm:px-10 lg:hidden">
        <div className="max-w-xl">
          <div className="inline-flex rounded-2xl border border-white/[0.07] bg-[#050713]/70 px-3 py-2 shadow-[0_0_42px_rgb(19_80_255_/_0.14)] backdrop-blur-md">
            <BrandLogo
              decorative
              imageClassName="h-[3.35rem]"
              tone="accent"
              variant="mark"
            />
          </div>

          <h2 className="mt-7 text-[clamp(3rem,14vw,5.1rem)] font-semibold leading-[0.98] tracking-normal text-foreground">
            <span className="block">Des solutions</span>
            <span className="block">digitales puissantes,</span>
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-transparent">
              conçues pour performer.
            </span>
          </h2>

          <p className="mt-6 max-w-[36rem] text-base leading-8 text-foreground/76">
            Développement web, applications sur mesure, automatisations et interfaces
            élégantes. Je transforme vos idées en produits digitaux fiables, rapides et
            évolutifs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="min-h-14 rounded-2xl border-white/10 bg-[linear-gradient(135deg,#136fff,#0bbcff_47%,#7d2cff)] px-6 shadow-[0_0_48px_rgb(47_124_255_/_0.48)]"
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
            >
              Discutons de votre projet
            </Button>
            <Button
              className="min-h-14 rounded-2xl border-white/12 bg-white/[0.035] px-6 text-foreground backdrop-blur-md"
              href="#realisations"
              size="lg"
              variant="secondary"
            >
              Voir mes réalisations
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-xs text-foreground/42">Ils m&apos;ont fait confiance</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-medium text-foreground/64">
              {trustItems.map((item) => (
                <span className="inline-flex items-center gap-2" key={item}>
                  <span className="size-5 rounded-full border border-white/18 bg-white/[0.04]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          aria-label="Faire défiler vers les services"
          className="mx-auto mt-12 inline-flex size-10 items-center justify-center text-white/70"
          href="#services"
        >
          <ChevronDown aria-hidden="true" className="size-7" />
        </a>
      </div>
    </section>
  );
}
