import type { JsonLdObject } from "@/components/seo/json-ld";
import { business, faq, footer } from "@/content/site";
import { SITE_URL } from "@/lib/constants";
import { SITE_DESCRIPTION } from "@/lib/metadata";

const BUSINESS_ID = `${SITE_URL}/#entreprise`;

// Content strings carry French non-breaking spaces; structured data uses plain spaces.
const plain = (text: string) => text.replace(/[  ]/g, " ").replace(/’/g, "'");

export const professionalServiceJsonLd: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: business.name,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: business.phoneE164,
  email: business.email,
  image: `${SITE_URL}/brand/icon-512.png`,
  logo: `${SITE_URL}/brand/icon-512.png`,
  priceRange: plain(business.priceRange),
  address: {
    "@type": "PostalAddress",
    addressLocality: business.locality,
    postalCode: business.postalCode,
    addressRegion: business.region,
    addressCountry: business.country,
  },
  areaServed: [business.region, ...business.departments, ...business.cities].map((name) => ({
    "@type": "Place",
    name,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: business.openingHours.opens,
    closes: business.openingHours.closes,
  },
  sameAs: [business.googleProfileUrl],
  founder: {
    "@type": "Person",
    name: business.owner,
  },
  slogan: plain(footer.tagline),
};

export const faqPageJsonLd: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: plain(item.question),
    acceptedAnswer: {
      "@type": "Answer",
      text: plain(item.answer),
    },
  })),
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
