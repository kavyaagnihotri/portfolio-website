
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-600/30">
            K
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Kavya<span className="text-primary-600">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:scale-110 transition-transform shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full text-sm shadow-md shadow-primary-600/20 transition-all hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
