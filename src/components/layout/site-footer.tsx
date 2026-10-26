import { ExternalLink, Mail, Phone } from "lucide-react";
import NextLink from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { business, footer, navItems } from "@/content/site";
import { BRAND_NAME } from "@/lib/constants";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

const linkClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan lg:min-h-9";

export function SiteFooter() {
  return (
    <footer className="pb-28 pt-16 lg:pb-10">
      <Container>
        <Divider className="mb-10" variant="gradient" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
          <div>
            <NextLink
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              href="/"
            >
              <BrandLogo
                decorative
                imageClassName="h-12 sm:h-14"
                tone="accent"
                variant="horizontal"
              />
              <span className="sr-only">{BRAND_NAME}, retour à l&apos;accueil</span>
            </NextLink>
            <p className="mt-4 max-w-md text-sm leading-6 text-foreground/84">
              <NoBreakPlaces text={footer.tagline} />
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">{footer.zonesLabel} : </span>
              <NoBreakPlaces text={footer.zones} />
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Navigation du pied de page">
              <ul className="grid">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NextLink className={linkClassName} href={item.href}>
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Liens légaux">
              <ul className="grid">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <NextLink className={linkClassName} href={item.href}>
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="not-italic">
              <ul className="grid">
                <li>
                  <a className={`${linkClassName} font-semibold text-foreground`} href={business.phoneHref}>
                    <Phone aria-hidden="true" className="size-4 text-accent-cyan" />
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a className={`${linkClassName} break-all`} href={business.emailHref}>
                    <Mail aria-hidden="true" className="size-4 shrink-0 text-accent-cyan" />
                    {business.email}
                  </a>
                </li>
                <li>
                  <a
                    className={linkClassName}
                    href={business.googleProfileUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink aria-hidden="true" className="size-4 text-accent-cyan" />
                    {footer.googleLinkLabel}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.
        </p>
      </Container>
      <MobileCtaBar />
    </footer>
  );
}
