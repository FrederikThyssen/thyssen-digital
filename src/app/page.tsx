import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <PlaceholderSection id="services" title="Services" />
        <PlaceholderSection id="realisations" title="Réalisations" />
        <PlaceholderSection id="a-propos" title="À propos" />
        <PlaceholderSection id="contact" title="Contact" />
      </main>
    </>
  );
}

function PlaceholderSection({ id, title }: { id: string; title: string }) {
  return (
    <section className="py-16" id={id}>
      <Container>
        <Divider variant="gradient" />
        <div className="py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            {title}
          </p>
        </div>
      </Container>
    </section>
  );
}
