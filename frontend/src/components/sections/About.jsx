import React from 'react';
import { motion } from 'framer-motion';

const About = ({ lang }) => {
  const t = {
    it: {
      title: "CHI SONO",
      subtitle: "Avvocato Europeo.",
      desc: "Opero tra Italia e Francia. Non solo un legale, ma un partner strategico per le tue sfide transfrontaliere.",
      stats: [
        { val: "20+", label: "Anni di Esperienza" },
        { val: "2", label: "Sedi (IT/FR)" },
        { val: "100%", label: "Dedizione" }
      ]
    },
    fr: {
      title: "QUI SUIS-JE",
      subtitle: "Avocat Européen.",
      desc: "J'opère entre l'Italie et la France. Pas seulement un avocat, mais un partenaire stratégique pour vos défis transfrontaliers.",
      stats: [
        { val: "20+", label: "Années d'Expérience" },
        { val: "2", label: "Bureaux (IT/FR)" },
        { val: "100%", label: "Dévouement" }
      ]
    }
  }[lang];

  return (
    <section id="about" className="py-32 bg-[var(--bg-primary)] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--brand-primary)] font-bold tracking-[0.3em] uppercase mb-4 block">
              {t.title}
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 text-white">
              {t.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg">
              {t.desc}
            </p>

            <div className="flex gap-12 mt-16">
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-display font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video / Visual Block */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full bg-[#0a0f1d] border border-white/5 overflow-hidden group"
          >
             {/* Profile Video Background */}
             <div className="absolute inset-0 w-full h-full">
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full h-full object-cover"
               >
                 <source src="https://customer-assets.emergentagent.com/job_alpine-attorney/artifacts/k2kbkaa8_grok-video-a598e25c-a974-4d38-af49-1ee62690fd2d.mp4" type="video/mp4" />
               </video>
             </div>

             {/* Blue Opacity Overlay */}
             <div className="absolute inset-0 bg-[var(--brand-primary)]/40 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
             
             {/* GG Text Overlay */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[200px] font-display font-black text-white/20 group-hover:text-white/40 transition-colors duration-500 select-none">
                  GG
                </span>
             </div>
             
             {/* Decorative Lines */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--brand-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
