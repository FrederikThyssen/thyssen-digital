/**
 * Contenu éditorial du site : textes, prix, FAQ, réalisations, avis.
 *
 * Modifiez ce fichier pour changer un texte ou un prix, sans toucher au JSX.
 * - Les prix sont saisis une seule fois en chiffres dans `PRICES` : tous les textes en découlent.
 * - Écrivez les textes normalement (ex. « 990 € », « Délai : 2 semaines ») : les espaces
 *   insécables et les apostrophes typographiques sont ajoutés automatiquement.
 * - Les valeurs entre crochets, ex. [TEXTE AVIS 1], sont à remplacer par vos contenus.
 */
import { GOOGLE_PROFILE_URL } from "@/lib/google";
import { CONTACT_EMAIL } from "@/lib/constants";
import { formatEuro, withFrenchTypography } from "@/lib/typography";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

export type HomeService = {
  id: "vitrine" | "refonte" | "maintenance";
  title: string;
  description: string;
  priceLabel: string;
};

export type WebsiteOffer = {
  id: "essentiel" | "vitrine" | "sur-mesure";
  name: string;
  price: string;
  description: string;
  details: string[];
  delay: string;
  extra?: string;
  note?: string;
  featured?: boolean;
  featuredLabel?: string;
};

export type MaintenancePlan = {
  name: string;
  price: string;
  monthlyEquivalent: string;
  tone: "green" | "blue" | "violet";
  description: string;
  details: string[];
  note: string;
  featured?: boolean;
  featuredLabel?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Project = {
  id: "fred-music" | "maison-marcelito" | "truckmaps";
  name: string;
  description: string;
  url?: string;
  linkLabel?: string;
  partnerNote?: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  badges: string[];
};

export type Review = {
  id: string;
  text: string;
  author: string;
  rating: number;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ReassuranceItem = {
  id: "contact" | "google" | "ownership" | "prices";
  title: string;
};

export type SelectOption = {
  value: string;
  label: string;
};

// ---------------------------------------------------------------------------
// Prix (source unique)
// ---------------------------------------------------------------------------

export const PRICES = {
  essentiel: 990,
  vitrine: 1490,
  surMesure: 2490,
  extraPage: 120,
  maintenance: {
    essentiel: 349,
    confort: 499,
    serenite: 699,
  },
} as const;

const euro = formatEuro;
const perYear = (amount: number) => `${euro(amount)}/an`;
const monthlyEquivalent = (annual: number) =>
  `soit l'équivalent de ${euro(Math.round(annual / 12))}/mois`;

// ---------------------------------------------------------------------------
// Coordonnées et zone
// ---------------------------------------------------------------------------

const rawBusiness = {
  name: "Thyssen Digital",
  owner: "Frédérik Thyssen",
  phoneDisplay: "06 23 47 16 35",
  phoneHref: "tel:+33623471635",
  phoneE164: "+33623471635",
  email: CONTACT_EMAIL,
  emailHref: `mailto:${CONTACT_EMAIL}`,
  googleProfileUrl: GOOGLE_PROFILE_URL,
  googleRatingLabel: "5/5 sur Google",
  locality: "Sailly-Saillisel",
  postalCode: "80360",
  region: "Hauts-de-France",
  country: "FR",
  regionLabel: "Hauts-de-France (Somme, Pas-de-Calais, Nord, Aisne)",
  responseTime: "Réponse sous 24 h ouvrées.",
  departments: ["Somme", "Pas-de-Calais", "Nord", "Aisne"],
  cities: ["Amiens", "Arras", "Cambrai", "Saint-Quentin", "Péronne", "Bapaume", "Albert"],
  openingHours: { days: "Mo-Fr", opens: "09:00", closes: "18:30" },
  priceRange: `${PRICES.essentiel} € - ${PRICES.surMesure} €`,
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

const rawNavItems: NavItem[] = [
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Réalisations", href: "/#realisations", sectionId: "realisations" },
  { label: "À propos", href: "/#a-propos", sectionId: "a-propos" },
  { label: "Processus", href: "/#processus", sectionId: "processus" },
  { label: "Tarifs", href: "/tarifs", sectionId: "tarifs" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

// ---------------------------------------------------------------------------
// Page d'accueil
// ---------------------------------------------------------------------------

const rawHome = {
  hero: {
    title:
      "Création de sites web pour les artisans, commerçants et TPE des Hauts-de-France",
    subtitle: `Un site professionnel qui vous rend visible sur Google et vous apporte des demandes clients. Dès ${euro(PRICES.essentiel)}, livré en 2 à 4 semaines.`,
    localLine:
      "Basé entre Péronne, Bapaume et Cambrai — j'interviens dans la Somme, le Pas-de-Calais, le Nord et l'Aisne.",
    primaryCta: "Demander un devis gratuit",
    secondaryCta: `Appeler le ${rawBusiness.phoneDisplay}`,
    trustLabel: "Ils m'ont fait confiance",
    trustItems: ["Fred Music", "Maison Marcelito"],
  },
  services: {
    eyebrow: "Services",
    title: "Création et refonte de site internet",
    description:
      "Trois offres simples pour être trouvé sur Google, rassurer vos clients et recevoir des demandes.",
    linkLabel: "Voir les tarifs",
    items: [
      {
        id: "vitrine",
        title: "Site vitrine",
        description:
          "Présentez votre activité, soyez trouvé sur Google et recevez des demandes.",
        priceLabel: `Dès ${euro(PRICES.essentiel)}`,
      },
      {
        id: "refonte",
        title: "Refonte de site",
        description:
          "Votre site est daté ou ne vous rapporte rien ? Je le modernise sans repartir de zéro.",
        priceLabel: `Mêmes tarifs que la création, dès ${euro(PRICES.essentiel)}`,
      },
      {
        id: "maintenance",
        title: "Maintenance & suivi",
        description: "Mises à jour, sauvegardes, sécurité : vous ne vous occupez de rien.",
        priceLabel: `Dès ${perYear(PRICES.maintenance.essentiel)}`,
      },
    ] satisfies HomeService[],
    specificNeed:
      "Besoin plus spécifique (réservation en ligne, espace client, outil de gestion, automatisation) ?",
    specificNeedCta: "Parlons-en.",
  },
  projects: {
    eyebrow: "Réalisations",
    title: "Des sites créés pour de vrais clients",
    description: "Quelques projets récents, avec leur objectif et ce qu'ils ont changé.",
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Ce que mes clients en disent",
    description: "Les avis publiés sur ma fiche Google.",
    cta: "Voir tous les avis sur Google",
    leaveReviewCta: "Laisser un avis Google",
  },
  reassurance: {
    eyebrow: "Pourquoi moi",
    title: "Pourquoi travailler avec moi",
    items: [
      { id: "contact", title: "Un seul interlocuteur, joignable par téléphone" },
      { id: "google", title: "Un site rapide sur mobile et bien référencé sur Google" },
      {
        id: "ownership",
        title: "Votre site vous appartient : code, nom de domaine, hébergement",
      },
      { id: "prices", title: "Des prix clairs, annoncés avant de commencer" },
    ] satisfies ReassuranceItem[],
  },
  about: {
    eyebrow: "À propos",
    title: "Un développeur web près de chez vous",
    text: "Je suis Frédérik Thyssen, développeur web basé dans les Hauts-de-France, à la frontière de la Somme, du Pas-de-Calais et du Nord. Je crée des sites web et des applications pour les artisans, commerçants et TPE de la région. Ma méthode : comprendre votre activité, vous expliquer chaque étape simplement et tenir les délais annoncés. Avec moi, un seul interlocuteur, joignable, et un site qui vous appartient.",
    signature: "Frédérik Thyssen, Thyssen Digital",
  },
  process: {
    eyebrow: "Processus",
    title: "Comment se passe la création de votre site",
    description: "Cinq étapes simples, du premier appel au suivi après la mise en ligne.",
    steps: [
      {
        number: "01",
        title: "Échange",
        description:
          "Un premier échange gratuit, par téléphone ou sur place, pour comprendre votre activité et vos besoins.",
      },
      {
        number: "02",
        title: "Proposition et devis",
        description:
          "Je vous envoie une proposition claire et un devis détaillé, avec le prix et le délai.",
      },
      {
        number: "03",
        title: "Création",
        description:
          "Je crée votre site et vous le montre en cours de route. 2 allers-retours de corrections sont inclus.",
      },
      {
        number: "04",
        title: "Mise en ligne",
        description:
          "Je mets le site en ligne et configure votre nom de domaine. Vous n'avez rien de technique à faire.",
      },
      {
        number: "05",
        title: "Suivi",
        description:
          "Je reste joignable après la mise en ligne. Avec une formule de maintenance, je m'occupe de tout.",
      },
    ] satisfies ProcessStep[],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes sur la création de site",
    description: "Prix, délais, paiement : les réponses aux questions qu'on me pose le plus.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Demandez votre devis gratuit",
    description:
      "Décrivez votre activité et votre besoin en quelques lignes. Je vous rappelle ou vous réponds par email avec une proposition claire.",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    zoneLabel: "Zone d'intervention",
    submit: "Recevoir mon devis gratuit",
    submitting: "Envoi en cours...",
    success: "Merci, votre demande est bien envoyée. Je vous réponds sous 24 h ouvrées.",
    error: `L'envoi n'a pas fonctionné. Réessayez, ou appelez-moi au ${rawBusiness.phoneDisplay}.`,
    privacyNotice: "Vos données servent uniquement à répondre à votre demande.",
    privacyLinkLabel: "Politique de confidentialité",
    budgetOptions: [
      { value: "Moins de 1 000 €", label: "Moins de 1 000 €" },
      { value: "1 000 – 2 000 €", label: "1 000 – 2 000 €" },
      { value: "Plus de 2 000 €", label: "Plus de 2 000 €" },
      { value: "Je ne sais pas encore", label: "Je ne sais pas encore" },
    ] satisfies SelectOption[],
    projectTypeOptions: [
      { value: "Nouveau site", label: "Nouveau site" },
      { value: "Refonte", label: "Refonte" },
      { value: "Maintenance", label: "Maintenance" },
      { value: "Autre", label: "Autre" },
    ] satisfies SelectOption[],
  },
};

// ---------------------------------------------------------------------------
// Réalisations (ordre d'affichage)
// ---------------------------------------------------------------------------

const rawProjects: Project[] = [
  {
    id: "fred-music",
    name: "Fred Music",
    description:
      "Refonte complète du site d'un DJ mariage & événementiel : nouveau design, espace d'administration, QR code, formulaire de contact. Une image plus professionnelle et des demandes simplifiées.",
    url: "https://fredmusic.fr",
    linkLabel: "Voir le site Fred Music",
    image: "/images/image-fredmusic.png",
    imageAlt: "Page d'accueil du site Fred Music, DJ pour mariages et événements.",
    imagePosition: "center top",
    badges: ["Refonte", "Responsive", "Administration", "SEO"],
  },
  {
    id: "maison-marcelito",
    name: "Maison Marcelito",
    description:
      "Site de commande de repas faits maison livrés chaque semaine dans l'Hérault : carte de la semaine, panier, créneaux de livraison.",
    url: "https://www.maisonmarcelito.fr",
    linkLabel: "Voir le site Maison Marcelito",
    partnerNote: "En partenariat avec Artisanat Digital.",
    image: "/images/image-marcelito.png",
    imageAlt: "Site Maison Marcelito : carte de la semaine et commande de repas faits maison.",
    imagePosition: "center top",
    badges: ["Commande en ligne", "Panier", "Responsive"],
  },
  {
    id: "truckmaps",
    name: "TruckMaps",
    description:
      "Application GPS communautaire pour les chauffeurs poids lourds, conçue et développée de A à Z : itinéraires adaptés, signalements, points d'intérêt.",
    image: "/images/image-truckmaps.png",
    imageAlt: "Interface de l'application TruckMaps affichée sur un écran GPS.",
    imagePosition: "center",
    badges: ["React Native", "Node.js", "TypeScript", "PostgreSQL"],
  },
];

// ---------------------------------------------------------------------------
// Avis de secours (affichés si les avis Google ne sont pas disponibles)
// ---------------------------------------------------------------------------

const rawFallbackReviews: Review[] = [
  { id: "avis-1", text: "[TEXTE AVIS 1]", author: "[PRÉNOM 1]", rating: 5 },
  { id: "avis-2", text: "[TEXTE AVIS 2]", author: "[PRÉNOM 2]", rating: 5 },
];

// ---------------------------------------------------------------------------
// FAQ (page d'accueil + données structurées FAQPage)
// ---------------------------------------------------------------------------

const rawFaq: FaqItem[] = [
  {
    question: "Combien coûte un site internet ?",
    answer: `Dès ${euro(PRICES.essentiel)} pour un site Essentiel, ${euro(PRICES.vitrine)} pour un site vitrine de 5 pages. Devis gratuit et détaillé avant de commencer.`,
  },
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "2 à 4 semaines selon l'offre, à partir du moment où j'ai reçu vos contenus (textes, photos, logo).",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "30 % d'acompte à la commande, le solde à la mise en ligne.",
  },
  {
    question: "Qui fournit les textes et les photos ?",
    answer:
      "Vous me fournissez vos textes et photos, je les mets en forme et vous conseille. Si vous préférez, je peux rédiger les textes pour vous, en option sur devis.",
  },
  {
    question: "Puis-je demander des corrections ?",
    answer: "2 allers-retours de corrections sont inclus avant la mise en ligne.",
  },
  {
    question: "Le nom de domaine et l'hébergement sont-ils compris ?",
    answer:
      "Ils sont à votre nom et à votre charge (environ 50 à 150 € par an selon l'hébergeur). Je m'occupe de toute la configuration.",
  },
  {
    question: "Dans quelle zone intervenez-vous ?",
    answer:
      "J'interviens dans toute la région Hauts-de-France (Somme, Pas-de-Calais, Nord, Aisne) et à distance partout en France.",
  },
  {
    question: "À qui appartient le site une fois livré ?",
    answer:
      "À vous. Le code, le nom de domaine et l'hébergement sont à votre nom, sans dépendance envers moi.",
  },
  {
    question: "Mon site sera-t-il bien référencé sur Google ?",
    answer:
      "Oui. Chaque site est préparé pour Google dès le départ : pages rapides, bien structurées et adaptées au mobile. Je vous conseille aussi pour votre fiche Google.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer: `Je reste joignable. Avec une formule de maintenance dès ${perYear(PRICES.maintenance.essentiel)}, je m'occupe des mises à jour, des sauvegardes et de la sécurité : vous ne vous occupez de rien.`,
  },
  {
    question: "Puis-je faire évoluer mon site plus tard ?",
    answer:
      "Oui. Nouvelles pages ou nouvelles fonctions s'ajoutent au fil du temps, sans tout refaire.",
  },
];

// ---------------------------------------------------------------------------
// Page tarifs
// ---------------------------------------------------------------------------

const rawPricingPage = {
  eyebrow: "Tarifs",
  title: "Des tarifs clairs, sans surprise.",
  subtitle: "Pour les artisans, indépendants, commerçants et TPE des Hauts-de-France.",
  offersEyebrow: "Mes offres",
  offersTitle: "Création de site internet",
  offersDescription:
    "Trois formules selon votre besoin. Le prix est confirmé dans un devis gratuit avant de commencer.",
  redesignLine: "Vous avez déjà un site ? La refonte suit les mêmes tarifs.",
  redesignLinkLabel: "Voir la refonte du site Fred Music",
  includedTitle: "Inclus dans chaque création",
  included: [
    "2 allers-retours de corrections",
    "Mise en forme de vos textes et photos (rédaction complète en option)",
    "Mise en ligne et configuration du nom de domaine",
    "Le site vous appartient (code, domaine, hébergement à votre nom)",
    "Nom de domaine + hébergement : à votre charge, environ 50 à 150 €/an",
  ],
  maintenanceEyebrow: "Maintenance",
  maintenanceTitle: "Maintenance de votre site",
  maintenanceDescription:
    "Paiement annuel. L'équivalent mensuel est indiqué à titre indicatif.",
  termsTitle: "Modalités",
  terms: [
    "30 % d'acompte à la commande, solde à la mise en ligne.",
    "Prix nets — TVA non applicable, art. 293 B du CGI.",
    "Rédaction des textes : en option, sur devis.",
  ],
  complementaryTitle: "Prestations complémentaires sur devis",
  complementaryDescription: "Pour aller plus loin, selon votre activité.",
  finalCta: {
    title: "Pas sûr de l'offre qui vous convient ?",
    text: "Appelez-moi, on en parle 15 minutes, gratuitement.",
    phoneCta: `Appeler le ${rawBusiness.phoneDisplay}`,
    quoteCta: "Demander un devis gratuit",
  },
};

const rawWebsiteOffers: WebsiteOffer[] = [
  {
    id: "essentiel",
    name: "Site Essentiel",
    price: `Dès ${euro(PRICES.essentiel)}`,
    description: "Une page claire pour présenter votre activité et être contacté.",
    details: [
      "1 page",
      "Responsive (mobile, tablette, ordinateur)",
      "Formulaire de contact",
      "SEO de base",
      "Mise en ligne accompagnée",
    ],
    delay: "Délai : environ 2 semaines",
  },
  {
    id: "vitrine",
    name: "Site Vitrine",
    price: `Dès ${euro(PRICES.vitrine)}`,
    description: "Le site complet pour présenter vos services et rassurer vos clients.",
    featured: true,
    featuredLabel: "Le plus choisi",
    details: [
      "5 pages incluses",
      "Design sur mesure",
      "Responsive (mobile, tablette, ordinateur)",
      "Formulaire de contact",
      "SEO de base",
      "Conseils pour votre fiche Google",
    ],
    extra: `Page supplémentaire : ${euro(PRICES.extraPage)}`,
    delay: "Délai : 2 à 4 semaines",
  },
  {
    id: "sur-mesure",
    name: "Site Sur-Mesure",
    price: `Dès ${euro(PRICES.surMesure)}`,
    description: "Pour les besoins particuliers de votre activité.",
    details: ["Réservation en ligne", "Espace client", "Fonctionnalités spécifiques"],
    note: "Prix final selon cahier des charges, devis détaillé après échange.",
    delay: "Délai : défini dans le devis",
  },
];

const rawMaintenancePlans: MaintenancePlan[] = [
  {
    name: "Essentiel",
    price: perYear(PRICES.maintenance.essentiel),
    monthlyEquivalent: monthlyEquivalent(PRICES.maintenance.essentiel),
    tone: "green",
    description: "Les bases pour garder un site à jour, sauvegardé et surveillé.",
    details: [
      "Mises à jour techniques",
      "Mises à jour de sécurité",
      "Sauvegardes régulières",
      "Surveillance du site",
      "Assistance par email",
    ],
    note: "Vous gardez la gestion de votre hébergement et de votre nom de domaine.",
  },
  {
    name: "Confort",
    price: perYear(PRICES.maintenance.confort),
    monthlyEquivalent: monthlyEquivalent(PRICES.maintenance.confort),
    tone: "blue",
    featured: true,
    featuredLabel: "Recommandé",
    description: "L'accompagnement recommandé pour être tranquille toute l'année.",
    details: [
      "Tout le contenu de la formule Essentiel",
      "1 heure de modifications du site par an",
      "Assistance prioritaire",
      "Conseils personnalisés",
    ],
    note: "Vous gardez la gestion de votre hébergement et de votre nom de domaine.",
  },
  {
    name: "Sérénité",
    price: perYear(PRICES.maintenance.serenite),
    monthlyEquivalent: monthlyEquivalent(PRICES.maintenance.serenite),
    tone: "violet",
    description: "Je m'occupe de tout, y compris des démarches pour le domaine et l'hébergement.",
    details: [
      "Tout le contenu de la formule Confort",
      "3 heures de modifications du site par an",
      "Gestion administrative du nom de domaine",
      "Gestion administrative de l'hébergement",
    ],
    note: "Le coût de l'hébergement et du nom de domaine n'est pas inclus : je m'occupe des démarches, vous remboursez uniquement le coût réel.",
  },
];

const rawComplementaryServices: string[] = [
  "Refonte de site internet",
  "Référencement sur Google (SEO)",
  "Fonctionnalités sur mesure",
  "Automatisation des tâches répétitives",
  "Outils de gestion pour votre activité",
  "Fiche Google et présence en ligne",
  "Nouvelles pages et évolutions",
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

const rawFooter = {
  tagline: "Création et refonte de sites web pour les artisans et TPE des Hauts-de-France.",
  zonesLabel: "Zones d'intervention",
  zones: `${rawBusiness.cities.join(", ")} — et toute la région Hauts-de-France.`,
  googleLinkLabel: "Ma fiche Google",
};

// ---------------------------------------------------------------------------
// Exports (typographie française appliquée)
// ---------------------------------------------------------------------------

export const business = withFrenchTypography(rawBusiness);
export const navItems = withFrenchTypography(rawNavItems);
export const home = withFrenchTypography(rawHome);
export const projects = withFrenchTypography(rawProjects);
export const fallbackReviews = withFrenchTypography(rawFallbackReviews);
export const faq = withFrenchTypography(rawFaq);
export const pricingPage = withFrenchTypography(rawPricingPage);
export const websiteOffers = withFrenchTypography(rawWebsiteOffers);
export const maintenancePlans = withFrenchTypography(rawMaintenancePlans);
export const complementaryServices = withFrenchTypography(rawComplementaryServices);
export const footer = withFrenchTypography(rawFooter);
