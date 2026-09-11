"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_EMAIL } from "@/lib/constants";

const fieldClassName =
  "min-h-12 w-full rounded-md border border-border bg-transparent px-4 text-sm text-foreground transition-colors duration-200 ease-standard placeholder:text-subtle-foreground hover:border-border-strong focus:border-accent focus:outline-none focus:ring-0";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Votre nom est requis."),
  email: z.string().trim().min(1, "Votre email est requis.").email("Email invalide."),
  company: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  message: z.string().trim().min(1, "Un message est requis."),
  website: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

type SubmitStatus = "idle" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-b border-border py-20 sm:py-24 lg:py-28" id="contact">
      <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <FadeUp>
          <div>
            <SectionHeading
              description="Décrivez votre besoin, votre contexte et vos premiers objectifs. Je vous réponds avec une première lecture claire des enjeux et des prochaines étapes possibles."
              eyebrow="Contact"
              title="Parlons de votre projet."
            />
            <ul className="mt-10 grid gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
              {["Premier retour clair", "Cadrage sans engagement", "Approche design + technique"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="rounded-md border border-border p-6 sm:p-8">
            <form aria-describedby="contact-status" onSubmit={handleSubmit(onSubmit)}>
              <input
                aria-hidden="true"
                className="sr-only"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
              <Stagger className="grid gap-4">
                <StaggerItem className="grid gap-4 sm:grid-cols-2">
                  <Field
                    error={errors.name?.message}
                    label="Nom"
                    placeholder="Votre nom"
                    required
                    {...register("name")}
                  />
                  <Field
                    error={errors.email?.message}
                    label="Email"
                    placeholder="vous@entreprise.com"
                    required
                    type="email"
                    {...register("email")}
                  />
                </StaggerItem>
                <StaggerItem className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Entreprise (optionnel)"
                    placeholder="Nom de l'entreprise"
                    {...register("company")}
                  />
                  <Field
                    label="Budget (optionnel)"
                    placeholder="Budget estimé"
                    {...register("budget")}
                  />
                </StaggerItem>
                <StaggerItem>
                  <label className="grid gap-2 text-sm font-medium text-foreground">
                    Message
                    <textarea
                      className={`${fieldClassName} min-h-36 resize-y py-3`}
                      placeholder="Votre projet, vos délais, vos priorités..."
                      {...register("message")}
                    />
                  </label>
                  {errors.message ? (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  ) : null}
                </StaggerItem>
                <StaggerItem>
                  <p className="text-sm leading-6 text-muted-foreground" id="contact-status">
                    {status === "success"
                      ? "Votre message a bien été envoyé, merci !"
                      : status === "error"
                        ? "Une erreur est survenue, réessayez ou écrivez-nous directement."
                        : `Votre message sera envoyé directement à ${CONTACT_EMAIL}.`}
                  </p>
                </StaggerItem>
                <StaggerItem className="flex justify-start">
                  <Button
                    disabled={isSubmitting}
                    trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
                    type="submit"
                  >
                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </StaggerItem>
              </Stagger>
            </form>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

function Field({
  error,
  label,
  placeholder,
  required = false,
  type = "text",
  ...registerProps
}: {
  error?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "text";
} & UseFormRegisterReturn) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground">
      {label}
      <input
        className={fieldClassName}
        placeholder={placeholder}
        required={required}
        type={type}
        {...registerProps}
      />
      {error ? <span className="text-xs font-normal text-red-400">{error}</span> : null}
    </label>
  );
}
