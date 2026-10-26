import { ArrowRight, Monitor, RefreshCw, Wrench, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home, type HomeService } from "@/content/site";

const { services } = home;

const serviceIcons: Record<HomeService["id"], LucideIcon> = {
  vitrine: Monitor,
  refonte: RefreshCw,
  maintenance: Wrench,
};

export function ServicesSection() {
  return (
    <Section id="services" tone="soft">
      <Container>
        <SectionHeading
          description={services.description}
          eyebrow={services.eyebrow}
          highlight={services.titleHighlight}
          title={services.title}
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {services.items.map((service) => {
            const Icon = serviceIcons[service.id];

            return (
              <li className="reveal" key={service.id}>
                <Card className="card-glow group flex h-full flex-col p-7" interactive>
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-[background,color,transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[linear-gradient(135deg,#1350ff,#7d2cff)] group-hover:text-white motion-reduce:transform-none">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-6 font-display text-lg font-semibold text-ink">{service.priceLabel}</p>
                  <Link
                    className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start rounded-md pt-5 text-sm font-semibold text-ink transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    href="/tarifs"
                  >
                    {services.linkLabel}
                    <span className="sr-only"> : {service.title}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    />
                  </Link>
                </Card>
              </li>
            );
          })}
        </ul>

        <p className="reveal mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-white px-6 py-5 text-center text-base leading-7 text-muted-foreground shadow-soft">
          {services.specificNeed}{" "}
          <a
            className="font-semibold text-primary underline underline-offset-4 transition-colors duration-200 hover:text-primary-hover"
            href="#contact"
          >
            {services.specificNeedCta}
          </a>
        </p>
      </Container>
    </Section>
  );
}
