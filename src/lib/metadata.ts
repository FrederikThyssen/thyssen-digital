import type { Metadata } from "next";

import { BRAND_NAME, SITE_URL } from "@/lib/constants";

export const SITE_DESCRIPTION =
  "Thyssen Digital conçoit des sites, applications et solutions digitales performantes, élégantes et conçues pour durer.";

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
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: SITE_DESCRIPTION,
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
