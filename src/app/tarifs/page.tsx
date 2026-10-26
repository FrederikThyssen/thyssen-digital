import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { PricingSection } from "@/components/sections/pricing";
import { Container } from "@/components/ui/container";
import { pricingPage } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
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
      <main
        className="relative overflow-hidden bg-[#050712]"
        id="contenu"
      >
        <section
          className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 lg:pt-40"
          id="accueil"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 size-full object-cover opacity-55"
            fill
            sizes="100vw"
            src="/images/hero-definitif.png"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(5_7_18_/_0.96)_0%,rgb(5_7_18_/_0.78)_44%,rgb(5_7_18_/_0.44)_100%),linear-gradient(180deg,rgb(5_7_18_/_0.28)_0%,rgb(5_7_18_/_0.88)_100%)]"
          />
          <Container className="relative">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-cyan">
                {pricingPage.eyebrow}
              </p>
              <h1 className="mt-6 text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[1] tracking-[-0.04em] text-foreground">
                {pricingPage.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/84 sm:text-lg">
                {pricingPage.subtitle}
              </p>
            </div>
          </Container>
        </section>
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
