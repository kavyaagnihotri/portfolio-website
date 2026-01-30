
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="bg-primary-600 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-primary-100 font-bold text-lg mb-4 uppercase tracking-widest">Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Success & Achievements</h3>
            <p className="text-primary-100/80 text-lg">
              As a young creator, I'm proud of the milestones I've hit while balancing a demanding academic schedule. These highlights represent my commitment to excellence and growth.
            </p>
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-6 items-start">
                <div className="px-4 py-2 bg-white text-primary-600 rounded-xl font-bold text-sm h-fit shrink-0">
                  {item.date}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-primary-500 font-medium opacity-100 text-primary-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
