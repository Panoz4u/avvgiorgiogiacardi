import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // SCROLL LOGIC:
  // We have a container of 400vh (4 screens).
  // 0.00 - 0.25: Slide 1 (Intro) stays, then Slide 2 covers it.
  // 0.25 - 0.50: Slide 2 (Intl) stays, then Slide 3 covers it.
  // 0.50 - 0.75: Slide 3 (Prof) stays, then Slide 4 covers it.
  // 0.75 - 1.00: Slide 4 (Human) stays.

  const y2 = useTransform(scrollYProgress, [0.15, 0.35], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.40, 0.60], ["100%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0.65, 0.85], ["100%", "0%"]);

  // Slight parallax scale for previous slides to give depth
  const scale1 = useTransform(scrollYProgress, [0.15, 0.35], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.40, 0.60], [1, 0.9]);
  const scale3 = useTransform(scrollYProgress, [0.65, 0.85], [1, 0.9]);

  const slides = [
    {
      id: "01",
      title_it: "Internazionalità",
      title_fr: "International",
      desc_it: "Esperienza IT/FR",
      desc_fr: "Expertise IT/FR"
    },
    {
      id: "02",
      title_it: "Professionalità",
      title_fr: "Professionnalisme",
      desc_it: "Al servizio del cliente",
      desc_fr: "Au service du client"
    },
    {
      id: "03",
      title_it: "Rapporti Umani",
      title_fr: "Relations Humaines",
      desc_it: "Empatia & Strategia",
      desc_fr: "Empathie & Stratégie"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[var(--bg-primary)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* --- SLIDE 1: INTRO (NAVY) --- */}
        <motion.div 
          style={{ scale: scale1 }}
          className="absolute inset-0 w-full h-full bg-[#050A14] flex items-center justify-center p-6 z-10"
        >
          <div className="text-center max-w-5xl">
            <h2 className="text-[10vw] md:text-[6vw] font-display font-black text-white leading-[0.9] uppercase">
              {lang === 'it' ? 'LA TUA DIFESA,' : 'VOTRE DÉFENSE,'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/20">
                {lang === 'it' ? 'SENZA CONFINI.' : 'SANS FRONTIÈRES.'}
              </span>
            </h2>
            <div className="mt-12 w-1 h-24 bg-white/20 mx-auto animate-pulse"></div>
          </div>
        </motion.div>


        {/* --- SLIDE 2: 01 INTERNATIONAL (ELECTRIC BLUE) --- */}
        <motion.div 
          style={{ y: y2, scale: scale2 }}
          className="absolute inset-0 w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-6 z-20"
        >
          <div className="w-full max-w-6xl border-t border-white/30 pt-8">
            <div className="flex justify-between items-end mb-10">
               <span className="text-[15vw] leading-[0.8] font-display font-black text-white/20">01</span>
               <div className="hidden md:block w-32 h-32 rounded-full border border-white/30 animate-slow-spin"></div>
            </div>
            
            <h3 className="text-[10vw] md:text-[7vw] font-display font-black text-white uppercase leading-none mb-6">
              {lang === 'it' ? slides[0].title_it : slides[0].title_fr}
            </h3>
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide border-l-4 border-black pl-6">
              {lang === 'it' ? slides[0].desc_it : slides[0].desc_fr}
            </p>
          </div>
        </motion.div>


        {/* --- SLIDE 3: 02 PROFESSIONAL (ELECTRIC BLUE) --- */}
        <motion.div 
          style={{ y: y3, scale: scale3 }}
          className="absolute inset-0 w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-6 z-30 border-t border-white/10"
        >
           <div className="w-full max-w-6xl border-t border-white/30 pt-8">
            <div className="flex justify-between items-end mb-10">
               <span className="text-[15vw] leading-[0.8] font-display font-black text-white/20">02</span>
               <div className="hidden md:block w-32 h-32 bg-white/10 backdrop-blur-md"></div>
            </div>
            
            <h3 className="text-[10vw] md:text-[7vw] font-display font-black text-white uppercase leading-none mb-6">
              {lang === 'it' ? slides[1].title_it : slides[1].title_fr}
            </h3>
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide border-l-4 border-black pl-6">
              {lang === 'it' ? slides[1].desc_it : slides[1].desc_fr}
            </p>
          </div>
        </motion.div>


        {/* --- SLIDE 4: 03 HUMAN (ELECTRIC BLUE) --- */}
        <motion.div 
          style={{ y: y4 }}
          className="absolute inset-0 w-full h-full bg-[#0056D2] flex flex-col items-center justify-center p-6 z-40 border-t border-white/10"
        >
           <div className="w-full max-w-6xl border-t border-white/30 pt-8">
            <div className="flex justify-between items-end mb-10">
               <span className="text-[15vw] leading-[0.8] font-display font-black text-white/20">03</span>
               <div className="hidden md:block w-32 h-32 rounded-full border-4 border-white/20"></div>
            </div>
            
            <h3 className="text-[10vw] md:text-[7vw] font-display font-black text-white uppercase leading-none mb-6">
              {lang === 'it' ? slides[2].title_it : slides[2].title_fr}
            </h3>
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide border-l-4 border-black pl-6">
              {lang === 'it' ? slides[2].desc_it : slides[2].desc_fr}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
