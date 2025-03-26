
import React, { useEffect, useRef } from 'react';

const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = bannerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="banner" 
      ref={bannerRef}
      className="py-8 bg-gradient-to-b from-white via-eco-50/30 to-eco-100/40 relative overflow-hidden transition-all duration-1000 ease-in-out"
    >
      {/* Enhanced top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 transition-opacity duration-700"></div>
      
      {/* Banner Content - Text Above */}
      <div className="container mx-auto relative z-20 mb-6 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-earth-800 leading-tight">
            Promovendo um <span className="text-[#71B707] italic transition-all duration-500 hover:text-eco-500">Futuro Verde</span> para as Novas Gerações
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full my-4 transition-all duration-500 hover:w-32"></div>
          
          <p className="text-base md:text-lg text-earth-600 leading-relaxed font-normal transition-all duration-500 hover:text-earth-800">
            Através de nossas iniciativas de educação ambiental e reflorestamento, 
            inspiramos crianças a se tornarem guardiões da natureza, criando um 
            impacto positivo que atravessa gerações.
          </p>
        </div>
      </div>
      
      {/* Full-width Banner Image - Focused on the child's helmet */}
      <div className="w-full relative overflow-hidden animate-on-scroll">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img 
            src="/lovable-uploads/becbdbe4-e862-4db5-bde6-5636d0c06f24.png" 
            alt="Criança com capacete branco segurando uma muda em um viveiro de plantas" 
            className="w-full h-full object-cover object-top transform hover:scale-[1.03] transition-transform duration-1000 filter hover:brightness-105"
          />
          
          {/* Subtle overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-eco-300/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
      
      {/* Enhanced bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-earth-100/60 to-transparent z-10 transition-opacity duration-700"></div>
    </section>
  );
};

export default Banner;
