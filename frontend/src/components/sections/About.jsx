import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = ({ lang }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const t = {
    it: {
      title: "CHI SONO",
      subtitle: "Avvocato tra Italia e Francia.",
      desc: "Non solo un legale, ma un partner strategico per le tue sfide transfrontaliere.",
      stats: [
        { val: "20+", label: "Anni di Esperienza" },
        { val: "2", label: "Sedi (IT/FR)" },
        { val: "100%", label: "Dedizione" }
      ]
    },
    fr: {
      title: "QUI SUIS-JE",
      subtitle: "Avocat entre l’Italie et la France.",
      desc: "Pas seulement un avocat, mais un partenaire stratégique pour vos défis transfrontaliers.",
      stats: [
        { val: "20+", label: "Années d'Expérience" },
        { val: "2", label: "Bureaux (IT/FR)" },
        { val: "100%", label: "Dévouement" }
      ]
    }
  }[lang];

  return (
    <section id="about" className="py-32 bg-[var(--bg-primary)] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="animate-[fadeInUp_0.8s_ease-out]" style={{ animationFillMode: 'backwards' }}>
            <span className="text-[var(--brand-primary)] font-bold tracking-[0.3em] uppercase mb-4 block">
              {t.title}
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-black leading-[0.9] mb-8 text-white">
              {t.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg mb-6">
              {t.desc}
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg">
              {lang === 'it'
                ? 'Con una visione europea e una presenza fisica su entrambi i lati delle Alpi, garantisco assistenza completa e personalizzata.'
                : 'Avec une vision européenne et une présence physique des deux côtés des Alpes, je garantis une assistance complète et personnalisée.'}
            </p>

            <div className="flex gap-12 mt-16">
              {t.stats.map((stat, i) => (
                <div key={i} className="animate-[fadeIn_0.8s_ease-out]" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'backwards' }}>
                  <div className="text-4xl font-display font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video / Visual Block - 9:16 Format */}
          <div className="flex justify-center items-start">
            <div
              className="relative w-[350px] h-[622px] bg-[#0a0f1d] border border-white/5 overflow-hidden group animate-[scaleIn_0.8s_ease-out] hover:scale-105 transition-transform duration-300"
              style={{ aspectRatio: '9/16', animationFillMode: 'backwards', animationDelay: '0.2s' }}
            >
               {/* Poster Image - shown immediately */}
               <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                 videoLoaded ? 'opacity-0' : 'opacity-100'
               }`}>
                 <img
                   src="https://www.panoz4u.com/gg04/assets/gg.png"
                   alt="Giorgio Giacardi"
                   className="w-full h-full object-cover object-top"
                 />
                 {/* Blue overlay on poster image */}
                 <div className="absolute inset-0 bg-[#001f3f] opacity-50"></div>
               </div>

               {/* Profile Video Background */}
               <div className="absolute inset-0 w-full h-full">
                 <video
                   autoPlay
                   loop
                   muted
                   playsInline
                   preload="metadata"
                   onLoadedData={() => setVideoLoaded(true)}
                   className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                     videoLoaded ? 'opacity-100' : 'opacity-0'
                   }`}
                 >
                   <source src="https://www.panoz4u.com/gg04/assets/gg.mp4" type="video/mp4" />
                 </video>
               </div>

               {/* Blue Navy Opacity Overlay - 50% on video */}
               <div className={`absolute inset-0 bg-[#001f3f] transition-opacity duration-500 ${
                 videoLoaded ? 'opacity-50' : 'opacity-0'
               }`}></div>
             
             {/* GG Text Overlay */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span className="text-[100px] font-display font-black text-white/20 group-hover:text-white/40 transition-colors duration-500 select-none">
                  GG
                </span>
             </div>
             
               {/* Decorative Lines */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--brand-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
