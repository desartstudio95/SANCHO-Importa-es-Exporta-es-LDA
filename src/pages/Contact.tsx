import React from 'react';
import { COMPANY_NAME, ADDRESS, PHONE_1, EMAIL, GOOGLE_MAPS_LINK } from '../constants';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <SEO 
        title="Contactos"
        description="Fale com a SANCHO. Estamos localizados em Maputo e prontos para atender suas necessidades de importação e máquinas pesadas."
        keywords="contacto SANCHO, telefone SANCHO, endereço SANCHO Maputo"
        canonical="https://www.sanchotrading.com/contactos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sancho-primary mb-6 tracking-tight">
            Entre em Contacto Connosco
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para responder às suas perguntas e ajudá-lo a encontrar as melhores soluções para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-sancho-primary mb-8">Informações de Contacto</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-sancho-accent/10 p-4 rounded-2xl text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sancho-primary text-lg mb-1">Nossa Localização</h3>
                    <p className="text-slate-500 leading-relaxed">{ADDRESS}</p>
                    <a 
                      href={GOOGLE_MAPS_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sancho-accent font-bold text-sm mt-3 inline-block hover:underline"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-sancho-accent/10 p-4 rounded-2xl text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sancho-primary text-lg mb-1">Telefone</h3>
                    <p className="text-slate-500 leading-relaxed">{PHONE_1}</p>
                    <p className="text-slate-400 text-sm mt-1">Atendimento de Seg. a Sex. das 08:00 às 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-sancho-accent/10 p-4 rounded-2xl text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sancho-primary text-lg mb-1">E-mail</h3>
                    <p className="text-slate-500 leading-relaxed">{EMAIL}</p>
                    <p className="text-slate-400 text-sm mt-1">Respondemos em até 24 horas úteis</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-sancho-accent/10 p-4 rounded-2xl text-sancho-accent group-hover:bg-sancho-accent group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sancho-primary text-lg mb-1">Horário de Funcionamento</h3>
                    <p className="text-slate-500 leading-relaxed">Segunda a Sexta: 08:00 - 17:00</p>
                    <p className="text-slate-500 leading-relaxed">Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 p-10 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <MessageCircle size={40} className="fill-current" />
                  <h3 className="text-2xl font-bold">Atendimento Rápido</h3>
                </div>
                <p className="text-green-500 bg-white px-4 py-2 rounded-full inline-block font-bold text-sm mb-6 shadow-lg">
                  Online Agora
                </p>
                <p className="text-green-50 mb-8 leading-relaxed">
                  Prefere falar connosco agora? Envie uma mensagem pelo WhatsApp e receba suporte imediato.
                </p>
                <button className="w-full bg-white text-green-600 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl shadow-green-900/20">
                  Iniciar Conversa no WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100 h-full">
              <h2 className="text-3xl font-bold text-sancho-primary mb-10">Envie-nos uma Mensagem</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome aqui"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sancho-accent focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sancho-accent focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="+258 84 000 0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sancho-accent focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Assunto</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sancho-accent focus:border-transparent transition-all appearance-none cursor-pointer">
                      <option>Cotação de Equipamento</option>
                      <option>Serviços de Logística</option>
                      <option>Suporte Técnico</option>
                      <option>Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Sua Mensagem</label>
                  <textarea 
                    rows={6} 
                    placeholder="Como podemos ajudar o seu negócio?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sancho-accent focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-sancho-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-sancho-secondary transition-all flex items-center justify-center gap-3 shadow-xl shadow-sancho-primary/20 group">
                  Enviar Mensagem
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
