import { Euro, KeyRound, Phone, Smartphone, type LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home, type ReassuranceItem } from "@/content/site";

const { reassurance } = home;

const reassuranceIcons: Record<ReassuranceItem["id"], LucideIcon> = {
  contact: Phone,
  google: Smartphone,
  ownership: KeyRound,
  prices: Euro,
};

// "Pourquoi travailler avec moi" (remplace l'ancien bloc « Standards de production »).
export function StandardsSection() {
  return (
    <Section id="pourquoi-moi">
      <Container>
        <SectionHeading eyebrow={reassurance.eyebrow} title={reassurance.title} />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reassurance.items.map((item) => {
            const Icon = reassuranceIcons[item.id];

            return (
              <li className="bg-white p-7" key={item.id}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-7 text-ink">
                  {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
