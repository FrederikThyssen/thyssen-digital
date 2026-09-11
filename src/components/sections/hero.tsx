import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FadeUp } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const trustItems = ["TruckMaps", "Fred Music", "Maison Marcelito"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden border-b border-border bg-background pb-20 pt-36 lg:pb-28 lg:pt-44"
      id="accueil"
    >
      {/* Le visuel de marque reste, mais désaturé et voilé : une texture, pas un décor. */}
      <Image
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover opacity-[0.14] grayscale"
        fill
        priority
        sizes="100vw"
        src="/images/hero-definitif.png"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-background/70"
      />

      <Container>
        <FadeUp>
          <h1
            className="max-w-4xl text-[clamp(2.5rem,7.5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground"
            id="hero-title"
          >
            Des solutions digitales,{" "}
            <span className="text-muted-foreground">conçues pour performer.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            Développement web, applications sur mesure, automatisations et interfaces
            élégantes. Je transforme vos idées en produits digitaux fiables, rapides et
            évolutifs.
          </p>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Discutons de votre projet
            </Button>
            <Button href="#realisations" size="lg" variant="secondary">
              Voir mes réalisations
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="mt-16 border-t border-border pt-6">
            <p className="text-sm text-subtle-foreground">
              Ils m&apos;ont fait confiance
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <li className="text-sm font-medium text-muted-foreground" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
