"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Processus", href: "#a-propos" },
  { label: "Avis", href: "#faq" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#accueil");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrolled = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(window.scrollY > 16);
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const sections = ["#accueil", ...navItems.map((item) => item.href)]
      .filter((href, index, items) => items.indexOf(href) === index)
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

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
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-5 sm:px-6 lg:pt-8">
      <div
        className={cn(
          "relative mx-auto max-w-[82rem] overflow-hidden rounded-2xl border border-white/10 bg-background/62 shadow-[0_18px_80px_rgb(0_0_0_/_0.34)] backdrop-blur-xl transition-all duration-200 ease-standard lg:bg-background/10",
          isScrolled &&
            "border-white/15 bg-background/78 shadow-[0_22px_90px_rgb(0_0_0_/_0.42)] lg:bg-background/44",
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-white/5"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary via-accent-cyan to-accent-violet transition-transform duration-150 ease-standard"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}
        />
        <nav
          aria-label="Navigation principale"
          className="flex min-h-[70px] items-center justify-between gap-4 px-5 sm:px-8 lg:min-h-10 lg:px-0"
        >
          <a
            className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan lg:h-12 lg:w-44"
            href="#accueil"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo
              className="[&_svg]:size-9 [&_span_span]:hidden sm:[&_span_span]:block sm:[&_span_span]:text-xs"
              decorative
              imageClassName="h-10"
              tone="accent"
              variant="horizontal"
            />
            <span className="sr-only">THYSSEN DIGITAL</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <a
                className={cn(
                  "relative rounded-md text-xs font-medium text-foreground/88 transition-colors duration-200 ease-standard hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan",
                  activeHref === item.href && "text-white",
                )}
                href={item.href}
                key={item.label}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent-cyan opacity-0 shadow-[0_0_16px_rgb(34_211_238_/_0.85)] transition-opacity duration-200",
                    activeHref === item.href && "opacity-100",
                  )}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              className="min-h-10 rounded-full border-white/15 bg-[linear-gradient(135deg,rgb(19_80_255),rgb(140_83_255))] px-4 text-xs shadow-[0_0_28px_rgb(47_124_255_/_0.28)] hover:bg-[linear-gradient(135deg,rgb(34_132_255),rgb(124_58_237))]"
              href="#contact"
              size="sm"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Discutons de votre projet
            </Button>
          </div>

          <button
            aria-controls="menu-mobile"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-foreground transition-colors duration-200 ease-standard hover:bg-white/[0.08] lg:hidden"
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
          <div className="lg:hidden" id="menu-mobile">
            <div className="border-t border-border px-4 pb-4 pt-2">
              {navItems.map((item) => (
                <a
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-3 w-full"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Discutons de votre projet
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
