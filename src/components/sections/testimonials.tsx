import { ExternalLink, Quote, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, fallbackReviews, home } from "@/content/site";
import { GOOGLE_WRITE_REVIEW_URL } from "@/lib/google";
import { formatRating, getGooglePlaceSummary } from "@/lib/google-reviews";

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
    <div aria-label={`${rating} étoiles sur 5`} className="flex items-center gap-0.5 text-[#f5a400]" role="img">
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
  // Reviews still holding a placeholder ("[TEXTE AVIS 1]"...) are never displayed.
  const reviews: DisplayedReview[] =
    googleReviews.length > 0
      ? googleReviews
      : fallbackReviews
          .filter((review) => !review.text.startsWith("[") && !review.author.startsWith("["))
          .map((review) => ({
            ...review,
            authorPhotoUrl: null,
            relativeTime: "",
          }));

  return (
    <Section id="avis" tone="soft">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description={home.reviews.description}
            eyebrow={home.reviews.eyebrow}
            highlight={home.reviews.titleHighlight}
            title={home.reviews.title}
          />
          {summary && summary.userRatingCount > 0 ? (
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft">
              <Stars className="size-5" rating={Math.round(summary.rating)} />
              <p className="text-sm font-semibold text-ink">
                {formatRating(summary.rating)} sur {summary.userRatingCount} avis Google
              </p>
            </div>
          ) : null}
        </div>

        {reviews.length === 0 ? (
          <p className="mt-10 max-w-2xl rounded-2xl border border-border bg-white px-6 py-5 text-base leading-7 text-muted-foreground shadow-soft">
            {home.reviews.emptyText}
          </p>
        ) : null}

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <li className="reveal" key={review.id}>
              <figure className="card-glow relative h-full rounded-2xl border border-border bg-white p-7 shadow-soft">
                <Quote aria-hidden="true" className="absolute right-6 top-6 size-8 text-primary/15" />
                <Stars className="size-4" rating={review.rating} />
                <blockquote className="mt-5 line-clamp-6 text-lg leading-8 text-ink">
                  {review.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {review.authorPhotoUrl ? (
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="rounded-full"
                      height={36}
                      referrerPolicy="no-referrer"
                      src={review.authorPhotoUrl}
                      unoptimized
                      width={36}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex size-9 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary"
                    >
                      {review.author.replace(/[^\p{L}]/gu, "").charAt(0) || "?"}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-ink">{review.author}</span>
                  {review.relativeTime ? (
                    <span className="text-sm text-subtle-foreground">{review.relativeTime}</span>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button
            href={business.googleProfileUrl}
            rel="noopener noreferrer"
            target="_blank"
            trailingIcon={<ExternalLink aria-hidden="true" className="size-4" />}
            variant="secondary"
          >
            {home.reviews.cta}
            <span className="sr-only"> (nouvel onglet)</span>
          </Button>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            href={GOOGLE_WRITE_REVIEW_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {home.reviews.leaveReviewCta}
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
