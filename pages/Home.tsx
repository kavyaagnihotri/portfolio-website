
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Star, Quote, CheckCircle2, ShieldCheck, Trophy, Award, Search, Compass, Sparkles, Zap } from 'lucide-react';
import { SERVICES, TESTIMONIALS, WHY_CHOOSE_US, BUSINESS_TAGLINE } from '../constants';
import MapsExplorer from '../components/MapsExplorer';
import ImageAIEditor from '../components/ImageAIEditor';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 pb-16 gradient-bg">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-8 border border-indigo-100">
              <Sparkles size={14} className="animate-pulse" />
              <span>AI-Optimized Luxury Management</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[1] mb-8 tracking-tight">
              Aura <br /> 
              <span className="text-indigo-600 italic">Unbound.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
              The pinnacle of Indian white-glove service. We combine high-tech Gemini intelligence with high-touch human expertise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-300 text-center text-lg">
                Book Initial Audit
              </Link>
              <button 
                onClick={() => document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center flex items-center justify-center space-x-2 text-lg"
              >
                <span>Discover Services</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i} 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=f1f5f9`} 
                      className="w-12 h-12 rounded-full border-4 border-white shadow-sm" 
                      alt="Client" 
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-yellow-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500">Trusted by <span className="text-slate-900 font-bold">1200+</span> luxury estates</p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center space-x-3 grayscale opacity-60">
                <ShieldCheck size={32} className="text-slate-400" />
                <span className="text-xs font-bold uppercase tracking-tighter">ISO 9001 Certified</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1400" 
                alt="Premium Indian Business Environment" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center space-x-1 mb-3 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-2xl font-serif italic mb-2 leading-relaxed">"The pinnacle of reliability in Bengaluru."</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <Trophy size={14} className="text-yellow-400" />
                  </div>
                  <p className="text-sm font-semibold opacity-90">Meera V., Director at TechPrime</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Serving India's Finest Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-serif font-black tracking-tighter">ESTATE<span className="text-indigo-600">X</span></div>
             <div className="text-2xl font-serif font-black tracking-tighter">PRIME<span className="text-indigo-600">CORP</span></div>
             <div className="text-2xl font-serif font-black tracking-tighter">Luxe<span className="text-indigo-600">India</span></div>
             <div className="text-2xl font-serif font-black tracking-tighter">VOGUE<span className="text-indigo-600">MOD</span></div>
             <div className="text-2xl font-serif font-black tracking-tighter">TECH<span className="text-indigo-600">ZEN</span></div>
          </div>
        </div>
      </section>

      {/* NEW: Our Digital Evolution (AI Image Editor Section) */}
      <section id="ai-studio" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Intelligent Assets</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight">The Aura Studio AI</h2>
            <p className="text-xl text-slate-600 leading-relaxed">For our commercial clients, we now offer integrated AI asset management. Use our custom Gemini 2.5 Flash Image tool below to see how we handle digital aesthetic curation.</p>
          </div>
          <ImageAIEditor />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-32 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold mb-4">THE AURAPRIME EDGE</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Elegance in Execution</h2>
            <p className="text-xl text-slate-600 leading-relaxed">Most services are transactional. Ours are relational. We invest in understanding the unique DNA of your requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="group p-12 rounded-[3rem] border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 group-hover:text-white" })}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Maps Explorer Section */}
      <section id="location-hubs" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <MapsExplorer />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services-preview" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold mb-4">OUR SPECIALIZATIONS</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Uncompromising Standards</h2>
              <p className="text-xl text-slate-600 leading-relaxed">From meticulous home detailing to strategic logistics, we define the benchmark for quality in India.</p>
            </div>
            <Link to="/services" className="inline-flex items-center space-x-3 text-indigo-600 font-bold hover:translate-x-2 transition-transform text-xl group">
              <span>Explore Boutique Catalog</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[4rem] translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500"></div>
                <div className="mb-10 relative z-10">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 shadow-lg shadow-slate-200">
                    <span className="text-lg font-bold">0{idx + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 relative z-10">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-10 flex-grow relative z-10">{service.description}</p>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between mt-auto relative z-10">
                  <span className="text-indigo-600 font-extrabold text-lg">{service.price}</span>
                  <Link to="/services" className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-500 shadow-sm">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experience Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=1200" alt="Consultation" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl max-w-[280px]">
                <Zap className="text-indigo-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Rapid Response</h4>
                <p className="text-slate-400 text-sm">Our 24/7 dedicated concierge desk responds within 60 seconds to priority accounts.</p>
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-700 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Signature Process</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Curated Care, <br /> Intelligent Service.</h2>
              <div className="space-y-8">
                {[
                  { title: "Discovery & Audit", desc: "We begin with a thorough audit of your estate or commercial requirements to create a bespoke baseline." },
                  { title: "AI-Powered Optimization", desc: "We use predictive models to schedule maintenance before failure occurs." },
                  { title: "Elite Execution", desc: "Vetted professionals arrive with surgical precision to execute the plan." },
                  { title: "Continuous Refinement", desc: "Post-service reports ensure we evolve with your shifting lifestyle needs." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-700 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Global Praise</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tight">The Voice of Our Patrons</h2>
            <div className="flex items-center space-x-2 text-yellow-400">
               {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
               <span className="ml-4 text-slate-900 font-bold text-lg">4.9/5 Rating</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="relative p-12 rounded-[3rem] border border-slate-100 bg-white hover:border-indigo-100 transition-all duration-500 hover:shadow-xl group">
                <Quote size={60} className="absolute top-10 right-10 text-slate-50 group-hover:text-indigo-50 transition-colors" />
                <p className="text-slate-700 italic leading-relaxed text-lg mb-10 relative z-10 font-medium">"{t.content}"</p>
                <div className="flex items-center space-x-5 pt-8 border-t border-slate-50">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md" />
                    <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white rounded-full p-1 border-2 border-white">
                      <CheckCircle2 size={10} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">{t.name}</h4>
                    <p className="text-sm text-indigo-600 font-semibold tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact-cta" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)]">
            <div className="relative z-10 max-w-4xl mx-auto">
              <Award className="w-20 h-20 text-indigo-400 mx-auto mb-10 animate-bounce" />
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">Secure Your Service <br /> Legacy Today.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-xl md:text-2xl leading-relaxed font-medium">
                Our advisors are ready to tailor a solution that matches your ambition. Experience the gold standard of Indian local service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <Link to="/contact" className="w-full sm:w-auto bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-bold hover:bg-indigo-500 hover:scale-105 transition-all text-xl shadow-2xl shadow-indigo-600/30">
                  Request Private Audit
                </Link>
                <a href="tel:+919876543210" className="w-full sm:w-auto bg-white/5 text-white px-12 py-6 rounded-[2rem] font-bold hover:bg-white/10 transition-all text-xl border border-white/10 backdrop-blur-md">
                  Concierge Hotline
                </a>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[50rem] h-[50rem] bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-indigo-600/10 rounded-full blur-[120px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
