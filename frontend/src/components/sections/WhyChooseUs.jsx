import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const content = {
    it: {
      title: "PERCHÉ SCEGLIERE NOI",
      points: [
        {
          head: "Esperienza Reale",
          body: "Vent'anni di pratica su casi complessi e in continua evoluzione."
        },
        {
          head: "Dimensione Internazionale",
          body: "Doppia operatività Italia-Francia con sede stabile a Parigi."
        },
        {
          head: "Approccio Umano",
          body: "Ascolto attivo e soluzioni concrete, oltre il semplice parere legale."
        },
        {
          head: "Visione Futura",
          body: "Padronanza delle nuove sfide: digitale, privacy e reputazione online."
        }
      ]
    },
    fr: {
      title: "POURQUOI NOUS CHOISIR",
      points: [
        {
          head: "Expérience Réelle",
          body: "Vingt ans de pratique sur des dossiers complexes et en évolution."
        },
        {
          head: "Dimension Internationale",
          body: "Double activité Italie-France avec une base stable à Paris."
        },
        {
          head: "Approche Humaine",
          body: "Écoute active et solutions concrètes, au-delà du simple avis juridique."
        },
        {
          head: "Vision Future",
          body: "Maîtrise des nouveaux défis : numérique, confidentialité et réputation en ligne."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="why-us" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
             <h2 className="text-[var(--brand-primary)] font-mono text-sm tracking-widest mb-6">
                {t.title}
             </h2>
             <div className="space-y-12">
               {t.points.map((point, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="pl-6 border-l border-[var(--border-subtle)] hover:border-[var(--brand-primary)] transition-colors duration-300"
                 >
                   <h4 className="text-2xl font-serif font-bold mb-2 text-white">{point.head}</h4>
                   <p className="text-gray-400">{point.body}</p>
                 </motion.div>
               ))}
             </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Abstract visual representation of 'connection' or 'bridge' */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="h-full w-full border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden p-10">
               <div className="text-[200px] font-serif font-bold text-[var(--bg-secondary)] absolute select-none z-0 opacity-50">
                 &
               </div>
               <div className="relative z-10 text-center">
                 <h3 className="text-6xl font-serif font-bold mb-2">IT <span className="text-[var(--brand-primary)]">/</span> FR</h3>
                 <p className="text-sm tracking-[0.3em] uppercase text-gray-400">Cross Border Legal</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
