// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: 'workshop' | 'competition' | 'talk' | 'exhibition';
  image?: string;
  registrationUrl?: string;
  isPremium: boolean;
}

// Speaker Types
export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  expertise: string[];
  events: string[]; // Event IDs
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  image: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
  year?: string;
}

// Contact Types
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Animation Types
export interface AnimationProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  delay?: number;
}

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'neon' | 'holographic';
  hover?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

// Page Props
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface FormData {
  [key: string]: string | number | boolean;
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
}

// Loading States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Error Types
export interface AppError {
  message: string;
  code?: string;
  details?: any;
}

export default {};
