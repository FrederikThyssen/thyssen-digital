import type { Metadata } from "next";

import { BRAND_NAME, CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

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
  openGraph: {
    title: BRAND_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-definitif.png",
        width: 1536,
        height: 1024,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-definitif.png"],
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

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/images/hero-definitif.png`,
  areaServed: "FR",
  founder: {
    "@type": "Person",
    name: "Frédérik Thyssen",
  },
};
