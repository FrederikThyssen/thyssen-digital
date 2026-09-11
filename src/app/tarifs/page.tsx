import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { PricingSection } from "@/components/sections/pricing";
import { Container } from "@/components/ui/container";
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
      <main className="bg-background" id="contenu">
        <section
          className="relative isolate overflow-hidden border-b border-border pb-20 pt-36 lg:pt-44"
          id="accueil"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 size-full object-cover opacity-[0.14] grayscale"
            fill
            priority
            sizes="100vw"
            src="/images/hero-definitif.png"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/70" />
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tarifs Thyssen Digital
                </p>
                <h1 className="mt-5 text-[clamp(2.5rem,6.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground">
                  Tarifs clairs.{" "}
                  <span className="text-muted-foreground">Sans surprise.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
                  Des offres pensées pour lancer, renforcer ou maintenir une présence
                  digitale professionnelle, sans promesses inutiles ni complexité cachée.
                </p>
              </div>

              <div className="rounded-md border border-border p-6 lg:p-8">
                <p className="text-2xl font-semibold text-foreground">Site Vitrine</p>
                <p className="mt-2 text-base font-medium text-accent">
                  À partir de 1 490 €
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Design sur mesure, responsive, SEO de base et jusqu&apos;à 10 pages.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
                  {["Web", "Mobile", "SEO"].map((item) => (
                    <li className="text-sm text-muted-foreground" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
