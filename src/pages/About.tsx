import React from 'react';
import { COMPANY_NAME, ADDRESS, PHONE_1, EMAIL, VALUES, WORK_PROCESS } from '../constants';
import { ShieldCheck, Users, Package, TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO 
        title="Sobre Nós"
        description="Conheça a SANCHO Importações & Exportações LDA. Nossa missão, valores e compromisso com a excelência em máquinas e logística em Moçambique."
        keywords="sobre SANCHO, missão valores, empresa importação Moçambique"
        canonical="https://www.sanchotrading.com/sobre"
      />
      {/* Hero Section */}
      <div className="bg-sancho-primary text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Liderando a Importação e Exportação em Moçambique
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A {COMPANY_NAME} é sua parceira estratégica para o fornecimento de máquinas pesadas e equipamentos industriais de alta performance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/tpL7j0LC/images-1.jpg" 
                alt="Nossa História" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-sancho-accent text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-extrabold mb-1">10+</p>
              <p className="text-sm font-bold uppercase tracking-wider">Anos de Experiência</p>
            </div>
          </div>
          <div>
            <span className="text-sancho-accent font-bold uppercase tracking-widest text-[10px] mb-4 block">Quem Somos</span>
            <h2 className="text-2xl md:text-3xl font-bold text-sancho-primary mb-6">
              Comprometidos com a Excelência e o Desenvolvimento Industrial
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Fundada com a visão de transformar o cenário industrial e de construção em Moçambique, a SANCHO consolidou-se como uma referência na importação de equipamentos de marcas globais.
              </p>
              <p>
                Nossa missão é fornecer não apenas máquinas, mas soluções completas que impulsionem a produtividade e o crescimento sustentável dos nossos clientes em todo o território nacional.
              </p>
              <p>
                Trabalhamos com os maiores fabricantes do mundo para garantir que cada equipamento entregue atenda aos mais rigorosos padrões de qualidade e durabilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-sancho-primary mb-4">Nossos Valores Fundamentais</h2>
            <div className="w-24 h-1 bg-sancho-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:border-sancho-accent transition-all text-center group"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sancho-accent/10 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-sancho-primary mb-3">{value.title}</h3>
                <p className="text-slate-500 text-xs">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-slate-100 rounded-[3rem] p-12 md:p-20 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-sancho-primary mb-4">Como Trabalhamos</h2>
            <p className="text-slate-500 text-sm">Nosso processo é desenhado para sua total tranquilidade e segurança.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WORK_PROCESS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-6 rounded-3xl shadow-sm h-full border border-transparent hover:border-sancho-accent transition-all">
                  <span className="text-3xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-sancho-accent/10 transition-colors">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-sancho-primary mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-500 text-[10px] relative z-10 leading-relaxed">{step.desc}</p>
                </div>
                {idx < WORK_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-sancho-accent">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
