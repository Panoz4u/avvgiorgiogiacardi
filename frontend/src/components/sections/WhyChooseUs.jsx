import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // PHASES
  // 0.0 -> 0.25: Title Static -> Fade Out
  // 0.25 -> 0.50: Squares Animation (Navy -> Electric Blue)
  // 0.50 -> 1.00: Cards Sequence (01, 02, 03)

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  const squaresOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0]);
  const squaresScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1.5]);
  const bgTransition = useTransform(scrollYProgress, [0.25, 0.45], ["#050A14", "#0056D2"]);

  // Card Transforms
  const card1Y = useTransform(scrollYProgress, [0.5, 0.6], ["100vh", "0vh"]);
  const card2Y = useTransform(scrollYProgress, [0.65, 0.75], ["100vh", "0vh"]);
  const card3Y = useTransform(scrollYProgress, [0.8, 0.9], ["100vh", "0vh"]);

  const content = [
    {
      id: "01",
      title_it: "International",
      title_fr: "International",
      desc_it: "Expertise IT/FR",
      desc_fr: "Expertise IT/FR"
    },
    {
      id: "02",
      title_it: "Professionalità",
      title_fr: "Professionnalisme",
      desc_it: "Disponibilità & Competenza",
      desc_fr: "Disponibilité & Compétence"
    },
    {
      id: "03",
      title_it: "Human Centric",
      title_fr: "Centré sur l'Humain",
      desc_it: "Empathy & Strategy",
      desc_fr: "Empathie & Stratégie"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[var(--bg-primary)]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Dynamic Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ backgroundColor: bgTransition }}
        />

        {/* Phase 1: Main Title */}
        <motion.div 
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="absolute z-10 text-center px-4"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-tight uppercase">
            {lang === 'it' ? 'LA TUA DIFESA,' : 'VOTRE DÉFENSE,'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-white">
              {lang === 'it' ? 'SENZA CONFINI.' : 'SANS FRONTIÈRES.'}
            </span>
          </h2>
        </motion.div>

        {/* Phase 2: Animated Squares (Transition) */}
        <motion.div 
          style={{ opacity: squaresOpacity, scale: squaresScale }}
          className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="grid grid-cols-3 gap-4 w-full h-full p-20 opacity-50">
             {[...Array(9)].map((_, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
               />
             ))}
          </div>
        </motion.div>

        {/* Phase 3: Cards Stack */}
        <div className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none">
           {/* Card 01 */}
           <motion.div 
             style={{ y: card1Y }}
             className="absolute w-[90vw] md:w-[600px] h-[70vh] bg-[var(--bg-secondary)] border border-white/10 p-12 flex flex-col justify-center items-center text-center shadow-2xl shadow-black/50"
           >
             <span className="text-[150px] font-display font-bold text-[var(--brand-primary)] opacity-20 absolute top-[-20px] left-[-20px]">01</span>
             <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 uppercase">{lang === 'it' ? content[0].title_it : content[0].title_fr}</h3>
             <p className="text-2xl text-gray-400 font-light">{lang === 'it' ? content[0].desc_it : content[0].desc_fr}</p>
           </motion.div>

           {/* Card 02 */}
           <motion.div 
             style={{ y: card2Y }}
             className="absolute w-[90vw] md:w-[600px] h-[70vh] bg-[#0a0f1d] border border-white/10 p-12 flex flex-col justify-center items-center text-center shadow-2xl shadow-black/50"
           >
             <span className="text-[150px] font-display font-bold text-[var(--brand-primary)] opacity-20 absolute top-[-20px] left-[-20px]">02</span>
             <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 uppercase">{lang === 'it' ? content[1].title_it : content[1].title_fr}</h3>
             <p className="text-2xl text-gray-400 font-light">{lang === 'it' ? content[1].desc_it : content[1].desc_fr}</p>
           </motion.div>

           {/* Card 03 */}
           <motion.div 
             style={{ y: card3Y }}
             className="absolute w-[90vw] md:w-[600px] h-[70vh] bg-[var(--brand-primary)] border border-white/10 p-12 flex flex-col justify-center items-center text-center shadow-2xl shadow-black/50"
           >
             <span className="text-[150px] font-display font-bold text-white opacity-20 absolute top-[-20px] left-[-20px]">03</span>
             <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 uppercase">{lang === 'it' ? content[2].title_it : content[2].title_fr}</h3>
             <p className="text-2xl text-white/80 font-light">{lang === 'it' ? content[2].desc_it : content[2].desc_fr}</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
