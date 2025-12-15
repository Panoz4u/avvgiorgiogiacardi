import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'it' ? 'Chi Sono' : 'Profil', href: '#about' },
    { name: lang === 'it' ? 'Aree' : 'Domaines', href: '#areas' },
    { name: lang === 'it' ? 'Studio' : 'Cabinet', href: '#why-us' },
    { name: lang === 'it' ? 'Contatti' : 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <a href="#" className="relative group">
            <span className="text-2xl font-display font-black tracking-tighter text-white z-10 relative mix-blend-difference">
              G<span className="text-[var(--brand-primary)]">.</span>GIACARDI
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--brand-primary)] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang(lang === 'it' ? 'fr' : 'it')}
              className="flex items-center gap-2 text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-full uppercase tracking-widest"
            >
              <Globe size={14} />
              {lang === 'it' ? 'IT' : 'FR'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[var(--brand-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "circInOut" }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display font-black text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all uppercase"
              >
                {link.name}
              </motion.a>
            ))}
             <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => {
                setLang(lang === 'it' ? 'fr' : 'it');
                setMobileMenuOpen(false);
              }}
              className="mt-8 flex items-center gap-3 text-xl font-bold text-[var(--brand-primary)] border border-[var(--brand-primary)] px-6 py-3 rounded-full"
            >
              <Globe size={24} />
              Switch Language
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
