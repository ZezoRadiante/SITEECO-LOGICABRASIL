
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Initialize counters with ref to track if animation already started
  const animatedRef = useRef(false);
  
  const { count: mudasCount, digits: mudasDigits } = useCountAnimation(inView && !animatedRef.current ? 1000000 : 0, 2000);
  const { count: hectaresCount, digits: hectaresDigits } = useCountAnimation(inView && !animatedRef.current ? 100000 : 0, 2000);
  const { count: licencasCount, digits: licencasDigits } = useCountAnimation(inView && !animatedRef.current ? 300 : 0, 2000);
  const { count: anosCount, digits: anosDigits } = useCountAnimation(inView && !animatedRef.current ? 10 : 0, 2000);

  useEffect(() => {
    if (inView && !animatedRef.current) {
      animatedRef.current = true;
    }
  }, [inView]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-earth-100/30 to-sky-50/20">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-eco-100/40 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-sky-700 bg-sky-100 px-3 py-1 rounded-full text-sm font-medium mb-2 opacity-0 animate-fade-in">
            Nossa História
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 opacity-0 animate-fade-in-delay-1">
            Sobre a <span className="text-sky-700">Eco-lógica Brasil</span>
          </h2>
        </div>

        {/* Stats grid with slot machine animation */}
        <div 
          ref={inViewRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto opacity-0 animate-fade-in-delay-2"
        >
          {/* Mudas Counter */}
          <div className="stats-card relative overflow-hidden">
            <div className="p-6 rounded-lg border-2 border-eco-300 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-eco-400">
              <div className="text-earth-700 text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <span className="text-eco-800">+</span>
                <span className="counter-value">
                  {mudasDigits.length > 0 ? 
                    mudasDigits.map((digit, idx) => (
                      <span key={idx} className="digit-slot">
                        {digit.includes('|') ? 
                          digit.split('|').map((d, i) => (
                            <span key={i} className="digit" style={{opacity: i === 1 ? 1 : 0.3}}>
                              {d}
                            </span>
                          )) : 
                          digit
                        }
                      </span>
                    )) : 
                    new Intl.NumberFormat('pt-BR').format(mudasCount)
                  }
                </span>
              </div>
              <p className="text-earth-600 text-lg md:text-xl text-center">
                Mudas Produzidas<br />e Plantadas
              </p>
            </div>
          </div>

          {/* Hectares Counter */}
          <div className="stats-card relative overflow-hidden">
            <div className="p-6 rounded-lg border-2 border-eco-300 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-eco-400">
              <div className="text-earth-700 text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <span className="text-eco-800">+</span>
                <span className="counter-value">
                  {hectaresDigits.length > 0 ? 
                    hectaresDigits.map((digit, idx) => (
                      <span key={idx} className="digit-slot">
                        {digit.includes('|') ? 
                          digit.split('|').map((d, i) => (
                            <span key={i} className="digit" style={{opacity: i === 1 ? 1 : 0.3}}>
                              {d}
                            </span>
                          )) : 
                          digit
                        }
                      </span>
                    )) : 
                    new Intl.NumberFormat('pt-BR').format(hectaresCount)
                  }
                </span>
              </div>
              <p className="text-earth-600 text-lg md:text-xl text-center">
                Hectares regularizados<br />junto ao INCRA
              </p>
            </div>
          </div>

          {/* Licenças Counter */}
          <div className="stats-card relative overflow-hidden">
            <div className="p-6 rounded-lg border-2 border-eco-300 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-eco-400">
              <div className="text-earth-700 text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <span className="text-eco-800">+</span>
                <span className="counter-value">
                  {licencasDigits.length > 0 ? 
                    licencasDigits.map((digit, idx) => (
                      <span key={idx} className="digit-slot">
                        {digit.includes('|') ? 
                          digit.split('|').map((d, i) => (
                            <span key={i} className="digit" style={{opacity: i === 1 ? 1 : 0.3}}>
                              {d}
                            </span>
                          )) : 
                          digit
                        }
                      </span>
                    )) : 
                    new Intl.NumberFormat('pt-BR').format(licencasCount)
                  }
                </span>
              </div>
              <p className="text-earth-600 text-lg md:text-xl text-center">
                Licenças ambientais<br />emitidas
              </p>
            </div>
          </div>

          {/* Anos Counter */}
          <div className="stats-card relative overflow-hidden">
            <div className="p-6 rounded-lg border-2 border-eco-300 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-eco-400">
              <div className="text-earth-700 text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <span className="text-eco-800">+</span>
                <span className="counter-value">
                  {anosDigits.length > 0 ? 
                    anosDigits.map((digit, idx) => (
                      <span key={idx} className="digit-slot">
                        {digit.includes('|') ? 
                          digit.split('|').map((d, i) => (
                            <span key={i} className="digit" style={{opacity: i === 1 ? 1 : 0.3}}>
                              {d}
                            </span>
                          )) : 
                          digit
                        }
                      </span>
                    ))
                  } ANOS
                </span>
              </div>
              <p className="text-earth-600 text-lg md:text-xl text-center">
                De atuação no setor<br />ambiental
              </p>
            </div>
          </div>
        </div>
            
        {/* Content */}
        <div className="space-y-6 text-center max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
          <div className="space-y-4 text-foreground/70">
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
          
          <div className="pt-4">
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
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/30 to-transparent"></div>
    </section>
  );
};

export default About;
