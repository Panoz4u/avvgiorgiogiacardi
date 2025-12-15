import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = ({ lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  // Use backend URL from environment or default relative path if proxy is set up
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = { ...data, lang };
      await axios.post(`${BACKEND_URL}/api/contact`, payload);
      
      toast.success(lang === 'it' ? 'Messaggio inviato con successo!' : 'Message envoyé avec succès!');
      reset();
    } catch (error) {
      console.error(error);
      toast.error(lang === 'it' ? 'Errore durante l\'invio. Riprova.' : 'Erreur lors de l\'envoi. Réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = {
    title: lang === 'it' ? 'CONTATTACI' : 'CONTACTEZ-NOUS',
    subtitle: lang === 'it' ? 'Richiedi una consulenza' : 'Demander une consultation',
    name: lang === 'it' ? 'Nome e Cognome' : 'Nom et Prénom',
    email: 'Email',
    phone: lang === 'it' ? 'Telefono (Opzionale)' : 'Téléphone (Optionnel)',
    message: lang === 'it' ? 'Messaggio' : 'Message',
    send: lang === 'it' ? 'Invia Messaggio' : 'Envoyer Message',
    req: lang === 'it' ? 'Campo obbligatorio' : 'Champ obligatoire'
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[var(--brand-primary)] font-mono text-sm tracking-widest mb-4">
            {t.title}
          </h2>
          <h3 className="text-4xl font-serif font-bold text-white">
            {t.subtitle}
          </h3>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">{t.name}</label>
                <input 
                  {...register("name", { required: true })}
                  className="w-full bg-black border-b border-[var(--border-subtle)] focus:border-[var(--brand-primary)] text-white p-3 outline-none transition-colors rounded-none"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs">{t.req}</span>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">{t.email}</label>
                <input 
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-black border-b border-[var(--border-subtle)] focus:border-[var(--brand-primary)] text-white p-3 outline-none transition-colors rounded-none"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs">{t.req}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">{t.phone}</label>
              <input 
                {...register("phone")}
                className="w-full bg-black border-b border-[var(--border-subtle)] focus:border-[var(--brand-primary)] text-white p-3 outline-none transition-colors rounded-none"
                placeholder="+39 ..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">{t.message}</label>
              <textarea 
                {...register("message", { required: true })}
                rows={5}
                className="w-full bg-black border-b border-[var(--border-subtle)] focus:border-[var(--brand-primary)] text-white p-3 outline-none transition-colors rounded-none resize-none"
                placeholder="..."
              />
              {errors.message && <span className="text-red-500 text-xs">{t.req}</span>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full justify-center group"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {t.send}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
           <a href="mailto:avvgiorgiogiacardi@gmail.com" className="hover:text-[var(--brand-primary)] transition-colors">
             avvgiorgiogiacardi@gmail.com
           </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
