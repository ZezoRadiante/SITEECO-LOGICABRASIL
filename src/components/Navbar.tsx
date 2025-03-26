
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2',
      isScrolled 
        ? 'bg-white shadow-sm' 
        : 'bg-eco-50'
    )}>
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo size={24} className="h-8 w-auto" />
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="text-eco-900 p-1 rounded-full hover:bg-eco-100 active:bg-eco-200 transition-colors" 
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-all duration-300" />
          ) : (
            <Menu size={24} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-white transition-all duration-300 overflow-hidden shadow-lg",
          isMobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col">
          <a 
            href="#services" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-3 font-medium border-b border-eco-100"
          >
            Serviços
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-3 font-medium border-b border-eco-100"
          >
            Sobre
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-3 font-medium"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
