import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0.15, 0.30], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.55], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.60, 0.80], ["100%", "0%"]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[var(--bg-primary)]">
      
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* --- BASE LAYER: INTRO (NAVY) --- */}
        <div className="absolute inset-0 w-full h-full bg-[#050A14] flex items-center justify-center p-6 z-0">
          <div className="text-center w-full">
            <h2 className="text-[10vw] md:text-[8vw] font-display font-black text-white leading-[0.9] uppercase">
              {lang === 'it' ? 'LA TUA DIFESA,' : 'VOTRE DÉFENSE,'} <br />
              <span className="text-white/50">
                {lang === 'it' ? 'SENZA CONFINI.' : 'SANS FRONTIÈRES.'}
              </span>
            </h2>
          </div>
        </div>

        {/* --- CARD 1: INTERNATIONAL (BLUE) --- */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <div className="w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-8 text-center shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
             <span className="text-[20vw] font-display font-black text-white/10 absolute top-[-5vw] left-[-2vw]">01</span>
             <h3 className="text-[8vw] md:text-[6vw] font-display font-bold text-white uppercase leading-none mb-6 relative z-10">
               {lang === 'it' ? "Internazionalità" : "International"}
             </h3>
             <p className="text-xl md:text-3xl text-white font-light tracking-widest border-t border-white/30 pt-6 inline-block">
               {lang === 'it' ? "Esperienza IT/FR" : "Expertise IT/FR"}
             </p>
          </div>
        </motion.div>

        {/* --- CARD 2: PROFESSIONAL (BLUE) --- */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 w-full h-full z-20"
        >
          <div className="w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-8 text-center shadow-[0_-50px_100px_rgba(0,0,0,0.5)] border-t border-white/10">
             <span className="text-[20vw] font-display font-black text-white/10 absolute top-[-5vw] right-[-2vw]">02</span>
             <h3 className="text-[8vw] md:text-[6vw] font-display font-bold text-white uppercase leading-none mb-6 relative z-10">
               {lang === 'it' ? "Professionalità" : "Professionnalisme"}
             </h3>
             <p className="text-xl md:text-3xl text-white font-light tracking-widest border-t border-white/30 pt-6 inline-block">
               {lang === 'it' ? "Al servizio del cliente" : "Au service du client"}
             </p>
          </div>
        </motion.div>

        {/* --- CARD 3: HUMAN (BLUE) --- */}
        <motion.div 
          style={{ y: y3 }}
          className="absolute inset-0 w-full h-full z-30"
        >
          <div className="w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-8 text-center shadow-[0_-50px_100px_rgba(0,0,0,0.5)] border-t border-white/10">
             <span className="text-[20vw] font-display font-black text-white/10 absolute bottom-[-5vw] left-[-2vw]">03</span>
             <h3 className="text-[8vw] md:text-[6vw] font-display font-bold text-white uppercase leading-none mb-6 relative z-10">
               {lang === 'it' ? "Rapporti Umani" : "Relations Humaines"}
             </h3>
             <p className="text-xl md:text-3xl text-white font-light tracking-widest border-t border-white/30 pt-6 inline-block">
               {lang === 'it' ? "Empatia & Strategia" : "Empathie & Stratégie"}
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
