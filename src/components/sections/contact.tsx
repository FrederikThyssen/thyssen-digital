import { ArrowRight } from "lucide-react";

import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_EMAIL } from "@/lib/constants";

const fieldClassName =
  "min-h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground transition-colors duration-200 ease-standard placeholder:text-subtle-foreground hover:border-border-strong focus:border-accent-cyan focus:outline-none focus:ring-0";

export function ContactSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="contact">
      <BackgroundGrid className="opacity-[0.032]" />
      <NoiseOverlay />
      <BackgroundGlow
        className="hidden lg:block"
        intensity="medium"
        position="bottom-right"
        size="lg"
        tone="blue"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgb(19_80_255_/_0.045))]"
      />
      <Container className="relative grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <FadeUp>
          <div>
            <SectionHeading
              description="Décrivez votre besoin, votre contexte et vos premiers objectifs. Je vous réponds avec une première lecture claire des enjeux et des prochaines étapes possibles."
              eyebrow="Contact"
              title="Parlons de votre projet."
            />
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
              {["Premier retour clair", "Cadrage sans engagement", "Approche design + technique"].map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassPanel className="relative overflow-hidden border-white/12 p-5 shadow-[0_28px_100px_rgb(0_0_0_/_0.32)] sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"
            />
            <form
              action={`mailto:${CONTACT_EMAIL}`}
              aria-describedby="contact-status"
              encType="text/plain"
              method="post"
            >
              <Stagger className="grid gap-4">
                <StaggerItem className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom" name="name" placeholder="Votre nom" required />
                  <Field
                    label="Email"
                    name="email"
                    placeholder="vous@entreprise.com"
                    required
                    type="email"
                  />
                </StaggerItem>
                <StaggerItem className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Entreprise (optionnel)"
                    name="company"
                    placeholder="Nom de l'entreprise"
                  />
                  <Field
                    label="Budget (optionnel)"
                    name="budget"
                    placeholder="Budget estimé"
                  />
                </StaggerItem>
                <StaggerItem>
                  <label className="grid gap-2 text-sm font-medium text-foreground">
                    Message
                    <textarea
                      className={`${fieldClassName} min-h-36 resize-y py-3`}
                      name="message"
                      placeholder="Votre projet, vos délais, vos priorités..."
                      required
                    />
                  </label>
                </StaggerItem>
                <StaggerItem>
                  <p
                    className="text-sm leading-6 text-muted-foreground"
                    id="contact-status"
                  >
                    Votre message sera envoyé directement à {CONTACT_EMAIL}.
                  </p>
                </StaggerItem>
                <StaggerItem className="flex justify-start">
                  <Button
                    trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
                    type="submit"
                  >
                    Envoyer le message
                  </Button>
                </StaggerItem>
              </Stagger>
            </form>
          </GlassPanel>
        </FadeUp>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "text";
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground">
      {label}
      <input
        className={fieldClassName}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
