
import React, { useState, useEffect } from 'react';
import { Clover, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4',
        isScrolled ? 'glass' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 text-primary font-medium opacity-0 animate-fade-in"
        >
          <Clover size={24} className="text-eco-600 animate-pulse-gentle" />
          <span className="text-xl font-semibold tracking-tight">EcoConsult</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground/90 hover:text-primary transition-all duration-300 font-medium relative opacity-0",
                `animate-fade-in-delay-${index + 1}`,
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-foreground opacity-0 animate-fade-in"
          aria-label="Abrir menu mobile"
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
          "absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden md:hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/90 hover:text-primary transition-all duration-300 py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
