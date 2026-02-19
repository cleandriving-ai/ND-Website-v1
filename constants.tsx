
import { Service, Project, Review } from './types';

export const SITE_NAME = "PipeForce";
export const PHONE_NUMBER = "+1 (800) 555-PIPE";
export const EMAIL = "hello@pipeforce.ca";
export const ADDRESS = "123 Trenchless Way, Burnaby, BC V5J 0H1";

export const SERVICES: Service[] = [
  {
    id: 'cipp-lining',
    title: 'CIPP Pipe Lining',
    description: 'No-dig pipe restoration using epoxy-saturated liners for a seamless, 50-year structural repair.',
    icon: '🛠️',
    path: '/services/cipp-lining',
    keywords: ['CIPP pipe lining', 'structural pipe lining', 'no-dig sewer repair']
  },
  {
    id: 'trenchless-repair',
    title: 'Trenchless Sewer Repair',
    description: 'Advanced sewer line replacement without destroying your landscape or driveway.',
    icon: '🚜',
    path: '/services/trenchless-repair',
    keywords: ['trenchless sewer repair', 'sewer line replacement', 'no-dig pipe repair']
  },
  {
    id: 'pipe-bursting',
    title: 'Pipe Bursting',
    description: 'Replacing old, brittle pipes with new high-density polyethylene (HDPE) pipes underground.',
    icon: '💥',
    path: '/services/pipe-bursting',
    keywords: ['pipe bursting service', 'sewer line repair', 'HDPE pipe installation']
  },
  {
    id: 'municipal',
    title: 'Municipal Solutions',
    description: 'Heavy-duty CIPP and main-line diagnostics for city infrastructure and public works.',
    icon: '🏛️',
    path: '/services/municipal',
    keywords: ['municipal sewer repair', 'city pipe lining', 'infrastructure CIPP']
  }
];

export const CITIES = [
  'Burnaby', 'Vancouver', 'Surrey', 'Richmond', 'Coquitlam', 'Abbotsford', 'Kelowna'
];

export const REVIEWS: Review[] = [
  {
    author: "James Miller",
    rating: 5,
    text: "Saved my backyard! I thought I'd have to dig up the whole garden, but PipeForce did the whole repair underground.",
    date: "2 weeks ago"
  },
  {
    author: "Sarah Chen",
    rating: 5,
    text: "Fast, professional, and zero mess. The CIPP lining was the perfect solution for our aging plumbing.",
    date: "1 month ago"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Historic District Sewer Restoration',
    location: 'Vancouver',
    image: 'https://picsum.photos/seed/pipe1/800/600',
    serviceType: 'CIPP Lining'
  },
  {
    id: '2',
    title: 'University Campus Main Line',
    location: 'Burnaby',
    image: 'https://picsum.photos/seed/pipe2/800/600',
    serviceType: 'Trenchless Repair'
  }
];
