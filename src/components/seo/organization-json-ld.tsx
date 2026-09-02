import { BRAND_NAME, BRAND_POSITIONING, CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

// Service-area business: no physical address is published, so LocalBusiness fields
// that imply a storefront (address, openingHours) are intentionally omitted.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  description: BRAND_POSITIONING,
  image: `${SITE_URL}/brand/td-mark-accent.svg`,
  logo: `${SITE_URL}/brand/td-mark-accent.svg`,
  areaServed: [
    "Amiens",
    "Arras",
    "Péronne",
    "Saint-Quentin",
    "Somme",
    "Pas-de-Calais",
    "Hauts-de-France",
  ],
  sameAs: [
    "https://github.com/FrederikThyssen",
    "https://www.linkedin.com/in/frederik-thyssen/",
  ],
  founder: {
    "@type": "Person",
    name: "Frédérik Thyssen",
  },
};

export function OrganizationJsonLd() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      type="application/ld+json"
    />
  );
}
