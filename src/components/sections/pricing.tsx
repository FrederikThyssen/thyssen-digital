import { ArrowRight, Check, Info, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  business,
  complementaryServices,
  maintenancePlans,
  pricingPage,
  websiteOffers,
} from "@/content/site";
import { cn } from "@/lib/utils";

const panelClassName =
  "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgb(5_10_25_/_0.92),rgb(7_11_20_/_0.78))] p-6 shadow-[0_32px_130px_rgb(0_0_0_/_0.36)] sm:p-9 lg:p-10";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li className="flex gap-2 text-sm leading-6 text-foreground/84" key={item}>
          <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-cyan" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PriceCard({
  children,
  description,
  featured,
  featuredLabel,
  name,
  price,
  priceNote,
}: {
  children: ReactNode;
  description: string;
  featured?: boolean;
  featuredLabel?: string;
  name: string;
  price: string;
  priceNote?: string;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col gap-4 rounded-2xl border p-5 sm:p-6",
        featured
          ? "border-accent-cyan/60 bg-[linear-gradient(135deg,rgb(34_211_238_/_0.16),rgb(255_255_255_/_0.04),rgb(140_109_255_/_0.1))] shadow-[0_0_60px_rgb(34_211_238_/_0.12)]"
          : "border-white/12 bg-white/[0.035]",
      )}
    >
      {featured && featuredLabel ? (
        <Badge className="absolute -top-3 left-5 bg-background" size="md" variant="accent">
          {featuredLabel}
        </Badge>
      ) : null}
      <div>
        <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
        <p className="mt-3 text-2xl font-semibold text-accent-cyan">{price}</p>
        {priceNote ? <p className="mt-1 text-sm text-foreground/72">{priceNote}</p> : null}
        <p className="mt-3 text-sm leading-6 text-foreground/78">{description}</p>
      </div>
      {children}
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      className="relative isolate overflow-hidden pb-24 pt-4 sm:pb-28 sm:pt-6 lg:pb-32 lg:pt-8"
      id="tarifs"
    >
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

      <Container className="relative grid gap-16 sm:gap-20">
        {/* Offres de création */}
        <div className={panelClassName}>
          <div
            aria-hidden="true"
            className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent"
          />
          <FadeUp>
            <SectionHeading
              description={pricingPage.offersDescription}
              eyebrow={pricingPage.offersEyebrow}
              title={pricingPage.offersTitle}
            />
          </FadeUp>

          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3" staggerDelay={0.07}>
            {websiteOffers.map((offer) => (
              <StaggerItem key={offer.id}>
                <PriceCard
                  description={offer.description}
                  featured={offer.featured}
                  featuredLabel={offer.featuredLabel}
                  name={offer.name}
                  price={offer.price}
                >
                  <CheckList items={offer.details} />
                  <div className="mt-auto grid gap-1 border-t border-white/10 pt-4 text-sm leading-6 text-foreground/78">
                    {offer.extra ? <p>{offer.extra}</p> : null}
                    <p className="font-medium text-foreground">{offer.delay}</p>
                    {offer.note ? <p className="text-foreground/72">{offer.note}</p> : null}
                  </div>
                </PriceCard>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp className="mt-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-accent-cyan/30 bg-primary/10 px-5 py-4 text-base font-medium text-foreground">
              {pricingPage.redesignLine}
              <Link
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-semibold text-accent-cyan underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                href="/#realisations"
              >
                {pricingPage.redesignLinkLabel}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </p>
          </FadeUp>

          <FadeUp className="mt-8">
            <div className="rounded-2xl border border-white/10 bg-background/40 p-5 sm:p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-foreground">
                <ShieldCheck aria-hidden="true" className="size-5 text-accent-cyan" />
                {pricingPage.includedTitle}
              </h3>
              <div className="mt-4">
                <CheckList items={pricingPage.included} />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Maintenance */}
        <div className={panelClassName}>
          <div
            aria-hidden="true"
            className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent"
          />
          <FadeUp>
            <SectionHeading
              description={pricingPage.maintenanceDescription}
              eyebrow={pricingPage.maintenanceEyebrow}
              title={pricingPage.maintenanceTitle}
            />
          </FadeUp>

          <Stagger className="mt-10 grid gap-6 lg:grid-cols-3" staggerDelay={0.07}>
            {maintenancePlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <PriceCard
                  description={plan.description}
                  featured={plan.featured}
                  featuredLabel={plan.featuredLabel}
                  name={plan.name}
                  price={plan.price}
                  priceNote={plan.monthlyEquivalent}
                >
                  <CheckList items={plan.details} />
                  <p className="mt-auto border-t border-white/10 pt-4 text-sm leading-6 text-foreground/72">
                    {plan.note}
                  </p>
                </PriceCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Modalités et prestations complémentaires */}
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground">
                <Info aria-hidden="true" className="size-5 text-accent-cyan" />
                {pricingPage.termsTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {pricingPage.terms.map((term) => (
                  <li className="text-sm leading-6 text-foreground/84" key={term}>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <h2 className="text-2xl font-semibold text-foreground">
                {pricingPage.complementaryTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-foreground/72">
                {pricingPage.complementaryDescription}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {complementaryServices.map((service) => (
                  <li
                    className="rounded-xl border border-white/10 bg-background/35 px-4 py-3 text-sm font-medium text-foreground/84"
                    key={service}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Bandeau final */}
        <FadeUp>
          <div className="rounded-[2rem] border border-accent-cyan/30 bg-[linear-gradient(135deg,rgb(19_80_255_/_0.22),rgb(140_109_255_/_0.14))] p-6 text-center sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {pricingPage.finalCta.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-foreground/84">{pricingPage.finalCta.text}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={business.phoneHref}
                leadingIcon={<Phone aria-hidden="true" className="size-4" />}
                size="lg"
              >
                {pricingPage.finalCta.phoneCta}
              </Button>
              <Button href="#contact" size="lg" variant="secondary">
                {pricingPage.finalCta.quoteCta}
              </Button>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
