
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <div 
      id="about" 
      className="relative bg-eco-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main heading section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
            Juntos,<br/>
            construindo<br/>
            um futuro<br/>
            mais sustentável
          </h2>
          
          <Button
            className="rounded-full border-2 border-earth-700 text-earth-800 px-8 py-2 bg-transparent hover:bg-eco-100 mt-4"
          >
            CONHEÇA MAIS SOBRE NÓS
          </Button>
        </div>

        {/* Locations section */}
        <div className="mb-16">
          <h3 className="flex items-center text-xl font-semibold mb-4 text-earth-800">
            <MapPin className="mr-2 h-5 w-5" />
            Nossa Localização e Contato
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg text-earth-800">Pernambuco</h4>
              <p className="text-earth-700">Rua Ana graça arroio, 03</p>
              <p className="text-earth-700">Santa expedita, Araripina - PE</p>
              <p className="flex items-center text-earth-700 mt-1">
                <Phone className="h-4 w-4 mr-2" /> 
                (81) 9074-4067
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-earth-800">Ceará</h4>
              <p className="text-earth-700">Rua Maria Balbino da Conceição,</p>
              <p className="text-earth-700">603, Jardim - CE</p>
              <p className="flex items-center text-earth-700 mt-1">
                <Phone className="h-4 w-4 mr-2" /> 
                (88) 9 9923-8818
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg text-earth-800">Rio Grande do Norte</h4>
              <p className="text-earth-700">AV. Olavo Lacerda Montenegro, 2835,</p>
              <p className="text-earth-700">Central Park II, Parnamirim - RN</p>
              <p className="flex items-center text-earth-700 mt-1">
                <Phone className="h-4 w-4 mr-2" /> 
                (84) 9 8814-1400
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-64 bg-sky-100 mb-16 rounded-lg overflow-hidden relative">
          <img 
            src="/lovable-uploads/bb73f526-b3af-4785-aa7e-8898461dc09f.png" 
            alt="Map location" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Media section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-earth-800">
            Nossas redes
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-earth-700 hover:text-earth-900 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-earth-700 hover:text-earth-900 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-earth-700 hover:text-earth-900 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="border-t border-eco-300 pt-6 space-y-4">
          <a href="#" className="block text-earth-800 font-medium hover:text-eco-700 transition-colors">
            PORTFÓLIOS
          </a>
          <a href="#" className="block text-earth-800 font-medium hover:text-eco-700 transition-colors">
            FALE COM NOSSOS CONSULTORES
          </a>
          <a href="#" className="block text-earth-800 font-medium hover:text-eco-700 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="block text-earth-800 font-medium hover:text-eco-700 transition-colors">
            Outros
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-eco-300 text-earth-700 text-sm">
          © Eco-lógica Brasil - Todos os direitos Reservados
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-eco-600"></div>
        <div className="w-2 h-2 rounded-full bg-eco-300"></div>
        <div className="w-2 h-2 rounded-full bg-eco-300"></div>
      </div>
    </div>
  );
};

export default About;
