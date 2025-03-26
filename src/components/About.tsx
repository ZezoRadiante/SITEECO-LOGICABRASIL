
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Leaf, Globe, FileCheck, Clock } from 'lucide-react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

const About = () => {
  const statisticsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const firstStat = useCountAnimation(isVisible ? 1000000 : 0, 2000);
  const secondStat = useCountAnimation(isVisible ? 100000 : 0, 2000);
  const thirdStat = useCountAnimation(isVisible ? 300 : 0, 1500);
  const fourthStat = useCountAnimation(isVisible ? 10 : 0, 1000);
  
  const animatedValues = [firstStat, secondStat, thirdStat, fourthStat];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const statItems = entry.target.querySelectorAll('.stat-item');
          statItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              item.classList.remove('opacity-0');
            }, index * 200);
          });
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    });
    
    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }
    
    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, []);

  const statistics = [
    { icon: <Leaf className="h-10 w-10 text-earth-700" />, value: 1000000, label: "Mudas Produzidas e Plantadas", prefix: "+" },
    { icon: <Globe className="h-10 w-10 text-earth-700" />, value: 100000, label: "Hectares requalificados junto ao cliente", prefix: "+" },
    { icon: <FileCheck className="h-10 w-10 text-earth-700" />, value: 300, label: "Licenças ambientais emitidas", prefix: "+" },
    { icon: <Clock className="h-10 w-10 text-earth-700" />, value: 10, label: "De experiência ambiental", prefix: "+", suffix: " ANOS" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Base white layer */}
        <div className="w-full h-full bg-white"></div>
        
        {/* Background image with horizontal gradient mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg')",
            maskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9))",
            WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9))"
          }}
        ></div>
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-earth-800 bg-eco-200/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm">
            NOSSA HISTÓRIA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-earth-800 drop-shadow-md">
            SOMOS O PRINCIPAL PARCEIRO EM <br />
            CONSULTORIA AMBIENTAL NO BRASIL
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-right">
            <p className="text-earth-800 leading-relaxed text-lg font-medium">
              Fundada em 2015 por engenheiros visionários, a Eco-Lógica
              Brasil se destaca pela excelência em estudos ambientais e
              na produção e plantio de mudas em larga escala. Com
              capacidade técnica para produzir e plantar mais de 500 mil
              mudas por ano, nossa empresa é sinônimo de excelência e
              inovação.
            </p>
            
            <p className="text-earth-800 leading-relaxed text-lg font-medium">
              Além disso, a Eco-Lógica Brasil adota práticas sustentáveis
              e tecnologias avançadas em todas as suas operações,
              reforçando o compromisso com a preservação ambiental e o
              desenvolvimento sustentável.
            </p>
            
            <p className="text-earth-800 leading-relaxed text-lg font-medium">
              Com uma equipe altamente qualificada e motivada, a empresa busca constantemente soluções inovadoras para contribuir com a recuperação de ecossistemas e a melhoria da
              qualidade de vida das comunidades onde atua.
            </p>
            
            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-eco-400 text-earth-800 rounded-full font-semibold hover:bg-eco-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                CONHEÇA A EMPRESA
              </a>
            </div>
          </div>

          <div className="animate-fade-in-left">
            <div ref={statisticsRef} className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item opacity-0 p-6 rounded-lg transition-all duration-500 ease-out bg-white/80 backdrop-blur-sm border border-eco-300/30 shadow-md"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-3 rounded-full bg-eco-100/70 shadow-inner">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-earth-800 mb-2 relative">
                      <div className="flex items-center justify-center">
                        <span>{stat.prefix}</span>
                        <div className="flex overflow-hidden h-10">
                          {animatedValues[index].digits.map((digitData, digitIndex) => {
                            if (!digitData.includes('|')) {
                              return (
                                <span key={digitIndex} className="tabular-nums">
                                  {digitData}
                                </span>
                              );
                            }
                            
                            const [prev, current, next] = digitData.split('|');
                            
                            return (
                              <div key={digitIndex} className="relative w-[1ch] h-10 inline-flex flex-col items-center overflow-hidden">
                                <div className="absolute transition-transform duration-200 flex flex-col items-center" 
                                     style={{
                                       transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
                                     }}>
                                  <span className="h-10 flex items-center justify-center tabular-nums">{prev}</span>
                                  <span className="h-10 flex items-center justify-center tabular-nums">{current}</span>
                                  <span className="h-10 flex items-center justify-center tabular-nums">{next}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        {stat.suffix && <span>{stat.suffix}</span>}
                      </div>
                    </div>
                    <div className="text-sm text-earth-700 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 backdrop-blur-sm rounded-lg opacity-0 stat-item bg-white/80 border border-eco-300/30 shadow-md">
              <div className="flex items-center justify-center space-x-4">
                <CheckCircle2 className="h-6 w-6 text-eco-600" />
                <span className="text-earth-800 italic font-medium">
                  "Comprometidos com a sustentabilidade e excelência em cada projeto ambiental."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
