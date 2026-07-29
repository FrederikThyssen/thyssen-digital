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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgb(34_211_238_/_0.055),transparent_24%),radial-gradient(circle_at_82%_48%,rgb(140_109_255_/_0.065),transparent_26%),#070b14]"
        id="contenu"
      >
        <Hero />
        <BrandSignatureBand />
        <ServicesSection />
        <ProjectsSection />
        <StandardsSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
