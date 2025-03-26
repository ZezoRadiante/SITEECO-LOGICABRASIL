
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-4 border-t border-eco-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-earth-600">
          © {currentYear} Eco-logica Brasil - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
