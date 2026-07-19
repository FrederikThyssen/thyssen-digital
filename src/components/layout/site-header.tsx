"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMarkPlaceholder } from "@/components/ui/brand-mark-placeholder";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-xl border border-border bg-surface-glass shadow-soft backdrop-blur-md transition-colors duration-200 ease-standard",
          isScrolled && "border-border-strong bg-surface-elevated",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="flex min-h-[72px] items-center justify-between gap-4 px-4 sm:px-5"
        >
          <a
            className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            href="#accueil"
            onClick={() => setIsOpen(false)}
          >
            <BrandMarkPlaceholder className="size-10 text-xs" />
            <span className="hidden text-sm font-semibold tracking-[0.22em] text-foreground sm:block">
              THYSSEN DIGITAL
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-standard hover:bg-surface hover:text-foreground"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm">
              Parler de votre projet
            </Button>
          </div>

          <button
            aria-controls="menu-mobile"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors duration-200 ease-standard hover:bg-surface-hover lg:hidden"
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
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-standard hover:bg-surface hover:text-foreground"
                  href={item.href}
                  key={item.href}
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
                Parler de votre projet
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
