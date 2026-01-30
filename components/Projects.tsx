
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-primary-600 font-bold text-lg mb-4 uppercase tracking-widest">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Recent Projects</h3>
        </div>
        <button className="px-8 py-3 bg-slate-100 dark:bg-slate-800 font-bold rounded-2xl hover:bg-primary-600 hover:text-white transition-all w-fit">
          View All Projects
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group flex flex-col rounded-[2.5rem] overflow-hidden glass border border-slate-200 dark:border-slate-800 hover:border-primary-500/40 transition-all hover:shadow-2xl hover:shadow-primary-500/10">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <a href={project.link || "#"} className="flex items-center gap-2 font-bold text-primary-600 group/link">
                  View Demo 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
