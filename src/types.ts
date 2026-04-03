import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface DetailedService extends ServiceItem {
  image: string;
  features: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  specs: string[];
  image: string;
  fullDescription: string;
  features: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  items: CatalogItem[];
}

export interface NavLink {
  label: string;
  href: string;
}
