import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjectBySlug, projects } from "@/data/projects";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.name} - Étude de cas`;
  const url = `${SITE_URL}/projets/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: project.summary,
      url,
      siteName: BRAND_NAME,
      type: "article",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary",
      title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Visual = project.visual;
  const pageUrl = `${SITE_URL}/projets/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: pageUrl,
    creator: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    keywords: [...project.categories, ...project.stack].join(", "),
  };

  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <section className="relative overflow-hidden pt-32">
          <Container className="grid gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <FadeUp>
              <Badge variant="accent">{project.eyebrow}</Badge>
              <h1 className="mt-7 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <Badge key={category} variant="neutral">
                    {category}
                  </Badge>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <Visual />
            </FadeUp>
          </Container>
        </section>

        <Container>
          <Divider variant="gradient" />
        </Container>

        <CaseStudySection
          description={project.context}
          eyebrow="Contexte"
          title="Le point de départ"
        />
        <CaseStudySection
          description={project.problem}
          eyebrow="Problème"
          title="Ce qu'il fallait résoudre"
        />
        <CaseStudyList
          eyebrow="Objectifs"
          items={project.objectives}
          title="Les priorités du projet"
        />
        <CaseStudyList
          eyebrow="Solutions"
          items={project.solutions}
          title="Les réponses apportées"
        />
        <StackSection stack={project.stack} />
        <CaseStudyList
          eyebrow="Difficultés"
          items={project.difficulties}
          title="Les points exigeants"
        />
        <CaseStudyList
          eyebrow="Résultats"
          items={project.results}
          title="Ce que le projet démontre"
        />
        <CaseStudyList
          eyebrow="Apprentissages"
          items={project.learnings}
          title="Ce que j'ai appris"
        />

        <section className="py-20">
          <Container>
            <Card variant="glass">
              <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                    Réalisations
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Retour aux projets Thyssen Digital.
                  </p>
                </div>
                <Button
                  href="/#realisations"
                  leadingIcon={<ArrowLeft aria-hidden="true" className="size-4" />}
                  variant="secondary"
                >
                  Retour vers les réalisations
                </Button>
              </CardContent>
            </Card>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
    </>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <FadeUp>
          <SectionHeading
            description={description}
            eyebrow={eyebrow}
            title={title}
          />
        </FadeUp>
      </Container>
    </section>
  );
}

function CaseStudyList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="py-16">
      <Container>
        <FadeUp>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </FadeUp>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <StaggerItem key={item}>
              <Card className="h-full" interactive variant="outline">
                <CardContent className="p-5">
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function StackSection({ stack }: { stack: string[] }) {
  return (
    <section className="py-16">
      <Container>
        <FadeUp>
          <SectionHeading
            description="Technologies et catégories retenues pour présenter le périmètre réel du projet."
            eyebrow="Stack technique"
            title="Les fondations utilisées"
          />
        </FadeUp>
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="accent">
              {item}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
