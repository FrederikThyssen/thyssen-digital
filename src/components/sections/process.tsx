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
          highlight={processContent.titleHighlight}
          title={processContent.title}
        />

        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-border lg:block"
          />
          <span
            aria-hidden="true"
            className="progress-fill absolute left-6 top-[1.45rem] hidden h-[3px] w-[calc(100%-3rem)] rounded-full bg-[linear-gradient(90deg,#1350ff,#00e5ff,#7d2cff)] lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {processContent.steps.map((step) => (
              <li className="reveal relative flex gap-5 lg:block" key={step.number}>
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1350ff,#7d2cff)] font-display text-base font-semibold text-white shadow-glow"
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
