export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  price: number | 'Free';
  capacity: number;
  attendees: number;
  organizer: Organizer;
  featured?: boolean;
}

export interface Organizer {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export type EventCategory =
  | 'Music'
  | 'Tech'
  | 'Art'
  | 'Sports'
  | 'Food'
  | 'Business'
  | 'Health'
  | 'Education'
  | 'Entertainment'
  | 'Other';

export const CATEGORIES: EventCategory[] = [
  'Music',
  'Tech',
  'Art',
  'Sports',
  'Food',
  'Business',
  'Health',
  'Education',
  'Entertainment',
  'Other',
];
