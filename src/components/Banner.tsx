
import React from 'react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-eco-50 to-eco-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image with rounded corner and green border design */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#71B707] -z-10"></div>
            <img
              src="/lovable-uploads/4b16da32-f8b5-405a-a58c-1e83ff4bc621.png"
              alt="Criança com capacete branco segurando uma muda de planta em um viveiro"
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800">
              Cultivando o Futuro Desde Cedo
            </h2>
            
            <p className="text-lg text-earth-700 leading-relaxed">
              Acreditamos que a educação ambiental começa na infância. 
              Nossos programas incentivam crianças a se conectarem com a natureza 
              e aprenderem sobre a importância da sustentabilidade.
            </p>
            
            <ul className="space-y-3">
              {["Programas educacionais para crianças", 
                "Viveiros sustentáveis", 
                "Atividades práticas de plantio"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#71B707] rounded-full"></span>
                  <span className="text-earth-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button 
                variant="green" 
                className="rounded-full shadow-md"
              >
                Conheça Nossos Programas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
