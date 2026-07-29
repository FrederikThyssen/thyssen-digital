import { ArrowRight, ChevronDown } from "lucide-react";

import { FadeUp, SlowZoomBackground, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";

const trustItems = ["La Pince", "Fred Music", "TruckMaps", "Nomad Trans", "RoadLink"];
const headlineParts = [
  { text: "Des solutions", className: "text-foreground" },
  { text: "digitales,", className: "text-foreground" },
];
const headlineLabel = "Des solutions digitales, conçues pour performer.";
const characterDelayStep = 68;

function AnimatedWord({
  startIndex,
  word,
}: {
  startIndex: number;
  word: string;
}) {
  return (
    <span className="hero-word-group">
      {word.split("").map((character, index) => (
        <span
          aria-hidden="true"
          className="hero-char"
          key={`${word}-${character}-${index}`}
          style={{
            animationDelay: `${260 + (startIndex + index) * characterDelayStep + (index % 3 === 0 ? 18 : 0)}ms`,
          }}
        >
          {character}
        </span>
      ))}
    </span>
  );
}

function AnimatedHeadlineText() {
  return (
    <>
      {headlineParts.map((part, partIndex) => {
        const previousCharacters = headlineParts
          .slice(0, partIndex)
          .reduce((total, currentPart) => total + currentPart.text.length, 0);

        return (
          <span className={`block ${part.className}`} key={part.text}>
            {part.text.split(" ").map((word, wordIndex, words) => {
              const previousWordsLength = words
                .slice(0, wordIndex)
                .reduce((total, currentWord) => total + currentWord.length, 0);
              const startIndex = previousCharacters + previousWordsLength + wordIndex;

              return (
                <span key={`${part.text}-${word}`}>
                  <AnimatedWord startIndex={startIndex} word={word} />
                  {wordIndex < words.length - 1 ? <span className="hero-space" /> : null}
                </span>
              );
            })}
          </span>
        );
      })}
      <span aria-hidden="true" className="block">
        <span className="hero-gradient-line hero-gradient-line-1 inline-block bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text pr-[0.2em] text-transparent drop-shadow-[0_0_18px_rgb(34_211_238_/_0.14)]">
          conçues pour
        </span>
        <span className="hero-gradient-line hero-gradient-line-2 inline-block bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-violet bg-clip-text text-transparent drop-shadow-[0_0_18px_rgb(34_211_238_/_0.14)]">
          performer.
        </span>
      </span>
    </>
  );
}

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
        <Stagger className="max-w-xl lg:max-w-[50rem] xl:max-w-[54rem]" staggerDelay={0.08}>
          <StaggerItem>
            <h1
              aria-label={headlineLabel}
              className="text-[clamp(2.76rem,12.88vw,4.69rem)] font-semibold leading-[0.98] tracking-normal text-foreground lg:text-[clamp(3.68rem,5.05vw,5.32rem)]"
              id="hero-title"
            >
              <AnimatedHeadlineText />
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-[34rem] text-base leading-8 text-foreground/76 lg:max-w-[37rem] lg:text-[1.12rem] lg:leading-8 xl:max-w-[39rem] xl:text-[1.18rem] xl:leading-9">
              Développement web, applications sur mesure, automatisations et interfaces
              élégantes. Je transforme vos idées en produits digitaux fiables, rapides et
              évolutifs.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-11 lg:gap-7">
              <Button
                className="min-h-14 rounded-2xl border-white/10 bg-[linear-gradient(135deg,#136fff,#0bbcff_47%,#7d2cff)] px-6 shadow-[0_0_48px_rgb(47_124_255_/_0.46),inset_0_1px_0_rgb(255_255_255_/_0.18)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgb(80_227_255_/_0.34),0_18px_42px_rgb(47_124_255_/_0.22)] lg:min-h-16 lg:px-8 lg:text-base"
                href="#contact"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
              >
                Discutons de votre projet
              </Button>
              <Button
                className="min-h-14 rounded-2xl border-white/14 bg-white/[0.04] px-6 text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.1)] backdrop-blur-md transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:bg-white/[0.07] lg:min-h-16 lg:px-8 lg:text-base"
                href="#realisations"
                size="lg"
                variant="secondary"
              >
                Voir mes réalisations
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 max-w-[42rem] lg:mt-12">
              <p className="text-xs text-foreground/40">Ils m&apos;ont fait confiance</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 rounded-2xl border border-white/10 bg-background/20 p-1 text-sm font-medium text-foreground/62 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)] backdrop-blur-md">
                {trustItems.map((item) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-white/[0.045] hover:text-foreground/84"
                    key={item}
                  >
                    <span className="size-4 rounded-full border border-white/18 bg-white/[0.04] shadow-[0_0_18px_rgb(80_227_255_/_0.1)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeUp className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-7" delay={0.4}>
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
