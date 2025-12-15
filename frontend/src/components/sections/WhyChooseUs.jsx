import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = ({ lang }) => {
  const points = [
    { title: "International", desc: "Expertise IT/FR" },
    { title: "Digital First", desc: "Remote & Tech Savvy" },
    { title: "Human Centric", desc: "Empathy & Strategy" }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVars = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="why-us" className="py-32 bg-[var(--bg-primary)] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Massive Text Layout */}
        <div className="relative">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[12vw] leading-[0.8] font-display font-black text-white/5 select-none absolute top-0 left-0 -z-10"
          >
            WHY US
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 pt-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12">
                {lang === 'it' ? 'LA TUA DIFESA,' : 'VOTRE DÉFENSE,'} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-white">
                  SENZA CONFINI.
                </span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                {lang === 'it' 
                  ? 'Un approccio moderno che unisce la tradizione forense alla rapidità del digitale. Parliamo la tua lingua, ovunque tu sia.' 
                  : 'Une approche moderne alliant tradition juridique et rapidité numérique. Nous parlons votre langue, où que vous soyez.'}
              </p>
              
              <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {points.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVars}
                    whileHover={{ x: 20 }}
                    className="flex items-center gap-6 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Visual Abstract Animation - Smooth Loop */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[500px]">
                {/* Animated Gradient Mesh / Flow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/20 via-blue-900/10 to-transparent rounded-full filter blur-[80px] animate-float"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[var(--brand-primary)] rounded-full mix-blend-screen filter blur-[60px] animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] animate-float" style={{ animationDelay: '2.5s' }}></div>
                
                {/* Subtle Grid Lines */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
