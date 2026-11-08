import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '../ui';
import { contactInfo } from '../data';
import { SiWhatsapp } from 'react-icons/si';
import image3 from '../assets/image3.jpeg';
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    // Estos valores deben ser reemplazados por el usuario
    const SERVICE_ID = 'service_xxxxxx';
    const TEMPLATE_ID = 'template_xxxxxx';
    const PUBLIC_KEY = 'your_public_key';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus({ loading: false, success: true, error: null });
          form.current.reset();
      }, (error) => {
          setStatus({ loading: false, success: false, error: error.text });
      });
  };

  return (
    <section id="contact" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="aspect-square w-48 rounded-2xl overflow-hidden shadow-xl"
              >
                <img src={image3} alt="Contact" className="w-full h-full object-cover" />
              </motion.div>
              <h2 className="text-4xl font-bold dark:text-white leading-tight">
                Me encantaría saber de ti.
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Si tienes un proyecto que te gustaría comentar, o simplemente quieres ponerte en contacto conmigo, estaré encantada de leerte.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-dark-card text-white rounded-2xl flex items-start gap-4 border border-brand-secondary/20 shadow-xl shadow-black/30">
                <MapPin className="w-6 h-6 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-bold">{contactInfo.address}</h4>
                  <p className="text-white/70 text-sm">{contactInfo.location}</p>
                </div>
              </div>

              <div className="p-6 bg-dark-card text-white rounded-2xl flex items-start gap-4 border border-brand-secondary/20 shadow-xl shadow-black/30">
                <Mail className="w-6 h-6 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-bold">{contactInfo.email}</h4>
                  <p className="text-white/70 text-sm">{contactInfo.description}</p>
                </div>
              </div>
              <a 
                href={contactInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-dark-card hover:bg-emerald-950/40 text-white rounded-2xl flex items-start gap-4 border border-emerald-500/30 hover:border-emerald-500/60 shadow-xl shadow-black/30 transition-all group"
              >
                <SiWhatsapp className="w-6 h-6 shrink-0 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    WhatsApp
                
                  </h4>
                  <p className="text-white/70 text-sm">{contactInfo.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white dark:bg-dark-card p-10 rounded-3xl shadow-xl dark:shadow-black/30 border border-gray-100 dark:border-brand-secondary/20">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Nombres y apellido*" name="user_name" placeholder="Tu nombre" required />
                <Input label="Número de teléfono*" name="user_phone" placeholder="Tu teléfono" required />
              </div>
              <Input label="Email*" type="email" name="user_email" placeholder="tu@email.com" required />
              <Input label="Título" name="subject" placeholder="Asunto del mensaje" />
              <Textarea label="Escriba su mensaje" name="message" placeholder="¿Cómo puedo ayudarte?" required />
              
              <Button type="submit" disabled={status.loading} className="w-full md:w-auto px-12">
                {status.loading ? 'ENVIANDO...' : 'ENVIAR'}
                {!status.loading && <Send className="w-4 h-4 ml-2" />}
              </Button>

              {status.success && (
                <p className="text-green-500 font-medium">¡Mensaje enviado con éxito! Me pondré en contacto pronto.</p>
              )}
              {status.error && (
                <p className="text-red-500 font-medium">Error al enviar: {status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
