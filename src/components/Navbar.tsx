
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
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navLinks = [
    { href: 'services', label: 'Serviços' },
    { href: 'about', label: 'Sobre' },
    { href: 'contact', label: 'Contato' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-12 py-3 sm:py-4',
      isScrolled 
        ? 'glass shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 text-primary font-medium opacity-0 animate-fade-in"
        >
          <Logo size={24} className="text-sky-400 animate-pulse-gentle" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={`#${link.href}`} 
              className={cn(
                "text-foreground/90 hover:text-sky-400 transition-all duration-300 font-medium relative opacity-0", 
                `animate-fade-in-delay-${index + 1}`,
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sky-300 after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-foreground opacity-0 animate-fade-in p-1 rounded-full hover:bg-sky-100 active:bg-sky-200 transition-colors" 
          aria-label="Abrir menu mobile"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-all duration-300" />
          ) : (
            <Menu size={24} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Improved glass effect and animation */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden md:hidden shadow-lg",
          isMobileMenuOpen 
            ? "max-h-screen opacity-100 transform translate-y-0" 
            : "max-h-0 opacity-0 transform -translate-y-4"
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/90 hover:text-sky-400 transition-all duration-300 py-3 font-medium border-b border-sky-300/10 flex items-center justify-between text-left w-full"
            >
              <span>{link.label}</span>
              <span className="text-sky-400">›</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
