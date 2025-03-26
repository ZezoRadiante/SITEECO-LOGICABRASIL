
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Footer boxes content
  const footerBoxes = [
    {
      title: "Serviços",
      content: (
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Consultoria Ambiental
            </a>
          </li>
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Gestão de Resíduos
            </a>
          </li>
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Educação Ambiental
            </a>
          </li>
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Planejamento de Sustentabilidade
            </a>
          </li>
        </ul>
      )
    },
    {
      title: "Empresa",
      content: (
        <ul className="space-y-4">
          <li>
            <a href="#about" className="text-background/70 hover:text-white transition-colors duration-300">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Nossa Equipe
            </a>
          </li>
          <li>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
              Carreiras
            </a>
          </li>
          <li>
            <a href="#contact" className="text-background/70 hover:text-white transition-colors duration-300">
              Contato
            </a>
          </li>
        </ul>
      )
    },
    {
      title: "Contato",
      content: (
        <ul className="space-y-4">
          <li className="flex items-start">
            <MapPin className="text-white mr-3 mt-1 flex-shrink-0" />
            <span className="text-background/70">Rua Eco 123, São Paulo, SP 01234-567</span>
          </li>
          <li className="flex items-start">
            <Phone className="text-white mr-3 mt-1 flex-shrink-0" />
            <span className="text-background/70">(11) 3456-7890</span>
          </li>
          <li className="flex items-start">
            <Mail className="text-white mr-3 mt-1 flex-shrink-0" />
            <span className="text-background/70">info@ecologicabrasil.com</span>
          </li>
        </ul>
      )
    }
  ];
  
  // Custom carousel indicator component
  const CarouselIndicator = ({ total, current }: { total: number; current: number }) => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-background/30'
            }`}
          />
        ))}
      </div>
    );
  };
  
  return <footer className="bg-eco-700 text-background/90 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* First column - always visible */}
          <div>
            <div className="flex items-center space-x-2 text-background font-medium mb-6">
              <Logo size={24} className="text-white" />
            </div>
            <p className="text-background/70 mb-6">
              Fornecendo soluções ambientais sustentáveis com integridade e expertise para um amanhã mais verde.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/eco.logicabrasilltda/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://br.linkedin.com/company/eco-l%C3%B3gica-brasil-ltda-eco-l%C3%B3gica-tem-uma-conta" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/brasilecologica/" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Second column - carousel on mobile, grid on desktop */}
          <div>
            {isMobile ? (
              <div className="flex flex-col items-center">
                <Carousel className="w-full max-w-sm" opts={{ loop: true }}>
                  <CarouselContent>
                    {footerBoxes.map((box, index) => (
                      <CarouselItem key={index} className="pt-2 md:basis-full">
                        <div className="p-2">
                          <div className="bg-eco-700 p-4 rounded-lg min-h-[220px]">
                            <h3 className="text-xl font-semibold mb-6">{box.title}</h3>
                            {box.content}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  <div className="flex items-center justify-center mt-4">
                    <CarouselPrevious className="static translate-y-0 mr-2 h-8 w-8 rounded-full bg-background/20 hover:bg-background/30 border-none text-white" />
                    <CarouselNext className="static translate-y-0 ml-2 h-8 w-8 rounded-full bg-background/20 hover:bg-background/30 border-none text-white" />
                  </div>
                  
                  {/* Custom indicator will be added here by embla-carousel library */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {footerBoxes.map((_, index) => (
                      <div
                        key={index}
                        className="h-2 w-2 rounded-full bg-background/30 data-[active=true]:bg-white transition-colors duration-300"
                        data-active={index === 0}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {footerBoxes.map((box, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-6">{box.title}</h3>
                    {box.content}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © {currentYear} Eco-logica Brasil. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300 text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300 text-sm">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
