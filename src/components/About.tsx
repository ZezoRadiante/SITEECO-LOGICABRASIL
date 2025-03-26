import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-earth-100/30 to-sky-50/20">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-eco-100/40 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with decorative elements */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl relative z-10 opacity-0 animate-fade-in">
              <img 
                src="/lovable-uploads/b2251703-230b-4fb3-adfd-7249f11d3483.jpg" 
                alt="Equipe da Eco-lógica Brasil em ação" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-eco-200 rounded-full opacity-70 z-0 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-sky-200 rounded-full opacity-70 z-0 animate-float"></div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <span className="inline-block text-sky-700 bg-sky-100 px-3 py-1 rounded-full text-sm font-medium mb-2 opacity-0 animate-fade-in">
              Nossa História
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 opacity-0 animate-fade-in-delay-1">
              Sobre a <span className="text-sky-700">Eco-lógica Brasil</span>
            </h2>
            
            <div className="space-y-4 text-foreground/70 opacity-0 animate-fade-in-delay-2">
              <p>
                Fundada em 2010, a Eco-lógica Brasil nasceu da paixão de um grupo de ambientalistas 
                determinados a fazer a diferença no cenário de conservação ambiental brasileiro.
              </p>
              
              <p>
                Nossa missão é promover soluções sustentáveis que harmonizem o desenvolvimento 
                econômico com a preservação ambiental, criando um legado positivo para as 
                futuras gerações.
              </p>
              
              <p>
                Com uma equipe multidisciplinar de especialistas em biologia, engenharia ambiental, 
                gestão de recursos naturais e educação, oferecemos serviços abrangentes que 
                atendem às necessidades específicas de cada cliente e comunidade.
              </p>
            </div>
            
            <div className="pt-4 opacity-0 animate-fade-in-delay-3">
              <Button
                variant="outline"
                className="rounded-full border-sky-300 text-sky-700 hover:bg-sky-50 group"
                asChild
              >
                <a href="#contact">
                  Fale Conosco
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/30 to-transparent"></div>
    </section>
  );
};

export default About;
