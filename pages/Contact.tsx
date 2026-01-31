
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to our premium desk. We will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to experience AuraPrime? Connect with our team today for a bespoke service consultation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Get In Touch</h2>
              <p className="text-slate-600 mb-12 text-lg">
                Whether you're looking for recurring home care or a one-time logistics solution, our advisors are here to help you find the perfect fit.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Our Headquarters</h4>
                    <p className="text-slate-600 text-sm">12th Floor, Prestige Tower, MG Road, Bangalore, KA 560001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Direct Line</h4>
                    <p className="text-slate-600 text-sm">+91 98765 43210 (Mon-Sat, 9AM-7PM)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600 text-sm">hello@auraprime.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-serif font-bold mb-4 italic">"Quality is never an accident; it is always the result of intelligent effort."</h4>
                  <div className="w-12 h-1 bg-indigo-500 mb-4"></div>
                  <p className="text-sm text-slate-400 tracking-wider uppercase">— John Ruskin</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="name@email.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Interested Service</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Premium Home Care</option>
                    <option>Commercial Logistics</option>
                    <option>Concierge Solutions</option>
                    <option>Eco-Friendly Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help you?</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-slate-200"
                >
                  <Send size={20} />
                  <span>Send My Message</span>
                </button>
                
                <p className="text-center text-xs text-slate-400">
                  By sending this message, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100">
              <MessageCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Quick Chat?</h2>
            <p className="text-slate-600 mb-8">Send us a direct message on WhatsApp for the fastest response to your questions.</p>
            <a 
              href="https://wa.me/919876543210" 
              className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
