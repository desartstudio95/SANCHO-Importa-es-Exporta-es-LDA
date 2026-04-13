import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { PHONE_1, EMAIL, ADDRESS, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova Mensagem de Contacto - SANCHO*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* ${formData.subject}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/258874228160?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-sancho-primary mb-6">Entre em Contacto</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Estamos prontos para ajudar o seu negócio a crescer. Fale connosco para cotações, consultoria técnica ou suporte.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sancho-yellow/10 flex items-center justify-center shrink-0">
                  <Phone className="text-sancho-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sancho-primary mb-1">Telefone</h4>
                  <a href={`tel:${PHONE_1}`} className="text-slate-600 hover:text-sancho-accent transition-colors">{PHONE_1}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sancho-yellow/10 flex items-center justify-center shrink-0">
                  <Mail className="text-sancho-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sancho-primary mb-1">Email</h4>
                  <a href={`mailto:${EMAIL}`} className="text-slate-600 hover:text-sancho-accent transition-colors break-all">{EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sancho-yellow/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-sancho-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sancho-primary mb-1">Endereço</h4>
                  <p className="text-slate-600">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sancho-primary ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sancho-yellow/50 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-sancho-primary ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sancho-yellow/50 transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-sancho-primary ml-1">Assunto</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sancho-yellow/50 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-sancho-primary ml-1">Mensagem</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Escreva sua mensagem aqui..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sancho-yellow/50 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-sancho-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sancho-secondary transition-all shadow-lg"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
