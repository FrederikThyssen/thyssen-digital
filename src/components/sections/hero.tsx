import { ArrowRight, Mail, MapPin, Phone, Smartphone, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { business, home } from "@/content/site";

const { hero } = home;

function HeroTitle() {
  const [before, after] = hero.title.split(hero.titleHighlight);

  if (after === undefined) {
    return <NoBreakPlaces text={hero.title} />;
  }

  return (
    <>
      <NoBreakPlaces text={before} />
      <span className="text-gradient-brand">{hero.titleHighlight}</span>
      <NoBreakPlaces text={after} />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[linear-gradient(135deg,rgb(19_80_255_/_0.14),rgb(0_229_255_/_0.1)_45%,rgb(125_44_255_/_0.14))] blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_40px_80px_-32px_rgb(16_24_40_/_0.35)]">
        <div className="flex h-9 items-center gap-2 border-b border-border bg-surface-subtle px-4">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#febc2e]" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-0.5 text-center text-xs text-subtle-foreground">
            {hero.visual.browserUrl}
          </span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image
            alt={hero.visual.imageAlt}
            className="object-cover object-top"
            fetchPriority="high"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 576px, 100vw"
            src="/images/image-fredmusic.png"
          />
        </div>
      </div>

      <div className="absolute -bottom-6 left-3 flex max-w-[19rem] items-center gap-3 rounded-2xl border border-border bg-white p-3.5 shadow-card sm:-left-6">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
          <Mail aria-hidden="true" className="size-5" />
        </span>
        <span className="grid">
          <span className="text-sm font-semibold text-ink">{hero.visual.requestTitle}</span>
          <span className="text-xs leading-5 text-muted-foreground">{hero.visual.requestText}</span>
        </span>
      </div>

      <div className="absolute right-3 top-16 hidden items-center gap-3 rounded-2xl border border-border bg-white p-3 shadow-card sm:flex sm:-right-5">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Smartphone aria-hidden="true" className="size-5" />
        </span>
        <span className="grid">
          <span className="text-sm font-semibold text-ink">{hero.visual.mobileTitle}</span>
          <span className="text-xs text-muted-foreground">{hero.visual.mobileText}</span>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white"
      id="accueil"
    >
      <div
        aria-hidden="true"
        className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_75%_20%,black,transparent_65%)]"
      />
      <Container className="grid items-center gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-28 lg:pt-16 xl:gap-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-1 text-sm sm:rounded-full font-medium text-muted-foreground shadow-soft">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#1350ff,#7d2cff)]" />
            <span>
              <NoBreakPlaces text={hero.eyebrow} />
            </span>
          </p>
          <h1
            className="mt-6 font-display text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]"
            id="hero-title"
          >
            <HeroTitle />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{hero.subtitle}</p>
          <p className="mt-4 flex max-w-xl gap-2 text-[0.95rem] leading-7 text-muted-foreground">
            <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
            <span>
              <NoBreakPlaces text={hero.localLine} />
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
            >
              {hero.primaryCta}
            </Button>
            <Button
              href={business.phoneHref}
              leadingIcon={<Phone aria-hidden="true" className="size-5 text-primary" />}
              size="lg"
              variant="secondary"
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <a
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            href={business.googleProfileUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span aria-hidden="true" className="flex gap-0.5 text-[#f5a400]">
              {Array.from({ length: 5 }, (_, index) => (
                <Star className="size-4" fill="currentColor" key={index} />
              ))}
            </span>
            <span>
              {business.googleRatingLabel}
              <span className="sr-only"> (ouvre ma fiche Google dans un nouvel onglet)</span>
            </span>
          </a>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-subtle-foreground">{hero.trustLabel}</p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
              {hero.trustItems.map((item) => (
                <li className="font-display text-lg font-semibold tracking-tight text-ink/80" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
