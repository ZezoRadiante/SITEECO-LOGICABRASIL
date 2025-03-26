
import React from 'react';
import { MapPin, Linkedin, Instagram, Youtube, Map, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="w-full bg-eco-50/70 py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero text section */}
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Juntos,<br />
              construindo<br />
              um futuro<br />
              mais sustentável
            </h2>

            <Button variant="outline" className="border-2 border-[#71B707] text-[#71B707] hover:bg-[#71B707] hover:text-white uppercase rounded-full py-2 px-6 font-medium">
              Conheça mais sobre nós
            </Button>
          </div>

          {/* Locations Section */}
          <div className="mt-10">
            <h3 className="flex items-center text-lg font-medium text-earth-700 mb-4">
              <MapPin className="mr-2" size={20} />
              Nosso Localização e Contato
            </h3>

            {/* Locations grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Location 
                state="Pernambuco"
                address="Rua Ana Granja Arraes, 03"
                city="Santo Expedito, Araripina - PE"
                phone="(81) 998874-4687"
                mapUrl="https://maps.google.com/?q=Rua+Ana+Granja+Arraes,+03,+Santo+Expedito,+Araripina,+PE"
                whatsappUrl="https://wa.me/5581998874687"
              />

              <Location 
                state="Ceará"
                address="Rua Maria Balbino da Conceição, 503"
                city="Jardim - CE"
                phone="(88) 9 8123-8818"
                mapUrl="https://maps.google.com/?q=Rua+Maria+Balbino+da+Conceição,+503,+Jardim,+CE"
                whatsappUrl="https://wa.me/5588981238818"
              />

              <Location 
                state="Rio Grande do Norte"
                address="Av. Olavo Lacerda Montenegro, 2835"
                city="Central Park II, Parnamirim - RN"
                phone="(84) 9 8814-7400"
                mapUrl="https://maps.google.com/?q=Av.+Olavo+Lacerda+Montenegro,+2835,+Central+Park+II,+Parnamirim,+RN"
                whatsappUrl="https://wa.me/5584988147400"
              />
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-earth-700 mb-4">
              Nossas redes
            </h3>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com" className="text-earth-600 hover:text-[#71B707]" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-earth-600 hover:text-[#71B707]" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com" className="text-earth-600 hover:text-[#71B707]" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Footer links */}
          <div className="border-t border-eco-200 pt-6 space-y-4 text-sm">
            <p className="text-[#71B707] uppercase font-medium">Portfólios</p>
            <p className="text-[#71B707] uppercase font-medium">Fale com nossos consultores</p>
            <p className="text-[#71B707] uppercase font-medium">Política de Privacidade</p>
            <p className="text-[#71B707] uppercase font-medium">Outros</p>
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

const Location = ({ state, address, city, phone, mapUrl, whatsappUrl }: { 
  state: string;
  address: string;
  city?: string;
  phone: string;
  mapUrl: string;
  whatsappUrl: string;
}) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium text-earth-700">{state}</h4>
      <a 
        href={mapUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-earth-600 text-sm hover:text-[#71B707] transition-colors flex items-center group"
      >
        <span>{address}</span>
        <Map className="ml-1 w-3 h-3 opacity-60 group-hover:opacity-100" />
      </a>
      {city && (
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-earth-600 text-sm hover:text-[#71B707] transition-colors block"
        >
          {city}
        </a>
      )}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-earth-600 text-sm hover:text-[#71B707] transition-colors flex items-center group"
      >
        <span>{phone}</span>
        <Phone className="ml-1 w-3 h-3 opacity-60 group-hover:opacity-100" />
      </a>
    </div>
  );
};

export default About;
