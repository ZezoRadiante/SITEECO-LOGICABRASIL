
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section id="banner" className="py-12 md:py-16 bg-gradient-to-b from-white to-eco-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Banner Image - Simplified without border */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/17f4d0f9-7c39-414b-aed2-5773efba9a0a.png" 
              alt="Criança com capacete branco segurando uma muda em uma plantação" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Banner Content - Simplified */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-800">
              Promovendo um <span className="text-[#71B707]">Futuro Verde</span> para as Novas Gerações
            </h2>
            
            <p className="text-lg text-earth-600 leading-relaxed">
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
      </div>
      
      {/* Subtle Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-100/20 to-transparent"></div>
    </section>
  );
};

export default Banner;
