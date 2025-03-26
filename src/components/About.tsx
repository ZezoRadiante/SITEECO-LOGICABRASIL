
import React from 'react';
import { StatsGrid } from './about/StatsGrid';
import { AboutContent } from './about/AboutContent';

const About: React.FC = () => {
  return (
    <div 
      id="about" 
      className="py-24 relative bg-cover bg-center bg-no-repeat min-h-[600px]"
      style={{
        backgroundImage: `url('/lovable-uploads/c3a3f3f2-fb67-40c4-ace1-e5f3cbb61cbf.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Reduzindo a opacidade do overlay para ver melhor a imagem */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-eco-100/40 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-10">
          <span className="inline-block text-sky-700 px-3 py-1 text-sm font-medium mb-2 opacity-0 animate-fade-in">
            Nossa História
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 opacity-0 animate-fade-in-delay-1">
            Sobre a <span className="text-sky-700">Eco-lógica Brasil</span>
          </h2>
        </div>

        {/* Content first */}
        <AboutContent />
            
        {/* Stats grid with slot machine animation */}
        <div className="mt-12">
          <StatsGrid />
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/30 to-transparent z-10"></div>
    </div>
  );
};

export default About;
