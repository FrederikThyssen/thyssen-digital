import { Code2, Link, Mail } from "lucide-react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { BRAND_NAME, BRAND_SIGNATURE, CONTACT_EMAIL } from "@/lib/constants";

const footerNav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
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
    href: "https://www.linkedin.com/",
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
            <a
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href="#accueil"
            >
              <BrandLogo
                decorative
                imageClassName="h-36 sm:h-44"
                tone="accent"
                variant="full"
              />
              <span className="sr-only">{BRAND_NAME}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Studio digital premium pour concevoir, développer et faire évoluer
              des expériences web performantes.
            </p>
            <p className="mt-3 text-xs font-medium tracking-[0.14em] text-subtle-foreground">
              {BRAND_SIGNATURE}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Navigation du pied de page">
              <ul className="grid gap-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <a
                      className="rounded-md text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Liens légaux">
              <ul className="grid gap-2">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      className="rounded-md text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                      href={item.href}
                    >
                      {item.label}
                    </a>
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
