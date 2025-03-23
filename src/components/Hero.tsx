
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const isMobile = useIsMobile();
  const plantingImages = ["/lovable-uploads/5dd5503f-329d-40f1-8e00-133df0a69f1a.png", "/lovable-uploads/23b71c4a-ae05-4ad7-b477-b35c8f494d1a.png", "/lovable-uploads/b90b4872-c28b-4a9e-967c-ee3cd4bbcdfe.png", "/lovable-uploads/4e99cd90-92f7-4e37-b085-3c4d9182f2a7.png", "/lovable-uploads/48d7d076-02b1-4af7-bff8-3b0d88c735fc.png", "/lovable-uploads/b3bda120-cadf-4783-ba66-df239127e92e.png", "/lovable-uploads/9f04c017-2367-4865-b366-bed9918fc72b.png", "/lovable-uploads/e6fb9dd0-19b4-4d25-8b88-21e934258792.png", "/lovable-uploads/06e415cd-48ec-4571-a425-96cf1321203f.png", "/lovable-uploads/aa84e6f2-e9cc-47b3-a34d-8f864dbc4cc4.png"];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
          <source src="/background-nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-eco-900/90 via-eco-800/50 to-eco-700/30 z-10"></div>
      </div>

      {/* Content - Improved for mobile */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 backdrop-blur-sm py-8 sm:py-12 bg-black/0 rounded-full border border-eco-100/10">        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-eco-100 block mb-2 hover:text-eco-50 transition-colors duration-300">Soluções Sustentáveis</span>
          <span className="text-foreground/90 font-light">para um Futuro Mais Verde</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/80 opacity-0 animate-fade-in-delay-2 text-balance">
          Fornecendo serviços especializados de consultoria ambiental que equilibram responsabilidade ecológica com soluções empresariais práticas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3">
          <a href="#services" className="px-6 sm:px-8 py-3 bg-eco-600 text-white rounded-full font-medium hover:bg-eco-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden border border-eco-300">
            <span className="relative z-10">Nossos Serviços</span>
            <span className="absolute inset-0 bg-eco-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
          <a href="#contact" className="px-6 sm:px-8 py-3 border border-eco-400 text-eco-100 rounded-full font-medium hover:bg-eco-700/70 hover:text-white transition-all duration-300 group relative overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Entre em Contato</span>
            <span className="absolute inset-0 bg-eco-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Floating leaves decoration */}
        <div className="absolute -bottom-8 -left-8 opacity-20 animate-float">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6H11V12.41L15.71 17.29L17.3 15.7L13 11.41V6H15Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute -top-12 -right-12 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 12C22 17.96 17.51 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16ZM12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3 z-30">
        <a href="#services" className="flex flex-col items-center text-eco-100 hover:text-eco-300 transition-all duration-300 group">
          <span className="text-xs sm:text-sm mb-2 group-hover:-translate-y-1 transition-transform duration-300">Descubra Mais</span>
          <div className="relative">
            <div className="absolute -inset-1 bg-eco-400/30 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            <ArrowDown className="animate-bounce group-hover:text-white group-hover:bg-eco-600 rounded-full group-hover:p-1 transition-all duration-300" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
