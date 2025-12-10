import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  period: string;
  tasks: string[];
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  display?: string;
}