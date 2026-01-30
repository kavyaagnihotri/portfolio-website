
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-primary-600 font-bold text-lg mb-4 uppercase tracking-widest">Services</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold">How I Can Help You</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:translate-y-[-8px] transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-8 italic">Interested in a custom solution? Let's discuss your project.</p>
        <a href="#contact" className="px-10 py-4 bg-primary-600 text-white font-bold rounded-2xl shadow-lg hover:bg-primary-700 transition-all inline-block">
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default Services;
