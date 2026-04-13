import React from 'react';
import { CATALOG_DATA } from '../constants';
import { Package, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Products: React.FC = () => {
  const [visibleCounts, setVisibleCounts] = React.useState<Record<string, number>>(
    CATALOG_DATA.reduce((acc, cat) => ({ ...acc, [cat.id]: 3 }), {})
  );

  const handleShowMore = (categoryId: string) => {
    setVisibleCounts(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] || 3) + 3
    }));
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO 
        title="Catálogo de Máquinas e Equipamentos"
        description="Explore nosso catálogo de máquinas pesadas, equipamentos industriais e agrícolas. Marcas líderes como SANY, SDLG e Toyota em Moçambique."
        keywords="catálogo máquinas, equipamentos industriais, tratores, geradores, SANY Moçambique"
        canonical="https://www.sanchotrading.com/produtos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-sancho-primary mb-6 tracking-tight">
            Catálogo de Máquinas e Equipamentos Industriais
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A SANCHO é o seu elo de confiança com os maiores fabricantes globais. Oferecemos uma selecção premium de máquinas pesadas para construção, 
            soluções de mecanização agrícola e equipamentos industriais de alta performance, todos com suporte técnico especializado em Moçambique.
          </p>
        </div>

        {CATALOG_DATA.map((category, idx) => {
          const visibleItems = category.items.slice(0, visibleCounts[category.id] || 3);
          const hasMore = category.items.length > visibleItems.length;

          return (
            <div key={category.id} className="mb-20">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
                <div className="bg-sancho-accent/10 p-3 rounded-xl text-sancho-accent">
                  <Package size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-sancho-primary">{category.title}</h2>
                  <p className="text-slate-500 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleItems.map((item, itemIdx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (itemIdx % 3) * 0.1 }}
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
                      <h3 className="text-base font-bold text-sancho-primary mb-3 group-hover:text-sancho-accent transition-colors">
                        {item.name}
                      </h3>
                      <div className="space-y-2 mb-6">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 size={16} className="text-sancho-accent" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs line-clamp-3 mb-6">
                        {item.fullDescription}
                      </p>
                      <Link 
                        to="/simular-cotacao"
                        className="block w-full bg-sancho-primary text-white py-3 rounded-xl font-bold hover:bg-sancho-secondary transition-colors shadow-lg shadow-sancho-primary/20 text-center"
                      >
                        Solicitar Cotação
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-12 flex justify-center">
                  <button 
                    onClick={() => handleShowMore(category.id)}
                    className="px-6 py-2 bg-white border-2 border-sancho-primary text-sancho-primary font-bold rounded-xl hover:bg-sancho-primary hover:text-white transition-all shadow-lg shadow-sancho-primary/10 flex items-center gap-2 text-sm"
                  >
                    Ver Mais {category.title}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
