import React from 'react';
import { DETAILED_SERVICES_PAGE } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sancho-primary mb-6 tracking-tight">
            Nossos Serviços Especializados
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de suporte para garantir que sua empresa tenha os melhores equipamentos e a melhor logística do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DETAILED_SERVICES_PAGE.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-sancho-accent p-3 rounded-2xl text-white shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-sancho-primary mb-4 group-hover:text-sancho-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={18} className="text-sancho-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-slate-50 text-sancho-primary py-4 rounded-2xl font-bold hover:bg-sancho-accent hover:text-white transition-all group/btn">
                  Saiba Mais
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-sancho-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sancho-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sancho-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Precisa de uma solução personalizada?</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Nossa equipe técnica está pronta para analisar seu projeto e oferecer os equipamentos ideais para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sancho-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sancho-accent/90 transition-all shadow-xl shadow-sancho-accent/30">
                Falar com Especialista
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Ver Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
