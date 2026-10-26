import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { PricingSection } from "@/components/sections/pricing";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { JsonLd } from "@/components/seo/json-ld";
import { pricingPage } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs création site internet dès 990 € | Thyssen Digital",
  description:
    "Tarifs clairs pour votre site internet : site Essentiel dès 990 €, site vitrine 5 pages dès 1 490 €, sur-mesure dès 2 490 € et maintenance dès 349 €/an.",
  path: "/tarifs",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Tarifs", path: "/tarifs" },
        ])}
      />
      <SiteHeader />
      <main className="bg-background" id="contenu">
        <section
          className="relative isolate overflow-hidden border-b border-border bg-background-secondary"
          id="accueil"
        >
          <div
            aria-hidden="true"
            className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_80%_10%,black,transparent_60%)]"
          />
          <Container className="py-14 sm:py-20 lg:py-24">
            <nav aria-label="Fil d'Ariane">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link className="rounded-sm hover:text-primary hover:underline" href="/">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink">
                  Tarifs
                </li>
              </ol>
            </nav>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              {pricingPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              <NoBreakPlaces text={pricingPage.subtitle} />
            </p>
          </Container>
        </section>
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
