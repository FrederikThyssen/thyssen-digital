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
  { label: "FAQ", href: "#faq" },
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
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-[82rem] rounded-2xl border border-white/10 bg-background/45 shadow-[0_18px_80px_rgb(0_0_0_/_0.28)] backdrop-blur-xl transition-all duration-200 ease-standard",
          isScrolled &&
            "border-white/15 bg-background/78 shadow-[0_22px_90px_rgb(0_0_0_/_0.42)]",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="flex min-h-[74px] items-center justify-between gap-4 px-5 sm:px-8"
        >
          <a
            className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            href="#accueil"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo
              className="[&_svg]:size-9 [&_span_span]:hidden sm:[&_span_span]:block sm:[&_span_span]:text-xs"
              decorative
              tone="accent"
              variant="horizontal"
            />
            <span className="sr-only">THYSSEN DIGITAL</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                className="rounded-md text-[0.8125rem] font-medium text-foreground/82 transition-colors duration-200 ease-standard hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
                href={item.href}
                key={item.href}
              >
                {item.label}
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
                Discutons de votre projet
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
