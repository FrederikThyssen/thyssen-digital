# Composants

Les textes et les prix ne sont jamais écrits dans les composants : ils viennent de `src/content/site.ts`.

## Imports

```tsx
import { BrandLogo } from "@/components/brand/brand-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { NoBreakPlaces } from "@/components/ui/no-break-places";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
```

## Section et SectionHeading

`Section` donne le rythme vertical et la bande de fond (`tone="white"` par défaut, `tone="soft"` pour la bande gris-bleu). Alterner les deux d'une section à l'autre.

`SectionHeading` affiche le sur-titre, le titre (H2, ou H1 avec `as="h1"`) et la description. La prop `highlight` met une partie du titre en serif italique au dégradé du logo ; sa valeur se règle dans le fichier de contenu (`titleHighlight`).

```tsx
<Section id="services" tone="soft">
  <Container>
    <SectionHeading eyebrow="Services" highlight="site internet" title="Création et refonte de site internet" />
  </Container>
</Section>
```

## Button

Variantes : `primary` (action principale, bleu du logo), `secondary` (action visible mais calme), `ghost`, `inverse` (sur fond sombre). Tailles : `sm`, `md`, `lg`. Fonctionne comme bouton natif ou comme lien via `href`. Le texte peut passer à la ligne sous 640 px.

## Card

Variantes : `surface` (par défaut), `outline`, `glass`. `interactive` ajoute une légère élévation au survol ; la classe `card-glow` ajoute la bordure lumineuse au dégradé du logo.

## Badge

Variantes : `neutral`, `accent`, `outline`. Pour les catégories et les technologies des réalisations.

## BrandLogo

- `tone="light"` : logo vectoriel pour fond clair (header, à propos).
- `tone="accent"` : logo officiel en image, pour fond sombre (footer).
- `variant` : `mark` ou `horizontal`. `decorative` si le nom de marque est déjà lisible à côté.

## NoBreakPlaces

Empêche les noms de lieux composés (Hauts-de-France, Pas-de-Calais…) de se couper à un trait d'union, sans modifier le texte lu par Google.

## Effets visuels (CSS, dans `globals.css`)

- `accent-serif` : mots clés en serif italique au dégradé du logo.
- `aurora` : taches de couleur en dégradé radial (couleur via une classe `text-*`). Pas de `filter: blur` : il figeait Safari sur iPhone.
- `float-slow`, `float-slower`, `tilt-3d`, `marquee-track`, `reveal`, `reveal-scale`, `progress-fill`.

Les animations continues ne tournent que sur ordinateur (`min-width: 1024px` et `hover: hover`) et toutes sont coupées si `prefers-reduced-motion` est actif. Pas de `backdrop-filter` sur mobile.

## Accessibilité

- Icônes décoratives en `aria-hidden`.
- Ne jamais transmettre une information uniquement par la couleur.
- Focus visible, zones tactiles d'au moins 44 px sur mobile.
