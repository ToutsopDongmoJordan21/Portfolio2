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
      tags: ['Angular', 'Node.js', 'Fintech'],
      category: 'Fintech',
      icon: 'fa-credit-card',
      featured: true
    },
    {
      title: 'CheckTatoo',
      description: 'Plateforme dédiée à l\'univers du tatouage — découverte d\'artistes, booking et portfolios visuels.',
      url: 'https://www.checktatoo.com/fr/',
      tags: ['Angular', 'REST API', 'UX/UI'],
      category: 'Web',
      icon: 'fa-pen-nib',
      featured: true
    },
    {
      title: 'LaZone Shop',
      description: 'Boutique e-commerce moderne avec gestion de catalogue, panier d\'achat et paiement intégré.',
      url: 'https://lazoneshop.com/',
      tags: ['E-commerce', 'Angular', 'SQL'],
      category: 'E-commerce',
      icon: 'fa-shopping-bag',
      featured: true
    },
    {
      title: 'CoinAfrique Cameroun',
      description: 'Contribution au développement de la plateforme d\'annonces leader en Afrique, section Cameroun.',
      url: 'https://cm.coinafrique.com/',
      tags: ['Mobile', 'Web', 'Angular'],
      category: 'Mobile',
      icon: 'fa-mobile-alt',
      featured: false
    },
    {
      title: 'GitHub Portfolio',
      description: 'Dépôt public regroupant mes projets open source, expérimentations et contributions diverses.',
      url: 'https://github.com/ToutsopDongmoJordan21',
      tags: ['Open Source', 'Python', 'Angular'],
      category: 'Web',
      icon: 'fa-code-branch',
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
