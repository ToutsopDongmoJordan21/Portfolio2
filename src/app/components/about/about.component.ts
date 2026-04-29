import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { name: 'Angular / TypeScript', level: 92, category: 'Frontend' },
    { name: 'Node.js / Express', level: 88, category: 'Backend' },
    { name: 'Java / SpringBoot', level: 80, category: 'Backend' },
    { name: 'Python / TensorFlow', level: 75, category: 'AI/ML' },
    { name: 'SQL / Firebase', level: 85, category: 'Base de données' },
    { name: 'Administration Réseau', level: 82, category: 'Réseau' },
    { name: 'PHP / Windev', level: 70, category: 'Autres' },
    { name: 'AWS / Docker', level: 72, category: 'DevOps' }
  ];

  softSkills = [
    { label: 'Résolution de problèmes', icon: 'fa-lightbulb' },
    { label: 'Communication', icon: 'fa-comments' },
    { label: 'Leadership', icon: 'fa-users' },
    { label: 'Focus & Vision', icon: 'fa-bullseye' },
    { label: 'Travail en équipe', icon: 'fa-handshake' },
    { label: 'Adaptabilité', icon: 'fa-rotate' }
  ];

  education = [
    {
      degree: 'Master en Génie Logiciel',
      school: 'Université de Buea',
      period: '2021 – 2024',
      desc: 'Spécialisation en IA, développement logiciel avancé et gestion de projets.'
    },
    {
      degree: 'Bachelor en Génie Logiciel',
      school: 'Université de Buea',
      period: '2017 – 2021',
      desc: 'Fondements en programmation, bases de données, réseaux et intelligence artificielle.'
    }
  ];

  languages = [
    { name: 'Français', level: 'Natif', percent: 100 },
    { name: 'Anglais', level: 'Courant', percent: 85 },
    { name: 'Allemand', level: 'Notions', percent: 35 }
  ];

  interests = [
    { label: 'Sport', icon: 'fa-futbol' },
    { label: 'Lecture', icon: 'fa-book' },
    { label: 'Jeux Vidéos', icon: 'fa-gamepad' },
    { label: 'Voyages', icon: 'fa-plane' }
  ];
}
