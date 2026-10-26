import { ArrowRight, Monitor, RefreshCw, Wrench, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
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
    <section
      className="relative isolate overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      id="services"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgb(34_211_238_/_0.13),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-28 top-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-6 h-96 w-96 rounded-full bg-accent-violet/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <Container className="relative">
        <Divider className="mb-8 opacity-70 sm:mb-10" variant="gradient" />
        <FadeUp>
          <SectionHeading
            className="relative"
            description={services.description}
            eyebrow={services.eyebrow}
            title={services.title}
          />
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {services.items.map((service) => {
            const Icon = serviceIcons[service.id];

            return (
              <StaggerItem key={service.title}>
                <Card
                  className="group relative flex h-full flex-col overflow-hidden border-white/10 bg-[linear-gradient(155deg,rgb(255_255_255_/_0.075),rgb(255_255_255_/_0.026)_48%,rgb(47_124_255_/_0.045))] shadow-[0_22px_80px_rgb(0_0_0_/_0.28)]"
                  interactive
                  variant="glass"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/55 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 size-32 rounded-full bg-accent-cyan/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-24 w-full translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgb(47_124_255_/_0.12),transparent_64%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <CardHeader className="relative">
                    <span className="inline-flex size-11 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan shadow-[0_0_28px_rgb(34_211_238_/_0.1)]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative flex flex-1 flex-col">
                    <CardDescription className="text-foreground/78">
                      {service.description}
                    </CardDescription>
                    <p className="mt-5 rounded-md border border-white/10 bg-background/35 px-3 py-2 text-sm font-semibold leading-6 text-accent-cyan transition-colors duration-200 group-hover:border-accent-cyan/25">
                      {service.priceLabel}
                    </p>
                    <Link
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start rounded-md pt-4 text-sm font-semibold text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                      href="/tarifs"
                    >
                      {services.linkLabel}
                      <span className="sr-only"> : {service.title}</span>
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeUp className="mt-8">
          <p className="text-center text-base leading-7 text-foreground/78">
            {services.specificNeed}{" "}
            <a
              className="inline-flex min-h-11 items-center rounded-md font-semibold text-accent-cyan underline underline-offset-4 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href="#contact"
            >
              {services.specificNeedCta}
            </a>
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
