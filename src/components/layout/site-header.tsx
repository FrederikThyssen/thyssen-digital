"use client";

import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business, navItems } from "@/content/site";
import { BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const QUOTE_HREF = "/#contact";
const QUOTE_LABEL = "Devis gratuit";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#accueil");

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    const sections = ["accueil", ...navItems.map((item) => item.sectionId)]
      .filter((href, index, items) => items.indexOf(href) === index)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-38% 0px -52% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white lg:bg-white/90 lg:backdrop-blur-lg transition-[border-color,box-shadow] duration-200 ease-standard",
        isScrolled || isOpen
          ? "border-border shadow-[0_8px_24px_-18px_rgb(16_24_40_/_0.3)]"
          : "border-transparent",
      )}
    >
      <Container>
        <nav
          aria-label="Navigation principale"
          className="flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]"
        >
          <Link
            className={cn("flex min-h-11 shrink-0 items-center rounded-md", focusRing)}
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo
              className="[&_svg]:h-8 [&_svg]:w-auto"
              decorative
              tone="light"
              variant="horizontal"
            />
            <span className="sr-only">{BRAND_NAME}, retour à l&apos;accueil</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeHref === `#${item.sectionId}`;

              return (
                <li key={item.label}>
                  <a
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200 ease-standard hover:bg-surface-subtle hover:text-ink",
                      isActive ? "text-primary" : "text-muted-foreground",
                      focusRing,
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a
              aria-label={`Appeler le ${business.phoneDisplay}`}
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-strong bg-white px-3 text-sm font-semibold text-ink transition-colors duration-200 ease-standard hover:border-primary/40 hover:text-primary lg:min-h-10",
                focusRing,
              )}
              href={business.phoneHref}
            >
              <Phone aria-hidden="true" className="size-4 shrink-0 text-primary" />
              <span aria-hidden="true" className="hidden min-[400px]:inline lg:hidden xl:inline">
                {business.phoneDisplay}
              </span>
            </a>
            <Button
              className="hidden lg:inline-flex"
              href={QUOTE_HREF}
              size="sm"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {QUOTE_LABEL}
            </Button>
            <button
              aria-controls="menu-mobile"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-white text-ink transition-colors duration-200 ease-standard hover:bg-surface-subtle lg:hidden",
                focusRing,
              )}
              onClick={() => setIsOpen((current) => !current)}
              type="button"
            >
              {isOpen ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-white lg:hidden" id="menu-mobile">
          <Container className="pb-5 pt-2">
            <ul className="grid">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className={cn(
                      "flex min-h-12 items-center rounded-lg px-2 text-base font-medium text-ink transition-colors duration-200 hover:bg-surface-subtle",
                      focusRing,
                    )}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="mt-3 w-full"
              href={QUOTE_HREF}
              onClick={() => setIsOpen(false)}
              size="lg"
            >
              {QUOTE_LABEL}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
