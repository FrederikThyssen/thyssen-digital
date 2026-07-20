# Design System - Fondations

## Tokens

Les tokens sont définis dans `src/app/globals.css` sous forme de variables CSS sémantiques :

- `--background`, `--foreground`
- `--background-secondary`
- `--muted`, `--muted-foreground`
- `--subtle-foreground`, `--inverse-foreground`
- `--surface`, `--surface-subtle`, `--surface-elevated`, `--surface-hover`, `--surface-glass`
- `--border`, `--border-strong`
- `--primary`, `--primary-foreground`
- `--accent-cyan`, `--accent-violet`
- `--gradient-primary`, `--gradient-halo`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- `--shadow-soft`, `--shadow-card`, `--shadow-glow`
- `--duration-fast`, `--duration-standard`, `--duration-slow`
- `--ease-standard`, `--ease-expressive`

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

Sprint 1.5 ajoute `Card`, `GlassPanel`, `Divider`, `Badge` et des composants de fond décoratifs. Le glassmorphism reste un accent ponctuel, pas une direction générale appliquée partout.

## Identité

Le composant `BrandLogo` expose le monogramme officiel et la version horizontale :

- `variant`: `mark` ou `horizontal`
- `tone`: `default`, `white`, `black`, `accent`
- `showSignature`: réservé aux zones calmes comme le footer

La navbar utilise la version horizontale sans signature. Le footer peut afficher la signature officielle avec retenue.

## Règles couleur

Le bleu électrique est l'accent principal. Le cyan sert aux états ou détails utiles. Le violet reste discret. Aucun effet RGB, néon agressif ou cyberpunk ne doit être introduit.

## Accessibilité

Le focus visible est global. Les contrastes doivent rester suffisants, les liens compréhensibles et les interactions accessibles au clavier.

## Motion réduite

`prefers-reduced-motion` est pris en charge globalement. Les animations futures devront respecter cette préférence.

Les primitives Motion (`FadeIn`, `FadeUp`, `FadeLeft`, `FadeRight`, `ScaleIn`, `Stagger`, `StaggerItem`) utilisent des déplacements courts, une opacité progressive et des durées encadrées.

Les micro-interactions ajoutées au Sprint 4 restent limitées à une légère élévation de carte et à des changements de bordure/couleur. Aucun mouvement permanent ou suivi de souris n'est autorisé.
