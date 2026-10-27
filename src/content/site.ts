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
  /** Short label shown above the name on the featured (first) project. */
  kicker?: string;
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

export type LocalPage = {
  /** URL path segment, e.g. "creation-site-internet-arras". */
  slug: string;
  city: string;
  department: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  titleHighlight: string;
  intro: string;
  audienceTitle: string;
  audience: string[];
  localTitle: string;
  localText: string;
  nearbyTitle: string;
  nearby: string[];
  faq: FaqItem[];
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
    eyebrow: "Développeur web freelance · Hauts-de-France",
    // Part of the title displayed in the serif italic accent (must appear in `title`).
    titleHighlight: "artisans, commerçants et TPE",
    title:
      "Création de sites web pour les artisans, commerçants et TPE des Hauts-de-France",
    subtitle: `Un site professionnel qui vous rend visible sur Google et vous apporte des demandes clients. Dès ${euro(PRICES.essentiel)}, livré en 2 à 4 semaines.`,
    localLine:
      "Basé entre Péronne, Bapaume et Cambrai — j'interviens dans la Somme, le Pas-de-Calais, le Nord et l'Aisne.",
    primaryCta: "Demander un devis gratuit",
    secondaryCta: `Appeler le ${rawBusiness.phoneDisplay}`,
    trustLabel: "Ils m'ont fait confiance",
    trustItems: ["Fred Music", "Maison Marcelito"],
    visual: {
      imageAlt: "Site Fred Music, refonte réalisée par Thyssen Digital, affiché dans un navigateur.",
      browserUrl: "fredmusic.fr",
      requestTitle: "Nouvelle demande de devis",
      requestText: "Reçue via votre site, directement par email",
      mobileTitle: "Pensé pour le mobile",
      mobileText: "Rapide et lisible sur téléphone",
    },
  },
  marquee: [
    "Visible sur Google",
    "Rapide sur mobile",
    "Un seul interlocuteur",
    "Site à votre nom",
    `Dès ${euro(PRICES.essentiel)}`,
    "Livré en 2 à 4 semaines",
    "Devis gratuit",
    "Somme · Pas-de-Calais · Nord · Aisne",
  ],
  keyFacts: [
    { value: euro(PRICES.essentiel), label: "pour un site professionnel" },
    { value: "2 à 4", label: "semaines de délai" },
    { value: "5/5", label: "sur Google" },
    { value: "1", label: "seul interlocuteur, joignable" },
  ],
  finalCta: {
    eyebrow: "Votre projet",
    title: "Prêt à être trouvé sur Google ?",
    titleHighlight: "trouvé sur Google",
    text: "Un premier échange gratuit de 15 minutes, par téléphone ou sur place, pour faire le point sur votre besoin.",
    primaryCta: "Demander un devis gratuit",
    secondaryCta: `Appeler le ${rawBusiness.phoneDisplay}`,
  },
  services: {
    eyebrow: "Services",
    title: "Création et refonte de site internet",
    titleHighlight: "site internet",
    description:
      "Trois offres simples pour être trouvé sur Google, rassurer vos clients et recevoir des demandes.",
    linkLabel: "Voir les tarifs",
    items: [
      {
        id: "vitrine",
        title: "Site internet",
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
    titleHighlight: "vrais clients",
    description: "Quelques projets récents, avec leur objectif et ce qu'ils ont changé.",
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Ce que mes clients en disent",
    titleHighlight: "en disent",
    description: "Les avis publiés sur ma fiche Google.",
    cta: "Voir tous les avis sur Google",
    leaveReviewCta: "Laisser un avis Google",
    emptyText:
      "Retrouvez les avis de mes clients directement sur ma fiche Google, et partagez le vôtre si je vous ai accompagné.",
  },
  reassurance: {
    eyebrow: "Pourquoi moi",
    title: "Pourquoi travailler avec moi",
    titleHighlight: "avec moi",
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
    titleHighlight: "près de chez vous",
    text: "Je suis Frédérik Thyssen, développeur web basé dans les Hauts-de-France, à la frontière de la Somme, du Pas-de-Calais et du Nord. Je crée des sites web et des applications pour les artisans, commerçants et TPE de la région. Ma méthode : comprendre votre activité, vous expliquer chaque étape simplement et tenir les délais annoncés. Avec moi, un seul interlocuteur, joignable, et un site qui vous appartient.",
    signature: "Frédérik Thyssen, Thyssen Digital",
  },
  process: {
    eyebrow: "Processus",
    title: "Comment se passe la création de votre site",
    titleHighlight: "votre site",
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
    titleHighlight: "fréquentes",
    description: "Prix, délais, paiement : les réponses aux questions qu'on me pose le plus.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Demandez votre devis gratuit",
    titleHighlight: "devis gratuit",
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
    kicker: "Refonte complète",
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
  titleHighlight: "sans surprise.",
  subtitle: "Pour les artisans, indépendants, commerçants et TPE des Hauts-de-France.",
  offersEyebrow: "Mes offres",
  offersTitle: "Création de site internet",
  offersTitleHighlight: "site internet",
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
  maintenanceTitleHighlight: "votre site",
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
// Pages locales (une page par ville, contenu propre à chacune)
// ---------------------------------------------------------------------------

const rawLocalPages: LocalPage[] = [
  {
    slug: "creation-site-internet-arras",
    city: "Arras",
    department: "Pas-de-Calais",
    metaTitle: "Création site internet Arras dès 990 € | Thyssen Digital",
    metaDescription:
      "Création et refonte de site internet à Arras pour artisans, commerçants et TPE : site vitrine rapide sur mobile et visible sur Google. Dès 990 €, devis gratuit.",
    title: "Création de site internet à Arras",
    titleHighlight: "à Arras",
    intro:
      "Vous êtes artisan, commerçant ou dirigeant d'une TPE à Arras ? Je crée des sites internet clairs et rapides, pensés pour être trouvés sur Google par vos clients de l'Arrageois et vous apporter des demandes de devis.",
    audienceTitle: "Pour les professionnels d'Arras",
    audience: [
      "Commerces et restaurants du centre-ville qui veulent être trouvés par les habitants et les visiteurs",
      "Artisans du bâtiment qui veulent présenter leurs chantiers et recevoir des demandes de devis",
      "Indépendants et professions libérales qui ont besoin d'un site sérieux et facile à mettre à jour",
    ],
    localTitle: "Un développeur web du Pas-de-Calais, pas une plateforme",
    localText:
      "Je suis basé à Sailly-Saillisel, à la frontière de la Somme, du Pas-de-Calais et du Nord. Pour un projet à Arras, le premier échange peut se faire par téléphone ou sur place. Vous avez un seul interlocuteur, du devis à la mise en ligne, et votre site reste à votre nom.",
    nearbyTitle: "J'interviens aussi autour d'Arras",
    nearby: ["Saint-Laurent-Blangy", "Achicourt", "Beaurains", "Dainville", "Arras et l'Arrageois"],
    faq: [
      {
        question: "Faut-il être à Arras pour travailler ensemble ?",
        answer:
          "Non. Le premier échange peut se faire par téléphone ou sur place, puis tout le suivi se fait à distance : je vous montre le site en cours de création et vous validez chaque étape.",
      },
      {
        question: "Mon site sera-t-il visible quand on cherche une entreprise à Arras ?",
        answer:
          "Chaque site est préparé pour le référencement local : pages rapides, textes qui citent votre ville et vos services, conseils pour votre fiche Google. La visibilité se construit ensuite avec le temps et les avis de vos clients.",
      },
      {
        question: "Combien coûte un site internet pour une entreprise d'Arras ?",
        answer: `Les mêmes tarifs partout : dès ${euro(PRICES.essentiel)} pour un site d'une page, ${euro(PRICES.vitrine)} pour un site vitrine de 5 pages. Devis gratuit et détaillé avant de commencer.`,
      },
    ],
  },
  {
    slug: "creation-site-internet-amiens",
    city: "Amiens",
    department: "Somme",
    metaTitle: "Création site internet Amiens dès 990 € | Thyssen Digital",
    metaDescription:
      "Création et refonte de site internet à Amiens pour artisans, commerçants et indépendants : un site rapide et visible sur Google. Dès 990 €, devis gratuit.",
    title: "Création de site internet à Amiens",
    titleHighlight: "à Amiens",
    intro:
      "Artisan, commerçant ou indépendant à Amiens, vous voulez un site qui donne confiance et vous apporte des clients ? Je crée des sites vitrines et je modernise les sites existants pour les entreprises amiénoises et de la Somme.",
    audienceTitle: "Pour les entreprises d'Amiens",
    audience: [
      "Commerçants et restaurateurs qui veulent se démarquer face aux grandes enseignes",
      "Artisans qui veulent un site à leur image, avec leurs réalisations et un formulaire de devis",
      "Indépendants, coachs et professions libérales qui veulent une présence en ligne professionnelle",
    ],
    localTitle: "Un développeur web de la Somme",
    localText:
      "Je travaille depuis Sailly-Saillisel, dans la Somme. Pour une entreprise d'Amiens, je m'adapte : échange par téléphone ou rendez-vous sur place pour comprendre votre activité, puis un suivi simple, avec des délais tenus et un seul interlocuteur.",
    nearbyTitle: "J'interviens aussi autour d'Amiens",
    nearby: ["Longueau", "Camon", "Rivery", "Salouël", "Amiens Métropole"],
    faq: [
      {
        question: "Pourquoi choisir un freelance plutôt qu'une agence à Amiens ?",
        answer:
          "Vous parlez directement à la personne qui crée votre site, sans intermédiaire. Les prix sont annoncés avant de commencer, et vous restez propriétaire de votre site, de votre nom de domaine et de votre hébergement.",
      },
      {
        question: "Pouvez-vous refaire mon site actuel ?",
        answer: `Oui. Je reprends votre site existant, je garde ce qui fonctionne et je le modernise. La refonte suit les mêmes tarifs que la création, dès ${euro(PRICES.essentiel)}.`,
      },
      {
        question: "En combien de temps mon site peut-il être en ligne ?",
        answer:
          "2 à 4 semaines selon l'offre, à partir du moment où j'ai reçu vos contenus (textes, photos, logo).",
      },
    ],
  },
  {
    slug: "creation-site-internet-cambrai",
    city: "Cambrai",
    department: "Nord",
    metaTitle: "Création site internet Cambrai dès 990 € | Thyssen Digital",
    metaDescription:
      "Création de site internet à Cambrai et dans le Cambrésis pour artisans, commerçants et TPE : site vitrine rapide, visible sur Google, à votre nom. Dès 990 €.",
    title: "Création de site internet à Cambrai",
    titleHighlight: "à Cambrai",
    intro:
      "Vous dirigez une entreprise à Cambrai ou dans le Cambrésis ? Je crée des sites internet simples à utiliser, rapides sur mobile et préparés pour Google, pour que vos clients vous trouvent et vous contactent.",
    audienceTitle: "Pour les professionnels du Cambrésis",
    audience: [
      "Artisans qui veulent être trouvés par les particuliers du Cambrésis",
      "Commerces de proximité qui veulent afficher leurs horaires, leurs services et leurs nouveautés",
      "TPE qui veulent remplacer un site daté par un site moderne et rassurant",
    ],
    localTitle: "Un développeur web proche du Cambrésis",
    localText:
      "Basé entre Péronne, Bapaume et Cambrai, je connais le tissu économique local. Le premier échange est gratuit, par téléphone ou sur place. Vous savez dès le départ ce que vous payez et quand votre site sera en ligne.",
    nearbyTitle: "J'interviens aussi autour de Cambrai",
    nearby: ["Caudry", "Proville", "Escaudœuvres", "Le Cateau-Cambrésis", "Tout le Cambrésis"],
    faq: [
      {
        question: "Proposez-vous la maintenance du site après la mise en ligne ?",
        answer: `Oui, avec des formules annuelles dès ${perYear(PRICES.maintenance.essentiel)} : mises à jour, sauvegardes et sécurité. Vous ne vous occupez de rien.`,
      },
      {
        question: "Qui s'occupe du nom de domaine et de l'hébergement ?",
        answer:
          "Ils sont à votre nom et à votre charge (environ 50 à 150 € par an selon l'hébergeur). Je m'occupe de toute la configuration.",
      },
      {
        question: "Je n'ai pas de textes ni de photos, est-ce un problème ?",
        answer:
          "Non. Je vous conseille sur ce qu'il faut montrer et je mets en forme vos contenus. Si vous préférez, je peux rédiger les textes pour vous, en option sur devis.",
      },
    ],
  },
];

const rawLocalPagesSection = {
  servicesTitle: "Ce que je propose",
  footerTitle: "Création de site par ville",
  faqTitle: "Questions fréquentes",
};

// ---------------------------------------------------------------------------
// Informations légales (mentions légales et politique de confidentialité)
// ---------------------------------------------------------------------------

const rawLegal = {
  status: "Entrepreneur individuel (micro-entreprise)",
  siret: "107 843 187 00017",
  address: "21 bis rue du Commandant Thierry, 80360 Sailly-Saillisel",
  publicationDirector: "Frédérik Thyssen",
  vat: "TVA non applicable, art. 293 B du CGI.",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },
  emailProvider: {
    name: "Resend",
    website: "https://resend.com",
  },
  retention:
    "Les messages reçus via le formulaire sont conservés 3 ans à compter du dernier échange, puis supprimés.",
  transferSafeguards:
    "Ces transferts sont encadrés par les garanties prévues par le RGPD (Data Privacy Framework ou clauses contractuelles types de la Commission européenne).",
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
export const legal = withFrenchTypography(rawLegal);
export const localPages = withFrenchTypography(rawLocalPages);
export const localPagesSection = withFrenchTypography(rawLocalPagesSection);
