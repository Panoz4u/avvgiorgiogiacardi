import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = ({ lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  const t = {
    title: lang === 'it' ? 'PARLIAMONE' : 'PARLONS-EN',
    subtitle: lang === 'it' ? 'Il tuo caso merita attenzione.' : 'Votre cas mérite attention.',
    name: lang === 'it' ? 'NOME' : 'NOM',
    email: 'EMAIL',
    msg: lang === 'it' ? 'MESSAGGIO' : 'MESSAGE',
    send: lang === 'it' ? 'INVIA ORA' : 'ENVOYER',
    sending: '...',
    placeholderName: lang === 'it' ? 'Mario Rossi...' : 'Pierre Dupont...',
    placeholderMsg: '...'
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, { ...data, lang });
      toast.success(lang === 'it' ? "Messaggio Inviato" : "Message Envoyé");
      reset();
    } catch (error) {
      toast.error("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-primary)] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16 md:mb-24 w-full px-4">
          {/* Titolo responsive: più piccolo e sempre leggibile, anche su viewport stretti */}
          <h2
            className="font-display font-black text-white mb-2 uppercase leading-[0.95] w-full text-center tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 4.8rem)' }}
          >
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 md:space-y-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="group">
              <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">{t.name}</label>
              <motion.input 
                {...register("name", { required: true })}
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-4xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 font-display"
                placeholder={t.placeholderName}
              />
              {errors.name && <span className="text-red-500 text-sm mt-2">*</span>}
            </div>
            
            <div className="group">
              <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">{t.email}</label>
              <motion.input 
                {...register("email", { required: true })}
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-4xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 font-display"
                placeholder="@..."
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">{t.msg}</label>
            <motion.textarea 
              {...register("message", { required: true })}
              whileFocus={{ scale: 1.02 }}
              rows={3}
              className="w-full bg-transparent border-b-2 border-white/20 text-xl md:text-3xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 resize-none font-display"
              placeholder={t.placeholderMsg}
            />
          </div>

          <motion.button 
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[var(--brand-primary)] text-white py-6 md:py-8 text-xl md:text-2xl font-bold uppercase tracking-widest hover:shadow-[0_0_50px_rgba(0,86,210,0.5)] transition-all"
          >
            {isSubmitting ? t.sending : t.send}
          </motion.button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
