
import React from 'react';
import { CheckCircle2, Leaf, Globe, FileCheck, Clock } from 'lucide-react';
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
    "Práticas sustentáveis",
    "Tecnologias avançadas",
    "Compromisso com a preservação",
    "Desenvolvimento sustentável"
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

  const statistics = [
    { icon: <Leaf className="h-10 w-10 text-green-200" />, value: "+1.000.000", label: "Mudas Produzidas e Plantadas" },
    { icon: <Globe className="h-10 w-10 text-green-200" />, value: "+100.000", label: "Hectares requalificados junto ao cliente" },
    { icon: <FileCheck className="h-10 w-10 text-green-200" />, value: "+300", label: "Licenças ambientais emitidas" },
    { icon: <Clock className="h-10 w-10 text-green-200" />, value: "+10 ANOS", label: "De experiência ambiental" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-eco-700 to-eco-600"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/bb178d77-ee49-49d9-9ada-f4656c233e12.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute -left-16 top-1/3 opacity-5 z-10">
        <Logo size={300} className="text-white transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <span className="inline-block text-green-200 bg-green-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
            NOSSA HISTÓRIA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            SOMOS O PRINCIPAL PARCEIRO EM <br />
            CONSULTORIA AMBIENTAL NO BRASIL
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/90 mb-8 leading-relaxed">
              Fundada em 2015 por engenheiros visionários, a Eco-Lógica
              Brasil se destaca pela excelência em estudos ambientais e
              na produção e plantio de mudas em larga escala. Com
              capacidade técnica para produzir e plantar mais de 500 mil
              mudas por ano, nossa empresa é sinônimo de excelência e
              inovação.
            </p>
            
            <p className="text-white/90 mb-8 leading-relaxed">
              Além disso, a Eco-Lógica Brasil adota práticas sustentáveis
              e tecnologias avançadas em todas as suas operações,
              reforçando o compromisso com a preservação ambiental e o
              desenvolvimento sustentável.
            </p>
            
            <p className="text-white/90 mb-8 leading-relaxed">
              Com uma equipe altamente qualificada e motivada, a empresa busca constantemente soluções inovadoras para contribuir com a recuperação de ecossistemas e a melhoria da
              qualidade de vida das comunidades onde atua.
            </p>
            
            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-eco-800 text-white rounded-full font-medium hover:bg-eco-900 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                CONHEÇA A EMPRESA
              </a>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-green-100">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Carousel 
              className="w-full mt-8" 
              opts={{
                loop: true,
                dragFree: true,
                duration: 100,
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
                            alt={`Projetos ambientais - imagem ${index + 1}`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
