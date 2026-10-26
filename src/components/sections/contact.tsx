"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, home, type SelectOption } from "@/content/site";

const { contact } = home;

// Skip Zod's runtime code generation (new Function), which the Content-Security-Policy forbids.
z.config({ jitless: true });

const fieldClassName =
  "min-h-12 w-full rounded-xl border border-border-strong bg-white px-4 text-base text-ink shadow-[inset_0_1px_2px_rgb(16_24_40_/_0.04)] transition-[border-color,box-shadow] duration-200 ease-standard placeholder:text-subtle-foreground hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-red-600 sm:text-[0.95rem]";

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
    <Section id="contact">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            description={contact.description}
            eyebrow={contact.eyebrow}
            highlight={contact.titleHighlight}
            title={contact.title}
          />
          <ul className="mt-8 grid gap-3 text-sm">
            <ContactInfo icon={<Phone aria-hidden="true" className="size-5" />} label={contact.phoneLabel}>
              <a
                className="inline-flex min-h-11 items-center rounded-md text-lg font-semibold text-ink underline-offset-4 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href={business.phoneHref}
              >
                {business.phoneDisplay}
              </a>
            </ContactInfo>
            <ContactInfo icon={<Mail aria-hidden="true" className="size-5" />} label={contact.emailLabel}>
              <a
                className="inline-flex min-h-11 items-center break-all rounded-md font-semibold text-ink underline-offset-4 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href={business.emailHref}
              >
                {business.email}
              </a>
            </ContactInfo>
            <ContactInfo icon={<MapPin aria-hidden="true" className="size-5" />} label={contact.zoneLabel}>
              <span className="font-semibold text-ink">
                <NoBreakPlaces text={business.regionLabel} />
              </span>
            </ContactInfo>
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
            {business.responseTime}
          </p>
        </div>

        <div className="relative rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
          <span
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-[linear-gradient(90deg,#1350ff,#00e5ff,#7d2cff)]"
          />
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <input
              aria-hidden="true"
              autoComplete="off"
              className="sr-only"
              tabIndex={-1}
              {...register("website")}
            />
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <div className="grid min-w-0 gap-2">
                <label className="text-sm font-semibold text-ink" htmlFor="contact-message">
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
                  <p className="text-sm font-medium text-red-700" id="contact-message-error">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <p
                aria-live="polite"
                className={
                  status === "success"
                    ? "rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium leading-6 text-emerald-800"
                    : status === "error"
                      ? "rounded-xl bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-800"
                      : "sr-only"
                }
                role="status"
              >
                {status === "success" ? contact.success : status === "error" ? contact.error : ""}
              </p>
              <div>
                <Button
                  aria-busy={isSubmitting || undefined}
                  className="w-full sm:w-auto"
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
                    className="rounded-sm font-medium text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    href="/politique-confidentialite"
                  >
                    {contact.privacyLinkLabel}
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Section>
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
    <li className="flex items-center gap-4 rounded-2xl border border-border bg-surface-subtle px-4 py-3">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-soft">
        {icon}
      </span>
      <span className="grid min-w-0">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-subtle-foreground">{label}</span>
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
    <div className="grid min-w-0 gap-2">
      <label className="text-sm font-semibold text-ink" htmlFor={id}>
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
        <p className="text-sm font-medium text-red-700" id={errorId}>
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
    <div className="grid min-w-0 gap-2">
      <label className="text-sm font-semibold text-ink" htmlFor={id}>
        {label}
      </label>
      <select className={`${fieldClassName} appearance-auto [&>option]:bg-white [&>option]:text-ink`} defaultValue="" id={id} {...registerProps}>
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
