import type { Metadata } from "next";

import { BRAND_NAME, SITE_URL } from "@/lib/constants";

export const SITE_DESCRIPTION =
  "Sites, applications et outils métier sur mesure : développement Next.js, automatisation et maintenance pour indépendants, PME et associations en Hauts-de-France.";

const OG_IMAGE = {
  url: "/images/hero-definitif.png",
  width: 1536,
  height: 1024,
  alt: BRAND_NAME,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND_NAME,
    template: `%s | ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: BRAND_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    apple: "/brand/td-mark-accent.svg",
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
  },
};
