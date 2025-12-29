import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const t = {
    it: {
      headlineTop: 'LA TUA DIFESA,',
      headlineBottom: 'SENZA CONFINI.',
      items: [
        { id: '01', title: 'Binazionale', subtitle: 'Esperienza legale Italia–Francia' },
        { id: '02', title: 'Affidabile', subtitle: 'Competenza al servizio del cliente' },
        { id: '03', title: 'Umano', subtitle: 'Empatia guidata dalla strategia' },
      ]
    },
    fr: {
      headlineTop: 'VOTRE DÉFENSE,',
      headlineBottom: 'SANS FRONTIÈRES.',
      items: [
        { id: '01', title: 'Binational', subtitle: 'Expertise juridique Italie–France' },
        { id: '02', title: 'Fiable', subtitle: 'Compétence au service du client' },
        { id: '03', title: 'Humain', subtitle: 'Empathie guidée par la stratégie' },
      ]
    }
  }[lang];

  const headlineTop = t.headlineTop;
  const headlineBottom = t.headlineBottom;
  const items = t.items;

  return (
    <section className="bg-[var(--bg-primary)]">
      {/* Intro */}
      <div className="flex items-center justify-center min-h-[70vh] px-6 py-16 md:py-24">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-black uppercase text-white"
          >
            {headlineTop}
            <br />
            <span className="text-white/50">{headlineBottom}</span>
          </motion.h2>
        </div>
      </div>

      {/* Blocchi full-width, uno dopo l'altro */}
      <div className="space-y-0">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#0b60ff] via-[#0056d2] to-[#003b99] px-6 md:px-16 py-16 md:py-24 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15 mix-blend-screen bg-[radial-gradient(circle_at_40%_40%,#fff,transparent_35%)]" />
            <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[radial-gradient(circle_at_80%_60%,#000,transparent_45%)]" />

            <div className="relative z-10 w-full max-w-7xl text-white flex flex-col gap-4 px-2 md:px-0">
              <h3
                className="font-display font-black uppercase tracking-tight leading-[0.95] whitespace-nowrap"
                style={{ fontSize: 'clamp(2rem, 6.5vw, 5rem)' }}
              >
                {item.title}
              </h3>
              <p className="text-xl md:text-2xl font-light tracking-wide">
                {item.subtitle}
              </p>
            </div>

            <span className="absolute top-1/2 right-[-6vw] md:right-[-8vw] -translate-y-1/2 text-[60vw] md:text-[32vw] font-display font-black text-white/20 leading-none select-none">
              {item.id}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
