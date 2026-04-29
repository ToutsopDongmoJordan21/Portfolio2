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
    { number: '5+', label: 'Ans d\'expérience' },
    { number: '10+', label: 'Projets livrés' },
    { number: '4', label: 'Entreprises' },
    { number: '3', label: 'Langues' }
  ];

  skills = [
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { name: 'TypeScript', icon: 'fa-brands fa-js', color: '#3178C6' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3572A5' },
    { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' },
    { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' }
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
