"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
import { FadeUp } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, home, type SelectOption } from "@/content/site";

const { contact } = home;

const fieldClassName =
  "min-h-12 w-full rounded-md border border-border bg-surface px-4 text-base text-foreground transition-colors duration-200 ease-standard placeholder:text-subtle-foreground hover:border-border-strong focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 aria-[invalid=true]:border-red-400 sm:text-sm";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Votre nom est requis."),
  email: z.string().trim().min(1, "Votre email est requis.").email("Email invalide."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+().\s-]{0,30}$/, "Numéro de téléphone invalide.")
    .optional(),
  company: z.string().trim().optional(),
  projectType: z.string().trim().optional(),
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
              description={contact.description}
              eyebrow={contact.eyebrow}
              title={contact.title}
            />
            <ul className="mt-8 grid gap-3 text-sm">
              <ContactInfo icon={<Phone aria-hidden="true" className="size-5" />} label={contact.phoneLabel}>
                <a
                  className="inline-flex min-h-11 items-center rounded-md text-lg font-semibold text-foreground underline-offset-4 hover:text-accent-cyan hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                  href={business.phoneHref}
                >
                  {business.phoneDisplay}
                </a>
              </ContactInfo>
              <ContactInfo icon={<Mail aria-hidden="true" className="size-5" />} label={contact.emailLabel}>
                <a
                  className="inline-flex min-h-11 items-center break-all rounded-md font-semibold text-foreground underline-offset-4 hover:text-accent-cyan hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                  href={business.emailHref}
                >
                  {business.email}
                </a>
              </ContactInfo>
              <ContactInfo icon={<MapPin aria-hidden="true" className="size-5" />} label={contact.zoneLabel}>
                <span className="font-semibold text-foreground">{business.regionLabel}</span>
              </ContactInfo>
            </ul>
            <p className="mt-5 text-sm font-medium text-accent-cyan">{business.responseTime}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassPanel className="relative overflow-hidden border-white/12 p-5 shadow-[0_28px_100px_rgb(0_0_0_/_0.32)] sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"
            />
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <input
                aria-hidden="true"
                autoComplete="off"
                className="sr-only"
                tabIndex={-1}
                {...register("website")}
              />
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    autoComplete="name"
                    error={errors.name?.message}
                    id="contact-name"
                    label="Nom"
                    placeholder="Votre nom"
                    required
                    {...register("name")}
                  />
                  <Field
                    autoComplete="email"
                    error={errors.email?.message}
                    id="contact-email"
                    inputMode="email"
                    label="Email"
                    placeholder="vous@exemple.fr"
                    required
                    type="email"
                    {...register("email")}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    autoComplete="tel"
                    error={errors.phone?.message}
                    id="contact-phone"
                    inputMode="tel"
                    label="Téléphone (optionnel)"
                    placeholder="06 00 00 00 00"
                    type="tel"
                    {...register("phone")}
                  />
                  <Field
                    autoComplete="organization"
                    id="contact-company"
                    label="Entreprise (optionnel)"
                    placeholder="Nom de votre entreprise"
                    {...register("company")}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField
                    id="contact-project-type"
                    label="Type de projet (optionnel)"
                    options={contact.projectTypeOptions}
                    {...register("projectType")}
                  />
                  <SelectField
                    id="contact-budget"
                    label="Budget (optionnel)"
                    options={contact.budgetOptions}
                    {...register("budget")}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    aria-invalid={errors.message ? true : undefined}
                    aria-required="true"
                    className={`${fieldClassName} min-h-36 resize-y py-3`}
                    id="contact-message"
                    placeholder="Votre activité, ce dont vous avez besoin, vos délais..."
                    {...register("message")}
                  />
                  {errors.message ? (
                    <p className="text-sm text-red-300" id="contact-message-error">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
                <p
                  aria-live="polite"
                  className={
                    status === "success"
                      ? "text-sm font-medium leading-6 text-emerald-300"
                      : status === "error"
                        ? "text-sm font-medium leading-6 text-red-300"
                        : "sr-only"
                  }
                  role="status"
                >
                  {status === "success" ? contact.success : status === "error" ? contact.error : ""}
                </p>
                <div>
                  <Button
                    aria-busy={isSubmitting || undefined}
                    className="w-full bg-[#1350ff] hover:bg-[#2563ff] hover:text-white sm:w-auto"
                    disabled={isSubmitting}
                    size="lg"
                    trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
                    type="submit"
                  >
                    {isSubmitting ? contact.submitting : contact.submit}
                  </Button>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    {contact.privacyNotice}{" "}
                    <Link
                      className="rounded-sm text-foreground underline underline-offset-4 hover:text-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
                      href="/politique-confidentialite"
                    >
                      {contact.privacyLinkLabel}
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </GlassPanel>
        </FadeUp>
      </Container>
    </section>
  );
}

function ContactInfo({
  children,
  icon,
  label,
}: {
  children: ReactNode;
  icon: ReactNode;
  label: string;
}) {
  return (
    <li className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-accent-cyan/20 bg-primary/10 text-accent-cyan">
        {icon}
      </span>
      <span className="grid min-w-0">
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
        {children}
      </span>
    </li>
  );
}

function Field({
  autoComplete,
  error,
  id,
  inputMode,
  label,
  placeholder,
  required = false,
  type = "text",
  ...registerProps
}: {
  autoComplete?: string;
  error?: string;
  id: string;
  inputMode?: "email" | "tel" | "text";
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel" | "text";
} & UseFormRegisterReturn) {
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-foreground" htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        className={fieldClassName}
        id={id}
        inputMode={inputMode}
        placeholder={placeholder}
        type={type}
        {...registerProps}
      />
      {error ? (
        <p className="text-sm text-red-300" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  ...registerProps
}: {
  id: string;
  label: string;
  options: SelectOption[];
} & UseFormRegisterReturn) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <select className={`${fieldClassName} appearance-auto [&>option]:bg-background [&>option]:text-foreground`} defaultValue="" id={id} {...registerProps}>
        <option value="">Choisir...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
