import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/site";

const processContent = home.process;

export function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="processus">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="center"
        size="lg"
        tone="cyan"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading
            description={processContent.description}
            eyebrow={processContent.eyebrow}
            title={processContent.title}
          />
        </FadeUp>

        <FadeUp className="mt-12 hidden lg:block">
          <div className="relative h-px bg-gradient-to-r from-primary/0 via-accent-cyan/55 to-accent-violet/0">
            <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_28px_rgb(34_211_238_/_0.65)]" />
          </div>
        </FadeUp>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processContent.steps.map((step) => (
            <StaggerItem key={step.number}>
              <Card
                className="h-full border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.045),rgb(255_255_255_/_0.018))] shadow-[0_18px_70px_rgb(0_0_0_/_0.22)] backdrop-blur-md"
                interactive
                variant="outline"
              >
                <CardContent className="p-5">
                  <Badge aria-hidden="true" className="border-accent-cyan/30 bg-primary/10 text-accent-cyan" variant="outline">
                    {step.number}
                  </Badge>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/78">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
