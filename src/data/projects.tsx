import type { ComponentType } from "react";

import { FredMusicVisual } from "@/components/projects/fred-music-visual";
import { LaPinceVisual } from "@/components/projects/la-pince-visual";
import { TruckMapsVisual } from "@/components/projects/truckmaps-visual";

export type ProjectCaseStudy = {
  slug: "truckmaps" | "fred-music" | "la-pince";
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  categories: string[];
  featured: boolean;
  visual: ComponentType;
  context: string;
  problem: string;
  objectives: string[];
  solutions: string[];
  difficulties: string[];
  results: string[];
  learnings: string[];
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "truckmaps",
    name: "TruckMaps",
    eyebrow: "Application mobile",
    summary:
      "Application mobile pour chauffeurs poids lourds, centrée sur la recherche, l'itinéraire et les points d'intérêt utiles sur la route.",
    description:
      "TruckMaps est le projet phare du portfolio. L'application vise à rendre la navigation poids lourds plus lisible, avec une interface mobile sombre, une carte stylisée et des informations utiles comme les aires de repos ou les parkings.",
    role: "Conception produit et développement full-stack",
    stack: ["React Native", "Node.js", "Express", "TypeScript", "PostgreSQL"],
    categories: ["Mobile", "API", "Cartographie", "Produit"],
    featured: true,
    visual: TruckMapsVisual,
    context:
      "TruckMaps part d'un besoin concret: aider les chauffeurs poids lourds à accéder rapidement à des informations de trajet utiles, dans une interface pensée pour un usage mobile.",
    problem:
      "Les informations utiles à la conduite et aux arrêts peuvent être dispersées ou difficiles à lire rapidement. Le produit doit donc rester clair, direct et robuste, sans ajouter de complexité inutile.",
    objectives: [
      "Créer une expérience mobile lisible pour la recherche et la navigation.",
      "Structurer une base technique capable de gérer des points d'intérêt.",
      "Préparer une API claire entre l'application mobile et les données.",
      "Garder une interface sobre, rapide et compréhensible.",
    ],
    solutions: [
      "Interface mobile sombre avec recherche, carte stylisée et route mise en avant.",
      "Architecture backend Node.js et Express pour exposer les données nécessaires.",
      "Typage TypeScript pour sécuriser les échanges et faciliter la maintenance.",
      "Modélisation PostgreSQL pour préparer les points d'intérêt et informations liées.",
    ],
    difficulties: [
      "Trouver le bon niveau d'information sans surcharger l'écran mobile.",
      "Penser une structure de données évolutive pour des usages cartographiques.",
      "Conserver une expérience crédible sans afficher de statistiques non mesurées.",
    ],
    results: [
      "Une base produit claire pour présenter l'ambition mobile de TruckMaps.",
      "Une direction UI cohérente avec un usage professionnel sur la route.",
      "Une stack réaliste pour connecter application mobile, API et données.",
    ],
    learnings: [
      "L'interface mobile impose une hiérarchie très stricte des informations.",
      "Un projet cartographique doit être pensé autant côté données que côté expérience.",
      "La crédibilité vient de la précision, pas de la quantité d'éléments affichés.",
    ],
  },
  {
    slug: "fred-music",
    name: "Fred Music",
    eyebrow: "Site vitrine premium",
    summary:
      "Site professionnel pour une activité DJ et événementielle, avec une présence sobre, responsive et orientée conversion.",
    description:
      "Fred Music est une vitrine professionnelle pour une activité musicale et événementielle. L'enjeu est de présenter une ambiance premium sans tomber dans une esthétique de boîte de nuit ou de template générique.",
    role: "Conception et développement de site vitrine",
    stack: ["Site vitrine", "Responsive", "SEO", "Administration"],
    categories: ["Vitrine", "Événementiel", "Responsive", "SEO"],
    featured: false,
    visual: FredMusicVisual,
    context:
      "Le projet répond au besoin d'une présence web claire pour une activité DJ et événementielle, avec une image professionnelle adaptée aux mariages, événements privés ou prestations sur mesure.",
    problem:
      "Le sujet musical peut facilement basculer vers une esthétique trop chargée. Le site doit inspirer confiance, donner envie de prendre contact et rester professionnel.",
    objectives: [
      "Installer une image premium et rassurante.",
      "Présenter les prestations de manière simple et lisible.",
      "Prévoir une expérience responsive propre.",
      "Évoquer les fonctionnalités utiles comme la demande de morceau par QR code.",
    ],
    solutions: [
      "Direction visuelle sombre et élégante, sans surcharge.",
      "Hero événementiel orienté conversion.",
      "Structure pensée pour le référencement naturel de base.",
      "Préparation d'une logique administrable sans inventer de stack non confirmée.",
    ],
    difficulties: [
      "Trouver un équilibre entre énergie musicale et sobriété professionnelle.",
      "Évoquer des fonctionnalités utiles sans simuler un produit déjà finalisé.",
      "Garder une lecture claire sur mobile.",
    ],
    results: [
      "Une direction de site vitrine crédible pour une activité événementielle.",
      "Une présentation plus professionnelle que promotionnelle.",
      "Une base prête à enrichir avec contenus, photos et demandes réelles.",
    ],
    learnings: [
      "Un site événementiel premium repose beaucoup sur le ton et la retenue.",
      "Les catégories fonctionnelles sont préférables à une stack inventée.",
      "La conversion doit rester visible sans dominer l'identité.",
    ],
  },
  {
    slug: "la-pince",
    name: "La Pince",
    eyebrow: "Projet d'équipe - Lead Backend",
    summary:
      "Projet d'équipe développé durant la formation CDA, avec un rôle important sur les fondations backend.",
    description:
      "La Pince est une application de gestion réalisée en équipe pendant la formation CDA. Le projet met surtout en avant la structuration backend, la coordination technique et la logique produit métier.",
    role: "Lead Backend sur un projet d'équipe",
    stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker"],
    categories: ["Dashboard", "Backend", "API", "Base de données"],
    featured: false,
    visual: LaPinceVisual,
    context:
      "La Pince a été développée dans un cadre de formation CDA, avec une logique d'application de gestion et un travail en équipe autour d'un produit métier.",
    problem:
      "Le défi principal était de structurer une base backend fiable tout en gardant une interface d'administration compréhensible pour manipuler les données du projet.",
    objectives: [
      "Créer une API organisée et maintenable.",
      "Modéliser les données avec Prisma et PostgreSQL.",
      "Travailler efficacement en équipe avec des responsabilités claires.",
      "Préparer une interface de gestion lisible.",
    ],
    solutions: [
      "Backend Node.js et Express structuré autour des besoins métier.",
      "Utilisation de Prisma pour clarifier la relation entre code et base de données.",
      "Environnement Docker pour faciliter la cohérence de développement.",
      "Interface React et TypeScript orientée administration.",
    ],
    difficulties: [
      "Coordonner les choix techniques dans un projet d'équipe.",
      "Garder un backend lisible pendant l'évolution du périmètre.",
      "Faire cohabiter contraintes pédagogiques et logique produit.",
    ],
    results: [
      "Une application de gestion présentable comme projet d'équipe.",
      "Une expérience backend solide autour d'Express, Prisma et PostgreSQL.",
      "Une meilleure compréhension des responsabilités d'un lead backend.",
    ],
    learnings: [
      "La clarté des contrats API simplifie le travail frontend/backend.",
      "Le rôle de lead backend demande autant de structure que de communication.",
      "Docker et Prisma accélèrent la mise en cohérence d'un projet d'équipe.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
