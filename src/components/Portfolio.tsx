import React from 'react';
import { motion } from 'motion/react';
import { CATALOG_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sancho-primary mb-4 tracking-tight">Nosso Portfólio de Máquinas e Equipamentos</h2>
          <div className="w-20 h-1.5 bg-sancho-accent mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore a nossa selecção rigorosa de máquinas pesadas, equipamentos industriais e soluções agrícolas. 
            Trabalhamos com os melhores fabricantes globais para garantir que o seu projecto em Moçambique 
            tenha acesso à tecnologia mais avançada e duradoura do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATALOG_DATA.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary/90 via-sancho-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-blue-100 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <Link 
                  to={`/produtos?categoria=${category.id}`}
                  className="inline-flex items-center gap-2 text-sancho-yellow font-bold text-sm hover:text-white transition-colors"
                >
                  Ver Catálogo <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
