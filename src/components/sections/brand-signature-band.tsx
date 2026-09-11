const words = ["Concevoir.", "Développer.", "Performer."];

export function BrandSignatureBand() {
  return (
    <section
      aria-label="Signature Thyssen Digital"
      className="border-b border-border bg-background-secondary py-6"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5">
        {words.map((word) => (
          <span
            className="text-sm font-medium tracking-[0.12em] text-muted-foreground"
            key={word}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
