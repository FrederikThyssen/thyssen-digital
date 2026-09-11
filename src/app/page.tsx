import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BrandSignatureBand } from "@/components/sections/brand-signature-band";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { StandardsSection } from "@/components/sections/standards";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background" id="contenu">
        <Hero />
        <BrandSignatureBand />
        <ServicesSection />
        <ProjectsSection />
        <StandardsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
