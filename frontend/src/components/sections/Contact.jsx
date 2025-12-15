import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = ({ lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, { ...data, lang });
      toast.success("Messaggio Inviato / Message Envoyé");
      reset();
    } catch (error) {
      toast.error("Error / Errore");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[var(--bg-primary)] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-8xl font-display font-black text-white mb-6 uppercase break-words">
            {lang === 'it' ? 'Parliamone' : 'Parlons-en'}
          </h2>
          <p className="text-xl text-gray-400">
            {lang === 'it' ? 'Il tuo caso merita attenzione.' : 'Votre cas mérite attention.'}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="group">
              <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">Name</label>
              <motion.input 
                {...register("name", { required: true })}
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-4xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 font-display"
                placeholder="Giorgio..."
              />
              {errors.name && <span className="text-red-500 text-sm mt-2">Required</span>}
            </div>
            
            <div className="group">
              <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">Email</label>
              <motion.input 
                {...register("email", { required: true })}
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-4xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 font-display"
                placeholder="@..."
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest mb-4">Message</label>
            <motion.textarea 
              {...register("message", { required: true })}
              whileFocus={{ scale: 1.02 }}
              rows={3}
              className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-3xl text-white py-4 outline-none focus:border-[var(--brand-primary)] transition-colors placeholder-white/10 resize-none font-display"
              placeholder="..."
            />
          </div>

          <motion.button 
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[var(--brand-primary)] text-white py-8 text-2xl font-bold uppercase tracking-widest hover:shadow-[0_0_50px_rgba(0,86,210,0.5)] transition-all"
          >
            {isSubmitting ? 'Sending...' : (lang === 'it' ? 'INVIA ORA' : 'ENVOYER')}
          </motion.button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
