import type { Metadata } from "next";
import { Phone } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[80svh] items-center pb-16 pt-36" id="contenu">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            Erreur 404
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Page introuvable</h1>
          <p className="mt-4 text-base leading-7 text-foreground/80">
            La page demandée n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil, ou
            appelez-moi directement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Revenir à l&apos;accueil
            </Button>
            <Button
              href={business.phoneHref}
              leadingIcon={<Phone aria-hidden="true" className="size-4 text-accent-cyan" />}
              size="lg"
              variant="secondary"
            >
              Appeler le {business.phoneDisplay}
            </Button>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
