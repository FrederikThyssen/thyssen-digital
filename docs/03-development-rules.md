# Development Rules

## TypeScript

- TypeScript strict est obligatoire.
- Aucun `any`.
- Pas de JavaScript non typé.
- Les noms doivent rester explicites.

## Architecture

- Server Components par défaut.
- Client Components uniquement lorsque nécessaire.
- Composants réutilisables, courts et ciblés.
- Pas de composant géant.
- Pas de dépendance injustifiée.

## Styles

- Utiliser les tokens quand ils existent.
- Pas de couleur arbitraire dispersée.
- Pas de hack CSS.
- Garder Tailwind lisible et cohérent.

## Imports

- Imports propres via l'alias `@/*`.
- Aucun import inutilisé.
- Aucun code mort.

## Accessibilité

- HTML sémantique.
- Navigation clavier.
- Focus visible.
- Contraste suffisant.
- Pas d'interaction essentielle uniquement au survol.

## Performance

- Pas de ressource lourde sans justification.
- Layout stable.
- Mobile-first.
- Pas de chargement client inutile.

## Validation

Avant toute livraison :

- `npm run lint`
- `npm run build`

Les erreurs TypeScript, ESLint et de build doivent être corrigées avant merge.
