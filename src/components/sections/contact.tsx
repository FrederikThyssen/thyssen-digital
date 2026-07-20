"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

import { FadeUp } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const fieldClassName =
  "min-h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground transition-colors duration-200 ease-standard placeholder:text-subtle-foreground hover:border-border-strong focus:border-accent-cyan focus:outline-none focus:ring-0";

type FormState = "idle" | "loading" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState(
    "Réponse sous 48h ouvrées selon le contexte du projet.",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      budget: String(formData.get("budget") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setFeedback("Le nom, l'email et le message sont obligatoires.");
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setStatus("error");
      setFeedback("L'adresse email n'est pas valide.");
      return;
    }

    setStatus("loading");
    setFeedback("Envoi du message en cours...");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Le message n'a pas pu être envoyé.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message envoyé. Je reviens vers vous rapidement.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue pendant l'envoi.",
      );
    }
  }

  return (
    <section className="py-24 sm:py-28" id="contact">
      <Container className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <FadeUp>
          <SectionHeading
            description="Décrivez votre besoin, votre contexte et les premiers objectifs. Le message est envoyé directement vers Thyssen Digital."
            eyebrow="Contact"
            title="Parlons de votre projet."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassPanel className="p-5 sm:p-6">
            <form
              aria-describedby="contact-status"
              className="grid gap-4"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nom" name="name" placeholder="Votre nom" required />
                <Field
                  label="Email"
                  name="email"
                  placeholder="vous@entreprise.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>
              <label className="grid gap-2 text-sm font-medium text-foreground">
                Message
                <textarea
                  className={`${fieldClassName} min-h-36 resize-y py-3`}
                  name="message"
                  placeholder="Votre projet, vos délais, vos priorités..."
                  required
                />
              </label>
              <p className="text-sm leading-6 text-muted-foreground" id="contact-status">
                {feedback}
              </p>
              <div className="flex justify-start">
                <Button
                  disabled={status === "loading"}
                  trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
                  type="submit"
                >
                  {status === "loading" ? "Envoi..." : "Envoyer le message"}
                </Button>
              </div>
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
