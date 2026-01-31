
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If it's an anchor link (e.g., #why-choose-us) and we are on the Home page
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    } else if (path === location.pathname) {
      // If we are already on the page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu();
    }
    // For other paths, standard react-router-dom Link behavior proceeds
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass py-3 shadow-lg border-b border-slate-100/50' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group" onClick={(e) => handleNavClick(e, '/')}>
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-indigo-600 flex items-center justify-center transition-transform group-hover:rotate-12">
            <img 
              src="https://api.dicebear.com/7.x/initials/svg?seed=AP&backgroundColor=4f46e5&fontFamily=Playfair+Display&fontWeight=700" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
            {BUSINESS_NAME}<span className="text-indigo-600">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path.startsWith('#') ? item.path : item.path.replace('#', '')}
              onClick={(e) => handleNavClick(e, item.path.replace('#', ''))}
              className={`text-sm font-semibold tracking-wide transition-all hover:text-indigo-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all hover:after:w-full ${
                location.pathname === item.path.replace('#', '') 
                  ? 'text-indigo-600 after:w-full' 
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-indigo-600 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-slate-200 flex items-center group"
          >
            Get Started
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 transition-colors hover:bg-slate-100 rounded-lg" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen border-b border-slate-200 py-8 shadow-2xl' : 'max-h-0'
      }`}>
        <div className="flex flex-col space-y-6 px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path.startsWith('#') ? item.path : item.path.replace('#', '')}
              onClick={(e) => handleNavClick(e, item.path.replace('#', ''))}
              className="text-xl font-bold text-slate-800 hover:text-indigo-600 flex justify-between items-center group"
            >
              {item.label}
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-indigo-100"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
