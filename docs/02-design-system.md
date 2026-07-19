# Design System - Fondations

## Tokens

Les tokens sont définis dans `src/app/globals.css` sous forme de variables CSS sémantiques :

- `--background`, `--foreground`
- `--muted`, `--muted-foreground`
- `--surface`, `--surface-hover`
- `--border`
- `--primary`, `--primary-foreground`
- `--accent-cyan`, `--accent-violet`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- `--shadow-soft`, `--shadow-glow`

## Typographie

La typographie utilise `next/font` avec une sans-serif libre et fiable. Les variables `--font-body` et `--font-heading-family` préparent une séparation future entre texte courant et titres.

Les capitales de marque utilisent un tracking mesuré. Les titres restent lisibles, avec un interlignage serré mais confortable.

## Rayons et ombres

Les rayons sont sobres et cohérents. Les cartes et surfaces utilisent un rayon maximal contenu. Les ombres sont réservées aux éléments structurants, sans glow généralisé.

## Boutons

Le composant `Button` utilise `class-variance-authority`.

Variantes :

- `primary`
- `secondary`
- `ghost`

Tailles :

- `sm`
- `md`
- `lg`

Le composant fonctionne comme bouton natif ou comme lien via la prop `href`.

## Surfaces

Les surfaces utilisent `--surface`, `--surface-hover` et `--border`. Les composants ne doivent pas disperser de couleurs arbitraires lorsque des tokens existent.

## Règles couleur

Le bleu électrique est l'accent principal. Le cyan sert aux états ou détails utiles. Le violet reste discret. Aucun effet RGB, néon agressif ou cyberpunk ne doit être introduit.

## Accessibilité

Le focus visible est global. Les contrastes doivent rester suffisants, les liens compréhensibles et les interactions accessibles au clavier.

## Motion réduite

`prefers-reduced-motion` est pris en charge globalement. Les animations futures devront respecter cette préférence.
