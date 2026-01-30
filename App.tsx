
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-primary-500/30">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
