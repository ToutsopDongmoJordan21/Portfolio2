# Portfolio de Jordan Toutsop Dongmo — Angular 13

Site portfolio professionnel complet, développé avec Angular 13, entièrement responsive.

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          → Barre de navigation fixe avec menu mobile
│   │   ├── home/            → Page d'accueil hero + stats + tech banner
│   │   ├── about/           → À propos : bio, skills, formation, langues
│   │   ├── experience/      → Expériences avec sidebar interactive
│   │   ├── projects/        → Projets filtrables par catégorie
│   │   ├── testimonials/    → Carousel de témoignages + références
│   │   └── contact/         → Formulaire de contact + footer
│   ├── models/
│   │   └── data.model.ts    → Interfaces TypeScript
│   ├── app-routing.module.ts
│   └── app.module.ts
├── styles.css               → Variables CSS globales + utilitaires
└── index.html
```

## Pages disponibles

| Route | Page |
|-------|------|
| `/` | Accueil (Hero, stats, stack tech) |
| `/about` | À Propos (bio, compétences, formation) |
| `/experience` | Expériences professionnelles |
| `/projects` | Projets réalisés |
| `/testimonials` | Témoignages & références |
| `/contact` | Formulaire de contact |

## Installation et démarrage

### Prérequis
- Node.js 14.x ou supérieur
- Angular CLI 13 : `npm install -g @angular/cli@13`

### Étapes

```bash
# 1. Entrer dans le dossier du projet
cd portfolio-jordan

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
ng serve

# 4. Ouvrir le navigateur à
http://localhost:4200
```

### Build de production

```bash
ng build --configuration production
```
Les fichiers seront générés dans `dist/jordan-portfolio/`.

## Ajouter la photo de profil

Placez votre photo dans :
```
src/assets/photo.jpg
```
La photo s'affichera automatiquement sur la page d'accueil et la page À Propos.
Si aucune photo n'est trouvée, un placeholder "JT" s'affiche automatiquement.

## Personnalisation

Toutes les données (expériences, projets, témoignages) sont définies dans les fichiers
TypeScript de chaque composant — pas besoin de backend.

### Modifier les couleurs

Ouvrez `src/styles.css` et modifiez les variables CSS :

```css
:root {
  --primary: #0A0A0A;      /* Couleur principale */
  --accent: #E8FF3B;       /* Couleur accent (jaune-vert) */
  --bg: #F5F3EE;           /* Fond général */
}
```

## Technologies utilisées

- **Angular 13** — Framework principal
- **TypeScript** — Typage statique
- **CSS Variables** — Thème cohérent
- **Font Awesome 6** — Icônes
- **Google Fonts** — Syne + DM Sans

---
Développé par Jordan Toutsop Dongmo | jordantoutsop472@gmail.com
