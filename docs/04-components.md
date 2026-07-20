# Components - Design Language

Sprint 1.5 fournit des primitives réutilisables pour assembler les écrans des prochains sprints sans créer encore le Hero, la navigation ou les contenus marketing finaux.

## Imports

```tsx
import { BackgroundGlow, BackgroundGrid, NoiseOverlay } from "@/components/backgrounds";
import { BrandLogo } from "@/components/brand/brand-logo";
import { FadeIn, FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { GlassPanel } from "@/components/ui/glass-panel";
```

## Button

`Button` accepte `variant`, `size`, `href`, `disabled`, `leadingIcon`, `trailingIcon` et `className`.

```tsx
<Button trailingIcon={<ArrowRight aria-hidden="true" className="size-4" />}>
  Demander un audit
</Button>
```

Utiliser `primary` pour l'action principale d'un contexte, `secondary` pour une action visible mais calme, et `ghost` pour les commandes légères.

## Card

Variantes disponibles : `glass`, `surface`, `outline`. La prop `interactive` active un hover subtil.

```tsx
<Card variant="surface" interactive>
  <CardHeader>
    <CardTitle>Performance</CardTitle>
  </CardHeader>
  <CardContent>Contenu court et scannable.</CardContent>
</Card>
```

Ne pas imbriquer des cartes décoratives dans d'autres cartes.

## Badge

Variantes : `neutral`, `accent`, `outline`. Usage prévu : catégories, statuts, technologies, labels courts.

## GlassPanel

Surface glassmorphism très mesurée. À réserver aux zones qui bénéficient réellement d'une profondeur légère. Ne pas l'utiliser comme style par défaut de toute la page.

## Divider

`Divider` propose `simple` et `gradient`. Par défaut il est décoratif et masqué aux technologies d'assistance.

## BrandLogo

Affiche le monogramme officiel ou la version horizontale.

```tsx
<BrandLogo tone="accent" variant="horizontal" />
<BrandLogo tone="white" variant="mark" />
```

Utiliser `decorative` lorsque le nom de marque est déjà présent dans un texte accessible proche.

## Project visuals

Les visuels projets dédiés vivent dans `src/components/projects/`.

- `TruckMapsVisual` : aperçu mobile avec carte stylisée, route, recherche et points d'intérêt.
- `FredMusicVisual` : aperçu desktop événementiel, avec QR code évoqué discrètement.
- `LaPinceVisual` : aperçu dashboard/backend, orienté produit métier.

Ces composants sont construits en HTML/CSS/SVG léger, sans image, canvas ou WebGL.

## Backgrounds

- `BackgroundGlow` : halo décoratif subtil, `aria-hidden`, sans interaction.
- `BackgroundGrid` : grille très discrète en CSS, sans JavaScript.
- `NoiseOverlay` : texture CSS légère. À éviter si elle nuit à la lisibilité.

Ces composants doivent rester décoratifs et ne jamais porter d'information.

## Motion

Primitives disponibles : `FadeIn`, `FadeUp`, `FadeLeft`, `FadeRight`, `ScaleIn`, `Stagger`, `StaggerItem`.

```tsx
<Stagger>
  <StaggerItem>Premier bloc</StaggerItem>
  <StaggerItem>Deuxième bloc</StaggerItem>
</Stagger>
```

Les animations sont jouées une seule fois par défaut et respectent `prefers-reduced-motion`. Ne pas les utiliser pour du scroll hijacking, de la parallaxe, des effets 3D ou des animations spécifiques au Hero avant Sprint 2.

## Accessibilité

- Garder les icônes décoratives en `aria-hidden`.
- Ne jamais transmettre une information uniquement par la couleur.
- Conserver un focus visible.
- Maintenir des zones tactiles confortables.
- Désactiver ou réduire les mouvements quand l'utilisateur le demande.
