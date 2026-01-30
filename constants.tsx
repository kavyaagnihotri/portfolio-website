
import React from 'react';
import { Skill, Project, Service, Achievement } from './types';

export const SKILLS: Skill[] = [
  { name: 'Video Editing (CapCut/Premiere)', level: 90, icon: '🎬', category: 'Editing' },
  { name: 'Web Dev (HTML/CSS/JS/React)', level: 75, icon: '💻', category: 'Web' },
  { name: 'AI App Generation', level: 85, icon: '🤖', category: 'AI' },
  { name: 'Prompt Engineering', level: 95, icon: '✍️', category: 'AI' },
  { name: 'App Building (Expo/Replit)', level: 70, icon: '📱', category: 'Web' },
  { name: 'Canva & Graphic Design', level: 80, icon: '🎨', category: 'Design' },
  { name: 'Social Media Content', level: 85, icon: '📱', category: 'Content' },
  { name: 'WordPress & Elementor', level: 80, icon: '🌐', category: 'Web' },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Study Planner App',
    description: 'A personalized scheduling tool that uses AI to optimize study sessions based on curriculum complexity.',
    tags: ['React', 'AI API', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/study/600/400',
  },
  {
    title: 'AI Learning Assistant',
    description: 'A smart chatbot designed to help Class 11-12 students with complex PCB (Physics, Chemistry, Biology) concepts.',
    tags: ['Gemini API', 'Next.js', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/learn/600/400',
  },
  {
    title: 'Coaching Institute Website',
    description: 'A professional landing page and management system for a local coaching institute with enrollment features.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    imageUrl: 'https://picsum.photos/seed/coach/600/400',
  },
  {
    title: 'Personal Portfolio v1',
    description: 'My first professional portfolio project built to showcase my transition from a student to a tech creator.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/port/600/400',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Website Development',
    description: 'Modern, responsive websites built for small businesses and personal brands.',
    icon: '🚀',
  },
  {
    title: 'AI Automation Setup',
    description: 'Integrating AI tools into your workflow to save time and boost productivity.',
    icon: '⚙️',
  },
  {
    title: 'Short-Form Video Editing',
    description: 'High-engagement Reels, Shorts, and TikToks edited for maximum impact.',
    icon: '✂️',
  },
  {
    title: 'Portfolio Design',
    description: 'Custom portfolio websites that help you stand out to employers and clients.',
    icon: '✨',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Built Multiple AI Apps',
    description: 'Successfully deployed several functional AI-driven web applications as a student.',
    date: '2024',
  },
  {
    title: 'Self-Learner Milestone',
    description: 'Mastered web development and professional video editing through dedicated self-study.',
    date: '2023-Present',
  },
  {
    title: 'Active Tech Community Member',
    description: 'Actively participating in developer forums and sharing digital creation tips.',
    date: '2024',
  },
];
