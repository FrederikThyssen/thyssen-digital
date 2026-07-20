# Brand assets - Sprint 4

Ce document décrit les règles principales des assets créés au Sprint 4. Il ne remplace pas un brand book complet.

## Fichiers

Les assets officiels sont placés dans `public/brand/`.

- `td-mark.svg`
- `td-mark-white.svg`
- `td-mark-black.svg`
- `td-mark-accent.svg`
- `thyssen-digital-horizontal.svg`
- `favicon.svg`

## Monogramme

Le monogramme combine `T` et `D` dans une seule silhouette. Le `T` structure le symbole, tandis que le `D` apparaît par la courbe extérieure et l'espace négatif intérieur.

Le dessin doit fonctionner sans dégradé, sans ombre et sans effet. Les variantes blanche et noire sont les versions de référence pour les usages strictement monochromes.

## Version accent

La version accent est réservée au site et aux supports numériques Thyssen Digital. Le dégradé reste subtil : bleu électrique, cyan, puis violet discret.

## Taille minimale

- Symbole seul : `16 x 16 px`.
- Version horizontale : utiliser uniquement lorsque le texte reste lisible.

## Zone de protection

Conserver autour du symbole un espace libre au moins égal à un quart de sa largeur. Ne pas coller le logo à un bord ou à un autre élément visuel.

## Usages interdits

- Déformer ou étirer le symbole.
- Ajouter un glow, une ombre portée forte ou un effet 3D.
- Modifier la courbe du `D`.
- Changer l'espacement interne.
- Utiliser la version accent sur un fond qui réduit la lisibilité.

## Composant React

`src/components/brand/brand-logo.tsx` centralise l'usage dans l'interface.

```tsx
<BrandLogo variant="horizontal" tone="accent" />
<BrandLogo variant="mark" tone="white" decorative />
```

La signature peut être affichée avec `showSignature`, principalement dans le footer ou une page de marque.
