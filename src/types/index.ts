
export interface Skill {
  skill: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  tech: string;
  description: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  location?: string;
  description: string[];
  type: 'education' | 'work' | 'certification';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badge?: string;
}
