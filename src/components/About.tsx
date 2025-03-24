
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Logo from './Logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const About = () => {
  const values = [
    "Integridade Ecológica",
    "Liderança em Sustentabilidade",
    "Inovação e Expertise",
    "Parceria com Clientes"
  ];

  const plantingImages = [
    "/lovable-uploads/5dd5503f-329d-40f1-8e00-133df0a69f1a.png",
    "/lovable-uploads/23b71c4a-ae05-4ad7-b477-b35c8f494d1a.png",
    "/lovable-uploads/b90b4872-c28b-4a9e-967c-ee3cd4bbcdfe.png",
    "/lovable-uploads/4e99cd90-92f7-4e37-b085-3c4d9182f2a7.png",
    "/lovable-uploads/48d7d076-02b1-4af7-bff8-3b0d88c735fc.png",
    "/lovable-uploads/b3bda120-cadf-4783-ba66-df239127e92e.png",
    "/lovable-uploads/9f04c017-2367-4865-b366-bed9918fc72b.png",
    "/lovable-uploads/e6fb9dd0-19b4-4d25-8b88-21e934258792.png",
    "/lovable-uploads/06e415cd-48ec-4571-a425-96cf1321203f.png",
    "/lovable-uploads/aa84e6f2-e9cc-47b3-a34d-8f864dbc4cc4.png",
  ];

  // Create autoplay plugin instance with continuous slow movement
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 6000, // 6 seconds between slides (slower)
      stopOnInteraction: false, // don't pause on user interaction
      stopOnMouseEnter: false, // don't pause on mouse hover
      jump: false, // prevents jumping between slides - smoother transitions
    })
  );

  return (
    <section id="about" className="py-24 bg-secondary/70 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -left-16 top-1/3 opacity-10">
        <Logo size={300} className="text-eco-600 transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-eco-600 bg-eco-50 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in-right">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              Comprometidos com a Excelência Ambiental
            </h2>
            
            <p className="text-foreground/70 mb-8 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              Fundada nos princípios de administração ecológica e desenvolvimento sustentável, nossa equipe de especialistas ambientais traz décadas de experiência combinada para cada projeto. Acreditamos que responsabilidade ambiental e sucesso empresarial podem — e devem — andar de mãos dadas.
            </p>
            
            <div className="space-y-4 mb-8 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="text-eco-600 mr-3 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 border border-eco-600 text-eco-600 rounded-full font-medium hover:bg-eco-600/10 transition-all duration-300 opacity-0 animate-fade-in-right"
              style={{ animationDelay: '0.4s' }}
            >
              Saiba Mais
            </a>
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-left">
            <Carousel 
              className="w-full" 
              opts={{
                loop: true,
                dragFree: true, // allows continuous dragging
                duration: 100, // slower transitions
              }}
              plugins={[autoplayPlugin.current]}
            >
              <CarouselContent>
                {plantingImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="rounded-lg overflow-hidden shadow-xl">
                        <AspectRatio ratio={1/1}>
                          <img 
                            src={image}
                            alt={`Crianças plantando ou cuidando de mudas de plantas - imagem ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="mt-8 glass rounded-lg p-4 max-w-xs shadow-lg ml-auto">
              <div className="flex items-center mb-2">
                <Logo size={20} className="text-eco-600 mr-2" />
                <h4 className="font-semibold">Nossa Missão</h4>
              </div>
              <p className="text-sm text-foreground/70">
                Impulsionar mudanças ambientais positivas através de soluções inovadoras e educação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
