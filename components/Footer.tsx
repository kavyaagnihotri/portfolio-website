
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BUSINESS_NAME, BUSINESS_TAGLINE, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                {BUSINESS_NAME}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {BUSINESS_TAGLINE}. We provide premium services for individuals who value quality, reliability, and their time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/auraprime_demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/auraprime_demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/auraprime_demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/auraprime_demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors" 
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.path.replace('#', '')} className="text-sm hover:text-indigo-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Placeholder */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Offerings</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Residential Care</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Logistics Management</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Personal Concierge</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Estate Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
              <span>12th Floor, Prestige Tower, MG Road, Bangalore, KA 560001</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone size={18} className="text-indigo-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail size={18} className="text-indigo-400" />
              <span>hello@auraprime.com</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© 2024 {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-500">Design by Aura Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
