
import React from 'react';
import { Users, Target, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-24 gradient-bg">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6">Defining the Future of <span className="text-indigo-600">Local Service.</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in 2020, AuraPrime was born out of a simple frustration: the lack of consistent quality and reliability in the local service industry. We decided to change that.
            </p>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl relative z-10" alt="Team" />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl z-0"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Services Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99.8%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">250+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Expert Staff</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">Major Cities</div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The guiding principles that ensure we deliver nothing but the best, every single time.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="text-indigo-600" />, title: "Precision", desc: "Every task is performed with meticulous attention to detail." },
              { icon: <ShieldCheck className="text-indigo-600" />, title: "Integrity", desc: "Honesty and transparency in our pricing and our process." },
              { icon: <Users className="text-indigo-600" />, title: "Client-Centric", desc: "Your comfort and needs always come first." },
              { icon: <Heart className="text-indigo-600" />, title: "Dedication", desc: "We are passionate about elevating local standards." },
            ].map((value, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
