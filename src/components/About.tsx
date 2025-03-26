
import React from 'react';
import { StatsGrid } from './about/StatsGrid';
import { AboutContent } from './about/AboutContent';

const About: React.FC = () => {
  return (
    <div id="about" className="py-24 relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 1) 0%, 
            rgba(255, 255, 255, 0.92) 20%, 
            rgba(255, 255, 255, 0.85) 40%,
            rgba(255, 255, 255, 0.8) 60%,
            rgba(255, 255, 255, 0.85) 80%,
            rgba(255, 255, 255, 0.95) 100%),
            url('/lovable-uploads/faef3529-0523-4e9d-a1d2-ac8a9092378e.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9
        }}
      />
      
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-eco-100/40 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/30 to-transparent"></div>
    </div>
  );
};

export default About;
