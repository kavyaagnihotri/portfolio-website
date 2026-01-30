
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('https://picsum.photos/seed/kavya/500/500');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          Available for Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <br />
          <span className="gradient-text">Kavya Agnihotri</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-8 max-w-xl">
          Young Tech Creator <span className="text-primary-500 mx-1">|</span> AI Tools Builder <span className="text-primary-500 mx-1">|</span> Video Editor <span className="text-primary-500 mx-1">|</span> Web Developer
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-xl shadow-primary-600/30 transition-all hover:-translate-y-1 text-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all hover:-translate-y-1 text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] mx-auto group">
          {/* Decorative shapes */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl float relative z-10">
            <img
              src={profileImage}
              alt="Kavya Agnihotri"
              className="w-full h-full object-cover"
            />
            
            {/* Upload Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <label className="cursor-pointer text-center px-4">
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white text-sm font-semibold">Change Profile Photo</p>
              </label>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 z-20 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Completed</p>
                <p className="text-sm font-extrabold">10+ AI Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
