import { Code2, Link, Mail } from "lucide-react";
import NextLink from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { BRAND_NAME, BRAND_SIGNATURE, CONTACT_EMAIL } from "@/lib/constants";

const footerNav = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/FrederikThyssen",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/frederik-thyssen/",
    icon: Link,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-16">
      <Container>
        <Divider className="mb-10" variant="gradient" />
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <NextLink
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href="/#accueil"
            >
              <BrandLogo
                decorative
                imageClassName="h-12 sm:h-14"
                tone="accent"
                variant="horizontal"
              />
              <span className="sr-only">{BRAND_NAME}</span>
            </NextLink>
            <p className="mt-4 bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
              {BRAND_SIGNATURE}
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Studio digital premium pour concevoir, développer et faire évoluer
              des expériences web performantes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Navigation du pied de page">
              <ul className="grid gap-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <NextLink
                      className="rounded-md text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                      href={item.href}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Liens légaux">
              <ul className="grid gap-2">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <NextLink
                      className="rounded-md text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                      href={item.href}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-start gap-2 sm:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    aria-label={item.label}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors duration-200 ease-standard hover:border-border-strong hover:bg-surface-hover hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-subtle-foreground">
          © {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.
        </p>
        <p className="mt-2 text-xs text-subtle-foreground">
          Conçu et développé avec Next.js et TypeScript.
        </p>
      </Container>
    </footer>
  );
}
