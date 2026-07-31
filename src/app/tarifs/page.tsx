import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact";
import { PricingSection } from "@/components/sections/pricing";
import { Button } from "@/components/ui/button";
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
      "Offres site one page, site vitrine, site premium et contrats de maintenance Thyssen Digital.",
    url: `${SITE_URL}/tarifs`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs des prestations | Thyssen Digital",
    description:
      "Offres site one page, site vitrine, site premium et contrats de maintenance Thyssen Digital.",
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
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent-cyan">
                  Tarifs Thyssen Digital
                </p>
                <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-foreground">
                  Tarifs clairs.
                  <span className="block bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-transparent">
                    Finition premium.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/76 sm:text-lg">
                  Des offres pensées pour lancer, renforcer ou maintenir une présence
                  digitale professionnelle, sans promesses inutiles ni complexité cachée.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="#tarifs">Voir les offres</Button>
                  <Button
                    href="/documents/brochure-maintenance-thyssen-digital.pdf"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    Télécharger la brochure
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-8 rounded-full bg-accent-cyan/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-background/55 p-7 shadow-[0_32px_120px_rgb(0_0_0_/_0.42)] backdrop-blur-md">
                  <div>
                    <p className="text-6xl font-semibold tracking-[-0.05em] text-foreground">
                      Site Vitrine
                    </p>
                    <p className="mt-4 bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-4xl font-semibold text-transparent">
                      À partir de 1 490 €
                    </p>
                    <p className="mt-6 max-w-md text-lg leading-8 text-foreground/68">
                      Design sur mesure, responsive, SEO de base et jusqu&apos;à 10 pages.
                    </p>
                  </div>
                  <div className="mt-24 grid grid-cols-3 gap-3 text-center">
                    {["Web", "Mobile", "SEO"].map((item) => (
                      <span
                        className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-foreground/78"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
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
