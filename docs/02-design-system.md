# Design System - Fondations

## Tokens

Les tokens sont définis dans `src/app/globals.css` (thème clair). Seules les couleurs du logo sont reprises :

- `--primary` #1350ff : couleur d'action (boutons, liens), contraste AA sur blanc
- `--accent-cyan` #00e5ff et `--accent-violet` #7d2cff : accents décoratifs uniquement
- `--ink` / `--foreground` #0b1220 : texte et footer
- `--background` blanc, `--background-secondary` gris-bleu pour les bandes alternées
- `--muted-foreground`, `--subtle-foreground`, `--border`, `--border-strong`, `--primary-soft`
- `--radius-*`, `--shadow-soft`, `--shadow-card`, `--shadow-lift`, `--shadow-glow`

## Typographie

Polices auto-hébergées via `next/font` : Inter pour le texte, Bricolage Grotesque pour les titres, Instrument Serif (italique) pour les mots clés mis en valeur.

## Identité

`BrandLogo` : version vectorielle claire (`tone="light"`) sur fond clair, logo officiel (`tone="accent"`) sur fond sombre.

## Accessibilité et mouvement

Focus visible global, contrastes AA. Les animations continues sont réservées à l'ordinateur et coupées si `prefers-reduced-motion` est actif.
