import { Stagger, StaggerItem } from "@/components/motion";

const words = ["Concevoir.", "Développer.", "Performer."];

export function BrandSignatureBand() {
  return (
    <section
      aria-label="Signature Thyssen Digital"
      className="relative overflow-hidden bg-[#03060d] py-14 sm:py-18"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle_at_center,rgb(34_211_238_/_0.16),transparent_62%)] blur-2xl"
      />
      <Stagger
        className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-6 text-center"
        staggerDelay={0.1}
      >
        {words.map((word) => (
          <StaggerItem key={word}>
            <span className="bg-gradient-to-r from-primary via-accent-cyan to-accent-violet bg-clip-text text-[0.82rem] font-semibold uppercase tracking-[0.34em] text-transparent sm:text-sm sm:tracking-[0.42em]">
              {word}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
