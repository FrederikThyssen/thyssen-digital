import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32" id="contenu">
        <Container className="py-16">
          <SectionHeading
            description="Informations relatives à l'édition, l'hébergement et l'utilisation du site Thyssen Digital."
            eyebrow="Informations légales"
            title="Mentions légales"
          />
          <Divider className="my-10" variant="gradient" />
          <div className="max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Éditeur du site</h2>
              <p>
                Le site Thyssen Digital est édité par Frédérik Thyssen, développeur
                fullstack freelance, responsable de la publication et du contenu
                présenté sur ce site.
              </p>
              <p>
                Contact :{" "}
                <a
                  className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Hébergement</h2>
              <p>
                Le site est hébergé par Vercel Inc., plateforme d&apos;hébergement web et
                de déploiement d&apos;applications, dont le siège est situé à San Francisco,
                États-Unis.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
              <p>
                Les textes, visuels, interfaces, logos et éléments graphiques présents
                sur ce site sont protégés. Toute reproduction ou réutilisation sans
                autorisation écrite préalable est interdite.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Responsabilité</h2>
              <p>
                Thyssen Digital met en oeuvre les moyens nécessaires pour assurer
                l&apos;exactitude des informations publiées. Le contenu peut toutefois
                évoluer afin de refléter les services, projets et informations
                professionnelles les plus récents.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>
                Pour toute demande relative au site ou à son contenu, écrivez à{" "}
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
