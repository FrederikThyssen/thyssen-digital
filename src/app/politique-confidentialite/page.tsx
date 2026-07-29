import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32" id="contenu">
        <Container className="py-16">
          <SectionHeading
            description="Informations sur la collecte, l'utilisation et la protection des données personnelles."
            eyebrow="Confidentialité"
            title="Politique de confidentialité"
          />
          <Divider className="my-10" variant="gradient" />
          <div className="max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Données collectées</h2>
              <p>
                Les données transmises via le site se limitent aux informations que
                vous choisissez de communiquer lors d&apos;une prise de contact : nom,
                adresse email, entreprise, budget indicatif et contenu du message.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Finalité</h2>
              <p>
                Ces informations servent uniquement à comprendre votre demande,
                répondre à votre message et préparer un éventuel échange autour de
                votre projet digital.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Conservation</h2>
              <p>
                Les messages reçus sont conservés le temps nécessaire au traitement de
                la demande et au suivi de la relation professionnelle, sauf demande de
                suppression de votre part.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Partage des données</h2>
              <p>
                Les données personnelles ne sont ni vendues ni transmises à des tiers
                à des fins commerciales. Elles peuvent uniquement être traitées par les
                services techniques nécessaires au fonctionnement du site et de la
                messagerie.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Vos droits</h2>
              <p>
                Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos
                données personnelles en écrivant à{" "}
              <a
                className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
