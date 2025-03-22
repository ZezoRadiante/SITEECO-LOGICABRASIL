
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Logo from './Logo';

const About = () => {
  const values = [
    "Integridade Ecológica",
    "Liderança em Sustentabilidade",
    "Inovação e Expertise",
    "Parceria com Clientes"
  ];

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

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-left grid grid-cols-2 gap-4">
            <div className="relative col-span-2">
              <div className="w-full rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Pessoas plantando árvores em comunidade" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Mãos segurando muda de planta" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="https://images.unsplash.com/photo-1620052581237-5d36667be337?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Plantação de sementes em solo fértil" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-lg p-4 max-w-xs shadow-lg">
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
      </div>
    </section>
  );
};

export default About;
