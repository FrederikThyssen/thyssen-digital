import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/site";

const { about } = home;

export function AboutSection() {
  return (
    <Section id="a-propos" tone="soft">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div
            aria-hidden="true"
            className="mt-10 hidden size-40 items-center justify-center rounded-[2rem] border border-border bg-white shadow-card lg:flex"
          >
            <BrandLogo className="[&_svg]:h-16 [&_svg]:w-auto" decorative tone="light" variant="mark" />
          </div>
        </div>

        <figure className="relative rounded-3xl border border-border bg-white p-8 shadow-card sm:p-10">
          <span
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-[linear-gradient(90deg,#1350ff,#00e5ff,#7d2cff)] sm:inset-x-10"
          />
          <blockquote className="text-lg leading-8 text-ink sm:text-xl sm:leading-9">
            {about.text}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-surface-subtle lg:hidden">
              <BrandLogo className="[&_svg]:h-6 [&_svg]:w-auto" decorative tone="light" variant="mark" />
            </span>
            <span className="text-sm font-semibold text-ink">{about.signature}</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
