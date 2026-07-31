import { ArrowRight, Check, FileDown, Gauge, ShieldCheck, Sparkles } from "lucide-react";

import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  complementaryServices,
  maintenancePlans,
  positioningItems,
  websiteOffers,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32" id="tarifs">
      <BackgroundGrid className="opacity-[0.045]" />
      <NoiseOverlay />
      <BackgroundGlow
        className="hidden lg:block"
        intensity="medium"
        position="top-right"
        size="lg"
        tone="cyan"
      />
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="bottom-left"
        size="lg"
        tone="violet"
      />

      <Container className="relative">
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-cyan">
                Nos prestations
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-foreground">
                Des solutions lisibles, sans perdre l&apos;exigence.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-foreground/68 lg:justify-self-end">
              Chaque offre donne un cadre clair. Le niveau de finition, les options et
              l&apos;accompagnement sont ensuite ajustés au besoin réel du projet.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.58fr_1.42fr]">
          <FadeUp>
            <aside className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgb(255_255_255_/_0.075),rgb(255_255_255_/_0.025)_50%,rgb(47_124_255_/_0.08))] p-7 shadow-[0_28px_110px_rgb(0_0_0_/_0.35)]">
              <div className="absolute -right-20 top-10 size-56 rounded-full bg-accent-cyan/15 blur-3xl" />
              <div className="relative">
                <span className="inline-flex size-12 items-center justify-center rounded-md border border-accent-cyan/25 bg-primary/15 text-accent-cyan">
                  <Sparkles aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-foreground">
                  Une base premium, puis du sur mesure.
                </h3>
                <p className="mt-5 text-sm leading-7 text-foreground/68">
                  Les tarifs donnent un point de départ. Les fonctionnalités, le volume de
                  contenu et l&apos;accompagnement définissent ensuite le devis final.
                </p>
                <div className="mt-10 flex flex-col gap-3">
                  <Button
                    href="/documents/brochure-maintenance-thyssen-digital.pdf"
                    leadingIcon={<FileDown aria-hidden="true" className="size-4" />}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    Brochure maintenance
                  </Button>
                  <Button
                    href="#contact"
                    trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
                  >
                    Demander un devis
                  </Button>
                </div>
              </div>
            </aside>
          </FadeUp>

          <Stagger className="grid gap-5" staggerDelay={0.07}>
            {websiteOffers.map((offer, index) => (
              <StaggerItem key={offer.name}>
                <article
                  className={cn(
                    "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgb(255_255_255_/_0.07),rgb(255_255_255_/_0.025)_58%,rgb(47_124_255_/_0.055))] p-6 shadow-[0_24px_90px_rgb(0_0_0_/_0.28)] transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/35",
                    offer.featured &&
                      "border-accent-cyan/40 bg-[linear-gradient(145deg,rgb(47_124_255_/_0.18),rgb(255_255_255_/_0.045)_44%,rgb(140_109_255_/_0.11))] shadow-[0_0_100px_rgb(34_211_238_/_0.16)]",
                  )}
                >
                  <div className="absolute -right-16 -top-16 size-48 rounded-full bg-accent-cyan/10 blur-3xl transition group-hover:bg-accent-cyan/20" />
                  <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <p className="text-4xl font-semibold tracking-[-0.05em] text-foreground/25">
                      0{index + 1}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                          {offer.name}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/68">
                        {offer.description}
                      </p>
                    </div>
                    <p className="whitespace-nowrap bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-2xl font-semibold text-transparent">
                      {offer.price}
                    </p>
                  </div>
                  <div className="relative mt-6 flex flex-wrap gap-2 pl-0 md:pl-20">
                    {offer.details.map((detail) => (
                      <span
                        className="rounded-full border border-white/10 bg-background/35 px-3 py-2 text-xs font-medium text-foreground/72"
                        key={detail}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeUp className="mt-24">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgb(5_10_25_/_0.92),rgb(7_11_20_/_0.78))] p-7 shadow-[0_32px_130px_rgb(0_0_0_/_0.36)] sm:p-9 lg:p-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent" />
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-cyan">
                  Maintenance
                </p>
                <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-foreground">
                  Garder le site rapide, stable et utile.
                </h2>
                <p className="mt-6 text-base leading-8 text-foreground/68">
                  Trois niveaux pour sécuriser, surveiller et faire évoluer votre
                  présence digitale dans le temps.
                </p>
              </div>

              <div className="grid gap-4">
                {maintenancePlans.map((plan) => (
                  <article
                    className="relative grid gap-4 rounded-2xl border border-accent-cyan/35 bg-[linear-gradient(135deg,rgb(34_211_238_/_0.13),rgb(255_255_255_/_0.035),rgb(140_109_255_/_0.08))] p-5 sm:grid-cols-[1fr_auto] sm:items-start"
                    key={plan.name}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-foreground">
                          {plan.name}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-foreground/64">
                        {plan.description}
                      </p>
                    </div>
                    <p className="whitespace-nowrap text-xl font-semibold text-accent-cyan">
                      {plan.price}
                    </p>
                    <div className="sm:col-span-2 grid gap-2 sm:grid-cols-2">
                      {plan.details.slice(0, 4).map((detail) => (
                        <p
                          className="flex gap-2 text-sm leading-6 text-foreground/74"
                          key={detail}
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-accent-cyan"
                          />
                          {detail}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeUp>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan">
                <ShieldCheck aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                Prestations complémentaires sur devis.
              </h3>
              <p className="mt-4 text-sm leading-7 text-foreground/68">
                Pour les besoins spécifiques : refonte, SEO, outils métier,
                automatisation ou nouvelles fonctionnalités.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="grid h-full gap-3 sm:grid-cols-2">
              {complementaryServices.map((service) => (
                <div
                  className="rounded-2xl border border-white/10 bg-background/35 px-5 py-4 text-sm font-medium text-foreground/78"
                  key={service}
                >
                  {service}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp className="mt-16">
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
            <Gauge aria-hidden="true" className="size-5 text-accent-cyan" />
            {positioningItems.map((item) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-foreground/66"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
