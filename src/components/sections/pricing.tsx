import { ArrowRight, Check, Clock, Info, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  business,
  complementaryServices,
  maintenancePlans,
  pricingPage,
  websiteOffers,
} from "@/content/site";
import { cn } from "@/lib/utils";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li className="flex gap-3 text-[0.95rem] leading-6 text-ink" key={item}>
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
            <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
          </span>
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
        "relative flex h-full flex-col rounded-3xl border bg-white p-7",
        featured
          ? "border-primary shadow-lift ring-4 ring-primary/10"
          : "border-border shadow-soft",
      )}
    >
      {featured && featuredLabel ? (
        <Badge className="absolute -top-3.5 left-7 border-primary bg-primary text-white" size="md">
          {featuredLabel}
        </Badge>
      ) : null}
      <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-[0.95rem] leading-6 text-muted-foreground">{description}</p>
      <p className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink">{price}</p>
      {priceNote ? <p className="mt-1 text-sm text-muted-foreground">{priceNote}</p> : null}
      <div className="my-6 h-px bg-border" />
      {children}
    </article>
  );
}

export function PricingSection() {
  return (
    <>
      <Section id="tarifs">
        <Container>
          <SectionHeading
            description={pricingPage.offersDescription}
            eyebrow={pricingPage.offersEyebrow}
            title={pricingPage.offersTitle}
          />

          <ul className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
            {websiteOffers.map((offer) => (
              <li key={offer.id}>
                <PriceCard
                  description={offer.description}
                  featured={offer.featured}
                  featuredLabel={offer.featuredLabel}
                  name={offer.name}
                  price={offer.price}
                >
                  <CheckList items={offer.details} />
                  <div className="mt-auto grid gap-1.5 pt-6 text-sm leading-6 text-muted-foreground">
                    {offer.extra ? <p className="font-medium text-ink">{offer.extra}</p> : null}
                    <p className="inline-flex items-center gap-2 font-medium text-ink">
                      <Clock aria-hidden="true" className="size-4 text-primary" />
                      {offer.delay}
                    </p>
                    {offer.note ? <p>{offer.note}</p> : null}
                  </div>
                </PriceCard>
              </li>
            ))}
          </ul>

          <p className="mt-10 flex flex-col gap-2 rounded-2xl border border-primary/20 bg-primary-soft px-6 py-5 text-base font-medium text-ink sm:flex-row sm:items-center sm:justify-between">
            {pricingPage.redesignLine}
            <Link
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="/#realisations"
            >
              {pricingPage.redesignLinkLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </p>

          <div className="mt-6 rounded-3xl border border-border bg-background-secondary p-7 sm:p-8">
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-ink">
              <ShieldCheck aria-hidden="true" className="size-6 text-primary" />
              {pricingPage.includedTitle}
            </h3>
            <div className="mt-5 [&_ul]:sm:grid-cols-2 [&_ul]:sm:gap-x-8">
              <CheckList items={pricingPage.included} />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="maintenance" tone="soft">
        <Container>
          <SectionHeading
            description={pricingPage.maintenanceDescription}
            eyebrow={pricingPage.maintenanceEyebrow}
            title={pricingPage.maintenanceTitle}
          />

          <ul className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
            {maintenancePlans.map((plan) => (
              <li key={plan.name}>
                <PriceCard
                  description={plan.description}
                  featured={plan.featured}
                  featuredLabel={plan.featuredLabel}
                  name={plan.name}
                  price={plan.price}
                  priceNote={plan.monthlyEquivalent}
                >
                  <CheckList items={plan.details} />
                  <p className="mt-auto pt-6 text-sm leading-6 text-muted-foreground">{plan.note}</p>
                </PriceCard>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-7 shadow-soft sm:p-8">
            <h2 className="flex items-center gap-3 font-display text-2xl font-semibold text-ink">
              <Info aria-hidden="true" className="size-6 text-primary" />
              {pricingPage.termsTitle}
            </h2>
            <ul className="mt-6 grid gap-4">
              {pricingPage.terms.map((term) => (
                <li className="border-l-2 border-primary pl-4 text-base leading-7 text-ink" key={term}>
                  {term}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-white p-7 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              {pricingPage.complementaryTitle}
            </h2>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {pricingPage.complementaryDescription}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {complementaryServices.map((service) => (
                <li key={service}>
                  <Badge size="md" variant="neutral">
                    {service}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <section className="bg-white pb-20 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#1350ff,#2b5cff_45%,#6a2cff)] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {pricingPage.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">
              {pricingPage.finalCta.text}
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={business.phoneHref}
                leadingIcon={<Phone aria-hidden="true" className="size-4 text-primary" />}
                size="lg"
                variant="inverse"
              >
                {pricingPage.finalCta.phoneCta}
              </Button>
              <Button
                className="border-white/50 bg-transparent text-white shadow-none hover:border-white hover:bg-white/10"
                href="#contact"
                size="lg"
                variant="secondary"
              >
                {pricingPage.finalCta.quoteCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
