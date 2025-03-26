
import React from 'react';
import { cn } from '@/lib/utils';

const Banner = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-100 to-eco-200 z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-light text-earth-800 leading-tight">
              Promovendo um 
              <span className="block font-bold text-earth-900"> Futuro mais Sustentável</span>
            </h2>
            
            <p className="text-earth-700 text-lg">
              A Eco-Lógica Brasil é uma empresa referência em consultoria e engenharia ambiental no Nordeste brasileiro, focada em soluções sustentáveis.
            </p>
            
            <p className="text-earth-700 text-lg">
              Com serviços prestados em todas as regiões do país, somos referência em projetos ambientais de grande escala.
            </p>
            
            <a 
              href="#about" 
              className="inline-block mt-4 px-6 py-3 bg-[#71B707] text-white rounded-full font-medium hover:bg-[#E2FCB3] hover:text-earth-800 transition-all duration-300 shadow-md"
            >
              Saiba Mais
            </a>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/8f0bfec6-9c83-4a83-94c1-4d87c923fc1f.png" 
                alt="Criança com mudas de plantas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
