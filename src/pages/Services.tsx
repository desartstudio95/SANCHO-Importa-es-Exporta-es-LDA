import React from 'react';
import { DETAILED_SERVICES_PAGE } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO 
        title="Serviços de Importação e Logística"
        description="Oferecemos serviços completos de importação, exportação, consultoria técnica e soluções financeiras para o seu negócio em Moçambique."
        keywords="serviços importação, logística Moçambique, consultoria técnica, soluções financeiras"
        canonical="https://www.sanchotrading.com/servicos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-sancho-primary mb-6 tracking-tight">
            Nossos Serviços Especializados
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de suporte para garantir que sua empresa tenha os melhores equipamentos e a melhor logística do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DETAILED_SERVICES_PAGE.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="h-40 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-sancho-accent p-2 rounded-xl text-white shadow-lg">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-sancho-primary mb-3 group-hover:text-sancho-accent transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[10px] font-medium text-slate-700">
                      <CheckCircle2 size={14} className="text-sancho-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    const message = `Olá SANCHO! Gostaria de saber mais sobre o serviço: ${service.title}`;
                    window.open(`https://wa.me/258874228160?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 text-sancho-primary py-3 rounded-xl font-bold text-xs hover:bg-sancho-accent hover:text-white transition-all group/btn"
                >
                  Saiba Mais
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-sancho-primary rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-sancho-accent/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sancho-accent/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Precisa de uma solução personalizada?</h2>
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              Nossa equipe técnica está pronta para analisar seu projeto e oferecer os equipamentos ideais para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => {
                  const message = "Olá SANCHO! Gostaria de falar com um especialista sobre uma solução personalizada.";
                  window.open(`https://wa.me/258874228160?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-sancho-accent text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-sancho-accent/90 transition-all shadow-lg shadow-sancho-accent/30"
              >
                Falar com Especialista
              </button>
              <button 
                onClick={() => navigate('/produtos')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-xl font-bold text-base hover:bg-white/20 transition-all"
              >
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
