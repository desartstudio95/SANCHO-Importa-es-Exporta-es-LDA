import React from 'react';
import { ShieldCheck, Truck, Globe, Cog } from 'lucide-react';

const Expertise: React.FC = () => {
  const expertiseItems = [
    {
      icon: <Truck className="text-sancho-accent" size={32} />,
      title: "Logística DDP em Moçambique",
      description: "Especialistas em logística porta-a-porta (Delivered Duty Paid). Gerimos todo o processo de importação, desde a origem até à entrega final no seu armazém, incluindo o desembaraço aduaneiro completo."
    },
    {
      icon: <Cog className="text-sancho-accent" size={32} />,
      title: "Máquinas Pesadas e Industriais",
      description: "Representamos marcas globais como SANY e SDLG. Oferecemos uma vasta gama de escavadoras, pás carregadoras, geradores e equipamentos industriais de alta performance para os sectores de construção e mineração."
    },
    {
      icon: <Globe className="text-sancho-accent" size={32} />,
      title: "Importação e Exportação Global",
      description: "Conectamos o mercado moçambicano aos principais centros industriais do mundo. Facilitamos a aquisição de equipamentos de qualidade com consultoria técnica especializada e suporte documental."
    },
    {
      icon: <ShieldCheck className="text-sancho-accent" size={32} />,
      title: "Confiança e Transparência",
      description: "Com anos de experiência no mercado de Moçambique, a SANCHO é sinónimo de integridade. Garantimos que cada transação seja transparente, segura e optimizada para o melhor custo-benefício do cliente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sancho-primary mb-4 tracking-tight">
            Especialistas em Importação e Máquinas em Moçambique
          </h2>
          <div className="w-20 h-1.5 bg-sancho-accent mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A SANCHO Importações & Exportações LDA é a sua parceira estratégica para o crescimento industrial. 
            Combinamos conhecimento local profundo com uma rede global de fornecedores para entregar soluções 
            de logística e equipamentos que impulsionam o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-sancho-primary mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-sancho-primary text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Precisa de equipamentos industriais ou suporte logístico?
              </h3>
              <p className="text-slate-300 text-lg">
                Nossa equipa de consultores está pronta para ajudar a optimizar os seus custos de importação e encontrar as melhores máquinas para o seu projecto.
              </p>
            </div>
            <a 
              href="/contactos" 
              className="px-8 py-4 bg-sancho-accent hover:bg-sancho-accent-hover text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Falar com Especialista
            </a>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
