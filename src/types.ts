export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface JourneyItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
}
