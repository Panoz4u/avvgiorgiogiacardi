import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
             <h2 className="text-[15vw] leading-[0.8] font-display font-black text-white/10 select-none pointer-events-none absolute bottom-[-5vw] left-[-2vw]">
               GIACARDI
             </h2>
             <div className="text-xl text-gray-400 font-light relative z-10 mb-8">
               © Solo Studio legale Giacardi.
             </div>
          </div>
          
          <div className="flex flex-col gap-4 text-right z-10">
            <a href="https://www.linkedin.com/in/giorgio-giacardi-67ba295a/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[var(--brand-primary)] font-bold transition-colors">LinkedIn</a>
            <a href="mailto:avvgiorgiogiacardi@gmail.com" className="text-2xl text-white hover:text-[var(--brand-primary)] font-bold transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
