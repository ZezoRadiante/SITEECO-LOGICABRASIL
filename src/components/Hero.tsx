
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full width and height */}
      <div className="absolute inset-0">
        {/* Child with plant image as background */}
        <img 
          src="/lovable-uploads/4d6b4d69-c8b0-4435-a100-e840167b347c.png" 
          alt="Criança segurando uma planta" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Improved overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-eco-700/60 via-eco-600/30 to-transparent z-10"></div>
      </div>

      {/* Content with no background, only text */}
      <div className="relative z-30 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center space-y-6 py-0 my-0">        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-white block mb-3 drop-shadow-xl hover:text-eco-50 transition-colors duration-300">Soluções Sustentáveis</span>
          <span className="text-sky-300 font-light italic drop-shadow-xl">para um Futuro Mais Verde</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white font-medium opacity-0 animate-fade-in-delay-2 leading-relaxed drop-shadow-lg py-4">
          Ajudamos empresas e comunidades a implementar práticas ecológicas que protegem nossos recursos naturais para as gerações futuras.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3 mt-10">
          <Button variant="green" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 bg-eco-600 hover:bg-eco-700 text-white">
            Conheça Nossos Serviços
          </Button>
          <Button variant="outline" className="border-2 border-white/60 text-white rounded-full hover:bg-[#E2FCB3] hover:text-earth-800 hover:border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6">
            Entre em Contato
          </Button>
        </div>
      </div>

      {/* Improved scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3 z-30">
        <a href="#services" className="flex flex-col items-center text-white hover:text-sky-300 transition-all duration-300 group">
          <span className="text-sm sm:text-base mb-2 group-hover:-translate-y-1 transition-transform duration-300 font-medium drop-shadow-md">Descubra Mais</span>
          <div className="relative">
            <ArrowDown className="animate-bounce bg-black/30 backdrop-blur-sm p-1.5 rounded-full group-hover:text-white group-hover:bg-sky-400/70 transition-all duration-300 w-8 h-8" />
          </div>
        </a>
      </div>
      
      {/* Bottom gradient transition to Banner section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
