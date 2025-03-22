
import React from 'react';
import { Clover, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40"></div>
      </div>

      {/* Floating Clovers */}
      <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
        <Clover size={120} className="text-eco-600 rotate-12" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
        <Clover size={80} className="text-eco-500 -rotate-12" />
      </div>
      <div className="absolute top-1/2 left-3/4 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <Clover size={100} className="text-eco-400 rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <div className="flex items-center justify-center opacity-0 animate-fade-in">
          <div className="relative">
            <Clover size={48} className="text-eco-600 absolute -top-6 -left-6 opacity-20" />
            <Clover size={48} className="text-eco-600 absolute -bottom-6 -right-6 opacity-20" />
            <Clover size={64} className="text-eco-600" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-eco-700 block mb-2">Soluções Sustentáveis</span>
          <span className="text-foreground/80 font-light">para um Futuro Mais Verde</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground/70 opacity-0 animate-fade-in-delay-2 text-balance">
          Fornecendo serviços especializados de consultoria ambiental que equilibram responsabilidade ecológica com soluções empresariais práticas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3">
          <a 
            href="#services" 
            className="px-8 py-3 bg-eco-600 text-white rounded-full font-medium hover:bg-eco-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Nossos Serviços
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-eco-600 text-eco-600 rounded-full font-medium hover:bg-eco-600/10 transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3">
        <a 
          href="#services" 
          className="flex flex-col items-center text-foreground/60 hover:text-eco-600 transition-all duration-300"
        >
          <span className="text-sm mb-2">Descubra Mais</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
