import type { Metadata } from "next";

import { LegalPage, LegalSection, legalLinkClassName } from "@/components/layout/legal-page";
import { business, legal } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité | Thyssen Digital, sites web",
  description:
    "Données collectées par le formulaire de contact Thyssen Digital : finalité, base légale, durée de conservation, prestataires techniques et vos droits RGPD.",
  path: "/politique-confidentialite",
  useRootShareImage: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      description="Comment sont utilisées les informations que vous m'envoyez via le formulaire de contact."
      eyebrow="Confidentialité"
      title="Politique de confidentialité"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          {business.owner} ({business.name}), {legal.address}. Contact :{" "}
          <a className={legalLinkClassName} href={business.emailHref}>
            {business.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Uniquement les informations que vous saisissez dans le formulaire de contact : nom,
          adresse email, et si vous les indiquez, téléphone, entreprise, type de projet, budget
          indicatif, ainsi que le contenu de votre message.
        </p>
      </LegalSection>

      <LegalSection title="Finalité et base légale">
        <p>
          Ces données servent uniquement à répondre à votre demande et à préparer un devis. Ce
          traitement repose sur les mesures précontractuelles prises à votre demande (article 6.1.b
          du RGPD). Elles ne sont jamais vendues ni utilisées à des fins publicitaires.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>{legal.retention}</p>
      </LegalSection>

      <LegalSection title="Destinataires et prestataires">
        <p>
          Je suis le seul destinataire de vos messages. Deux prestataires techniques interviennent :{" "}
          {legal.host.name} pour l&apos;hébergement du site et {legal.emailProvider.name} pour
          l&apos;acheminement des emails du formulaire. Ils peuvent traiter les données hors de
          l&apos;Union européenne : {legal.transferSafeguards}
        </p>
      </LegalSection>

      <LegalSection title="Cookies et mesure d'audience">
        <p>
          Ce site ne dépose aucun cookie et n&apos;utilise aucun outil de suivi ni de mesure
          d&apos;audience. Si des avis Google sont affichés, les photos de profil de leurs auteurs
          sont chargées directement depuis les serveurs de Google.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez demander l&apos;accès, la rectification, l&apos;effacement ou la limitation de
          vos données, vous opposer à leur traitement ou demander leur portabilité, en écrivant à{" "}
          <a className={legalLinkClassName} href={business.emailHref}>
            {business.email}
          </a>
          . Je réponds dans un délai d&apos;un mois.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
          réclamation à la CNIL :{" "}
          <a
            className={legalLinkClassName}
            href="https://www.cnil.fr/fr/plaintes"
            rel="noopener noreferrer"
            target="_blank"
          >
            cnil.fr
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
