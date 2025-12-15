import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = ({ lang }) => {
  const content = {
    it: {
      title: "CHI SONO",
      subtitle: "Un ponte giuridico tra Italia e Francia",
      p1: "Avvocato iscritto al Foro di Cuneo, opero da oltre vent'anni nel panorama legale piemontese e internazionale.",
      p2: "La mia attività si distingue per una forte vocazione transfrontaliera, collaborando stabilmente con studi legali parigini e assistendo clienti con interessi in entrambi i paesi.",
      p3: "Oltre alla professione forense, ho ricoperto ruoli istituzionali e amministrativi che mi hanno conferito una visione pragmatica e completa del diritto.",
      list: [
        "Iscritto al Foro di Cuneo dal 2004",
        "Collaborazioni attive a Parigi",
        "Giornalista Pubblicista",
        "Esperto CCIAA Cuneo"
      ]
    },
    fr: {
      title: "QUI SUIS-JE",
      subtitle: "Un pont juridique entre l'Italie et la France",
      p1: "Avocat inscrit au Barreau de Cuneo, j'exerce depuis plus de vingt ans dans le paysage juridique piémontais et international.",
      p2: "Mon activité se distingue par une forte vocation transfrontalière, collaborant régulièrement avec des cabinets parisiens et assistant des clients ayant des intérêts dans les deux pays.",
      p3: "Au-delà de la profession d'avocat, j'ai occupé des fonctions institutionnelles et administratives qui m'ont apporté une vision pragmatique et globale du droit.",
      list: [
        "Inscrit au Barreau de Cuneo depuis 2004",
        "Collaborations actives à Paris",
        "Journaliste Publiciste",
        "Expert CCIAA Cuneo"
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0056D2]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--brand-primary)] font-mono text-sm tracking-widest mb-2 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--brand-primary)]"></span>
              {t.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">{t.subtitle}</h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.list.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[var(--brand-primary)]" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-[#0a0a0a] border border-[var(--border-subtle)] p-2 relative">
               {/* Minimalist profile representation or placeholder if no image provided */}
               <div className="w-full h-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden grayscale contrast-125">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                 {/* Using a placeholder or potentially the Monviso image if profile is missing, but here we keep it abstract/dark */}
                 <div className="text-center p-10">
                    <span className="text-6xl font-serif text-[var(--border-medium)]">GG</span>
                 </div>
               </div>
               
               {/* Decorative frame */}
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[var(--brand-primary)]"></div>
               <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[var(--brand-primary)]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
