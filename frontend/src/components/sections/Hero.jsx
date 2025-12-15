import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ lang }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-20">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[var(--brand-primary)] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 overflow-hidden"
          >
            <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-300 backdrop-blur-sm">
              {lang === 'it' ? 'Studio Legale Internazionale' : 'Cabinet d\'Avocats International'}
            </span>
          </motion.div>

          {/* Main Title - Responsive & Bold */}
          <div className="relative w-full max-w-[90vw] md:max-w-none">
            <motion.h1 
              style={{ y: y1 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] md:text-[9rem] leading-[0.8] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter w-full"
            >
              GIORGIO
            </motion.h1>
            <motion.h1 
              style={{ y: y2 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] md:text-[9rem] leading-[0.8] font-display font-black text-[var(--brand-primary)] tracking-tighter mt-[-2vw] mix-blend-overlay w-full"
            >
              GIACARDI
            </motion.h1>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-2 bg-white mt-8 md:mt-12 mb-8 md:mb-12"
          ></motion.div>

          {/* Bottom Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl items-start text-left px-4 md:px-0">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light"
            >
              {lang === 'it' 
                ? 'Difendiamo i tuoi diritti oltre i confini. Italia & Francia.'
                : 'Nous défendons vos droits au-delà des frontières. Italie & France.'}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 w-full md:w-auto"
            >
               <motion.a 
                 href="#contact" 
                 whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                 whileTap={{ scale: 0.95 }}
                 className="btn-primary text-center w-full md:w-auto"
               >
                 {lang === 'it' ? 'Inizia la Consultazione' : 'Commencer la Consultation'}
               </motion.a>
               <motion.a 
                 href="#areas" 
                 whileHover={{ scale: 1.05, x: 10 }}
                 className="flex items-center gap-4 text-white hover:text-[var(--brand-primary)] transition-colors cursor-pointer group justify-center md:justify-start"
               >
                 <span className="uppercase tracking-widest text-sm font-bold border-b border-transparent group-hover:border-[var(--brand-primary)] pb-1">
                   {lang === 'it' ? 'Scopri le Aree' : 'Découvrir les Domaines'}
                 </span>
                 <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
               </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Marquee at Bottom - Fixed with strict single line */}
      <div className="absolute bottom-0 w-full border-t border-white/10 py-4 backdrop-blur-sm overflow-hidden flex">
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
           <span className="text-4xl md:text-6xl font-display font-black text-white/5 uppercase px-8">
             Privacy • Digital Law • Family • Cross-Border •
           </span>
           <span className="text-4xl md:text-6xl font-display font-black text-white/5 uppercase px-8">
             Privacy • Digital Law • Family • Cross-Border •
           </span>
           <span className="text-4xl md:text-6xl font-display font-black text-white/5 uppercase px-8">
             Privacy • Digital Law • Family • Cross-Border •
           </span>
           <span className="text-4xl md:text-6xl font-display font-black text-white/5 uppercase px-8">
             Privacy • Digital Law • Family • Cross-Border •
           </span>
        </div>
      </div>

    </section>
  );
};

export default Hero;
