import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BRAND_NAME } from "@/lib/constants";
import { GOOGLE_PROFILE_URL, GOOGLE_WRITE_REVIEW_URL } from "@/lib/google";
import { getGooglePlaceSummary } from "@/lib/google-reviews";

export async function TestimonialsSection() {
  const summary = await getGooglePlaceSummary();
  const reviews = summary?.reviews ?? [];

  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28" id="avis">
      <BackgroundGlow
        className="hidden lg:block"
        intensity="low"
        position="top-right"
        size="lg"
        tone="cyan"
      />
      <Container className="relative">
        <FadeUp>
          <SectionHeading
            description="Les avis publiés sur ma fiche Google, affichés ici tels quels."
            eyebrow="Avis Google"
            title="Ils m'ont fait confiance."
          />
        </FadeUp>

        {summary && summary.userRatingCount > 0 ? (
          <FadeUp className="mt-8" delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-accent-cyan">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    aria-hidden="true"
                    className="size-4"
                    fill={index < Math.round(summary.rating) ? "currentColor" : "none"}
                    key={index}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">
                {summary.rating.toFixed(1)}/5 sur {summary.userRatingCount} avis Google
              </p>
            </div>
          </FadeUp>
        ) : null}

        {reviews.length > 0 ? (
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <StaggerItem key={review.id}>
                <article className="h-full rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.045),rgb(255_255_255_/_0.018))] p-5 shadow-[0_18px_70px_rgb(0_0_0_/_0.22)]">
                  <div className="flex items-center gap-3">
                    {review.authorPhotoUrl ? (
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="rounded-full"
                        height={36}
                        src={review.authorPhotoUrl}
                        unoptimized
                        width={36}
                      />
                    ) : null}
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {review.authorName}
                      </p>
                      <div className="flex items-center gap-0.5 text-accent-cyan">
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            aria-hidden="true"
                            className="size-3"
                            fill={index < review.rating ? "currentColor" : "none"}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 line-clamp-5 text-sm leading-6 text-muted-foreground">
                    {review.text}
                  </p>
                  {review.relativeTime ? (
                    <p className="mt-3 text-xs text-subtle-foreground">{review.relativeTime}</p>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <FadeUp className="mt-8" delay={0.05}>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Les avis Google de {BRAND_NAME} s&apos;affichent ici automatiquement dès qu&apos;ils
              sont publiés. Le premier avis y contribue directement.
            </p>
          </FadeUp>
        )}

        <FadeUp className="mt-10 flex flex-wrap items-center gap-4" delay={0.1}>
          <Button
            href={GOOGLE_WRITE_REVIEW_URL}
            rel="noreferrer"
            target="_blank"
            trailingIcon={<ExternalLink aria-hidden="true" className="size-4" />}
            variant="secondary"
          >
            Laisser un avis Google
          </Button>
          <a
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-foreground"
            href={GOOGLE_PROFILE_URL}
            rel="noreferrer"
            target="_blank"
          >
            Voir la fiche Google
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        </FadeUp>
      </Container>
    </section>
  );
}
