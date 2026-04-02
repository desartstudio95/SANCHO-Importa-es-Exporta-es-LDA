import React, { useEffect } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.remove('opacity-0', 'translate-y-8');
            target.classList.add('animate-fade-in-up');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 translate-y-8 animate-on-scroll">
          <span className="bg-sancho-accent/10 text-sancho-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-sancho-primary mt-4 mb-3">O Que Fazemos</h2>
          <p className="mt-2 text-slate-500 max-w-2xl mx-auto text-base">
            Soluções completas para todas as suas necessidades em equipamentos e logística
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="opacity-0 translate-y-8 animate-on-scroll bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              <div className="w-12 h-12 bg-sancho-accent/10 text-sancho-accent rounded-lg flex items-center justify-center mb-3 group-hover:bg-sancho-accent group-hover:text-white transition-colors duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300 scale-90">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-sm font-bold text-sancho-primary mb-1 min-h-[24px] flex items-center justify-center leading-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-xs flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;