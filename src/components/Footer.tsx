import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, NAV_LINKS, WHATSAPP_LINK, PHONE_1, EMAIL, ADDRESS, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-sancho-primary text-blue-100 border-t border-blue-900 overflow-hidden font-sans">
      {/* Background Parallax Layer */}
      <div 
        className="absolute inset-0 w-full h-[150%] -top-[25%] z-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offsetY * 0.03}px)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-sancho-primary via-sancho-primary/95 to-sancho-primary/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col group items-start">
               <div className="flex flex-col">
                  <span className="font-extrabold text-xl uppercase tracking-tight leading-none text-white">
                    SANCHO
                  </span>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-sancho-accent uppercase mt-1">
                    Importações & Exportações LDA
                  </span>
               </div>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed">
              Líderes em importação e exportação de máquinas pesadas e soluções logísticas em Moçambique. Conectando o seu negócio ao mundo com confiança e eficiência.
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sancho-accent flex items-center justify-center transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sancho-accent flex items-center justify-center transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2">
              Navegação
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-sancho-yellow hover:pl-2 transition-all flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} className="opacity-50" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
             <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2">
              Contactos
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Phone size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <a href={`tel:${PHONE_1}`} className="hover:text-white transition-colors">{PHONE_1}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Mail size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin size={18} className="text-sancho-accent shrink-0 mt-0.5" />
                <span className="hover:text-white transition-colors">
                  {ADDRESS}
                </span>
              </li>
            </ul>
          </div>

          {/* 4. CTA */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 flex items-center gap-2">
              Atendimento
              <span className="w-12 h-0.5 bg-sancho-accent block"></span>
            </h3>
            <p className="text-sm text-blue-200 mb-4">
              Precisa de uma cotação rápida? Fale diretamente com nossos consultores.
            </p>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-sancho-yellow hover:bg-white text-sancho-primary font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
            >
              Iniciar Conversa
            </a>
          </div>

        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-white/5 py-8 mt-8">
          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest opacity-50">Especialidades em Moçambique</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] md:text-xs text-blue-300/60 uppercase font-medium">
            <span>Importação de Máquinas Pesadas</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Logística DDP Maputo</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Equipamentos Industriais SANY</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Tratores Agrícolas</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Geradores de Energia</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Desembaraço Aduaneiro</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Exportação Moçambique</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center"></span>
            <span>Camiões Basculantes</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/politica-privacidade" className="hover:text-white transition-colors flex items-center gap-1">
              <Shield size={12} /> Política de Privacidade
            </Link>
            <span className="opacity-20">|</span>
            <span className="flex items-center gap-1 opacity-70">
              Desenvolvido com excelência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
