import React from 'react';
import { motion } from 'framer-motion';

const Monviso = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1510134659073-54f147c0afc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW91bnRhaW58ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzY1ODE2NTIwfDA&ixlib=rb-4.1.0&q=85')",
          filter: "grayscale(100%) contrast(120%) brightness(60%)"
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            "Fiat iustitia, ruat caelum"
          </h2>
          <div className="w-20 h-1 bg-[var(--brand-primary)] mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto italic text-lg">
             La solidità delle montagne, la precisione del diritto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Monviso;
