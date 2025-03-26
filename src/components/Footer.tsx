
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-50/80 text-earth-800 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section - Slogan */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-earth-800 leading-tight mb-1">
            Juntos, <br />
            construindo <br />
            um futuro <br />
            mais sustentável
          </h2>
          
          <Button 
            variant="outline" 
            className="mt-6 border-2 border-eco-700 text-eco-700 rounded-full uppercase text-sm font-semibold px-6 py-2 hover:bg-eco-700 hover:text-white"
          >
            Conheça mais sobre nós
          </Button>
        </div>
        
        {/* Location and Contact Section */}
        <div className="mt-10 text-left border-t border-eco-200 pt-6">
          <h3 className="flex items-center gap-2 text-earth-800 font-semibold mb-4">
            <MapPin size={18} className="text-eco-700" />
            Nosso Localização e Contato
          </h3>
          
          <div className="space-y-8">
            {/* Pernambuco */}
            <div>
              <h4 className="font-semibold">Pernambuco</h4>
              <a 
                href="https://maps.google.com/?q=Rua+Ana+Granja+Arraes,+03,+Santo+Expedito,+Araripina+-+PE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-eco-700 transition-colors"
                title="Ver no Google Maps"
              >
                <p className="text-sm">Rua Ana Granja Arraes, 03</p>
                <p className="text-sm">Santo Expedito, Araripina - PE</p>
              </a>
              <a 
                href="https://wa.me/5581998874687" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 mt-1 hover:text-eco-700 transition-colors"
                title="Conversar pelo WhatsApp"
              >
                <Phone size={14} className="text-eco-700" />
                (81) 998874-4687
              </a>
            </div>
            
            {/* Ceará */}
            <div>
              <h4 className="font-semibold">Ceará</h4>
              <a 
                href="https://maps.google.com/?q=Rua+Maria+Balbino+da+Conceição,+503,+Jardim+-+CE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-eco-700 transition-colors"
                title="Ver no Google Maps"
              >
                <p className="text-sm">Rua Maria Balbino da Conceição,</p>
                <p className="text-sm">503, Jardim - CE</p>
              </a>
              <a 
                href="https://wa.me/5588981238818" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 mt-1 hover:text-eco-700 transition-colors"
                title="Conversar pelo WhatsApp"
              >
                <Phone size={14} className="text-eco-700" />
                (88) 9 8123-8818
              </a>
            </div>
            
            {/* Rio Grande do Norte */}
            <div>
              <h4 className="font-semibold">Rio Grande do Norte</h4>
              <a 
                href="https://maps.google.com/?q=Av.+Olavo+Lacerda+Montenegro,+2835,+Central+Park+II,+Parnamirim+-+RN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-eco-700 transition-colors"
                title="Ver no Google Maps"
              >
                <p className="text-sm">Av. Olavo Lacerda Montenegro, 2835,</p>
                <p className="text-sm">Central Park II, Parnamirim - RN</p>
              </a>
              <a 
                href="https://wa.me/5584988147400" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 mt-1 hover:text-eco-700 transition-colors"
                title="Conversar pelo WhatsApp"
              >
                <Phone size={14} className="text-eco-700" />
                (84) 9 8814-7400
              </a>
            </div>
          </div>
        </div>
        
        {/* Map Image */}
        <div className="mt-8">
          <img 
            src="/lovable-uploads/9b4b2a79-3b81-4aae-a055-f33a0d5d6543.png" 
            alt="Mapa de localização" 
            className="w-full h-40 object-cover rounded-md"
          />
          
          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-eco-700"></div>
            <div className="w-2 h-2 rounded-full bg-eco-200"></div>
            <div className="w-2 h-2 rounded-full bg-eco-200"></div>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="mt-8 border-t border-eco-200 pt-6 text-left">
          <h3 className="text-earth-800 font-semibold mb-4">
            Nossas redes
          </h3>
          
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/eco-l%C3%B3gica-brasil-ltda-eco-l%C3%B3gica-tem-uma-conta" target="_blank" rel="noopener noreferrer" className="text-eco-700 hover:text-eco-800 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="https://www.instagram.com/brasilecologica/" target="_blank" rel="noopener noreferrer" className="text-eco-700 hover:text-eco-800 transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-eco-700 hover:text-eco-800 transition-colors">
              <Youtube size={22} />
            </a>
          </div>
        </div>
        
        {/* Links Section */}
        <div className="mt-8 space-y-4 text-left">
          <a href="#" className="block text-eco-700 font-semibold uppercase text-sm hover:text-eco-800 transition-colors">
            Portfólios
          </a>
          <a href="#contact" className="block text-eco-700 font-semibold uppercase text-sm hover:text-eco-800 transition-colors">
            Fale com nossos consultores
          </a>
          <a href="#" className="block text-eco-700 font-semibold uppercase text-sm hover:text-eco-800 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="block text-eco-700 font-semibold uppercase text-sm hover:text-eco-800 transition-colors">
            Outros
          </a>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-eco-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-earth-600 text-sm text-center">
            © Eco-lógica Brasil - Todos os direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
