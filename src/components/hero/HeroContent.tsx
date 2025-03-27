
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible }) => {
  return (
    <div className={cn(
      "relative z-30 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center space-y-6 py-0 my-0 transition-all duration-700",
      isVisible ? 'opacity-100' : 'opacity-0'
    )}>        
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
        <span className="text-white block mb-3 drop-shadow-xl hover:text-eco-50 transition-colors duration-500">Eco-lógica Brasil</span>
        <span className="font-light italic drop-shadow-xl text-sky-700 transition-all duration-700 hover:text-eco-500">Consultoria Ambiental</span>
      </h1>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3 mt-10 transition-all duration-700">
        <Button 
          variant="green" 
          asChild 
          className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
        >
          <a href="#contact">Entre em Contato</a>
        </Button>
        <Button 
          variant="outline" 
          asChild 
          className="border-2 border-white/60 text-white rounded-full hover:bg-[#E2FCB3] hover:text-earth-800 hover:border-transparent shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg px-8 py-6 transition-all duration-500"
        >
          <a href="#about">Saiba Mais</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
