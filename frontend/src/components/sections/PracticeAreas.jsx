import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const PracticeAreas = ({ lang }) => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    { 
      title: "Privacy & Digital", 
      desc: "GDPR, Diritto all'Oblio, Eredità Digitale",
      details_it: "Tutela della reputazione online, rimozione contenuti lesivi, gestione dell'eredità digitale (account, crypto, asset virtuali) e compliance GDPR per aziende transfrontaliere.",
      details_fr: "Protection de la réputation en ligne, suppression de contenu préjudiciable, gestion de l'héritage numérique et conformité RGPD."
    },
    { 
      title: "Family Law", 
      desc: "Separazioni, Minori, Successioni",
      details_it: "Assistenza in separazioni e divorzi, con particolare focus sulle coppie internazionali italo-francesi. Tutela dei minori e successioni ereditarie complesse.",
      details_fr: "Assistance dans les séparations et divorces, notamment pour les couples internationaux italo-français. Protection des mineurs et successions."
    },
    { 
      title: "Cross Border", 
      desc: "Consulenza Italia-Francia",
      details_it: "Consulenza legale per privati e imprese che operano tra Italia e Francia. Gestione contenziosi, contrattualistica e domiciliazioni legali.",
      details_fr: "Conseil juridique pour particuliers et entreprises opérant entre l'Italie et la France. Gestion des contentieux et contrats."
    },
    { 
      title: "Civil Rights", 
      desc: "Responsabilità, Contratti, Danni",
      details_it: "Diritto civile puro: responsabilità contrattuale ed extracontrattuale, risarcimento danni, recupero crediti e stesura contratti blindati.",
      details_fr: "Droit civil pur : responsabilité contractuelle et délictuelle, indemnisation des dommages, recouvrement de créances."
    },
    { 
      title: "Real Estate", 
      desc: "Urbanistica, Compravendite Internazionali",
      details_it: "Diritto amministrativo e urbanistico. Assistenza completa nelle compravendite immobiliari di lusso tra Italia e Francia.",
      details_fr: "Droit administratif et urbanisme. Assistance complète dans les transactions immobilières de luxe entre l'Italie et la France."
    },
    { 
      title: "Corporate", 
      desc: "Contrattualistica d'Impresa",
      details_it: "Supporto legale alle aziende per espansione estera, compliance normativa, fusioni, acquisizioni e tutela del brand.",
      details_fr: "Support juridique aux entreprises pour l'expansion étrangère, la conformité réglementaire, les fusions et acquisitions."
    }
  ];

  return (
    <section id="areas" className="py-32 bg-[var(--bg-secondary)] relative">
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
              onClick={() => setSelectedArea(area)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArea(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-primary)] border border-white/10 p-8 md:p-12 max-w-2xl w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--brand-primary)] mb-6">
                {selectedArea.title}
              </h3>
              
              <p className="text-2xl text-white mb-8 font-light leading-relaxed">
                {lang === 'it' ? selectedArea.details_it : selectedArea.details_fr}
              </p>

              <button 
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    setSelectedArea(null);
                }}
                className="btn-primary w-full md:w-auto"
              >
                {lang === 'it' ? 'Richiedi Consulenza' : 'Demander une Consultation'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PracticeAreas;
