import { ChevronDown } from "lucide-react";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";

const questions = [
  {
    question: "Combien coûte un site internet avec Thyssen Digital ?",
    answer:
      "Les tarifs démarrent à 990 € pour un site one page et évoluent selon vos besoins (vitrine, fonctionnalités avancées, développement sur mesure). Un devis précis est établi après un échange sur votre projet.",
  },
  {
    question: "Qui est propriétaire du site une fois livré ?",
    answer:
      "Vous. Le code, le nom de domaine et l'hébergement restent entièrement sous votre contrôle, sans dépendance imposée envers Thyssen Digital.",
  },
  {
    question: "Mon site sera-t-il bien référencé sur Google ?",
    answer:
      "Oui. Chaque site est construit avec les fondamentaux SEO dès le départ (structure, performance, balisage), avec un accompagnement SEO plus poussé possible en complément.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Un site one page ou vitrine peut être livré en quelques semaines. Une application métier ou un projet plus complexe demande une phase de cadrage préalable pour sécuriser les délais.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Un contrat de maintenance (mises à jour, sauvegardes, sécurité, assistance) prend le relais pour garder votre site fiable et à jour, sans que vous ayez à vous en soucier.",
  },
  {
    question: "Puis-je faire évoluer mon site plus tard ?",
    answer:
      "Oui. Chaque projet est pensé pour rester évolutif : nouvelles pages, fonctionnalités ou intégrations s'ajoutent progressivement, sans tout reconstruire.",
  },
];

export function FaqSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="faq">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="top-left"
        size="lg"
        tone="violet"
      />
      <Container className="relative">
        <Divider className="mb-10 opacity-70 sm:mb-12" variant="gradient" />
        <FadeUp>
          <SectionHeading
            description="Les bases à clarifier avant de lancer un projet digital ambitieux."
            eyebrow="FAQ"
            title="Questions fréquentes."
          />
        </FadeUp>

        <Stagger className="mt-10 grid gap-3">
          {questions.map((item) => (
            <StaggerItem key={item.question}>
              <details className="group rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.052),rgb(255_255_255_/_0.024))] shadow-[0_18px_70px_rgb(0_0_0_/_0.2)] backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-200 ease-standard open:border-accent-cyan/30 open:bg-surface-elevated open:shadow-[0_20px_80px_rgb(19_80_255_/_0.1)] hover:-translate-y-0.5 motion-reduce:transform-none">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-5 text-left text-base font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan">
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-accent-cyan transition-transform duration-200 ease-standard group-open:rotate-180"
                  />
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-standard group-open:grid-rows-[1fr] motion-reduce:transition-none">
                  <div className="overflow-hidden px-5">
                    <p className="max-w-3xl pb-5 pt-0 text-sm leading-7 text-muted-foreground">
                    {item.answer}
                    </p>
                  </div>
                </div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
