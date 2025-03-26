
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-50/90 text-earth-800 relative">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Slogan and About Section - 5 columns on large screens */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-8">
              <Logo size={32} className="mb-6" />
              <h2 className="text-3xl font-bold text-earth-800 leading-tight mb-4">
                Juntos, <br />
                construindo <br />
                um futuro <br />
                mais sustentável
              </h2>
              
              <Button variant="outline" className="mt-4 border-2 border-eco-700 text-eco-700 rounded-full uppercase text-sm font-semibold px-6 py-2 hover:bg-eco-700 hover:text-white group transition-all duration-300">
                Conheça mais sobre nós
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Location and Contact Section - 4 columns on large screens */}
          <div className="lg:col-span-4 text-left">
            <h3 className="flex items-center gap-2 text-earth-800 font-semibold mb-6 text-lg border-b border-eco-200 pb-2">
              <MapPin size={18} className="text-eco-700" />
              Nosso Localização e Contato
            </h3>
            
            <div className="space-y-6">
              {/* Pernambuco */}
              <div className="p-3 rounded-lg hover:bg-white/60 transition-colors">
                <h4 className="font-semibold text-earth-700">Pernambuco</h4>
                <a 
                  href="https://maps.google.com/?q=Rua+Ana+Granja+Arraes,+03,+Santo+Expedito,+Araripina+-+PE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-eco-700 transition-colors group" 
                  title="Ver no Google Maps"
                >
                  <p className="text-sm group-hover:underline">Rua Ana Granja Arraes, 03</p>
                  <p className="text-sm group-hover:underline">Santo Expedito, Araripina - PE</p>
                </a>
                <a 
                  href="https://wa.me/5581998874687" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1 mt-2 hover:text-eco-700 transition-colors" 
                  title="Conversar pelo WhatsApp"
                >
                  <Phone size={14} className="text-eco-700" />
                  (81) 998874-4687
                </a>
              </div>
              
              {/* Ceará */}
              <div className="p-3 rounded-lg hover:bg-white/60 transition-colors">
                <h4 className="font-semibold text-earth-700">Ceará</h4>
                <a 
                  href="https://maps.google.com/?q=Rua+Maria+Balbino+da+Conceição,+503,+Jardim+-+CE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-eco-700 transition-colors group" 
                  title="Ver no Google Maps"
                >
                  <p className="text-sm group-hover:underline">Rua Maria Balbino da Conceição,</p>
                  <p className="text-sm group-hover:underline">503, Jardim - CE</p>
                </a>
                <a 
                  href="https://wa.me/5588981238818" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1 mt-2 hover:text-eco-700 transition-colors" 
                  title="Conversar pelo WhatsApp"
                >
                  <Phone size={14} className="text-eco-700" />
                  (88) 9 8123-8818
                </a>
              </div>
              
              {/* Rio Grande do Norte */}
              <div className="p-3 rounded-lg hover:bg-white/60 transition-colors">
                <h4 className="font-semibold text-earth-700">Rio Grande do Norte</h4>
                <a 
                  href="https://maps.google.com/?q=Av.+Olavo+Lacerda+Montenegro,+2835,+Central+Park+II,+Parnamirim+-+RN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-eco-700 transition-colors group" 
                  title="Ver no Google Maps"
                >
                  <p className="text-sm group-hover:underline">Av. Olavo Lacerda Montenegro, 2835,</p>
                  <p className="text-sm group-hover:underline">Central Park II, Parnamirim - RN</p>
                </a>
                <a 
                  href="https://wa.me/5584988147400" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm flex items-center gap-1 mt-2 hover:text-eco-700 transition-colors" 
                  title="Conversar pelo WhatsApp"
                >
                  <Phone size={14} className="text-eco-700" />
                  (84) 9 8814-7400
                </a>
              </div>
            </div>
          </div>
          
          {/* Links and Social Media Section - 3 columns on large screens */}
          <div className="lg:col-span-3 text-left">
            {/* Social Media Section */}
            <div className="mb-6">
              <h3 className="text-earth-800 font-semibold mb-4 text-lg border-b border-eco-200 pb-2">
                Nossas redes
              </h3>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/eco-l%C3%B3gica-brasil-ltda-eco-l%C3%B3gica-tem-uma-conta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-eco-700 hover:text-eco-900 bg-white/50 hover:bg-white/90 p-2 rounded-full transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/brasilecologica/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-eco-700 hover:text-eco-900 bg-white/50 hover:bg-white/90 p-2 rounded-full transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-eco-700 hover:text-eco-900 bg-white/50 hover:bg-white/90 p-2 rounded-full transition-all"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            {/* Links Section */}
            <div className="space-y-3">
              <h3 className="text-earth-800 font-semibold mb-4 text-lg border-b border-eco-200 pb-2">
                Links Rápidos
              </h3>
              
              <a href="#" className="flex items-center text-eco-700 font-medium text-sm hover:text-eco-900 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Portfólios
              </a>
              <a href="#contact" className="flex items-center text-eco-700 font-medium text-sm hover:text-eco-900 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Fale com nossos consultores
              </a>
              <a href="#" className="flex items-center text-eco-700 font-medium text-sm hover:text-eco-900 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Política de Privacidade
              </a>
              <a href="#" className="flex items-center text-eco-700 font-medium text-sm hover:text-eco-900 transition-colors group">
                <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Outros
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-eco-200 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-earth-600 text-sm text-center">
            © {currentYear} Eco-lógica Brasil - Todos os direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
