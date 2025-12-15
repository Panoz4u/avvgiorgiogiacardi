import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

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
    { name: lang === 'it' ? 'Sedi' : 'Bureaux', href: '#locations' },
    { name: lang === 'it' ? 'Contatti' : 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white">
          GIORGIO <span className="text-[var(--brand-primary)]">GIACARDI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-[var(--brand-primary)] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setLang(lang === 'it' ? 'fr' : 'it')}
            className="flex items-center gap-2 text-sm font-medium text-white border border-[var(--border-subtle)] px-3 py-1 hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-all"
          >
            <Globe size={16} />
            {lang === 'it' ? 'IT' : 'FR'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-[var(--border-subtle)] p-6 flex flex-col gap-6 animate-accordion-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-[var(--brand-primary)] uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setLang(lang === 'it' ? 'fr' : 'it');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-lg font-medium text-white self-start"
          >
            <Globe size={20} />
            {lang === 'it' ? 'Switch to French' : 'Passer en Italien'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
