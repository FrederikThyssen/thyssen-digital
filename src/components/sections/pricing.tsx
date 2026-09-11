import { Check } from "lucide-react";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/container";
import {
  complementaryServices,
  maintenancePlans,
  positioningItems,
  websiteOffers,
} from "@/lib/pricing";

type Offer = {
  name: string;
  price: string;
  description: string;
  details: string[];
};

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="rounded-md border border-border p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-xl font-semibold text-foreground">{offer.name}</h3>
        <p className="whitespace-nowrap text-base font-medium text-accent">
          {offer.price}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {offer.description}
      </p>
      <div className="mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
        {offer.details.map((detail) => (
          <p
            className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
            key={detail}
          >
            <Check aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-accent" />
            {detail}
          </p>
        ))}
      </div>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className="border-b border-border pb-20 pt-16 sm:pb-24 lg:pb-28" id="tarifs">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-muted-foreground">
                Nos prestations
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl">
                Des solutions lisibles, sans perdre l&apos;exigence.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Chaque offre donne un cadre clair. Le niveau de finition, les options et
                l&apos;accompagnement sont ensuite ajustés au besoin réel du projet.
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid gap-5" staggerDelay={0.07}>
            {websiteOffers.map((offer) => (
              <StaggerItem key={offer.name}>
                <OfferCard offer={offer} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-muted-foreground">Maintenance</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl">
                Maintenez votre site à jour et performant.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Trois niveaux pour sécuriser, surveiller et faire évoluer votre présence
                digitale dans le temps.
              </p>
            </div>
          </FadeUp>

          <Stagger className="grid gap-5" staggerDelay={0.07}>
            {maintenancePlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <OfferCard
                  offer={{
                    name: plan.name,
                    price: plan.price,
                    description: plan.description,
                    details: plan.details.slice(0, 4),
                  }}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeUp>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                Prestations complémentaires sur devis.
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Pour les besoins spécifiques : refonte, SEO, outils métier,
                automatisation ou nouvelles fonctionnalités.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {complementaryServices.map((service) => (
                <li
                  className="bg-background px-5 py-4 text-sm text-muted-foreground"
                  key={service}
                >
                  {service}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp className="mt-16">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
            {positioningItems.map((item) => (
              <li className="text-sm text-subtle-foreground" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
}
