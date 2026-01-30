
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-6 opacity-20"></div>
            <div className="absolute inset-0 glass rounded-3xl -rotate-3 border-2 border-primary-500/30"></div>
            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl">
               <img src="https://picsum.photos/seed/kavya-work/600/600" alt="About Kavya" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-primary-600 font-bold text-lg mb-4 uppercase tracking-widest">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
            Student by day, <br />
            <span className="text-slate-400">Creator by heart.</span>
          </h3>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
              I am a Class 11 student from India, balancing my studies in <span className="text-primary-500 font-semibold">PCB + PHE</span> with my deep passion for the digital frontier. While I navigate science and sports, my curiosity drives me to master <span className="text-slate-900 dark:text-white font-medium underline decoration-primary-500 underline-offset-4">AI, Web Development, and Digital Content Creation.</span>
            </p>
            <p>
              I'm a dedicated self-learner who believes in "learning by doing." From prompt engineering to building full-scale web apps, I spend my time exploring how technology can solve real-world problems.
            </p>
            <p>
              My goal is to blend creativity with tech innovation, helping startups and small businesses establish a powerful digital presence through modern web solutions and automated AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <p className="text-3xl font-extrabold text-primary-600">Grade 11</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Current Education</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary-600">2024</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Active Since</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
