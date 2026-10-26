import type { Metadata } from "next";

import { BRAND_NAME, SITE_URL } from "@/lib/constants";

// Homepage <title>, kept as provided (the brand may be truncated in results, never the keywords).
export const HOME_TITLE = "Création site internet Hauts-de-France dès 990 € | Thyssen Digital";

export const SITE_DESCRIPTION =
  "Site vitrine pour artisans et TPE dans les Hauts-de-France, à Amiens, Arras, Cambrai, Saint-Quentin, Péronne et Bapaume. Dès 990 €, devis gratuit.";

type PageMetadataInput = {
  /** Full <title>, used as-is (no template applied). */
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/tarifs". */
  path: string;
  /**
   * Pages without their own opengraph-image file must reference the root share image
   * explicitly: their openGraph object replaces the inherited one.
   */
  useRootShareImage?: boolean;
};

const ROOT_SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Thyssen Digital : création de sites internet pour artisans et TPE des Hauts-de-France",
};

/**
 * Complete per-page metadata: unique title and description, canonical URL, Open Graph and
 * Twitter card. Share images come from the opengraph-image / twitter-image file conventions.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  useRootShareImage = false,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND_NAME,
      locale: "fr_FR",
      type: "website",
      ...(useRootShareImage ? { images: [ROOT_SHARE_IMAGE] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(useRootShareImage ? { images: [ROOT_SHARE_IMAGE.url] } : {}),
    },
  };
}

export const defaultMetadata: Metadata = {
  ...buildPageMetadata({ title: HOME_TITLE, description: SITE_DESCRIPTION, path: "/" }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${BRAND_NAME}`,
  },
  applicationName: BRAND_NAME,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};
