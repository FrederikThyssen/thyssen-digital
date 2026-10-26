import { Euro, KeyRound, Phone, Smartphone, type LucideIcon } from "lucide-react";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
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
    <section className="relative isolate overflow-hidden py-16 sm:py-20" id="pourquoi-moi">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="center"
        size="lg"
        tone="cyan"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading eyebrow={reassurance.eyebrow} title={reassurance.title} />
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
          {reassurance.items.map((item) => {
            const Icon = reassuranceIcons[item.id];

            return (
              <StaggerItem key={item.id}>
                <Card
                  className="group h-full overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.05),rgb(255_255_255_/_0.02))] shadow-[0_18px_70px_rgb(0_0_0_/_0.22)]"
                  interactive
                  variant="glass"
                >
                  <CardContent className="relative p-5">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <span className="inline-flex size-10 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold leading-7 text-foreground">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
