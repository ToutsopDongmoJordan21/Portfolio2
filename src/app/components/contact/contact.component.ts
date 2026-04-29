import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;
  isLoading = false;

  contactInfo = [
    {
      icon: 'fa-phone',
      label: 'Téléphone',
      value: '(+237) 681 409 045',
      sub: '(+237) 699 028 439',
      href: 'tel:+237681409045'
    },
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'jordantoutsop472@gmail.com',
      href: 'mailto:jordantoutsop472@gmail.com'
    },
    {
      icon: 'fa-location-dot',
      label: 'Localisation',
      value: 'Yaoundé / Douala',
      sub: 'Cameroun 🇨🇲'
    }
  ];

  socials = [
    { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/ToutsopDongmoJordan21', color: '#333' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/', color: '#0A66C2' },
    { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/237681409045', color: '#25D366' }
  ];

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.isLoading = true;

    // Simulate form submission
    setTimeout(() => {
      this.isLoading = false;
      this.isSubmitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };

      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }, 1500);
  }

  sendEmail(): void {
    const subject = encodeURIComponent(this.formData.subject || 'Contact depuis le portfolio');
    const body = encodeURIComponent(
      `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
    );
    window.open(`mailto:jordantoutsop472@gmail.com?subject=${subject}&body=${body}`);
  }
}
