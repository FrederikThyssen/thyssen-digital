import { JsonLd } from "@/components/seo/json-ld";
import { professionalServiceJsonLd } from "@/lib/structured-data";

// ProfessionalService (LocalBusiness) for the homepage. No street address is published.
export function OrganizationJsonLd() {
  return <JsonLd data={professionalServiceJsonLd} />;
}
