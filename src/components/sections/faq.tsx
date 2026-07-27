import { ChevronDown } from "lucide-react";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";

const questions = [
  {
    question: "Pourquoi choisir Thyssen Digital ?",
    answer:
      "Pour une approche senior, sobre et orientée résultat: design, développement et performance sont pensés ensemble dès le départ.",
  },
  {
    question: "Quels délais ?",
    answer:
      "Les délais dépendent du périmètre. Un site vitrine peut avancer rapidement, tandis qu'une application métier demande une phase de cadrage plus approfondie.",
  },
  {
    question: "Travaillez-vous avec les PME ?",
    answer:
      "Oui. Les projets sont construits pour des entreprises qui veulent une présence digitale fiable, claire et capable d'évoluer.",
  },
  {
    question: "Assurez-vous la maintenance ?",
    answer:
      "Oui. La maintenance peut couvrir les corrections, l'amélioration continue, la sécurité, la performance et les évolutions fonctionnelles.",
  },
  {
    question: "Puis-je faire évoluer mon projet plus tard ?",
    answer:
      "Oui. L'architecture est pensée pour rester maintenable afin d'ajouter progressivement de nouvelles pages, fonctionnalités ou intégrations.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 sm:py-28" id="faq">
      <Container>
        <Divider className="mb-16" variant="gradient" />
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
              <details className="group rounded-lg border border-border bg-surface-glass shadow-soft backdrop-blur-md transition-colors duration-200 ease-standard open:border-border-strong open:bg-surface-elevated">
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
