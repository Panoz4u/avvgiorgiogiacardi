import React from 'react';
import { MapPin } from 'lucide-react';

const Locations = ({ lang }) => {
  return (
    <section id="locations" className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-[var(--brand-primary)] font-mono text-sm tracking-widest mb-4">
            LOCATIONS
          </h2>
          <h3 className="text-3xl font-serif font-bold">
            {lang === 'it' ? 'Dove Siamo' : 'Où Nous Trouver'}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Italy */}
          <div className="group relative overflow-hidden bg-black border border-[var(--border-subtle)] p-10 hover:border-[var(--brand-primary)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-8xl font-bold font-serif">IT</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[var(--brand-primary)]" />
                <h4 className="text-2xl font-bold font-serif">ITALIA</h4>
              </div>
              <div className="space-y-2 text-gray-400">
                <p className="text-white font-medium">Studio Legale Giacardi</p>
                <p>Via Stazione n. 32</p>
                <p>12049 Trinità (CN)</p>
                <p className="mt-4 pt-4 border-t border-gray-800 text-sm font-mono">
                  PIEMONTE / CUNEO
                </p>
              </div>
            </div>
          </div>

          {/* France */}
          <div className="group relative overflow-hidden bg-black border border-[var(--border-subtle)] p-10 hover:border-[var(--brand-primary)] transition-all duration-500">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-8xl font-bold font-serif">FR</span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[var(--brand-primary)]" />
                <h4 className="text-2xl font-bold font-serif">FRANCE</h4>
              </div>
              <div className="space-y-2 text-gray-400">
                <p className="text-white font-medium">Cabinet Secondaire</p>
                <p>20 Rue Manin, 75019 Paris</p>
                <p className="text-sm italic text-gray-500 mt-2">Collaboration: 3 Avenue Saint Honoré d'Eylau, 75116 Paris</p>
                <p className="mt-4 pt-4 border-t border-gray-800 text-sm font-mono">
                  PARIS / ÎLE-DE-FRANCE
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
