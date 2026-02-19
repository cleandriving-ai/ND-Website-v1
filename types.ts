
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  keywords: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  serviceType: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export enum DiagnosticStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}
