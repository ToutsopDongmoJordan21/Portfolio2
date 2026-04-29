import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  color: string;
  highlights: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  activeIndex = 0;

  experiences: Experience[] = [
    {
      company: 'Biopharma SA',
      role: 'Informaticien, Administrateur Réseau & Développeur',
      period: '2025 – 2026',
      location: 'Cameroun',
      type: 'Temps plein',
      color: '#E8FF3B',
      highlights: [
        'Numérisation des processus d\'achat et de production — implémentation d\'une GED complète',
        'Configuration et déploiement des équipements informatiques : switchs CISCO, imprimantes, téléphones IP, stations de travail',
        'Supervision quotidienne des services critiques : SAGE, VoIP, NAS, Active Directory, VPN',
        'Architecture et sécurisation du réseau d\'entreprise : firewall, VPN, détection d\'intrusions',
        'Administration des serveurs Windows Server, Linux et Active Directory',
        'Configuration des points d\'accès TPLink et optimisation de la bande passante',
        'Assistance technique et helpdesk utilisateurs (résolution matérielle et logicielle)',
        'Formation des utilisateurs aux bonnes pratiques de sécurité réseau'
      ],
      technologies: ['Winbox', 'Tera Term', 'SAGE', 'Angular', 'Node.js', 'Microsoft Office', 'Canva', 'Windows Server', 'Linux', 'Active Directory']
    },
    {
      company: 'Amla Cameroun / Intelcia',
      role: 'Développeur Web & Mobile — Conseiller Technique',
      period: '2024 – 2025',
      location: 'Cameroun',
      type: 'Temps plein',
      color: '#A78BFA',
      highlights: [
        'Conception et développement d\'applications web et mobiles (iOS & Android)',
        'Création d\'interfaces utilisateur responsives et intuitives avec Angular',
        'Développement et intégration d\'API REST et services web',
        'Optimisation des requêtes et gestion des bases de données',
        'Support technique de 1er et 2ème niveau — gestion des tickets helpdesk',
        'Rédaction de guides techniques et documentation utilisateur',
        'Formation des utilisateurs sur les nouveaux outils et fonctionnalités',
        'Collaboration avec les équipes design, marketing et développeurs'
      ],
      technologies: ['Windev', 'Angular', 'Node.js', 'Java', 'AnyDesk', 'SQL']
    },
    {
      company: 'Floraison',
      role: 'Développeur Front-end',
      period: '2022 – 2023',
      location: 'Cameroun',
      type: 'Contrat',
      color: '#34D399',
      highlights: [
        'Développement d\'applications web dynamiques avec Angular JS / Angular 2+',
        'Création et gestion de composants, directives et services réutilisables',
        'Implémentation du data-binding bidirectionnel et de la gestion d\'état',
        'Consommation d\'API REST et GraphQL (promises, observables avec RxJS)',
        'Implémentation de l\'authentification JWT et gestion des tokens',
        'Création d\'interfaces modernes avec Bootstrap, Material Design, Tailwind',
        'Tests unitaires avec Jasmine/Karma et collaboration UX/UI',
        'Gestion des versions avec Git (branches, merge, pull requests)'
      ],
      technologies: ['Angular JS', 'Angular 2+', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'RxJS', 'Git', 'Bootstrap', 'Material Design', 'Tailwind', 'Webpack', 'NPM']
    },
    {
      company: 'Mobi-Tech SARL, AdvancedIT, Zepstra, Novazen',
      role: 'Développeur Full Stack & Ingénieur IA',
      period: '2018 – 2022',
      location: 'Cameroun',
      type: 'Multi-contrats',
      color: '#F87171',
      highlights: [
        'Conception et implémentation d\'applications pour clients individuels et entreprises',
        'Livraison continue (CI/CD) de code propre et testé selon la méthodologie Agile',
        'Développement et déploiement de solutions d\'IA en Python (Machine Learning, analyse de données)',
        'Utilisation de TensorFlow, Scikit-learn et Pandas pour les modèles prédictifs',
        'Développement backend avec SpringBoot et PHP',
        'Intégration de bases de données SQL et Firebase',
        'Déploiement sur AWS et gestion des infrastructures cloud',
        'Assistance technique aux utilisateurs et résolution de problèmes complexes'
      ],
      technologies: ['PHP', 'Firebase', 'Angular 14', 'SpringBoot', 'Node.js', 'AWS', 'SQL', 'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jira', 'GitHub']
    }
  ];

  selectExperience(index: number): void {
    this.activeIndex = index;
  }
}
