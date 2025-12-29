import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Monviso = ({ lang }) => {
  const videoRef = useRef(null);

  const t = {
    it: {
      translation: "Non dare danno ad alcuno, dare a ciascuno il suo, vivere onestamente"
    },
    fr: {
      translation: "Ne léser personne, attribuer à chacun ce qui lui revient, vivre honorablement."
    }
  }[lang];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // 1x speed
    }
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-105"
        >
          <source src="https://www.panoz4u.com/gg04/assets/alps.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="border-l-4 border-[var(--brand-primary)] pl-8 md:pl-12 text-left max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
            "Neminem laedere,<br />
            unicuique suum tribuere,<br />
            <span className="text-[var(--brand-primary)]">honeste vivere"</span>
          </h2>
          <p className="mt-4 text-white text-xl md:text-2xl font-serif italic">
             "{t.translation}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Monviso;
