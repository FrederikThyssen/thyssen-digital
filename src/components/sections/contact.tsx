import { ArrowRight } from "lucide-react";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const fieldClassName =
  "min-h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground transition-colors duration-200 ease-standard placeholder:text-subtle-foreground hover:border-border-strong focus:border-accent-cyan focus:outline-none focus:ring-0";

export function ContactSection() {
  return (
    <section className="py-24 sm:py-28" id="contact">
      <Container className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <FadeUp>
          <SectionHeading
            description="Décrivez votre besoin, votre contexte et les premiers objectifs. Le formulaire est prêt visuellement et sera connecté dans une prochaine étape."
            eyebrow="Contact"
            title="Parlons de votre projet."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassPanel className="p-5 sm:p-6">
            <form aria-describedby="contact-status">
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
                    Le formulaire n&apos;est pas encore connecté.
                  </p>
                </StaggerItem>
                <StaggerItem className="flex justify-start">
                  <Button
                    disabled
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
