
import React from 'react';
import { MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="bg-eco-50 py-12 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-earth-800 mb-10">
            ONDE ATUAMOS E AJUDAMOS O<br/>
            MEIO AMBIENTE E A SOCIEDADE
          </h2>
          
          {/* Green office image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/b2251703-230b-4fb3-adfd-7249f11d3483.jpg" 
              alt="Escritório sustentável" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <p className="text-earth-700 text-center mb-8">
            Através da inovação e comprometimento, a Eco-logica Brasil desenvolve soluções 
            sustentáveis que fazem a diferença para as comunidades e o meio ambiente.
          </p>
        </div>
      </div>
      
      {/* Contact and Footer section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-earth-800 mb-8">
            Juntos,<br />
            construindo um futuro<br />
            mais sustentável
          </h2>
          
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-eco-900 text-eco-900 hover:bg-eco-900 hover:text-white px-8 py-4"
            >
              CONHEÇA MAIS SOBRE NÓS
            </Button>
          </div>
          
          {/* Locations */}
          <div className="mt-10">
            <h3 className="flex items-center text-lg font-medium text-earth-700 mb-6">
              <MapPin className="mr-2" size={20} />
              Nosso Localização e Contato
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Location 
                state="Pernambuco"
                address="Rua Ana ganga arroes, 03"
                city="Santa expedita, Araripina - PE"
                phone="(87) 3874-4087"
              />

              <Location 
                state="Ceará"
                address="Rua Maria Balbino da Conceição, 603, Jardim - CE"
                phone="(88) 9.9123-8818"
              />

              <Location 
                state="Rio Grande do Norte"
                address="AV. Olavo Lacerda Montenegro, 2835, Central Park II, Parnamirim - RN"
                phone="(84) 9.8814-1400"
              />
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-earth-700 mb-4">
              Nossas redes
            </h3>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com" className="text-earth-600 hover:text-eco-900" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-earth-600 hover:text-eco-900" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com" className="text-earth-600 hover:text-eco-900" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Footer links */}
          <div className="border-t border-eco-200 pt-6 space-y-4 text-sm">
            <p className="text-eco-900 uppercase font-medium">Portfólios</p>
            <p className="text-eco-900 uppercase font-medium">Fale com nossos consultores</p>
            <p className="text-eco-900 uppercase font-medium">Política de Privacidade</p>
            <p className="text-eco-900 uppercase font-medium">Outros</p>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-xs text-earth-600">
            © Eco-lógica Brasil - Todos os direitos Reservados
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = ({ state, address, city, phone }: { 
  state: string;
  address: string;
  city?: string;
  phone: string;
}) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium text-earth-700">{state}</h4>
      <p className="text-earth-600 text-sm">{address}</p>
      {city && <p className="text-earth-600 text-sm">{city}</p>}
      <p className="text-earth-600 text-sm">{phone}</p>
    </div>
  );
};

export default About;
