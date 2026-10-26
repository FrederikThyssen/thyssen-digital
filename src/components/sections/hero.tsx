import { ArrowRight, Check, Mail, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { business, home } from "@/content/site";
import { formatRating, getGooglePlaceSummary } from "@/lib/google-reviews";

const { hero } = home;

function HeroTitle() {
  const [before, after] = hero.title.split(hero.titleHighlight);

  if (after === undefined) {
    return <NoBreakPlaces text={hero.title} />;
  }

  return (
    <>
      <NoBreakPlaces text={before} />
      <span className="accent-serif text-[1.08em] leading-none">{hero.titleHighlight}</span>
      <NoBreakPlaces text={after} />
    </>
  );
}

function BrowserFrame() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_50px_100px_-40px_rgb(16_24_40_/_0.45),0_0_0_1px_rgb(16_24_40_/_0.02)]">
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
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 576px, 100vw"
          src="/images/image-fredmusic.png"
        />
      </div>
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="w-[8.5rem] rounded-[1.75rem] border-[5px] border-ink bg-ink p-0.5 shadow-[0_30px_60px_-20px_rgb(16_24_40_/_0.55)] sm:w-[9.5rem]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] bg-white">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-3.5 w-12 -translate-x-1/2 rounded-full bg-ink"
        />
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-[80%_30%]"
          fill
          sizes="160px"
          src="/images/image-fredmusic.png"
        />
      </div>
    </div>
  );
}

function HeroVisual({ ratingLabel }: { ratingLabel: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-10 pt-4 sm:pt-14 lg:max-w-none lg:pb-0">
      <div className="tilt-3d relative">
        <BrowserFrame />

        <div className="float-slower absolute -bottom-10 -right-2 sm:-right-6 lg:-bottom-12">
          <PhoneFrame />
        </div>

        <div className="float-slow absolute -left-3 bottom-10 hidden max-w-[17rem] items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-3.5 shadow-card backdrop-blur-md sm:flex sm:-left-8">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1350ff,#7d2cff)] text-white">
            <Mail aria-hidden="true" className="size-5" />
          </span>
          <span className="grid">
            <span className="text-sm font-semibold text-ink">{hero.visual.requestTitle}</span>
            <span className="text-xs leading-5 text-muted-foreground">{hero.visual.requestText}</span>
          </span>
        </div>

        <div className="float-slower absolute -top-12 left-4 hidden items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3.5 py-2 shadow-card backdrop-blur-md sm:flex">
          <span aria-hidden="true" className="flex gap-0.5 text-[#f5a400]">
            {Array.from({ length: 5 }, (_, index) => (
              <Star className="size-3.5" fill="currentColor" key={index} />
            ))}
          </span>
          <span className="text-xs font-semibold text-ink">{ratingLabel}</span>
        </div>

        <div className="float-slow absolute -top-14 right-4 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2.5 shadow-card backdrop-blur-md md:flex">
          <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
          </span>
          <span className="grid">
            <span className="text-xs font-semibold text-ink">{hero.visual.mobileTitle}</span>
            <span className="text-[0.7rem] text-muted-foreground">{hero.visual.mobileText}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export async function Hero() {
  // Live rating from the Google Places API (cached 6 h); static label as fallback.
  const summary = await getGooglePlaceSummary();
  const ratingLabel =
    summary && summary.userRatingCount > 0
      ? `${formatRating(summary.rating)} sur Google (${summary.userRatingCount} avis)`
      : business.googleRatingLabel;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white"
      id="accueil"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_85%,transparent)]">
        <span className="aurora -right-[10%] -top-[20%] h-[38rem] w-[38rem] bg-[#1350ff]/35" />
        <span className="aurora right-[18%] top-[30%] h-[26rem] w-[26rem] bg-[#00e5ff]/30 [animation-delay:-6s]" />
        <span className="aurora -left-[12%] bottom-[-25%] h-[30rem] w-[30rem] bg-[#7d2cff]/25 [animation-delay:-11s]" />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-16 pb-24 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-32 lg:pt-20 xl:gap-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/80 px-3 py-1 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur sm:rounded-full">
            <span aria-hidden="true" className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span>
              <NoBreakPlaces text={hero.eyebrow} />
            </span>
          </p>
          <h1
            className="mt-7 font-display text-[2.45rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4.1rem]"
            id="hero-title"
          >
            <HeroTitle />
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {hero.subtitle}
          </p>
          <p className="mt-4 flex max-w-xl gap-2 text-[0.95rem] leading-7 text-muted-foreground">
            <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
            <span>
              <NoBreakPlaces text={hero.localLine} />
            </span>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              className="bg-[linear-gradient(120deg,#1350ff,#3b5bff_50%,#6a2cff)] hover:bg-[linear-gradient(120deg,#0b3ee0,#2f4ef0_50%,#5a1fe8)]"
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
              {ratingLabel}
              <span className="sr-only"> (ouvre ma fiche Google dans un nouvel onglet)</span>
            </span>
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6">
            <p className="text-sm text-subtle-foreground">{hero.trustLabel}</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
              {hero.trustItems.map((item) => (
                <li className="font-display text-lg font-semibold tracking-tight text-ink/80" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HeroVisual ratingLabel={ratingLabel} />
      </Container>
    </section>
  );
}
