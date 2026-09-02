export const GOOGLE_PLACE_ID = "ChIJb8ffUz5V3UcRitiDupCSbds";

// Opens Google's own "write a review" flow for this business — no data leaves our site.
export const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

// Canonical way to deep-link to a place by id (Google Maps URLs documentation).
export const GOOGLE_PROFILE_URL = `https://www.google.com/maps/search/?api=1&query=Thyssen+Digital&query_place_id=${GOOGLE_PLACE_ID}`;
