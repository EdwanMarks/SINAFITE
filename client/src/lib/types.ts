// Type definitions for client-side use

export interface News {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt: string | Date;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  endDate?: string | Date;
  location: string;
  isOnline: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
