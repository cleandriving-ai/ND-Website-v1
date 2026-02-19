
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, SITE_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-header bg-white/95 border-b border-linen shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center">
              <span className="text-white text-xl font-black">PF</span>
            </div>
            <span className="text-2xl rift-font text-navy hidden sm:block">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy font-semibold hover:text-orange transition">Home</Link>
            <div className="relative group">
              <button className="text-navy font-semibold flex items-center group-hover:text-orange">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-md p-4 w-64 top-full -left-4 border border-linen">
                <Link to="/services/cipp-lining" className="block p-2 hover:bg-linen rounded transition text-sm">CIPP Pipe Lining</Link>
                <Link to="/services/trenchless-repair" className="block p-2 hover:bg-linen rounded transition text-sm">Trenchless Repair</Link>
                <Link to="/services/pipe-bursting" className="block p-2 hover:bg-linen rounded transition text-sm">Pipe Bursting</Link>
              </div>
            </div>
            <Link to="/contact" className="text-navy font-semibold hover:text-orange transition">Contact</Link>
            
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center space-x-2 text-navy hover:text-orange font-bold text-lg">
              <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <span>{PHONE_NUMBER}</span>
            </a>

            <Link to="/contact" className="bg-orange hover:bg-red-700 text-white px-6 py-3 rounded-md font-black rift-font transition-all transform hover:scale-105 shadow-md">
              Free Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="p-2 bg-linen rounded-full text-orange">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
             </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-linen animate-slideDown">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-navy border-b border-linen">Home</Link>
            <Link to="/services/cipp-lining" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-navy border-b border-linen">CIPP Pipe Lining</Link>
            <Link to="/services/trenchless-repair" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-navy border-b border-linen">Trenchless Sewer Repair</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-lg font-bold text-navy border-b border-linen">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
