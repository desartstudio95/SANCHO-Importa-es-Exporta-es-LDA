import React, { useState } from 'react';
import { CATALOG_DATA, WHATSAPP_LINK } from '../constants';
import { Calculator, ArrowRight, CheckCircle2, MessageCircle, Truck, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QuoteSimulator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const currentCategory = CATALOG_DATA.find(c => c.id === selectedCategory);
  const currentProduct = currentCategory?.items.find(i => i.id === selectedProduct);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sancho-accent/10 text-sancho-accent px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Calculator size={18} />
            Simulador de Cotação Online
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sancho-primary mb-4 tracking-tight">
            Personalize seu Pedido
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Selecione os equipamentos e serviços que você precisa e receba uma estimativa personalizada em poucos minutos.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map(s => (
              <div 
                key={s} 
                className={`flex flex-col items-center gap-2 ${step >= s ? 'text-sancho-accent' : 'text-slate-300'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${step >= s ? 'bg-sancho-accent border-sancho-accent text-white shadow-lg shadow-sancho-accent/30' : 'bg-white border-slate-200'}`}>
                  {s}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {s === 1 ? 'Categoria' : s === 2 ? 'Produto' : 'Resumo'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-sancho-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / 2) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold text-sancho-primary mb-8">Escolha a Categoria do Equipamento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CATALOG_DATA.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        handleNext();
                      }}
                      className={`flex items-center gap-6 p-6 rounded-3xl border-2 text-left transition-all group ${selectedCategory === category.id ? 'border-sancho-accent bg-sancho-accent/5' : 'border-slate-100 hover:border-sancho-accent/30 hover:bg-slate-50'}`}
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sancho-primary text-lg group-hover:text-sancho-accent transition-colors">{category.title}</h3>
                        <p className="text-slate-500 text-sm line-clamp-1">{category.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-sancho-primary">Selecione o Equipamento Específico</h2>
                  <button onClick={handleBack} className="text-sancho-accent font-bold hover:underline">Voltar</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {currentCategory?.items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedProduct(item.id)}
                      className={`flex items-center gap-6 p-6 rounded-3xl border-2 text-left transition-all group ${selectedProduct === item.id ? 'border-sancho-accent bg-sancho-accent/5' : 'border-slate-100 hover:border-sancho-accent/30 hover:bg-slate-50'}`}
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sancho-primary text-lg group-hover:text-sancho-accent transition-colors">{item.name}</h3>
                        <div className="flex gap-2 mt-1">
                          {item.specs.slice(0, 2).map((s, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 font-bold uppercase">{s}</span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                {selectedProduct && (
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Quantidade</label>
                        <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-2">
                          <button 
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200 transition-colors"
                          >-</button>
                          <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                          <button 
                            onClick={() => setQuantity(q => q + 1)}
                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200 transition-colors"
                          >+</button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={handleNext}
                      className="bg-sancho-accent text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-sancho-accent/90 transition-all shadow-xl shadow-sancho-accent/30 flex items-center gap-3"
                    >
                      Continuar para Resumo
                      <ArrowRight size={20} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold text-sancho-primary mb-8 text-center">Resumo da sua Solicitação</h2>
                
                <div className="bg-slate-50 rounded-[2rem] p-8 mb-10 border border-slate-200">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                      <img src={currentProduct?.image} alt={currentProduct?.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <span className="text-sancho-accent font-bold text-xs uppercase tracking-widest mb-2 block">{currentCategory?.title}</span>
                      <h3 className="text-2xl font-bold text-sancho-primary mb-4">{currentProduct?.name}</h3>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                          <CheckCircle2 size={18} className="text-green-500" />
                          <span className="font-bold">Qtd: {quantity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                          <Truck size={18} className="text-sancho-accent" />
                          <span className="font-bold">Logística Incluída</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                          <ShieldCheck size={18} className="text-sancho-accent" />
                          <span className="font-bold">Garantia Oficial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-500">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sancho-primary">Importação Direta</h4>
                      <p className="text-xs text-slate-500">Cuidamos de todo o desembaraço aduaneiro.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                    <div className="bg-green-50 p-3 rounded-xl text-green-500">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sancho-primary">Suporte 24/7</h4>
                      <p className="text-xs text-slate-500">Acompanhamento em tempo real do seu pedido.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-5 rounded-2xl font-bold text-xl hover:bg-green-600 transition-all flex items-center justify-center gap-4 shadow-xl shadow-green-500/30"
                  >
                    <MessageCircle size={28} className="fill-current" />
                    Finalizar Cotação no WhatsApp
                  </a>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-slate-400 font-bold hover:text-sancho-primary transition-colors py-2"
                  >
                    Reiniciar Simulação
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            * Esta é uma simulação preliminar. Os preços finais podem variar de acordo com taxas de câmbio e impostos de importação vigentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteSimulator;
