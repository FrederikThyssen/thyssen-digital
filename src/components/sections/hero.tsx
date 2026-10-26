import { ArrowRight, ChevronDown, Phone, Star } from "lucide-react";

import { FadeUp, SlowZoomBackground } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { business, home } from "@/content/site";

const { hero } = home;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-background"
      id="accueil"
    >
      <SlowZoomBackground
        className="absolute inset-0"
        image="/images/hero-definitif.png"
        imageClassName="object-contain object-[62%_center] lg:object-center"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_7_13_/_0.85),rgb(5_7_13_/_0.56)_43%,rgb(5_7_13_/_0.15)_72%,rgb(5_7_13_/_0.03))] lg:bg-[linear-gradient(90deg,rgb(5_7_13_/_0.8),rgb(5_7_13_/_0.5)_38%,rgb(5_7_13_/_0.08)_67%,rgb(5_7_13_/_0))]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/4 h-[32rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(47_124_255_/_0.2),transparent_64%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[18%] h-40 w-[42rem] rounded-full bg-[radial-gradient(ellipse,rgb(34_211_238_/_0.16),transparent_68%)] blur-3xl"
      />

      <div className="relative z-10 flex min-h-svh flex-col justify-center px-6 pb-12 pt-32 sm:px-10 lg:px-[5.45vw] lg:pb-10 lg:pt-36">
        {/* Rendered without entrance animation so the headline paints immediately (LCP). */}
        <div className="max-w-xl lg:max-w-[50rem] xl:max-w-[54rem]">
          <div>
            <h1
              className="text-[clamp(2rem,8.4vw,3.1rem)] font-semibold leading-[1.08] tracking-normal text-foreground lg:text-[clamp(3rem,4vw,4.1rem)]"
              id="hero-title"
            >
              {hero.title}
            </h1>
          </div>

          <div>
            <p className="mt-6 max-w-[36rem] text-base leading-8 text-foreground/84 lg:max-w-[40rem] lg:text-[1.15rem] lg:leading-8">
              {hero.subtitle}
            </p>
            <p className="mt-4 max-w-[36rem] text-sm leading-6 text-foreground/72 lg:max-w-[40rem] lg:text-base">
              {hero.localLine}
            </p>
          </div>

          <div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10 lg:gap-5">
              <Button
                className="min-h-14 rounded-2xl border-white/10 bg-[linear-gradient(135deg,#1350ff,#5b2cff)] px-6 shadow-[0_0_48px_rgb(47_124_255_/_0.46),inset_0_1px_0_rgb(255_255_255_/_0.18)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgb(80_227_255_/_0.34),0_18px_42px_rgb(47_124_255_/_0.22)] motion-reduce:transform-none lg:min-h-16 lg:px-8 lg:text-base"
                href="#contact"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
              >
                {hero.primaryCta}
              </Button>
              <Button
                className="min-h-14 rounded-2xl border-white/14 bg-white/[0.04] px-6 text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.1)] backdrop-blur-md transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:bg-white/[0.07] motion-reduce:transform-none lg:min-h-16 lg:px-8 lg:text-base"
                href={business.phoneHref}
                leadingIcon={<Phone aria-hidden="true" className="size-5 text-accent-cyan" />}
                size="lg"
                variant="secondary"
              >
                {hero.secondaryCta}
              </Button>
            </div>
            <a
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground/84 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href={business.googleProfileUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="flex gap-0.5 text-[#fbbc04]">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star className="size-4" fill="currentColor" key={index} />
                ))}
              </span>
              <span>
                {business.googleRatingLabel}
                <span className="sr-only"> (ouvre ma fiche Google dans un nouvel onglet)</span>
              </span>
            </a>
          </div>

          <div>
            <div className="mt-10 max-w-[42rem] lg:mt-12">
              <p className="text-xs text-foreground/72">{hero.trustLabel}</p>
              <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-2xl border border-white/10 bg-background/20 p-1 text-sm font-medium text-foreground/80 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)] backdrop-blur-md">
                {hero.trustItems.map((item) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-white/[0.045] hover:text-foreground/84"
                    key={item}
                  >
                    <span aria-hidden="true" className="size-4 rounded-full border border-white/18 bg-white/[0.04] shadow-[0_0_18px_rgb(80_227_255_/_0.1)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FadeUp className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block" delay={0.4}>
          <a
            aria-label="Faire défiler vers les services"
            className="inline-flex size-9 animate-[hero-chevron_3.4s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/58 backdrop-blur-sm transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan motion-reduce:animate-none"
            href="#services"
          >
            <ChevronDown aria-hidden="true" className="size-5" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
