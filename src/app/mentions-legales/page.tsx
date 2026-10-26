import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection, legalLinkClassName } from "@/components/layout/legal-page";
import { business, legal } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Thyssen Digital : éditeur, statut, SIRET, directeur de la publication, hébergeur et propriété intellectuelle.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      description="Informations sur l'éditeur et l'hébergeur du site Thyssen Digital."
      eyebrow="Informations légales"
      title="Mentions légales"
    >
      <LegalSection title="Éditeur du site">
        <ul className="space-y-1">
          <li>
            {business.owner}, nom commercial {business.name}
          </li>
          <li>Statut : {legal.status}</li>
          <li>SIRET : {legal.siret}</li>
          <li>Adresse : {legal.address}</li>
          <li>
            Email :{" "}
            <a className={legalLinkClassName} href={business.emailHref}>
              {business.email}
            </a>
          </li>
          <li>
            Téléphone :{" "}
            <a className={legalLinkClassName} href={business.phoneHref}>
              {business.phoneDisplay}
            </a>
          </li>
          <li>{legal.vat}</li>
        </ul>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>{legal.publicationDirector}</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <ul className="space-y-1">
          <li>{legal.host.name}</li>
          <li>{legal.host.address}</li>
          <li>
            Site :{" "}
            <a
              className={legalLinkClassName}
              href={legal.host.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              {legal.host.website.replace("https://", "")}
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Les textes, visuels, logos et éléments graphiques de ce site sont protégés. Toute
          reproduction ou réutilisation sans autorisation écrite préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Je mets en œuvre les moyens nécessaires pour que les informations publiées soient
          exactes et à jour. Elles peuvent évoluer à tout moment, notamment les tarifs, qui sont
          confirmés dans chaque devis.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Le traitement des données envoyées via le formulaire de contact est décrit dans la{" "}
          <Link className={legalLinkClassName} href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
