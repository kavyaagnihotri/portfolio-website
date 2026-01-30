
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-slate-900 -mx-4 md:-mx-8 px-4 md:px-8 rounded-[4rem] shadow-sm">
      <div className="text-center mb-16">
        <h2 className="text-primary-600 font-bold text-lg mb-4 uppercase tracking-widest">My Toolbox</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold">Skills & Expertise</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/5 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{skill.category}</span>
            </div>
            <h4 className="font-bold text-lg mb-4">{skill.name}</h4>
            
            <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-1000 ease-out group-hover:bg-primary-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-right text-xs font-bold mt-2 text-primary-600">{skill.level}%</p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 glass rounded-[2.5rem] border border-primary-500/20 text-center">
        <h4 className="text-2xl font-bold mb-4">Tech Stack I ❤️</h4>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {['React', 'Tailwind', 'Python', 'Node.js', 'GitHub', 'Figma', 'Vercel', 'Firebase', 'OpenAI', 'Gemini'].map(tech => (
            <span key={tech} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-medium">#{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
