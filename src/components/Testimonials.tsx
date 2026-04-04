import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "João Manuel",
    role: "Diretor de Logística",
    content: "A SANCHO tem sido um parceiro fundamental para o crescimento da nossa frota. A qualidade das máquinas SANY é excepcional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Maria Santos",
    role: "Gestora de Projetos Agrícolas",
    content: "O suporte técnico e a consultoria na escolha dos tratores foram decisivos para o sucesso da nossa última colheita.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "António Langa",
    role: "Empreiteiro",
    content: "Eficiência e confiança. O processo de importação foi transparente e a entrega ocorreu dentro do prazo estabelecido.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sancho-primary mb-4">O que dizem nossos clientes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A satisfação dos nossos parceiros é o nosso maior compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-sancho-yellow/20 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sancho-primary">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic text-sm leading-relaxed">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
