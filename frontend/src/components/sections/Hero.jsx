import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ lang }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <h2 className="text-[var(--brand-primary)] font-mono mb-4 text-lg tracking-widest">
            {lang === 'it' ? 'AVVOCATO' : 'AVOCAT'}
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            GIORGIO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              GIACARDI
            </span>
          </h1>
          
          <div className="h-1 w-24 bg-[var(--brand-primary)] mb-8"></div>
          
          <p className="text-xl text-gray-400 italic font-serif mb-10 max-w-lg border-l-2 border-[var(--brand-primary)] pl-6">
            "Fiat iustitia, ruat caelum"
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary justify-center">
              {lang === 'it' ? 'Richiedi Consulenza' : 'Demander Consultation'}
            </a>
            <a href="#areas" className="btn-secondary justify-center">
              {lang === 'it' ? 'Aree di Attività' : 'Domaines d\'Activité'}
            </a>
          </div>
        </motion.div>

        {/* Right Content - Spline 3D */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 md:order-2 h-[50vh] md:h-[80vh] w-full relative"
        >
           {/* Using the requested Neon Balls Spline scene */}
           <div className="absolute inset-0 w-full h-full">
             <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
           </div>
           {/* Gradient overlay to blend spline into background if needed */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--brand-primary)] to-transparent mx-auto"></div>
        <span className="text-xs uppercase tracking-widest mt-2 block">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
