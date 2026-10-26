import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { PricingSection } from "@/components/sections/pricing";
import { Container } from "@/components/ui/container";
import { pricingPage } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs des prestations",
  description:
    "Tarifs Thyssen Digital pour la création de sites internet, les prestations complémentaires et les contrats de maintenance.",
  alternates: {
    canonical: `${SITE_URL}/tarifs`,
  },
  openGraph: {
    title: "Tarifs des prestations | Thyssen Digital",
    description:
      "Offres site essentiel, site vitrine, site sur-mesure et contrats de maintenance Thyssen Digital.",
    url: `${SITE_URL}/tarifs`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs des prestations | Thyssen Digital",
    description:
      "Offres site essentiel, site vitrine, site sur-mesure et contrats de maintenance Thyssen Digital.",
  },
};

export default function PricingPage() {
  return (
    <>
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
            priority
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
