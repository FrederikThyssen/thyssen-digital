# Thyssen Digital

Fondation technique du futur site premium Thyssen Digital.

## Prérequis

- Node.js compatible avec Next.js 16
- npm

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev
npm run lint
npm run build
```

## Formulaire de contact

Le formulaire utilise une route API Next.js compatible Resend.

Variables utiles :

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=contact@thyssendigital.fr
CONTACT_FROM_EMAIL="Thyssen Digital <onboarding@resend.dev>"
```

## Architecture

```text
src/
  app/
  components/
  hooks/
  lib/
  types/
public/
  brand/
  images/
  projects/
docs/
```

## État actuel

- Sprint 1 : fondations techniques.
- Sprint 1.5 : Design Language codé avec composants UI réutilisables, primitives Motion sobres, fonds décoratifs légers et documentation dédiée.
- Sprint 2 : Hero premium et navbar responsive.
- Sprint 3 : homepage complète V1 avec services, réalisations, processus, FAQ, contact et footer.
- Sprint 4 : identité vectorielle TD, favicon, visuels projets dédiés et finitions du footer.

## Assets de marque

Les variantes SVG sont disponibles dans `public/brand/` et documentées dans `docs/05-brand-assets.md`.
