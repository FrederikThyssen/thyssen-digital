import { Phone, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, faq, home } from "@/content/site";

export function FaqSection() {
  return (
    <Section id="faq" tone="soft">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            description={home.faq.description}
            eyebrow={home.faq.eyebrow}
            title={home.faq.title}
          />
          <Button
            className="mt-8"
            href={business.phoneHref}
            leadingIcon={<Phone aria-hidden="true" className="size-4 text-primary" />}
            variant="secondary"
          >
            {home.hero.secondaryCta}
          </Button>
        </div>

        <ul className="grid gap-3">
          {faq.map((item) => (
            <li key={item.question}>
              <details className="group rounded-2xl border border-border bg-white shadow-soft transition-[border-color,box-shadow] duration-200 open:border-primary/30 open:shadow-card">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[0.95rem] leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
