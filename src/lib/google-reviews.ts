import { GOOGLE_PLACE_ID } from "@/lib/google";

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GooglePlaceSummary = {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
};

type PlacesApiReview = {
  name: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
};

// Server-only: requires GOOGLE_PLACES_API_KEY. Returns null if unset or on any API error
// so the UI can fall back to a "leave a review" CTA without fabricating ratings.
export async function getGooglePlaceSummary(): Promise<GooglePlaceSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 21600 }, // 6h, keeps Places API usage low while staying fresh
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as PlacesApiResponse;

    if (typeof data.rating !== "number") {
      return null;
    }

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((review) => review.text?.text && review.authorAttribution?.displayName)
      .map((review) => ({
        id: review.name,
        authorName: review.authorAttribution!.displayName!,
        authorPhotoUrl: review.authorAttribution?.photoUri ?? null,
        rating: review.rating ?? 0,
        text: review.text!.text!,
        relativeTime: review.relativePublishTimeDescription ?? "",
      }));

    return {
      rating: data.rating,
      userRatingCount: data.userRatingCount ?? 0,
      reviews,
    };
  } catch {
    return null;
  }
}
