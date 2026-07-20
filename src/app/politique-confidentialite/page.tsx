import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND_NAME, CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Thyssen Digital et informations sur le traitement des messages de contact.",
  alternates: {
    canonical: `${SITE_URL}/politique-confidentialite`,
  },
  openGraph: {
    title: `Politique de confidentialité | ${BRAND_NAME}`,
    description:
      "Politique de confidentialité de Thyssen Digital et informations sur le traitement des messages de contact.",
    url: `${SITE_URL}/politique-confidentialite`,
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Politique de confidentialité | ${BRAND_NAME}`,
    description:
      "Politique de confidentialité de Thyssen Digital et informations sur le traitement des messages de contact.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32" id="contenu">
        <Container className="py-16">
          <SectionHeading
            description="Structure prête à personnaliser selon les outils réellement utilisés en production."
            eyebrow="Confidentialité"
            title="Politique de confidentialité"
          />
          <Divider className="my-10" variant="gradient" />
          <PrivacyContent />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

function PrivacyContent() {
  return (
    <div className="grid max-w-3xl gap-8 text-sm leading-7 text-muted-foreground">
      <PrivacyBlock title="Données collectées">
        <p>
          Le formulaire de contact peut collecter le nom, l&apos;adresse email, le
          nom de l&apos;entreprise, une indication de budget et le message transmis.
          Ces informations servent uniquement à répondre à la demande envoyée.
        </p>
      </PrivacyBlock>
      <PrivacyBlock title="Base et finalité du traitement">
        <p>
          Les données sont traitées afin de gérer les demandes entrantes,
          qualifier le besoin exprimé et reprendre contact avec la personne à
          l&apos;origine du message.
        </p>
      </PrivacyBlock>
      <PrivacyBlock title="Durée de conservation">
        <p>
          Les messages peuvent être conservés le temps nécessaire au suivi de la
          relation commerciale ou à l&apos;analyse du besoin. Une durée définitive
          devra être fixée selon l&apos;organisation retenue.
        </p>
      </PrivacyBlock>
      <PrivacyBlock title="Services tiers">
        <p>
          L&apos;envoi des messages peut s&apos;appuyer sur un prestataire d&apos;emailing
          transactionnel compatible avec Next.js, configuré via variables
          d&apos;environnement. Les outils effectivement utilisés devront être listés
          avant la mise en production.
        </p>
      </PrivacyBlock>
      <PrivacyBlock title="Droits des personnes">
        <p>
          Pour toute demande d&apos;accès, de rectification ou de suppression des
          informations transmises, contactez{" "}
          <a
            className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </PrivacyBlock>
      <PrivacyBlock title="Cookies et mesure d&apos;audience">
        <p>
          Aucun outil de mesure d&apos;audience n&apos;est documenté à ce stade. Si un
          outil est ajouté, cette page devra préciser les cookies utilisés et les
          choix disponibles pour les visiteurs.
        </p>
      </PrivacyBlock>
    </div>
  );
}

function PrivacyBlock({
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
