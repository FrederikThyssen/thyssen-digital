import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND_NAME, CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Thyssen Digital, studio digital indépendant.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  openGraph: {
    title: `Mentions légales | ${BRAND_NAME}`,
    description:
      "Mentions légales de Thyssen Digital, studio digital indépendant.",
    url: `${SITE_URL}/mentions-legales`,
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Mentions légales | ${BRAND_NAME}`,
    description:
      "Mentions légales de Thyssen Digital, studio digital indépendant.",
  },
};

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32" id="contenu">
        <Container className="py-16">
          <SectionHeading
            description="Structure professionnelle prête à personnaliser avant la mise en production publique."
            eyebrow="Informations légales"
            title="Mentions légales"
          />
          <Divider className="my-10" variant="gradient" />
          <LegalContent />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

function LegalContent() {
  return (
    <div className="grid max-w-3xl gap-8 text-sm leading-7 text-muted-foreground">
      <LegalBlock title="Éditeur du site">
        <p>
          Le site {BRAND_NAME} est édité par Frédérik Thyssen. Les informations
          administratives définitives, notamment le statut juridique, l&apos;adresse
          professionnelle et le numéro d&apos;identification, devront être complétées
          avant publication officielle.
        </p>
      </LegalBlock>
      <LegalBlock title="Contact">
        <p>
          Pour toute demande concernant le site ou une prestation :{" "}
          <a
            className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalBlock>
      <LegalBlock title="Hébergement">
        <p>
          Les informations d&apos;hébergement doivent être précisées selon la
          plateforme retenue pour la mise en production du site.
        </p>
      </LegalBlock>
      <LegalBlock title="Propriété intellectuelle">
        <p>
          Les contenus, textes, éléments graphiques, composants d&apos;interface et
          assets de marque présents sur ce site sont destinés à présenter
          Thyssen Digital. Toute réutilisation doit faire l&apos;objet d&apos;une
          autorisation préalable.
        </p>
      </LegalBlock>
      <LegalBlock title="Responsabilité">
        <p>
          Les informations publiées sur ce site sont fournies à titre de
          présentation. Elles peuvent être ajustées ou complétées afin de
          refléter l&apos;évolution des services, projets et informations légales.
        </p>
      </LegalBlock>
    </div>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
