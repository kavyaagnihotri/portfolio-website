
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { ArrowRight, CheckCircle2, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceModal: React.FC<{ service: Service; isClosing: boolean; onClose: () => void }> = ({ service, isClosing, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm ${isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'}`} 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden ${isClosing ? 'animate-modal-out' : 'animate-modal-in'}`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:rotate-90 transition-all duration-300 z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          <div className="p-8 md:p-12 w-full">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
              <Star size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">{service.title}</h2>
            <div className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Premium Tier
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg italic border-l-4 border-indigo-100 pl-4">
              "{service.detailedDescription}"
            </p>

            <div className="mb-10">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                <CheckCircle2 size={18} className="text-indigo-600" />
                <span>Service Inclusions:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:text-slate-900 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-6">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Starting Investment</p>
                <p className="text-3xl font-bold text-indigo-600">{service.price}</p>
              </div>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 hover:-translate-y-1 transition-all text-center flex items-center justify-center space-x-2 shadow-xl shadow-slate-200"
              >
                <span>Book Service</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openService = (service: Service) => {
    setSelectedService(service);
    setIsModalMounted(true);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeService = () => {
    setIsClosing(true);
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      setSelectedService(null);
      setIsModalMounted(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 400); // Matches duration of animate-modal-out
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            World-class service standards tailored specifically for your unique personal and professional needs.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                onClick={() => openService(service)}
                className="group p-1 bg-gradient-to-br from-slate-200 to-white hover:from-indigo-600 hover:to-indigo-300 rounded-[2.5rem] transition-all duration-700 cursor-pointer hover:-translate-y-2"
              >
                <div className="bg-white p-10 rounded-[2.2rem] h-full flex flex-col shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-2xl font-serif">0{idx + 1}</span>
                    </div>
                    <span className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                      Premium
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-500">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description} We use only the finest equipment and highly vetted personnel to ensure your complete satisfaction.
                  </p>
                  <ul className="space-y-3 mb-10">
                    <li className="flex items-center space-x-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-indigo-500" />
                      <span className="text-sm font-medium">Same-day priority booking</span>
                    </li>
                    <li className="flex items-center space-x-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-indigo-500" />
                      <span className="text-sm font-medium">100% satisfaction guarantee</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Starts at</p>
                      <span className="text-indigo-600 font-bold text-xl">{service.price}</span>
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center space-x-2 group-hover:shadow-lg shadow-indigo-200">
                      <span>Learn More</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalMounted && selectedService && (
        <ServiceModal service={selectedService} isClosing={isClosing} onClose={closeService} />
      )}

      {/* CTA */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900">Customized Solutions?</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Our premium concierge desk handles special requests and custom service packages for discerning clients who require absolute exclusivity.
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-3 text-indigo-600 font-bold group border-b-2 border-transparent hover:border-indigo-600 pb-1 text-xl transition-all">
            <span>Discuss Bespoke Services</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Services;
