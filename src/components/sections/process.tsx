import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/site";

const processContent = home.process;

export function ProcessSection() {
  return (
    <Section id="processus">
      <Container>
        <SectionHeading
          description={processContent.description}
          eyebrow={processContent.eyebrow}
          title={processContent.title}
        />

        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-[linear-gradient(90deg,#1350ff,#00e5ff,#7d2cff)] opacity-40 lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {processContent.steps.map((step) => (
              <li className="relative flex gap-5 lg:block" key={step.number}>
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white font-display text-base font-semibold text-primary shadow-soft"
                >
                  {step.number}
                </span>
                <div className="lg:mt-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
