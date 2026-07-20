import { MapPin, Navigation, ParkingCircle, Search } from "lucide-react";

export function TruckMapsVisual() {
  return (
    <div
      aria-label="Aperçu stylisé de l'application mobile TruckMaps avec carte, itinéraire et points d'intérêt."
      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-background-secondary p-5 sm:aspect-[16/10]"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(80_227_255_/_0.14),transparent_35%),linear-gradient(135deg,rgb(47_124_255_/_0.16),transparent_45%)]" />
      <div className="relative mx-auto h-full max-w-[17rem] rounded-[1.5rem] border border-border-strong bg-background p-3 shadow-card">
        <div className="h-full overflow-hidden rounded-[1.1rem] border border-border bg-background-secondary">
          <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2">
            <Search aria-hidden="true" className="size-3.5 text-accent-cyan" />
            <span className="h-2 w-24 rounded-full bg-foreground/70" />
            <span className="ml-auto h-2 w-8 rounded-full bg-muted-foreground/40" />
          </div>

          <div className="relative h-[calc(100%-2.25rem)] overflow-hidden">
            <MapLines />
            <div className="absolute left-8 top-10 flex size-8 items-center justify-center rounded-full border border-accent-cyan/60 bg-background text-accent-cyan">
              <Navigation aria-hidden="true" className="size-4" />
            </div>
            <div className="absolute right-8 top-20 flex size-7 items-center justify-center rounded-full border border-border-strong bg-surface-elevated text-foreground">
              <ParkingCircle aria-hidden="true" className="size-4" />
            </div>
            <div className="absolute bottom-20 left-10 flex size-7 items-center justify-center rounded-full border border-border bg-surface text-accent-cyan">
              <MapPin aria-hidden="true" className="size-4" />
            </div>
            <div className="absolute bottom-6 left-4 right-4 rounded-md border border-border bg-background/85 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <span className="h-2 w-20 rounded-full bg-foreground/75" />
                <span className="h-2 w-12 rounded-full bg-accent-cyan/75" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <span className="h-1.5 rounded-full bg-muted-foreground/40" />
                <span className="h-1.5 rounded-full bg-muted-foreground/30" />
                <span className="h-1.5 rounded-full bg-muted-foreground/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapLines() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full"
      fill="none"
      focusable="false"
      viewBox="0 0 280 360"
    >
      <path d="M-10 82C54 118 100 66 154 96s54 98 142 78" stroke="currentColor" className="text-border" strokeWidth="10" />
      <path d="M-18 254c70-46 104 28 164-8 42-26 58-74 152-54" stroke="currentColor" className="text-border" strokeWidth="8" />
      <path d="M58 354c18-88 76-86 98-142 18-44-24-76 40-142" stroke="currentColor" className="text-border" strokeWidth="8" />
      <path d="M48 272c40-50 62-54 88-78 32-30 36-72 82-90" stroke="#50e3ff" strokeLinecap="round" strokeWidth="5" />
      <path d="M48 272c40-50 62-54 88-78 32-30 36-72 82-90" stroke="#2f7cff" strokeDasharray="1 12" strokeLinecap="round" strokeWidth="9" />
    </svg>
  );
}
