import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-500 hover:scale-110 flex items-center justify-center group overflow-hidden"
        aria-label="Contactar via WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 group-hover:opacity-40"></span>
        
        <MessageCircle size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap font-bold pointer-events-none border border-slate-100">
          Fale Connosco! 👋
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
