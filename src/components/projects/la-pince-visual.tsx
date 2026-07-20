import { Braces, Database, ShieldCheck } from "lucide-react";

export function LaPinceVisual() {
  return (
    <div
      aria-label="Aperçu stylisé d'un dashboard métier et d'une architecture backend pour La Pince."
      className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background-secondary p-4"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgb(80_227_255_/_0.12),transparent_32%),linear-gradient(135deg,rgb(140_109_255_/_0.12),transparent_44%)]" />
      <div className="relative grid h-full gap-3 rounded-lg border border-border bg-background/70 p-3 sm:grid-cols-[0.9fr_1.1fr]">
        <aside className="hidden rounded-md border border-border bg-surface p-3 sm:block">
          <span className="block h-2 w-16 rounded-full bg-foreground/70" />
          <div className="mt-5 grid gap-2">
            <span className="h-2 rounded-full bg-muted-foreground/35" />
            <span className="h-2 w-3/4 rounded-full bg-accent-cyan/55" />
            <span className="h-2 w-5/6 rounded-full bg-muted-foreground/30" />
          </div>
        </aside>

        <div className="grid gap-3">
          <div className="grid grid-cols-3 gap-2">
            <Metric icon={Database} />
            <Metric icon={Braces} />
            <Metric icon={ShieldCheck} />
          </div>
          <div className="rounded-md border border-border bg-surface p-3">
            <span className="block h-2 w-24 rounded-full bg-foreground/70" />
            <div className="mt-4 grid gap-2">
              {[0, 1, 2].map((item) => (
                <div
                  className="grid grid-cols-[1fr_0.55fr_0.4fr] gap-2"
                  key={item}
                >
                  <span className="h-2 rounded-full bg-muted-foreground/35" />
                  <span className="h-2 rounded-full bg-muted-foreground/25" />
                  <span className="h-2 rounded-full bg-accent-cyan/45" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-border bg-background/75 px-3 py-2">
            <span className="font-mono text-[0.625rem] text-accent-cyan">
              POST /api/admin/items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ icon: Icon }: { icon: typeof Database }) {
  return (
    <div className="rounded-md border border-border bg-surface p-2">
      <Icon aria-hidden="true" className="size-4 text-accent-cyan" />
      <span className="mt-3 block h-2 w-10 rounded-full bg-foreground/55" />
    </div>
  );
}
