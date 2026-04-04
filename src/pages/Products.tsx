import React from 'react';
import { CATALOG_DATA } from '../constants';
import { Package, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const Products: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sancho-primary mb-4">
            Nosso Catálogo de Produtos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos as melhores soluções em máquinas pesadas, equipamentos industriais e agrícolas das marcas mais renomadas do mundo.
          </p>
        </div>

        {CATALOG_DATA.map((category, idx) => (
          <div key={category.id} className="mb-20">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="bg-sancho-accent/10 p-3 rounded-xl text-sancho-accent">
                <Package size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sancho-primary">{category.title}</h2>
                <p className="text-slate-500">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: itemIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-sancho-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Disponível
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-sancho-primary mb-3 group-hover:text-sancho-accent transition-colors">
                      {item.name}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-sancho-accent" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                      {item.fullDescription}
                    </p>
                    <button className="w-full bg-sancho-primary text-white py-3 rounded-xl font-bold hover:bg-sancho-secondary transition-colors shadow-lg shadow-sancho-primary/20">
                      Solicitar Cotação
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
