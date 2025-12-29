import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Locations = ({ lang }) => {
  return (
    <section id="locations" className="py-32 bg-[var(--bg-secondary)] relative">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-mono text-[var(--brand-primary)] mb-20 tracking-widest">
          LOCATIONS / SEDI
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Card Italy */}
          <motion.div 
            whileHover={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.02)" }}
            className="border border-white/10 p-12 min-h-[400px] flex flex-col justify-between bg-[var(--bg-primary)] group"
          >
            <div>
              <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors">IT</span>
              <h3 className="text-4xl font-bold text-white mt-4">ITALIA</h3>
              <p className="text-[var(--brand-primary)] text-xl mt-2">Main Office</p>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl text-gray-300 font-light">Trinità (Cuneo)</p>
              <p className="text-gray-500 mt-2">Via Stazione 32</p>
              <p className="text-2xl text-gray-300 font-light">+39 347 243 9918</p>
              <motion.a 
                href="https://share.google/JLiYCPUmPk0BX7KAz"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block mt-6 text-white border-b border-white pb-1 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
                whileHover={{ x: 10 }}
              >
                Vedi Mappa →
              </motion.a>
            </div>
          </motion.div>

          {/* Card France */}
          <motion.div 
             whileHover={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.02)" }}
             className="border border-white/10 p-12 min-h-[400px] flex flex-col justify-between bg-[var(--bg-primary)] group"
          >
            <div>
              <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors">FR</span>
              <h3 className="text-4xl font-bold text-white mt-4">FRANCE</h3>
              <p className="text-[var(--brand-primary)] text-xl mt-2">Paris</p>
            </div>
            
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl text-gray-300 font-light">Paris (75019)</p>
              <p className="text-gray-500 mt-2">20 Rue Manin</p>
              <p className="text-2xl text-gray-300 font-light">+39 347 243 9918</p>
              <motion.a 
                href="https://share.google/N0mDgUICZD7DOIrja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-white border-b border-white pb-1 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors"
                whileHover={{ x: 10 }}
              >
                Voir Carte →
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
