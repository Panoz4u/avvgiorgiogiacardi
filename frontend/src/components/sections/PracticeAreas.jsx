import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Scale, Globe, Building2, FileText, ScrollText, Fingerprint } from 'lucide-react';

const PracticeAreas = ({ lang }) => {
  const areas = [
    {
      icon: <Fingerprint size={32} />,
      title_it: "Privacy e Diritto all'Oblio",
      title_fr: "Confidentialité et Droit à l'Oubli",
      desc_it: "Tutela della reputazione digitale e gestione dei dati personali.",
      desc_fr: "Protection de la réputation numérique et gestion des données personnelles."
    },
    {
      icon: <ScrollText size={32} />,
      title_it: "Eredità Digitale",
      title_fr: "Héritage Numérique",
      desc_it: "Successioni complesse e gestione del patrimonio digitale.",
      desc_fr: "Successions complexes et gestion du patrimoine numérique."
    },
    {
      icon: <Users size={32} />,
      title_it: "Diritto di Famiglia",
      title_fr: "Droit de la Famille",
      desc_it: "Separazioni, divorzi e tutela dei minori.",
      desc_fr: "Séparations, divorces et protection des mineurs."
    },
    {
      icon: <Scale size={32} />,
      title_it: "Diritto Civile",
      title_fr: "Droit Civil",
      desc_it: "Contrattualistica, responsabilità civile e risarcimento danni.",
      desc_fr: "Contrats, responsabilité civile et indemnisation."
    },
    {
      icon: <Globe size={32} />,
      title_it: "Internazionale Privato",
      title_fr: "International Privé",
      desc_it: "Rapporti giuridici transfrontalieri Italia-Francia.",
      desc_fr: "Rapports juridiques transfrontaliers Italie-France."
    },
    {
      icon: <Building2 size={32} />,
      title_it: "Amministrativo e Urbanistica",
      title_fr: "Administratif et Urbanisme",
      desc_it: "Consulenza per enti e privati in materia urbanistica.",
      desc_fr: "Conseil aux entités et particuliers en urbanisme."
    }
  ];

  return (
    <section id="areas" className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-[var(--brand-primary)] font-mono text-sm tracking-widest mb-4">
            {lang === 'it' ? 'AREE DI COMPETENZA' : 'DOMAINES DE COMPÉTENCE'}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {lang === 'it' ? 'Specializzazioni' : 'Spécialisations'}
          </h3>
          <p className="text-gray-400">
            {lang === 'it' 
              ? 'Un approccio multidisciplinare per affrontare le sfide legali contemporanee.' 
              : 'Une approche multidisciplinaire pour relever les défis juridiques contemporains.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card p-8 hover:bg-[rgba(255,255,255,0.03)] transition-all duration-300 border border-[var(--border-subtle)] hover:border-[var(--brand-primary)]"
            >
              <div className="text-[var(--brand-primary)] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 font-serif">
                {lang === 'it' ? area.title_it : area.title_fr}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === 'it' ? area.desc_it : area.desc_fr}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;
