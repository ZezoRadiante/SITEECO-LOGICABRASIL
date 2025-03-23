
import React from 'react';
import { Leaf, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const isMobile = useIsMobile();
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

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0">
        {/* Video Background - removed poster attribute */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
          {/* Replace this source with your downloaded YouTube video */}
          <source src="/background-nature.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 z-10"></div>
      </div>

      {/* Animated Particles - Reduced for mobile */}
      <div className="absolute inset-0 z-20">
        {/* More Floating Leaves with different sizes, positions and animations - Fewer on mobile */}
        <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
          <Leaf size={isMobile ? 80 : 120} className="text-eco-600 rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-1/5 opacity-15 animate-float" style={{
        animationDelay: '1s'
      }}>
          <Leaf size={isMobile ? 50 : 80} className="text-eco-500 -rotate-12" />
        </div>
        {!isMobile && (
          <>
            <div className="absolute top-1/2 left-3/4 opacity-10 animate-float" style={{
              animationDelay: '2s'
            }}>
              <Leaf size={100} className="text-eco-400 rotate-45" />
            </div>
            <div className="absolute top-1/3 left-1/6 opacity-25 animate-float" style={{
              animationDelay: '1.5s',
              animationDuration: '5s'
            }}>
              <Leaf size={60} className="text-eco-700 rotate-90" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float" style={{
              animationDelay: '2.5s',
              animationDuration: '6s'
            }}>
              <Leaf size={90} className="text-eco-500 -rotate-45" />
            </div>
            <div className="absolute top-2/3 left-1/3 opacity-15 animate-float" style={{
              animationDelay: '3s',
              animationDuration: '7s'
            }}>
              <Leaf size={70} className="text-eco-600 rotate-180" />
            </div>
            <div className="absolute top-1/5 right-1/3 opacity-10 animate-float" style={{
              animationDelay: '0.5s',
              animationDuration: '4.5s'
            }}>
              <Leaf size={110} className="text-eco-400 rotate-135" />
            </div>
            <div className="absolute bottom-1/5 left-1/2 opacity-20 animate-float" style={{
              animationDelay: '3.5s',
              animationDuration: '5.5s'
            }}>
              <Leaf size={65} className="text-eco-600 -rotate-135" />
            </div>
          </>
        )}
      </div>

      {/* Interactive Floating Element */}
      <div className="absolute right-10 top-1/3 hidden lg:block z-30">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-eco-400 to-eco-600 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-pulse-gentle"></div>
          <div className="relative flex items-center justify-center rounded-full bg-eco-600 p-6 hover:bg-eco-700 transition duration-300 transform hover:scale-110">
            <Leaf size={32} className="text-white group-hover:animate-spin-slow transition duration-300" />
          </div>
        </div>
      </div>

      {/* Image Carousel - Only visible on desktop */}
      <div className="absolute left-4 top-1/4 hidden lg:block z-30 w-64 transform -rotate-6 shadow-xl rounded-lg overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {plantingImages.slice(0, 5).map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src={image} 
                    alt={`Imagem de plantação ${index + 1}`} 
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="absolute right-4 bottom-1/4 hidden lg:block z-30 w-56 transform rotate-3 shadow-xl rounded-lg overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {plantingImages.slice(5, 10).map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={1 / 1}>
                  <img 
                    src={image} 
                    alt={`Imagem de plantação ${index + 6}`} 
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mobile-optimized carousel */}
      {isMobile && (
        <div className="absolute bottom-[25%] left-0 right-0 z-30 px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {plantingImages.map((image, index) => (
                <CarouselItem key={index} className="basis-2/3">
                  <div className="p-1">
                    <AspectRatio ratio={1 / 1} className="rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={image} 
                        alt={`Imagem de plantação ${index + 1}`} 
                        className="object-cover w-full h-full" 
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8" />
            <CarouselNext className="right-2 h-8 w-8" />
          </Carousel>
        </div>
      )}

      {/* Content - Improved for mobile */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 backdrop-blur-sm py-8 sm:py-12 bg-black/0 rounded-full">
        <div className="flex items-center justify-center opacity-0 animate-fade-in hover:scale-110 transition-transform duration-500">
          <div className="relative">
            <Leaf size={isMobile ? 32 : 48} className="text-eco-600 absolute -top-6 -left-6 opacity-20 animate-pulse-gentle opacity-20" />
            <Leaf size={isMobile ? 32 : 48} style={{
            animationDelay: '1.5s'
          }} className="text-eco-600 absolute -bottom-6 -right-6 opacity-20 animate-pulse-gentle opacity-10" />
            <Leaf size={isMobile ? 40 : 64} className="text-eco-600 hover:rotate-45 transition-transform duration-500 opacity-30 bg-black/0" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          <span className="text-eco-700 block mb-2 hover:text-eco-600 transition-colors duration-300">Soluções Sustentáveis</span>
          <span className="text-foreground/80 font-light">para um Futuro Mais Verde</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/70 opacity-0 animate-fade-in-delay-2 text-balance">
          Fornecendo serviços especializados de consultoria ambiental que equilibram responsabilidade ecológica com soluções empresariais práticas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-3">
          <a href="#services" className="px-6 sm:px-8 py-3 bg-eco-600 text-white rounded-full font-medium hover:bg-eco-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
            <span className="relative z-10">Nossos Serviços</span>
            <span className="absolute inset-0 bg-eco-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
          <a href="#contact" className="px-6 sm:px-8 py-3 border border-eco-600 text-eco-600 rounded-full font-medium hover:bg-eco-600 hover:text-white transition-all duration-300 group relative overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Entre em Contato</span>
            <span className="absolute inset-0 bg-eco-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3 z-30">
        <a href="#services" className="flex flex-col items-center text-foreground/60 hover:text-eco-600 transition-all duration-300 group">
          <span className="text-xs sm:text-sm mb-2 group-hover:-translate-y-1 transition-transform duration-300">Descubra Mais</span>
          <div className="relative">
            <div className="absolute -inset-1 bg-eco-600/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            <ArrowDown className="animate-bounce group-hover:text-white group-hover:bg-eco-600 rounded-full group-hover:p-1 transition-all duration-300" />
          </div>
        </a>
      </div>
    </section>;
};
export default Hero;
