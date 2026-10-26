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
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Erreur
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Un problème est survenu
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
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
            leadingIcon={<Phone aria-hidden="true" className="size-4 text-primary" />}
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
