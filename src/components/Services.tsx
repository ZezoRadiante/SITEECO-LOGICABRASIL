
import React from 'react';
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
      "glass rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 h-full border-l-4 border-sky-400 group", 
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
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

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-eco-50/40">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-earth-100/60 to-transparent z-10"></div>
      
      {/* Background image with low opacity for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png')] opacity-50 bg-repeat"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4d6b4d69-c8b0-4435-a100-e840167b347c.png')] opacity-30 bg-no-repeat bg-center bg-cover"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-700 bg-sky-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in shadow-sm">
            Nossa Especialidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-delay-1 text-sky-700 text-center">Nossos Serviços</h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full mb-6"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Oferecemos soluções ambientais especializadas e adaptadas às suas necessidades específicas, 
            com foco em práticas sustentáveis e responsabilidade ecológica.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              index={index} 
            />
          ))}
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={service.title} className="flex-[0_0_100%] min-w-0 pl-4">
                  <div className="p-1">
                    <ServiceCard 
                      title={service.title} 
                      description={service.description} 
                      icon={service.icon} 
                      index={index} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CarouselDots 
            activeIndex={activeIndex} 
            count={services.length} 
            onClick={scrollTo} 
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-eco-100/50 to-transparent"></div>
    </section>
  );
};

export default Services;
