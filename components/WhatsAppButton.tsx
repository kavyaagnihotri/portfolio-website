
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/919876543210?text=Hello! I am interested in your services.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center group overflow-hidden"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold overflow-hidden whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
