import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRole = 0;
  isVisible = true;

  roles = [
    'Ingénieur Full Stack',
    'Développeur Angular',
    'Administrateur Réseau',
    'Développeur Mobile'
  ];

  stats = [
    { number: '6+', label: 'Ans d\'expérience' },
    { number: '10+', label: 'Projets livrés' },
    { number: '6', label: 'Entreprises' },
    { number: '3', label: 'Langues' }
  ];

  skills = [
    // PCSoft
    { name: 'WinDev', icon: 'fa-solid fa-desktop', color: '#0055A4' },
    { name: 'WebDev', icon: 'fa-solid fa-globe', color: '#E63312' },
    { name: 'WinDev Mobile', icon: 'fa-solid fa-mobile-screen', color: '#F7941D' },
    { name: 'HFSQL', icon: 'fa-solid fa-database', color: '#6B3FA0' },
  
    // Méthodes
    { name: 'ALM / Agile', icon: 'fa-solid fa-arrows-spin', color: '#00B388' },
  
    // Frontend
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#42B883' },
  
    // Backend
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#FF2D20' },
    { name: 'TypeScript', icon: 'fa-brands fa-js', color: '#3178C6' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3572A5' },
    { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' },
  
    // Cloud & BDD
    { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28' },
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-server', color: '#336791' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758F' },
  ];

  ngOnInit(): void {
    this.rotateRoles();
  }

  rotateRoles(): void {
    setInterval(() => {
      this.isVisible = false;
      setTimeout(() => {
        this.currentRole = (this.currentRole + 1) % this.roles.length;
        this.isVisible = true;
      }, 300);
    }, 2800);
  }
}
