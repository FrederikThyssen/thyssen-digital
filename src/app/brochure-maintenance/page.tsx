import {
  ArrowRight,
  Check,
  Gauge,
  Handshake,
  LifeBuoy,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { CONTACT_EMAIL } from "@/lib/constants";
import { complementaryServices, maintenancePlans, websiteOffers } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const coverSignals = [
  { label: "Sécurité", icon: ShieldCheck },
  { label: "Performance", icon: Gauge },
  { label: "Évolution", icon: RefreshCw },
  { label: "Accompagnement", icon: LifeBuoy },
];

const maintenanceReasons = [
  {
    value: "01",
    title: "Prévenir",
    text: "Sécurité, sauvegardes et mises à jour suivies avant que les problèmes deviennent visibles.",
  },
  {
    value: "02",
    title: "Stabiliser",
    text: "Un site propre, rapide et surveillé reste crédible à chaque visite.",
  },
  {
    value: "03",
    title: "Faire évoluer",
    text: "Votre présence digitale s'adapte à l'activité, aux usages et aux nouvelles idées.",
  },
];

const operatingLayers = [
  { label: "Surveillance", icon: ShieldCheck },
  { label: "Sauvegardes", icon: LockKeyhole },
  { label: "Optimisation", icon: Gauge },
  { label: "Support", icon: Handshake },
];

const conclusionArguments = [
  "Image premium",
  "Accompagnement humain",
  "Développement sur mesure",
  "Tarifs accessibles",
  "Maintenance durable",
  "Pas de promesses inutiles",
];

export default function MaintenanceBrochurePage() {
  return (
    <main className="brochure-root">
      <CoverPage />
      <WhyPage />
      <MaintenanceValuePage />
      <MaintenancePlansPage />
      <WebsiteOffersPage />
      <ConclusionPage />
    </main>
  );
}

function CoverPage() {
  return (
    <BrochurePage image="/images/brochure/space-bg.jpg" page="01 / 06" variant="cover">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <BrandLogo decorative imageClassName="h-20" tone="accent" variant="horizontal" />
          <div className="text-right">
            <p className="brochure-page-index">01 / 06</p>
            <p className="brochure-edition">Brochure commerciale</p>
          </div>
        </div>

        <div className="max-w-[33rem]">
          <p className="brochure-kicker">Thyssen Digital</p>
          <h1 className="brochure-hero-title">
            Maintenance
            <span>& accompagnement</span>
          </h1>
          <div className="brochure-cover-line" />
          <p className="brochure-lead mt-7">
            Des solutions durables pour garantir la performance, la sécurité et
            l&apos;évolution de votre présence numérique.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-4">
            {coverSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div className="brochure-signal" key={signal.label}>
                  <Icon className="size-6" />
                  <span>{signal.label}</span>
                </div>
              );
            })}
          </div>
          <p className="brochure-signature mt-10">
            Concevoir. Développer. Performer.
          </p>
        </div>
      </div>
    </BrochurePage>
  );
}

function WhyPage() {
  return (
    <BrochurePage image="/images/brochure/hero-bg.jpg" page="02 / 06">
      <BrochureHeader page="02 / 06" />
      <div className="mt-10 grid grid-cols-[1.05fr_0.95fr] gap-12">
        <div>
          <p className="brochure-kicker">Pourquoi ?</p>
          <h2 className="brochure-title">
            Un site web doit rester vivant.
          </h2>
          <p className="brochure-lead mt-8">
            C&apos;est un outil vivant. Il doit rester rapide, sécurisé, clair et
            capable d&apos;évoluer avec votre entreprise.
          </p>
        </div>

        <div className="brochure-focus-card">
          <p className="text-[5.8rem] font-black leading-none text-white">99,9%</p>
          <p className="mt-3 text-xl font-semibold text-accent-cyan">
            disponibilité visée
          </p>
          <p className="mt-8 text-lg leading-8 text-white/76">
            La maintenance réduit les risques invisibles : failles, lenteurs,
            sauvegardes absentes et dépendances obsolètes.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4">
        {maintenanceReasons.map((reason) => (
          <div className="brochure-rhythm-row" key={reason.value}>
            <span>{reason.value}</span>
            <strong>{reason.title}</strong>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </BrochurePage>
  );
}

function MaintenanceValuePage() {
  return (
    <BrochurePage image="/images/brochure/space-bg.jpg" page="03 / 06">
      <BrochureHeader page="03 / 06" />
      <div className="mt-12 max-w-[43rem]">
        <p className="brochure-kicker">Ce que la maintenance apporte</p>
        <h2 className="brochure-title">
          Une présence digitale plus stable, plus rapide, plus sûre.
        </h2>
      </div>

      <div className="brochure-orchestration mt-16">
        <div className="brochure-orchestration-core">
          <p>Maintenance active</p>
          <strong>360°</strong>
        </div>

        {operatingLayers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <div className="brochure-orchestration-layer" key={layer.label}>
              <span>0{index + 1}</span>
              <Icon className="size-8 text-accent-cyan" />
              <strong>{layer.label}</strong>
            </div>
          );
        })}
      </div>

      <div className="brochure-quote-panel">
        <p>
          Un site entretenu n&apos;est pas seulement plus sécurisé. Il inspire plus
          confiance, convertit mieux et reste prêt pour les prochaines étapes.
        </p>
      </div>
    </BrochurePage>
  );
}

function MaintenancePlansPage() {
  return (
    <BrochurePage image="/images/brochure/hero-bg.jpg" page="04 / 06">
      <BrochureHeader page="04 / 06" />
      <div className="mt-12 grid grid-cols-[0.85fr_1.15fr] gap-10">
        <div>
          <p className="brochure-kicker">Contrats de maintenance</p>
          <h2 className="brochure-title">Trois niveaux. Une même exigence.</h2>
          <p className="brochure-lead mt-7">
            Le forfait Confort est recommandé : il offre le meilleur équilibre
            entre suivi, sécurité et accompagnement.
          </p>
        </div>

        <div className="grid gap-4">
          {maintenancePlans.map((plan) => (
            <PlanStrip key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      <div className="brochure-comparison-note">
        <p>
          Les frais réels d&apos;hébergement et de nom de domaine ne sont pas inclus.
          Thyssen Digital peut gérer l&apos;administratif selon le forfait choisi.
        </p>
      </div>
    </BrochurePage>
  );
}

function PlanStrip({ plan }: { plan: (typeof maintenancePlans)[number] }) {
  return (
    <article
      className={cn(
        "brochure-plan-strip",
        plan.featured && "brochure-plan-strip-featured",
      )}
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-cyan">
          {plan.featured ? "Recommandé" : plan.tone}
        </p>
        <h3>{plan.name}</h3>
      </div>
      <p className="brochure-price">{plan.price}</p>
      {plan.featured ? (
        <p className="brochure-plan-caption">
          Meilleur équilibre pour rester serein toute l&apos;année.
        </p>
      ) : null}
      <ul>
        {plan.details.slice(0, 3).map((detail) => (
          <li key={detail}>
            <Check className="size-4" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}

function WebsiteOffersPage() {
  return (
    <BrochurePage image="/images/brochure/space-bg.jpg" page="05 / 06">
      <BrochureHeader page="05 / 06" />
      <div className="mt-12">
        <p className="brochure-kicker">Création de sites internet</p>
        <h2 className="brochure-title brochure-title-compact max-w-[44rem]">
          Des offres claires pour créer une image sérieuse.
        </h2>
      </div>

      <div className="mt-10 grid gap-4">
        {websiteOffers.map((offer, index) => (
          <article
            className={cn(
              "brochure-website-offer",
              offer.featured && "brochure-website-offer-featured",
            )}
            key={offer.name}
          >
            <span>0{index + 1}</span>
            <h3>{offer.name}</h3>
            <p className="brochure-price">{offer.price}</p>
            <p>{offer.description}</p>
          </article>
        ))}
      </div>

      <div className="brochure-services-cloud">
        <div>
          <p className="brochure-kicker">Sur devis</p>
          <h3>Prestations complémentaires</h3>
        </div>
        <div>
          {complementaryServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </BrochurePage>
  );
}

function ConclusionPage() {
  return (
    <BrochurePage image="/images/brochure/hero-bg.jpg" page="06 / 06">
      <div className="flex h-full flex-col justify-between">
        <BrochureHeader page="06 / 06" />

        <div>
          <p className="brochure-kicker">Travailler ensemble</p>
          <h2 className="brochure-final-title">
            Votre image digitale mérite le même soin que votre savoir-faire.
          </h2>
          <p className="brochure-lead mt-8 max-w-[36rem]">
            Thyssen Digital accompagne les artisans, indépendants, TPE et PME avec
            des solutions belles, fiables et utiles.
          </p>
        </div>

        <div className="brochure-final-grid">
          {conclusionArguments.map((argument) => (
            <div key={argument}>
              <Check className="size-5" />
              <span>{argument}</span>
            </div>
          ))}
        </div>

        <div className="brochure-cta-panel">
          <div>
            <p className="brochure-kicker">Contact</p>
            <h3>Parlons de votre projet.</h3>
            <p className="brochure-contact-email">{CONTACT_EMAIL}</p>
            <span>Un échange simple pour cadrer vos besoins et définir la bonne solution.</span>
          </div>
          <div className="brochure-cta-arrow">
            <ArrowRight className="size-10" />
          </div>
        </div>

        <p className="brochure-signature text-left">
          Concevoir. Développer. Performer.
        </p>
      </div>
    </BrochurePage>
  );
}

function BrochurePage({
  children,
  image,
  page,
  variant,
}: {
  children: ReactNode;
  image: string;
  page: string;
  variant?: "cover";
}) {
  return (
    <section
      aria-label={`Brochure Thyssen Digital page ${page}`}
      className={cn("brochure-page", variant === "cover" && "brochure-cover")}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="brochure-background"
        fill
        priority={variant === "cover"}
        sizes="210mm"
        src={image}
        unoptimized
      />
      <div className="brochure-vignette" />
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}

function BrochureHeader({ page }: { page: string }) {
  return (
    <header className="flex items-center justify-between">
      <BrandLogo decorative imageClassName="h-12" tone="accent" variant="horizontal" />
      <div className="mx-8 h-px flex-1 bg-gradient-to-r from-accent-cyan/55 to-accent-violet/20" />
      <p className="brochure-page-index">{page}</p>
    </header>
  );
}
