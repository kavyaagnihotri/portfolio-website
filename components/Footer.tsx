
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="font-bold text-xl">Kavya Agnihotri</span>
          </div>

          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Kavya Agnihotri. All rights reserved.
          </p>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-400 font-medium italic">
          Built with React & Tailwind CSS for a modern startup vibe.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
