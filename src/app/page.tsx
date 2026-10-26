import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { StandardsSection } from "@/components/sections/standards";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { HOME_TITLE, SITE_DESCRIPTION, buildPageMetadata } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd data={faqPageJsonLd} />
      <SiteHeader />
      <main
        className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgb(34_211_238_/_0.055),transparent_24%),radial-gradient(circle_at_82%_48%,rgb(140_109_255_/_0.065),transparent_26%),#070b14]"
        id="contenu"
      >
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <StandardsSection />
        <AboutSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
