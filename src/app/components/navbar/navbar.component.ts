import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Accueil', route: '/', icon: 'fa-house' },
    { label: 'À Propos', route: '/about', icon: 'fa-user' },
    { label: 'Expériences', route: '/experience', icon: 'fa-briefcase' },
    { label: 'Projets', route: '/projects', icon: 'fa-code' },
    { label: 'Témoignages', route: '/testimonials', icon: 'fa-comments' },
    { label: 'Contact', route: '/contact', icon: 'fa-envelope' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
