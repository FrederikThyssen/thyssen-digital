"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Réalisations", href: "/#realisations", sectionId: "realisations" },
  { label: "À propos", href: "/#a-propos", sectionId: "a-propos" },
  { label: "Processus", href: "/#a-propos", sectionId: "a-propos" },
  { label: "Tarifs", href: "/tarifs", sectionId: "tarifs" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#accueil");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const previous = lastScrollY.current;

      setIsScrolled(current > 16);

      // En dessous de 6px le mouvement est du bruit (rebond tactile, ancrage) :
      // on ne bascule qu'au-delà, sinon l'en-tête clignote.
      if (Math.abs(current - previous) <= 6) {
        return;
      }

      // On ne masque qu'une fois le hero dépassé, jamais en remontant.
      setIsHidden(current > previous && current > 96);
      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        "fixed inset-x-0 top-0 z-40 border-b transition-[transform,background-color,border-color] duration-300 ease-standard",
        isScrolled || isOpen
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-transparent",
        isHidden && !isOpen ? "-translate-y-full" : "translate-y-0",
      )}
      // Un lien atteint au clavier dans un en-tête masqué serait invisible :
      // le focus le fait revenir.
      onFocusCapture={() => setIsHidden(false)}
    >
      <Container>
        <nav
          aria-label="Navigation principale"
          className="flex min-h-18 items-center justify-between gap-6"
        >
          <Link
            className="flex items-center rounded-sm"
            href="/#accueil"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo decorative imageClassName="h-9" tone="accent" variant="horizontal" />
            <span className="sr-only">THYSSEN DIGITAL</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                className={cn(
                  "relative py-1 text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground",
                  activeHref === `#${item.sectionId}` && "text-foreground",
                )}
                href={item.href}
                key={item.label}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px bg-accent opacity-0 transition-opacity duration-200",
                    activeHref === `#${item.sectionId}` && "opacity-100",
                  )}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm" variant="secondary">
              Discutons de votre projet
            </Button>
          </div>

          <button
            aria-controls="menu-mobile"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 ease-standard hover:border-border-strong lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-border py-4 lg:hidden" id="menu-mobile">
            {navItems.map((item) => (
              <a
                className="block py-3 text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground"
                href={item.href}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="mt-4 w-full"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Discutons de votre projet
            </Button>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
