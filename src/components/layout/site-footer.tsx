import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import NextLink from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { business, footer, navItems } from "@/content/site";
import { BRAND_NAME } from "@/lib/constants";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

const linkClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-white/72 transition-colors duration-200 ease-standard hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:min-h-9";

const columnTitleClassName = "mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white lg:pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <NextLink
              className="inline-flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/"
            >
              <BrandLogo decorative imageClassName="h-12" tone="accent" variant="horizontal" />
              <span className="sr-only">{BRAND_NAME}, retour à l&apos;accueil</span>
            </NextLink>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/80">
              <NoBreakPlaces text={footer.tagline} />
            </p>
            <p className="mt-5 flex max-w-sm gap-2 text-sm leading-6 text-white/64">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-white/50" />
              <span>
                <span className="font-semibold text-white/88">{footer.zonesLabel}&nbsp;: </span>
                <NoBreakPlaces text={footer.zones} />
              </span>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Navigation du pied de page">
              <p className={columnTitleClassName}>Navigation</p>
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

            <div>
              <p className={columnTitleClassName}>Contact</p>
              <address className="not-italic">
                <ul className="grid">
                  <li>
                    <a className={`${linkClassName} font-semibold text-white`} href={business.phoneHref}>
                      <Phone aria-hidden="true" className="size-4" />
                      {business.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a className={`${linkClassName} break-all`} href={business.emailHref}>
                      <Mail aria-hidden="true" className="size-4 shrink-0" />
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
                      <ExternalLink aria-hidden="true" className="size-4" />
                      {footer.googleLinkLabel}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  </li>
                </ul>
              </address>
            </div>

            <nav aria-label="Liens légaux">
              <p className={columnTitleClassName}>Informations</p>
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
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-white/56">
          © {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.
        </div>
      </Container>
      <MobileCtaBar />
    </footer>
  );
}
