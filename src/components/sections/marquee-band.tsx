import { Sparkle } from "lucide-react";

import { home } from "@/content/site";

function MarqueeList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {home.marquee.map((item) => (
        <li className="flex items-center" key={item}>
          <span className="whitespace-nowrap px-6 font-display text-xl font-medium tracking-tight text-white sm:px-8 sm:text-2xl">
            {item}
          </span>
          <Sparkle aria-hidden="true" className="size-4 shrink-0 fill-[#00e5ff] text-[#00e5ff]" />
        </li>
      ))}
    </ul>
  );
}

// Infinite band of benefits between the hero and the services.
export function MarqueeBand() {
  return (
    <section aria-label="Les avantages en bref" className="marquee relative overflow-hidden bg-ink py-6 sm:py-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32"
      />
      <div className="marquee-track">
        <MarqueeList />
        <MarqueeList hidden />
      </div>
    </section>
  );
}
