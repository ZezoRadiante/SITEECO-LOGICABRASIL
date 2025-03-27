
import React, { useRef, useEffect } from 'react';
import { Leaf, Recycle, Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { servicesImages } from '@/data/projectData';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  index
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 h-full border-l-4 border-sky-400 group bg-white/80 backdrop-blur-sm", 
      index === 0 ? "animate-fade-in" : index === 1 ? "animate-fade-in-delay-1" : "animate-fade-in-delay-2"
    )}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center mb-6 shadow-inner shadow-sky-200 group-hover:scale-110 transition-transform duration-300">
        <div className="text-sky-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-sky-700 group-hover:text-sky-600 transition-colors">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
};

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
    <div className="flex justify-center space-x-2 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            index === activeIndex ? "bg-sky-600 w-6" : "bg-sky-200"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const servicesRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );
    
    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Consultoria Ambiental",
      description: "Avaliações abrangentes e soluções personalizadas para garantir conformidade regulatória enquanto avançamos nas metas de sustentabilidade para sua organização.",
      icon: <Leaf size={32} />
    }, 
    {
      title: "Gestão de Resíduos",
      description: "Planejamento estratégico e implementação de sistemas eficientes de redução de resíduos projetados para minimizar o impacto ambiental e maximizar a recuperação de recursos.",
      icon: <Recycle size={32} />
    }, 
    {
      title: "Educação Ambiental",
      description: "Programas e workshops envolventes que cultivam a conscientização ambiental e promovem práticas sustentáveis dentro de comunidades e organizações.",
      icon: <Sprout size={32} />
    }
  ];

  // Update active index when the carousel scrolls
  React.useEffect(() => {
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
    <section 
      id="services" 
      ref={servicesRef}
      className="py-24 relative overflow-hidden transition-all duration-1000 ease-in-out"
      data-section="services"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-opacity duration-1000" 
        style={{ backgroundImage: `url('${servicesImages.background}')` }}>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/90 via-white/80 to-eco-50/70 z-0 transition-all duration-1000"></div>
      
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-earth-100/60 to-transparent z-10 transition-all duration-700"></div>
      
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png')] opacity-5 bg-repeat"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sky-700 bg-sky-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-sky-50">
            Nossa Especialidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-700 text-center transition-all duration-500 hover:text-sky-600">Nossos Serviços</h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full mb-6 transition-all duration-500 hover:w-32"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Oferecemos soluções ambientais especializadas e adaptadas às suas necessidades específicas, 
            com foco em práticas sustentáveis e responsabilidade ecológica.
          </p>
        </div>

        {/* Desktop view - grid with enhanced spacing */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll stagger-children">
          {services.map((service, index) => (
            <div key={service.title} className="animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                index={index} 
              />
            </div>
          ))}
        </div>

        {/* Mobile view - carousel with improved dots */}
        <div className="md:hidden animate-on-scroll">
          <div className="overflow-hidden" ref={emblaRef}>
            <Carousel>
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={service.title}>
                    <div className="p-1">
                      <ServiceCard 
                        title={service.title} 
                        description={service.description} 
                        icon={service.icon} 
                        index={index} 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/80 border-sky-200 text-sky-600 transition-all duration-300 hover:bg-white" />
              <CarouselNext className="right-0 bg-white/80 border-sky-200 text-sky-600 transition-all duration-300 hover:bg-white" />
            </Carousel>
          </div>
          <CarouselDots 
            activeIndex={activeIndex} 
            count={services.length} 
            onClick={scrollTo} 
          />
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-eco-100/50 to-transparent z-10 transition-all duration-700"></div>
    </section>
  );
};

export default Services;
