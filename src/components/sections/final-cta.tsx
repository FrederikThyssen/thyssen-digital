import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business, home } from "@/content/site";

const { finalCta } = home;

function Title() {
  const [before, after] = finalCta.title.split(finalCta.titleHighlight);

  if (after === undefined) {
    return <>{finalCta.title}</>;
  }

  return (
    <>
      {before}
      <span className="accent-serif accent-serif-on-dark">{finalCta.titleHighlight}</span>
      {after}
    </>
  );
}

// Dark call-to-action band with glowing aurora, shown before the contact form.
export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-white px-3 py-10 sm:px-6 sm:py-16">
      <div className="relative isolate mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <span className="aurora -left-[10%] -top-[40%] h-[30rem] w-[30rem] bg-[#1350ff]/70" />
          <span className="aurora -right-[8%] top-[10%] h-[26rem] w-[26rem] bg-[#7d2cff]/60 [animation-delay:-7s]" />
          <span className="aurora bottom-[-45%] left-[35%] h-[24rem] w-[24rem] bg-[#00e5ff]/35 [animation-delay:-12s]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255_/_0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>
        <Container className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd8ff]">
            {finalCta.eyebrow}
          </p>
          <h2
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            id="final-cta-title"
          >
            <Title />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">{finalCta.text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="#contact"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" className="size-5" />}
              variant="inverse"
            >
              {finalCta.primaryCta}
            </Button>
            <Button
              className="border-white/30 bg-white/5 text-white shadow-none backdrop-blur hover:border-white/60 hover:bg-white/10"
              href={business.phoneHref}
              leadingIcon={<Phone aria-hidden="true" className="size-5" />}
              size="lg"
              variant="secondary"
            >
              {finalCta.secondaryCta}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
