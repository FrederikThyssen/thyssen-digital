import Image from "next/image";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/site";

const { about } = home;

export function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24" id="a-propos">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="top-left"
        size="lg"
        tone="violet"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </FadeUp>

        <FadeUp className="mt-10" delay={0.05}>
          <GlassPanel className="relative overflow-hidden border-white/12 p-6 shadow-[0_28px_100px_rgb(0_0_0_/_0.32)] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent"
            />
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
              <div className="flex size-20 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-primary/10 shadow-[0_0_40px_rgb(34_211_238_/_0.12)] sm:size-24">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-12 sm:w-14"
                  height={96}
                  src="/brand/td-mark-accent.svg"
                  unoptimized
                  width={128}
                />
              </div>
              <div>
                <p className="text-lg leading-8 text-foreground/88 sm:text-xl sm:leading-9">
                  {about.text}
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                  {about.signature}
                </p>
              </div>
            </div>
          </GlassPanel>
        </FadeUp>
      </Container>
    </section>
  );
}
