export interface Project {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  category: string; // Quick Start, Business, E-Commerce
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  timeline: string;
  completedDate: string; // ISO date format for sorting (YYYY-MM-DD)
  imageUrl: string;
  deviceImages?: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface DiaryEntry {
  id: string;
  date: string;
  projectName: string;
  projectId: string;
  title: string;
  description: string;
  tasksCompleted: string[];
  progress: number;
  imageUrl?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  clientFeedback?: string;
  nextSteps: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  idealFor: string[];
  timeline: string;
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  skills: string[];
}

export interface Template {
  id: string;
  name: string;
  category: string; // Restaurant, Salon & Spa, E-commerce, etc.
  description: string;
  previewImage: string;
  deviceImages: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  demoUrl: string;
  features: string[];
  tags: string[];
  createdDate: string; // ISO date format
}
