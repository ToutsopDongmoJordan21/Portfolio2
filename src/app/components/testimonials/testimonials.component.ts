import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  initials: string;
  color: string;
  phone?: string;
  email?: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  private interval: any;

  testimonials: Testimonial[] = [
    {
      name: 'SOP DEFFO Lionel Landry',
      role: 'Coordinator, Dept of Computer Engineering',
      company: 'Université de Buea',
      initials: 'SL',
      color: '#6366F1',
      phone: '(+237) 651305659 / 698962166',
      email: 'lsopdeffo@yahoo.com',
      message: 'Jordan est un ingénieur logiciel remarquable. Pendant ses années à l\'université, il a démontré une curiosité intellectuelle exceptionnelle et une capacité à résoudre des problèmes complexes avec une efficacité rare. Son sérieux, sa rigueur et son sens du leadership font de lui un professionnel accompli. Je recommande Jordan sans aucune hésitation pour tout rôle technique exigeant.'
    },
    {
      name: 'FOTSO Simplice',
      role: 'Responsable Informatique',
      company: 'Biopharma SA',
      initials: 'FS',
      color: '#059669',
      phone: '(+237) 698708560',
      email: 'fonajosi@gmail.com',
      message: 'Travailler avec Jordan chez Biopharma SA a été une expérience enrichissante. Il a su prendre en main notre infrastructure réseau avec une grande maîtrise technique, digitalisant des processus critiques et améliorant significativement l\'efficacité de notre système d\'information. Sa polyvalence entre développement et administration réseau est un atout précieux. Un collaborateur fiable et compétent.'
    },
    {
      name: 'Équipe Amla / Intelcia',
      role: 'Direction Technique',
      company: 'Amla Cameroun / Intelcia',
      initials: 'AI',
      color: '#D97706',
      message: 'Jordan a intégré notre équipe avec une énergie positive et des compétences techniques solides. Sa capacité à jongler entre le développement d\'applications et le support technique de niveau 2 a été un réel avantage pour notre équipe. Les interfaces qu\'il a créées étaient toujours soignées, responsives et livrées dans les délais. Nous lui faisons entièrement confiance pour nos projets futurs.'
    },
    {
      name: 'Client Floraison',
      role: 'Directeur de Projet',
      company: 'Floraison',
      initials: 'FL',
      color: '#BE185D',
      message: 'Jordan a développé notre application Angular avec un professionnalisme exemplaire. Il a su comprendre nos besoins fonctionnels rapidement, proposer des solutions techniques adaptées et livrer un produit de qualité dans les délais convenus. Son code est propre, bien documenté et maintenable. Nous n\'hésiterons pas à faire appel à lui pour nos futurs projets digitaux.'
    }
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.interval) clearInterval(this.interval);
  }

  select(i: number): void {
    this.activeIndex = i;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
