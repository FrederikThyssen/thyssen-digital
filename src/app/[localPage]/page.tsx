import type { Metadata } from "next";
import { ArrowRight, Check, MapPin, Monitor, Phone, RefreshCw, Wrench, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  business,
  home,
  localPages,
  localPagesSection,
  type HomeService,
  type LocalPage,
} from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, localServiceJsonLd } from "@/lib/structured-data";

// Only the cities listed in src/content/site.ts exist; any other path is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return localPages.map((page) => ({ localPage: page.slug }));
}

function findPage(slug: string): LocalPage | undefined {
  return localPages.find((page) => page.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/[localPage]">): Promise<Metadata> {
  const page = findPage((await params).localPage);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    useRootShareImage: true,
  });
}

const serviceIcons: Record<HomeService["id"], LucideIcon> = {
  vitrine: Monitor,
  refonte: RefreshCw,
  maintenance: Wrench,
};

export default async function LocalLandingPage({ params }: PageProps<"/[localPage]">) {
  const page = findPage((await params).localPage);

  if (!page) {
    notFound();
  }

  const [before, after] = page.title.split(page.titleHighlight);

  return (
    <>
      <JsonLd data={localServiceJsonLd(page)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: page.title, path: `/${page.slug}` },
        ])}
      />
      <SiteHeader />
      <main className="bg-background" id="contenu">
        <section className="relative isolate overflow-hidden border-b border-border bg-background-secondary" id="accueil">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <span className="aurora -right-[8%] -top-[30%] h-[30rem] w-[30rem] bg-[#1350ff]/25" />
            <span className="aurora -left-[10%] bottom-[-40%] h-[26rem] w-[26rem] bg-[#7d2cff]/20 [animation-delay:-8s]" />
            <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_10%,black,transparent_60%)]" />
          </div>
          <Container className="py-14 sm:py-20 lg:py-24">
            <nav aria-label="Fil d'Ariane">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link className="rounded-sm hover:text-primary hover:underline" href="/">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink">
                  {page.city}
                </li>
              </ol>
            </nav>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-medium text-muted-foreground shadow-soft">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              {page.city}, {page.department}
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              {after === undefined ? (
                page.title
              ) : (
                <>
                  {before}
                  <span className="accent-serif">{page.titleHighlight}</span>
                  {after}
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              <NoBreakPlaces text={page.intro} />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#contact"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
              >
                {home.hero.primaryCta}
              </Button>
              <Button
                href={business.phoneHref}
                leadingIcon={<Phone aria-hidden="true" className="size-5 text-primary" />}
                size="lg"
                variant="secondary"
              >
                {home.hero.secondaryCta}
              </Button>
            </div>
          </Container>
        </section>

        <Section>
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div className="reveal">
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
                {page.audienceTitle}
              </h2>
              <ul className="mt-8 grid gap-4">
                {page.audience.map((item) => (
                  <li className="flex gap-3 text-base leading-7 text-ink" key={item}>
                    <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check aria-hidden="true" className="size-4" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-3xl border border-border bg-white p-7 shadow-card sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-ink">
                <NoBreakPlaces text={page.localTitle} />
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                <NoBreakPlaces text={page.localText} />
              </p>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                {page.nearbyTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {page.nearby.map((place) => (
                  <li
                    className="rounded-full border border-border bg-surface-subtle px-3 py-1 text-sm font-medium text-ink"
                    key={place}
                  >
                    <NoBreakPlaces text={place} />
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section tone="soft">
          <Container>
            <SectionHeading
              description={home.services.description}
              eyebrow={page.city}
              title={localPagesSection.servicesTitle}
            />
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {home.services.items.map((service) => {
                const Icon = serviceIcons[service.id];

                return (
                  <li className="reveal" key={service.id}>
                    <Card className="card-glow flex h-full flex-col p-7" interactive>
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Icon aria-hidden="true" className="size-6" />
                      </span>
                      <h3 className="mt-6 font-display text-xl font-semibold text-ink">{service.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">
                        {service.description}
                      </p>
                      <p className="mt-6 font-display text-lg font-semibold text-ink">{service.priceLabel}</p>
                    </Card>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-center">
              <Link
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
                href="/tarifs"
              >
                {home.services.linkLabel}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </p>
          </Container>
        </Section>

        <Section>
          <Container className="max-w-4xl">
            <SectionHeading eyebrow={page.city} title={localPagesSection.faqTitle} />
            <ul className="mt-10 grid gap-3">
              {page.faq.map((item) => (
                <li className="reveal rounded-2xl border border-border bg-white p-6 shadow-soft" key={item.question}>
                  <h3 className="font-display text-lg font-semibold text-ink">{item.question}</h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">{item.answer}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <FinalCtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
