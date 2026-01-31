
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}
