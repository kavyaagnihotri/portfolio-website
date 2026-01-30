
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kavydigital.in/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kavyaagnihotri',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#', // Placeholder as specific link wasn't provided, but requirement asked for it
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-primary-600 font-bold text-lg mb-4 uppercase tracking-widest">Connect</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold">Let's Build Something Great</h3>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-2xl font-bold">Contact Information</h4>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            I'm always open to discussing new projects, internships, or interesting collaborations. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Email Me</p>
                <a href="mailto:kavyaagnihotri47@gmail.com" className="font-bold text-lg hover:text-primary-600 transition-colors">
                  kavyaagnihotri47@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Location</p>
                <p className="font-bold text-lg">New Delhi, India</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4">Follow Me</p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Your Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 rounded-2xl outline-none transition-all resize-none"
                placeholder="How can I help you?"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-5 font-bold rounded-2xl text-lg shadow-lg transition-all ${
                submitted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-[1.02]'
              }`}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
