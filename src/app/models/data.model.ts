export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'full' | 'contract' | 'freelance';
}

export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  initials: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
