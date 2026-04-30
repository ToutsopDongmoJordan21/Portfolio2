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
      company: 'G-STONES RESSOURCES SA',
      role: 'Informaticien Réseau, Développement & Innovation',
      period: '2026 - Now',
      location: 'Cameroun',
      type: 'Temps plein',
      color: '#E07B39',
      highlights: [
        'Conception et déploiement de l\'architecture réseau du site minier (LAN, VLANs, switching CISCO)',
        'Configuration des équipements réseau : switchs CISCO, routeurs MikroTik, téléphones IP',
        'Développement de nouvelles solutions technologiques adaptées aux besoins du site minier',
        'Numérisation et automatisation des processus métier internes',
        'Maintenance et support des laptops et postes utilisateurs (helpdesk sur site)',
        'Maintenance des machines de production (diagnostic, interventions de premier niveau)',          'Gestion et supervision des serveurs (Windows Server, Active Directory, Linux)',
        'Gestion des droits d\'accès, politiques de sécurité et authentification',
        'Agent pont bascule : supervision et test du pesage des camions par conducteur',
        'Vérification quotidienne des services critiques : SAGE, VoIP, NAS, VPN, Domaine',
        ],
        technologies: [
          'Cisco IOS', 'MikroTik / Winbox', 'Windows Server', 'Active Directory',
          'Linux', 'Angular', 'Node.js', 'Sage', 'Tera Term', 'VoIP', 'NAS'
        ]
    },
    {
      company: 'Biopharma SA',
      role: 'Informaticien, Administrateur Réseau & Développeur',
      period: '2025 – 2026',
      location: 'Cameroun',
      type: 'Temps plein',
      color: '#E8FF3B',
      highlights: [
        'Développement d\'une GED (Gestion Électronique de Documents) custom avec Angular & Node.js',
        'Numérisation du processus de demande d\'achat et de production',
        'Conception et modélisation de la base de données (MySQL/PostgreSQL)',
        'Configuration et déploiement des équipements réseau (switchs CISCO, imprimantes, téléphones IP)',
        'Supervision et monitoring de l\'infrastructure réseau en temps réel',
        'Mise en place et maintien des politiques de sécurité réseau & firewall',
        'Configuration et maintien des serveurs (Windows Server, Linux, Active Directory)',
        'Gestion des droits d\'accès, GPO et authentification des utilisateurs',
        'Vérification quotidienne des services critiques : SAGE, VoIP, NAS, VPN, Domaine',
        'Formation des utilisateurs aux nouveaux outils et bonnes pratiques informatiques',
        'Assistance technique aux utilisateurs (Helpdesk niveau 1 & 2)',
        'Gestion du versioning et collaboration via Git / GitHub',
      ],
      technologies: [
        'Angular', 'Node.js', 'MySQL', 'PostgreSQL', 'Git / GitHub',
        'Cisco IOS', 'MikroTik / Winbox', 'Windows Server', 'Active Directory',
        'Linux', 'Sage', 'Tera Term', 'VoIP', 'NAS'
      ]
    },
    {
      company: 'Amla Cameroun / Intelcia',
      role: 'Développeur Web & Mobile — Conseiller Technique',
      period: '2024 – 2025',
      location: 'Cameroun',
      type: 'Temps plein',
      color: '#A78BFA',
      highlights: [
        'Développement d\'applications web et mobiles iOS/Android (métier & grand public)',
        'Création d\'interfaces utilisateur responsives et intuitives',
        'Développement et intégration d\'API RESTful et services web',
        'Intégration de solutions de paiement mobile (MTN Mobile Money, Orange Money)',
        'Gestion des bases de données et optimisation des requêtes (MySQL, MongoDB)',
        'Intégration de Firebase (authentification, notifications push, Firestore)',
        'Tests, débogage et assurance qualité (QA) des applications',
        'Déploiement et mise en production des applications web et mobiles',
        'Gestion de projet et suivi client : recueil des besoins, livrables, jalons',
        'Versioning et collaboration en équipe via Git / GitHub',
        'Support technique premier et deuxième niveau (Helpdesk)',
        'Formation des utilisateurs sur les nouveaux outils déployés',
      ],
      technologies: [
        'Angular', 'Node.js', 'Java', 'Windev',
        'MySQL', 'MongoDB', 'Firebase',
        'Git / GitHub', 'AnyDesk'
      ]
    },
    {
      company: 'Floraison',
      role: 'Développeur Front-end',
      period: '2022 – 2023',
      location: 'Cameroun',
      type: 'Contrat',
      color: '#34D399',
      highlights: [
        'Développement de sites vitrines et applications e-commerce avec Angular JS',
        'Création de composants, directives et services réutilisables',
        'Implémentation du data-binding bidirectionnel et gestion d\'état',
        'Consommation d\'API REST et GraphQL',
        'Implémentation de l\'authentification et gestion des tokens JWT',
        'Intégration de passerelles de paiement et tunnels de conversion e-commerce',
        'Optimisation des performances (lazy loading, tree shaking, Webpack)',
        'Mise en place du responsive design et compatibilité cross-browser',
        'Tests unitaires et d\'intégration avec Jasmine / Karma',
        'Versioning et collaboration via Git (branches, PR, code review)',
        'Déploiement et mise en production des applications web',
      ],
      technologies: [
        'Angular JS', 'TypeScript', 'RxJS',
        'HTML5', 'CSS3', 'Bootstrap',
        'PostgreSQL', 'MongoDB',
        'Docker', 'Webpack', 'Git'
      ]
    },
    {
      company: 'Mobi-Tech SARL, AdvancedIT, Zepstra, Novazen',
      role: 'Développeur Full Stack & Ingénieur IA',
      period: '2018 – 2022',
      location: 'Cameroun',
      type: 'Multi-contrats',
      color: '#F87171',
      highlights: [
        'Conception et développement d\'applications full stack (PHP, Angular, Spring Boot, Node.js)',
        'Développement de modèles de Machine Learning (recommandation & prédiction)',
        'Automatisation de processus métier via des solutions RPA en Python',
        'Analyse de données et visualisation avec Pandas et Scikit-learn',
        'Entraînement et déploiement de modèles TensorFlow en production',
        'Conteneurisation des applications avec Docker et orchestration Kubernetes',
        'Mise en place de pipelines CI/CD pour la livraison continue',
        'Conception et gestion de bases de données relationnelles et NoSQL (SQL, PostgreSQL, MongoDB)',
        'Déploiement et gestion d\'infrastructure cloud sur AWS',
        'Développement et exposition d\'API REST avec Spring Boot et Node.js',
        'Méthodologie Agile (Scrum) : sprints, backlog, retrospectives',
        'Assistance technique et résolution de problèmes matériels / logiciels',
      ],
      technologies: [
        'Python', 'TensorFlow', 'Scikit-learn', 'Pandas',
        'PHP', 'Angular 14', 'Spring Boot', 'Node.js',
        'SQL', 'PostgreSQL', 'MongoDB', 'Firebase',
        'Docker', 'Kubernetes', 'AWS', 'Git'
      ]
    }
  ];

  selectExperience(index: number): void {
    this.activeIndex = index;
  }
}
