import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center py-16">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">
          Page introuvable
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          La page demandée est introuvable ou a été déplacée.
        </p>
        <Button className="mt-8" href="/">
          Revenir à l&apos;accueil
        </Button>
      </Container>
    </main>
  );
}
