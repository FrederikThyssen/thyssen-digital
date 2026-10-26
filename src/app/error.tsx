"use client";

import { Phone, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business } from "@/content/site";

// Error boundaries must be Client Components. No error details are shown to visitors.
export default function Error({ retry }: { error: unknown; retry: () => void }) {
  return (
    <main className="flex min-h-svh items-center py-16" id="contenu">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
          Erreur
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">
          Un problème est survenu
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground/80">
          La page n&apos;a pas pu s&apos;afficher. Réessayez, ou appelez-moi directement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            leadingIcon={<RotateCcw aria-hidden="true" className="size-4" />}
            onClick={() => retry()}
            size="lg"
            type="button"
          >
            Réessayer
          </Button>
          <Button
            href={business.phoneHref}
            leadingIcon={<Phone aria-hidden="true" className="size-4 text-accent-cyan" />}
            size="lg"
            variant="secondary"
          >
            Appeler le {business.phoneDisplay}
          </Button>
          <Button href="/" size="lg" variant="ghost">
            Revenir à l&apos;accueil
          </Button>
        </div>
      </Container>
    </main>
  );
}
