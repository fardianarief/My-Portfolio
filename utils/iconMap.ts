import { 
  TabletSmartphone, 
  Network, 
  Database, 
  Activity, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Github, 
  Globe,
  Award,
  BadgeCheck,
  User,
  HeartPulse
} from 'lucide-react';

export const getIcon = (iconName: string) => {
  const map: Record<string, any> = {
    'TabletSmartphone': TabletSmartphone,
    'Network': Network,
    'Database': Database,
    'Activity': Activity,
    'Phone': Phone,
    'Mail': Mail,
    'Instagram': Instagram,
    'Linkedin': Linkedin,
    'Github': Github,
    'Globe': Globe,
    'Award': Award,
    'BadgeCheck': BadgeCheck,
    'User': User,
    'HeartPulse': HeartPulse
  };

  return map[iconName] || Activity; // Default icon
};