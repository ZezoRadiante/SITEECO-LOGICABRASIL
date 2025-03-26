
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
      {/* Enhanced overlay with better transparency */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>
      
      {/* Top gradient transition - enhanced */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-eco-100/60 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12">
          <span className="inline-block text-sky-700 bg-sky-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-3 opacity-0 animate-fade-in shadow-sm">
            Nossa História
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 opacity-0 animate-fade-in-delay-1 mb-4">
            Sobre a <span className="text-sky-700">Eco-lógica Brasil</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-sky-700 to-eco-400 mx-auto rounded-full"></div>
        </div>

        {/* Content first */}
        <AboutContent />
            
        {/* Stats grid with slot machine animation */}
        <div className="mt-16">
          <StatsGrid />
        </div>
      </div>
      
      {/* Bottom gradient transition - enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/50 to-transparent z-10"></div>
    </div>
  );
};

export default About;
