# IDEL SaaS MVP

MVP simple pour infirmiers libéraux : authentification, dashboard, gestion d'actes, estimation des charges et abonnement Stripe.

## Stack
- Next.js (App Router) + React
- Node.js API Routes
- PostgreSQL
- Stripe (abonnement 19€/mois, essai gratuit 14 jours)

## Structure du projet
```
app/
  api/
    acts/            # CRUD actes
    auth/            # register/login
    charges/         # taux de charges
    export/          # export CSV/PDF
    stripe/webhook/  # webhook Stripe
  acts/              # page gestion des actes
  auth/              # pages login/register
  dashboard/         # tableau de bord
  settings/          # taux de charges
  layout.tsx         # navigation de base
  page.tsx           # landing
lib/
  auth.ts            # helpers auth
  db.ts              # types + store in-memory MVP
  stripe.ts          # client Stripe
styles/
  globals.css        # UI minimaliste
db/schema.sql        # schéma PostgreSQL
```

## Schéma de base de données
Voir `db/schema.sql` pour les tables `users`, `acts`, `charges_settings`.

## API routes (backend)
| Route | Méthode | Description |
| --- | --- | --- |
| `/api/auth/register` | POST | Création de compte (email + mot de passe) |
| `/api/auth/login` | POST | Connexion |
| `/api/acts` | GET | Liste des actes |
| `/api/acts` | POST | Création d'un acte |
| `/api/acts/:id` | PUT | Mise à jour d'un acte |
| `/api/acts/:id` | DELETE | Suppression d'un acte |
| `/api/charges` | GET | Récupérer le taux de charges |
| `/api/charges` | PUT | Mettre à jour le taux de charges |
| `/api/export?format=csv` | GET | Export CSV |
| `/api/export?format=pdf` | GET | Export PDF (à implémenter) |
| `/api/stripe/webhook` | POST | Webhook Stripe |

## Pages (frontend)
- `/` : landing
- `/auth/register` : création de compte
- `/auth/login` : connexion
- `/dashboard` : revenus mensuels, actes, comparaison
- `/acts` : CRUD actes
- `/settings` : taux de charges

## Configuration Stripe
- Prix 19€/mois + essai gratuit 14 jours
- Créer un Price dans Stripe et renseigner `NEXT_PUBLIC_STRIPE_PRICE_ID`

## Setup
1. Copier l'environnement :
   ```bash
   cp .env.example .env.local
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer en dev :
   ```bash
   npm run dev
   ```

## Notes MVP
- Les données sont stockées en mémoire pour simplifier le prototype.
- Connecter à PostgreSQL via un ORM ou un client SQL pour production.
