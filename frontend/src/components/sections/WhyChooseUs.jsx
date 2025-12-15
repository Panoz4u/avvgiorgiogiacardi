import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation Phases
  // 0.0 - 0.2: Title Fade Out
  // 0.2 - 0.4: Pixel Grid Animation (Navy -> Electric Blue)
  // 0.4 - 1.0: Cards Parallax Stack

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const gridScale = useTransform(scrollYProgress, [0.15, 0.4], [0.5, 1.2]); // Zoom effect
  
  // Dynamic Background Color for the whole section
  const bgColor = useTransform(
    scrollYProgress, 
    [0.2, 0.4], 
    ["#050A14", "#0056D2"] // Navy -> Electric Blue
  );

  const content = [
    {
      id: "01",
      title: "International",
      subtitle: "Expertise IT/FR"
    },
    {
      id: "02",
      title: lang === 'it' ? "Professionalità" : "Professionnalisme",
      subtitle: lang === 'it' ? "Disponibilità & Competenza" : "Disponibilité & Compétence"
    },
    {
      id: "03",
      title: "Human Centric",
      subtitle: "Empathy & Strategy"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[var(--bg-primary)] overflow-hidden">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Animated Background Layer */}
        <motion.div 
          className="absolute inset-0 z-0 transition-colors duration-0"
          style={{ backgroundColor: bgColor }}
        />

        {/* Phase 1: Intro Title */}
        <motion.div 
          style={{ opacity: titleOpacity }}
          className="absolute z-10 text-center px-4 w-full"
        >
          <h2 className="text-[8vw] md:text-[6vw] font-display font-black text-white leading-[0.9] uppercase">
            {lang === 'it' ? 'LA TUA DIFESA,' : 'VOTRE DÉFENSE,'} <br />
            <span className="text-white/50">
              {lang === 'it' ? 'SENZA CONFINI.' : 'SANS FRONTIÈRES.'}
            </span>
          </h2>
        </motion.div>

        {/* Phase 2: Big Pixel Grid */}
        <motion.div 
          style={{ opacity: gridOpacity, scale: gridScale }}
          className="absolute inset-0 z-10 grid grid-cols-4 md:grid-cols-6 grid-rows-6 gap-1 pointer-events-none"
        >
           {[...Array(36)].map((_, i) => (
             <motion.div
               key={i}
               className="bg-[#0056D2] border border-white/10"
               initial={{ opacity: 0 }}
               whileInView={{ 
                 opacity: [0, 1, 0.8],
                 backgroundColor: ["#050A14", "#0056D2", "#004bb5"]
               }}
               transition={{ 
                 duration: 1, 
                 delay: i * 0.02, 
                 repeat: Infinity, 
                 repeatType: "reverse" 
               }}
             />
           ))}
        </motion.div>

        {/* Phase 3: Cards Stack */}
        <div className="absolute z-20 w-full h-full flex items-center justify-center pointer-events-none">
          {content.map((card, i) => {
             // Calculate entrance per card
             const start = 0.4 + (i * 0.2);
             const end = start + 0.15;
             // Use hooks unconditionally, logic inside transform
             const y = useTransform(scrollYProgress, [start, end], ["150vh", "0vh"]);
             const scale = useTransform(scrollYProgress, [end, end + 0.2], [1, 0.9]);
             const opacity = useTransform(scrollYProgress, [end, end + 0.2], [1, 0]);

             return (
               <motion.div
                 key={i}
                 style={{ y, scale, opacity }}
                 className="absolute w-[90vw] md:w-[60vw] h-[60vh] md:h-[70vh] bg-black border border-white/20 p-8 md:p-16 flex flex-col justify-between shadow-2xl"
               >
                 <div className="flex justify-between items-start">
                    <span className="text-[10vw] md:text-[80px] font-display font-black text-[var(--brand-primary)] leading-none">
                      {card.id}
                    </span>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                 </div>

                 <div>
                   <h3 className="text-[8vw] md:text-[5vw] font-display font-bold text-white leading-none mb-4 uppercase">
                     {card.title}
                   </h3>
                   <div className="h-1 w-20 bg-[var(--brand-primary)] mb-6"></div>
                   <p className="text-xl md:text-3xl text-gray-400 font-light uppercase tracking-widest">
                     {card.subtitle}
                   </p>
                 </div>
               </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
