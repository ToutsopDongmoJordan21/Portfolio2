import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: string;
  icon: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeCategory = 'Tous';
  categories = ['Tous', 'Web', 'Mobile', 'E-commerce', 'Fintech'];

  allProjects: Project[] = [
    {
      title: 'JonalePay',
      description: 'Plateforme de paiement en ligne sécurisée, offrant des solutions de transactions digitales pour les utilisateurs en Afrique.',
      url: 'https://jonalepay.net/accueil',
      tags: ['Angular', 'Node.js', 'Firebase'],
      category: 'Fintech',
      icon: 'fa-credit-card',
      featured: false
    },
    {
      title: 'CheckTatoo',
      description: 'Plateforme de certification de conformité de ENEO, DGI, CAMWATER.',
      url: 'https://www.checktatoo.com/fr/',
      tags: ['WINDEV', 'WEBDEV', 'WinDev Mobile', 'HFSQL', 'ALM', 'Méthodes Agiles'],
      category: 'Web',
      icon: 'fa-fingerprint',
      featured: false
    },
    {
      title: 'Iziway',
      description: 'Marketplace en ligne proposant smartphones, tablettes et électroménager avec livraison dans tout le Cameroun.',
      url: 'https://iziway.cm/',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      category: 'E-commerce',
      icon: 'fa-mobile-alt',
      featured: false
    },
    {
      title: 'Durrell Market',
      description: 'Marketplace multivendeurs : les PME camerounaises créent leur boutique en ligne en 10 minutes.',
      url: 'https://durrellmarket.com/',
      tags: ['PHP', 'Laravel', 'MySQL'],
      category: 'E-commerce',
      icon: 'fa-shop',
      featured: false
    },
    {
      title: 'Djoolah',
      description: 'Site d\'achat et de vente en ligne avec large catalogue produits, livraison à domicile en moins de 24h.',
      url: 'https://djoolah.com/',
      tags: ['React', 'Node.js', 'Firebase'],
      category: 'E-commerce',
      icon: 'fa-box',
      featured: false
    },
    {
      title: 'ISNOV ERP',
      description: 'ERP de gestion intégrée africain : CRM, RH, comptabilité, production, BI. Conçu pour les PME/PMI camerounaises.',
      url: 'https://isnov.com/',
      tags: ['Java', 'Angular', 'PostgreSQL'],
      category: 'Fintech',
      icon: 'fa-cogs',
      featured: false
    },
    {
      title: 'LocalHost Digital',
      description: 'Agence digitale basée à Douala proposant des solutions ERP, CRM et gestion commerciale pour PME camerounaises.',
      url: 'https://localhost-digital.com/',
      tags: ['WordPress', 'WooCommerce', 'PHP'],
      category: 'Fintech',
      icon: 'fa-server',
      featured: false
    },
    {
      title: 'Mutations',
      description: 'Quotidien d\'information indépendant : actualités nationales, analyses politiques et économiques du Cameroun.',
      url: 'https://www.mutations.cm/',
      tags: ['Angular', 'Node.js', 'MySQL'],
      category: 'Web',
      icon: 'fa-pen-nib',
      featured: false
    },
    {
      title: 'Investir au Cameroun',
      description: 'Portail d\'actualités économiques et financières : opportunités d\'investissement, marchés publics et business au Cameroun.',
      url: 'https://www.investiraucameroun.com/',
      tags: ['Angular', 'PHP', 'PostgreSQL'],
      category: 'Mobile',
      icon: 'fa-chart-bar',
      featured: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'Tous') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeCategory);
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }
}
