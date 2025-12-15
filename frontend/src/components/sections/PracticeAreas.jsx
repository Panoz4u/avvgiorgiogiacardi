import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PracticeAreas = ({ lang }) => {
  const areas = [
    { title: "Privacy & Digital", desc: "GDPR, Diritto all'Oblio, Eredità Digitale" },
    { title: "Family Law", desc: "Separazioni, Minori, Successioni" },
    { title: "Cross Border", desc: "Consulenza Italia-Francia" },
    { title: "Civil Rights", desc: "Responsabilità, Contratti, Danni" },
    { title: "Real Estate", desc: "Urbanistica, Compravendite Internazionali" },
    { title: "Corporate", desc: "Contrattualistica d'Impresa" }
  ];

  return (
    <section id="areas" className="py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            {lang === 'it' ? 'AREE DI PRATICA' : 'DOMAINES D\'EXPERTISE'}
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4 group-hover:border-[var(--brand-primary)] transition-colors duration-300">
                <span className="text-[var(--brand-primary)] font-mono text-sm">0{index + 1}</span>
                <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors transform group-hover:rotate-45 duration-300" />
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-400 text-lg font-light">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
