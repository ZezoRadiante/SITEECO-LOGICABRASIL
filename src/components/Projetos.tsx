
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

const projects = [
  {
    id: 1,
    image: '/images/projeto1.jpg',
    title: 'Viveiro Florestal',
    description: 'Capacidade Para 500 Mil Mudas',
  },
  {
    id: 2,
    image: '/images/projeto2.jpg',
    title: 'Casa dos Ventos',
    description: 'Projeto de Reposição Florestal Torres Anemométricas - 6.240 Mudas Plantadas',
  },
  {
    id: 3,
    image: '/images/projeto3.jpg',
    title: 'Rio do Vento',
    description: 'Projeto de Reposição Florestal - 174.764 Mudas Plantadas',
  },
  {
    id: 4,
    image: '/images/projeto4.jpg',
    title: 'Umari',
    description: 'Projeto de Reposição Florestal - 17.652 Mudas Plantadas',
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
    <div className="flex justify-center space-x-3 mt-4">
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

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveIndex(index);
    }
  }, [emblaApi]);

  // Log to confirm component is rendering
  useEffect(() => {
    console.log('Projetos component mounted');
  }, []);

  return (
    <section id="projetos" className="py-12 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-[#71B707] bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-2 opacity-0 animate-fade-in shadow-sm">
            Conheça Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
            Nossos <span className="text-[#71B707]">Projetos</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full mb-4"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
          </p>
        </div>
      </div>

      <div className="w-full relative overflow-hidden py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border-2 border-eco-200 h-64 md:h-80 shadow-md bg-gray-100 flex items-center justify-center group relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/placeholder.svg';
                          console.log(`Image failed to load: ${project.image}`);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                        <p className="text-eco-100 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-eco-100/90 hover:bg-eco-200/90 border-eco-300 text-earth-700" />
          </Carousel>
        </div>
      </div>

      <div className="mt-4">
        <CarouselDots 
          activeIndex={activeIndex} 
          count={projects.length} 
          onClick={scrollTo} 
        />
      </div>
    </section>
  );
};

export default Projetos;
