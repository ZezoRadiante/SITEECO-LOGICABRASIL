
import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="py-6 md:py-8 relative overflow-hidden section-transition">
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Full width image for the banner */}
        <img 
          src="./lovable-uploads/d3727996-89f0-4eaa-9b82-dc1a2c38fde8.png" 
          alt="Promovendo um Futuro mais Sustentável - Criança com capacete branco segurando uma muda em um viveiro de plantas" 
          className="w-full max-w-5xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
          onError={(e) => {
            console.error("Banner image failed to load");
            (e.target as HTMLImageElement).src = "./lovable-uploads/becbdbe4-e862-4db5-bde6-5636d0c06f24.png";
          }}
        />
      </div>
      
      {/* Enhanced bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10 transition-opacity duration-700" />
    </section>
  );
};

export default Banner;
