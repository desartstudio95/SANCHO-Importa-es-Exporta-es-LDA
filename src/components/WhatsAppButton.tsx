import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-bounce" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-bold pointer-events-none">
        Fale Connosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;
