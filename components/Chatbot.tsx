
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, User, Bot } from 'lucide-react';
import { startChat } from '../lib/gemini';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to the AuraPrime Private Concierge. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = startChat();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const result = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: result.text || "I apologize, I'm having trouble connecting right now." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily unavailable. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-modal-in">
          <div className="bg-slate-900 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Private Concierge</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Always Active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 no-scrollbar bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none">
                  <Loader2 className="animate-spin text-indigo-600" size={18} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-50 rounded-xl p-2 focus-within:ring-2 ring-indigo-100 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our AI advisor..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-indigo-600 transition-all group relative overflow-hidden"
        >
          <MessageSquare size={28} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full border-2 border-white"></span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
