
import React from 'react';
import { Shield, Clock, Star, Zap, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Service, Testimonial, NavigationItem } from './types';

export const BUSINESS_NAME = "AuraPrime";
export const BUSINESS_TAGLINE = "Elevating Local Standards with Premium Service";

export const NAV_ITEMS: NavigationItem[] = [
  { label: "Home", path: "#/" },
  { label: "Why Us", path: "#why-choose-us" },
  { label: "Services", path: "#/services" },
  { label: "About", path: "#/about" },
  { label: "Contact", path: "#/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Premium Home Care",
    description: "Expert maintenance and curated care for high-end residential spaces in metropolitan areas.",
    detailedDescription: "Our Premium Home Care plan is designed for homeowners who demand nothing less than perfection. We provide a dedicated estate manager to oversee all maintenance tasks, from HVAC optimization to architectural lighting care.",
    features: [
      "Dedicated Estate Manager",
      "Bi-weekly deep cleaning and sanitization",
      "Priority emergency repair response",
      "Architectural lighting & Smart Home audit",
      "Climate control maintenance"
    ],
    icon: "Shield",
    price: "From ₹2,499"
  },
  {
    id: "2",
    title: "Commercial Logistics",
    description: "Streamlined movement and management for local businesses with 24/7 reliability.",
    detailedDescription: "Modern businesses require agile logistics. AuraPrime provides white-glove delivery services and micro-warehousing solutions that integrate seamlessly with your existing supply chain.",
    features: [
      "Last-mile white-glove delivery",
      "Real-time GPS tracking for all assets",
      "Temperature-controlled transport options",
      "Inventory management & reporting",
      "Scalable delivery fleets"
    ],
    icon: "Zap",
    price: "Custom Quote"
  },
  {
    id: "3",
    title: "Concierge Solutions",
    description: "Personalized assistance for busy professionals, handling the details so you don't have to.",
    detailedDescription: "Reclaim your time with our Personal Concierge service. We handle everything from high-tier travel bookings to event planning and personal shopping for clients who value discretion and speed.",
    features: [
      "Travel & itinerary management",
      "Exclusive event access & reservations",
      "Personal administrative support",
      "Gift sourcing & personal shopping",
      "Confidential documentation handling"
    ],
    icon: "Star",
    price: "From ₹1,999"
  },
  {
    id: "4",
    title: "Eco-Friendly Cleaning",
    description: "Deep sanitization using hospital-grade, environmentally safe products for your family's health.",
    detailedDescription: "We believe luxury shouldn't come at the cost of the environment. Our cleaning protocols use certified organic detergents and HEPA-filtered equipment to ensure a pristine, toxin-free living environment.",
    features: [
      "100% biodegradable cleaning agents",
      "HEPA-filter air purification post-clean",
      "Safe for pets and infants",
      "Hospital-grade disinfection protocols",
      "Microfiber technology for dust removal"
    ],
    icon: "CheckCircle2",
    price: "From ₹1,299"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aditya Sharma",
    role: "CEO, GrowthMetric Bangalore",
    content: "AuraPrime transformed how we handle our office management. Their professionalism is world-class, something rarely seen in local services.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aditya&backgroundColor=b6e3f4"
  },
  {
    id: "2",
    name: "Priya Iyer",
    role: "Interior Architect, Mumbai",
    content: "I recommend AuraPrime to all my high-net-worth clients. Their attention to detail and punctuality is exactly what a premium brand should be.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=ffdfbf"
  },
  {
    id: "3",
    name: "Vikram Mehta",
    role: "Managing Partner, Mehta Legal",
    content: "The easiest booking process I've ever experienced. No hidden charges and the staff actually knows what they are doing. Remarkable efficiency.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram&backgroundColor=c0aede"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Certified Experts",
    desc: "Background-checked and highly trained professionals for every specialized task.",
    icon: <Shield className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Timely Response",
    desc: "We value your time. 60-minute response guarantee for all luxury inquiries.",
    icon: <Clock className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise costs. Upfront itemized quotes every single time.",
    icon: <Star className="w-6 h-6 text-indigo-600" />
  }
];
