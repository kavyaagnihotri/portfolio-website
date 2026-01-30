
export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Editing' | 'Web' | 'AI' | 'Design' | 'Content';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}
