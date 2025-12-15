import React from 'react';
import { motion } from 'framer-motion';

const Monviso = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark & Moody Treatment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1510134659073-54f147c0afc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW91bnRhaW58ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzY1ODE2NTIwfDA&ixlib=rb-4.1.0&q=85')",
          filter: "grayscale(100%) brightness(40%) contrast(110%) sepia(20%) hue-rotate(180deg) saturate(150%)" // Bluish dark tint
        }}
      ></div>
      
      {/* Heavy Overlays for "Void" feel requested implicitly by "navy scuro" */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="border-l-4 border-[var(--brand-primary)] pl-8 md:pl-12 text-left max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
            "Fiat iustitia,<br />
            <span className="text-[var(--brand-primary)]">ruat caelum"</span>
          </h2>
          <p className="mt-6 text-gray-300 text-xl font-light tracking-wide">
             La solidità delle montagne, la precisione del diritto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Monviso;
