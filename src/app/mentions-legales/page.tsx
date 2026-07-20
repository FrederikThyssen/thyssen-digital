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
            description="Page provisoire en attente des informations juridiques définitives."
            eyebrow="Informations légales"
            title="Mentions légales"
          />
          <Divider className="my-10" variant="gradient" />
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              Les mentions légales complètes seront ajoutées avant la mise en
              production publique du site.
            </p>
            <p>
              Contact provisoire :{" "}
              <a
                className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-accent-cyan"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
