import { Music2, QrCode } from "lucide-react";

export function FredMusicVisual() {
  return (
    <div
      aria-label="Aperçu stylisé d'un site événementiel premium pour Fred Music."
      className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background-secondary p-4"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgb(140_109_255_/_0.16),transparent_34%),linear-gradient(135deg,rgb(47_124_255_/_0.14),transparent_46%)]" />
      <div className="relative h-full rounded-lg border border-border bg-background/70 p-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md border border-border bg-surface text-accent-cyan">
              <Music2 aria-hidden="true" className="size-4" />
            </span>
            <span className="h-2 w-20 rounded-full bg-foreground/75" />
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-1.5 w-10 rounded-full bg-muted-foreground/45" />
            <span className="h-1.5 w-14 rounded-full bg-muted-foreground/35" />
          </div>
        </div>

        <div className="grid h-[calc(100%-3rem)] items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="block h-2 w-20 rounded-full bg-accent-cyan/70" />
            <span className="mt-4 block h-4 w-40 rounded-full bg-foreground/80" />
            <span className="mt-2 block h-4 w-28 rounded-full bg-foreground/55" />
            <span className="mt-5 block h-2 w-44 rounded-full bg-muted-foreground/40" />
            <span className="mt-2 block h-2 w-32 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="h-2 w-20 rounded-full bg-foreground/70" />
              <QrCode aria-hidden="true" className="size-8 text-accent-cyan" />
            </div>
            <div className="mt-4 grid gap-2">
              <span className="h-2 rounded-full bg-muted-foreground/35" />
              <span className="h-2 w-3/4 rounded-full bg-muted-foreground/25" />
            </div>
            <div className="mt-5 rounded-md border border-border bg-background/70 px-3 py-2">
              <span className="block h-2 w-24 rounded-full bg-accent-violet/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
