import React from 'react';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-[var(--border-subtle)] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-white mb-2">GIORGIO GIACARDI</h4>
            <p className="text-sm text-gray-500">Avvocato / Avocat</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{lang === 'it' ? 'Privacy Policy' : 'Politique de Confidentialité'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'it' ? 'Note Legali' : 'Mentions Légales'}</a>
          </div>

          <div className="text-sm text-gray-600">
            © {currentYear} Giorgio Giacardi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
