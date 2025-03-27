
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Atualizar o array de imagens com as novas imagens fornecidas
const projectImages = [
  {
    src: '/lovable-uploads/90a8a097-6c4a-4781-b4a7-34233466e8d7.png',
    title: 'Casa dos Ventos',
    description: 'Projeto de Reposição florestal em Riachuelo/RN',
    stats: '12.502 Mudas Mantidas'
  },
  {
    src: '/lovable-uploads/b9a9db92-a490-4cfd-bf08-82463322c84a.png',
    title: 'Rio do Vento',
    description: 'Projeto de Reposição Florestal',
    stats: '174.764 Mudas Plantadas'
  },
  {
    src: '/lovable-uploads/eeb48b3c-5fe6-4239-8d39-2552b2bacbcd.png',
    title: 'Umari',
    description: 'Projeto de Reposição Florestal',
    stats: '17.652 Mudas Plantadas'
  },
  {
    src: '/lovable-uploads/318d8ade-22f6-4a56-a9bd-ffbaa4ea2f23.png',
    title: 'Rio do Vento Expansão',
    description: 'Projeto de Reposição Florestal',
    stats: '101.614 Mudas Plantadas'
  },
  {
    src: '/lovable-uploads/c4dcc631-845d-41a0-b9b2-9f71a587c4bb.png',
    title: 'Viveiro Florestal',
    description: 'Viveiro Florestal com Capacidade Para',
    stats: '500 Mil Mudas'
  },
  {
    src: '/lovable-uploads/a345d5c1-41e6-4cc0-894e-4c5ad4aa999d.png',
    title: 'Rio do Vento',
    description: 'Projeto de Reposição Florestal',
    stats: '174.764 Mudas Plantadas'
  },
];

const CarouselDots = ({ 
  activeIndex, 
  count, 
  onClick 
}: { 
  activeIndex: number; 
  count: number; 
  onClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center space-x-3 mt-8">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "transition-all duration-300",
            index === activeIndex 
              ? "w-8 h-3 bg-[#71B707] rounded-full" 
              : "w-3 h-3 bg-eco-200 rounded-full"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Projetos = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  // Update active index when the carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Function to handle dot click and scroll to respective slide
  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  return (
    <section id="projetos" className="py-24 overflow-hidden relative bg-gradient-to-b from-eco-50/40 via-eco-100/30 to-eco-200/20">
      {/* Top gradient transition - enhanced */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-eco-100/50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#71B707] bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in shadow-sm">
            Conheça Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
            Nossos <span className="text-[#71B707]">Projetos</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full mb-6"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
          </p>
        </div>
      </div>

      {/* Full width carousel - Enhanced with better transitions */}
      <div className="w-full relative overflow-hidden py-12">
        <Carousel>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projectImages.map((project, index) => {
                // Calculate the distance from active index (handling loop)
                const count = projectImages.length;
                let distance = Math.abs(index - activeIndex);
                if (distance > count / 2) {
                  distance = count - distance;
                }
                
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[50%] lg:basis-[35%] px-3 transition-all duration-700",
                      distance === 0 
                        ? "scale-110 z-20 opacity-100" 
                        : distance === 1 
                          ? "scale-95 z-10 opacity-90" 
                          : "scale-90 opacity-70"
                    )}
                  >
                    <div className={cn(
                      "overflow-hidden rounded-lg border-2 transition-all duration-500 relative",
                      distance === 0 
                        ? "h-72 md:h-96 border-eco-500" 
                        : "h-60 md:h-80 border-eco-200"
                    )}>
                      <img 
                        src={project.src} 
                        alt={`Projeto ${project.title}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      
                      {/* Project info overlay - enhanced with better visibility */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white">{project.title}</h3>
                        <p className="text-sm md:text-base text-white/90">{project.description}</p>
                        <p className="text-lg md:text-xl font-semibold text-eco-300">{project.stats}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows - Improved */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
        </Carousel>
      </div>

      {/* Indicator dots - Improved */}
      <div className="mt-4">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={projectImages.length} 
          onClick={scrollTo} 
        />
      </div>
      
      {/* Bottom gradient transition - Enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/40 to-transparent"></div>
    </section>
  );
};

export default Projetos;
