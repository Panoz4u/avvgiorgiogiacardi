import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-32 border-t border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          <div className="relative">
             {/* Rotating Text */}
             <div className="absolute -top-[120px] left-0 md:left-[20px] w-[150px] h-[150px] animate-slow-spin opacity-50">
               <svg viewBox="0 0 100 100" width="150" height="150">
                 <defs>
                   <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                 </defs>
                 <text fontSize="11" fill="#0056D2" fontWeight="bold">
                   <textPath xlinkHref="#circle">
                     AVVOCATO GIORGIO GIACARDI • AVOCAT •
                   </textPath>
                 </text>
               </svg>
             </div>

             {/* Huge Text Block */}
             <h2 className="text-[12vw] leading-[0.8] font-display font-black select-none z-10 relative mt-10">
               <span className="text-[#050A14] text-stroke-white block">GIACARDI</span>
             </h2>
             {/* Overlay for Electric Blue gradient effect on text if needed, or keeping it split */}
             <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay bg-gradient-to-t from-[var(--brand-primary)] to-transparent opacity-50 pointer-events-none"></div>

             <div className="text-xl text-gray-400 font-light relative z-10 mt-8">
               © Studio legale Giacardi.
             </div>
          </div>
          
          <div className="flex flex-col gap-4 text-right z-10">
            <a href="https://www.linkedin.com/in/giorgio-giacardi-67ba295a/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[var(--brand-primary)] font-bold transition-colors">LinkedIn</a>
            <a href="mailto:avvgiorgiogiacardi@gmail.com" className="text-2xl text-white hover:text-[var(--brand-primary)] font-bold transition-colors">Email</a>
          </div>
        </div>
      </div>

      {/* CSS for Text Stroke if not in Tailwind */}
      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        .text-stroke-white:hover {
           color: var(--brand-primary);
           -webkit-text-stroke: 0px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
