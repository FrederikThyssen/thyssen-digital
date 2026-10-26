import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

import { BackgroundGlow } from "@/components/backgrounds";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, fallbackReviews, home } from "@/content/site";
import { GOOGLE_WRITE_REVIEW_URL } from "@/lib/google";
import { getGooglePlaceSummary } from "@/lib/google-reviews";

type DisplayedReview = {
  id: string;
  author: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
};

function Stars({ className, rating }: { className: string; rating: number }) {
  return (
    <div aria-label={`${rating} étoiles sur 5`} className="flex items-center gap-0.5 text-[#fbbc04]" role="img">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden="true"
          className={className}
          fill={index < rating ? "currentColor" : "none"}
          key={index}
        />
      ))}
    </div>
  );
}

export async function TestimonialsSection() {
  const summary = await getGooglePlaceSummary();
  const googleReviews: DisplayedReview[] = (summary?.reviews ?? []).map((review) => ({
    id: review.id,
    author: review.authorName,
    authorPhotoUrl: review.authorPhotoUrl,
    rating: review.rating,
    text: review.text,
    relativeTime: review.relativeTime,
  }));
  // Live Google reviews when available, otherwise the reviews written in src/content/site.ts.
  const reviews: DisplayedReview[] =
    googleReviews.length > 0
      ? googleReviews
      : fallbackReviews.map((review) => ({
          ...review,
          authorPhotoUrl: null,
          relativeTime: "",
        }));

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
            description={home.reviews.description}
            eyebrow={home.reviews.eyebrow}
            title={home.reviews.title}
          />
        </FadeUp>

        {summary && summary.userRatingCount > 0 ? (
          <FadeUp className="mt-8" delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              <Stars className="size-4" rating={Math.round(summary.rating)} />
              <p className="text-sm font-medium text-foreground">
                {summary.rating.toFixed(1).replace(".", ",")}/5 sur {summary.userRatingCount} avis
                Google
              </p>
            </div>
          </FadeUp>
        ) : null}

        <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <StaggerItem key={review.id}>
              <figure className="h-full rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.045),rgb(255_255_255_/_0.018))] p-6 shadow-[0_18px_70px_rgb(0_0_0_/_0.22)]">
                <Stars className="size-4" rating={review.rating} />
                <blockquote className="mt-4 line-clamp-6 text-base leading-7 text-foreground/84">
                  {review.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
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
                  <span className="text-sm font-semibold text-foreground">{review.author}</span>
                  {review.relativeTime ? (
                    <span className="text-xs text-muted-foreground">{review.relativeTime}</span>
                  ) : null}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-10 flex flex-wrap items-center gap-4" delay={0.1}>
          <Button
            href={business.googleProfileUrl}
            rel="noopener noreferrer"
            target="_blank"
            trailingIcon={<ExternalLink aria-hidden="true" className="size-4" />}
          >
            {home.reviews.cta}
            <span className="sr-only"> (nouvel onglet)</span>
          </Button>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
            href={GOOGLE_WRITE_REVIEW_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {home.reviews.leaveReviewCta}
            <span className="sr-only"> (nouvel onglet)</span>
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        </FadeUp>
      </Container>
    </section>
  );
}
