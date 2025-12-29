import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10 relative overflow-hidden h-[60vh] md:h-[50vh] flex flex-col justify-end">
      
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[12vw] md:text-[8vw] font-display font-black text-transparent text-stroke-white uppercase mr-10">
            AVVOCATO GIORGIO GIACARDI • AVVOCATO GIORGIO GIACARDI •
          </span>
          <span className="text-[12vw] md:text-[8vw] font-display font-black text-transparent text-stroke-white uppercase mr-10">
            AVVOCATO GIORGIO GIACARDI • AVVOCATO GIORGIO GIACARDI •
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          <div className="text-xl text-gray-500 font-light">
             © Studio legale Giacardi.
          </div>
          
          <div className="flex flex-col gap-4 text-right">
            <a href="https://www.linkedin.com/in/giorgio-giacardi-67ba295a/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl font-display font-black text-white hover:text-[var(--brand-primary)] transition-colors">LINKEDIN</a>
            <a href="mailto:avvgiorgiogiacardi@gmail.com" className="text-3xl md:text-5xl font-display font-black text-white hover:text-[var(--brand-primary)] transition-colors">EMAIL</a>
            <a href="https://www.panoz4u.com/gg04/download/AvvGiorgioGiacardi_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl font-display font-black text-white hover:text-[var(--brand-primary)] transition-colors">CV</a>
          </div>
        </div>
      </div>

      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
