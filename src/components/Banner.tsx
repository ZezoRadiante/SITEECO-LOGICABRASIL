
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section id="banner" className="py-12 md:py-16 bg-gradient-to-b from-white to-eco-50 relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-sky-50/30 to-transparent z-10"></div>
      
      <div className="container mx-auto">
        {/* Banner Content - Now above the image */}
        <div className="w-full space-y-6 text-center px-4 md:px-8 mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-800">
            Promovendo um <span className="text-[#71B707]">Futuro Verde</span> para as Novas Gerações
          </h2>
          
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mx-auto">
            Através de nossas iniciativas de educação ambiental e reflorestamento, 
            inspiramos crianças a se tornarem guardiões da natureza, criando um 
            impacto positivo que atravessa gerações.
          </p>
          
          <div className="pt-4">
            <Button
              variant="green"
              className="rounded-full text-base sm:text-lg group"
              asChild
            >
              <a href="#about">
                Conheça Nossos Projetos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Banner Image - Full width below text */}
      <div className="w-full overflow-hidden">
        <img 
          src="/lovable-uploads/17f4d0f9-7c39-414b-aed2-5773efba9a0a.png" 
          alt="Criança com capacete branco segurando uma muda em uma plantação" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Bottom gradient transition - Enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-earth-100/40 to-transparent"></div>
    </section>
  );
};

export default Banner;
