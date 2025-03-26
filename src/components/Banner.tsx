
import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="py-16 md:py-20 bg-gradient-to-b from-white via-eco-50/30 to-eco-100/40 relative overflow-hidden">
      {/* Top gradient transition - enhanced */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto relative z-20">
        {/* Banner Content - Now with better padding and formatting */}
        <div className="w-full space-y-6 text-center px-4 md:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-800 leading-tight">
            Promovendo um <span className="text-[#71B707] italic">Futuro Verde</span> para as Novas Gerações
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full my-6"></div>
          
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Através de nossas iniciativas de educação ambiental e reflorestamento, 
            inspiramos crianças a se tornarem guardiões da natureza, criando um 
            impacto positivo que atravessa gerações.
          </p>
        </div>
      </div>
      
      {/* Banner Image - Using the new image with a gradient overlay */}
      <div className="w-full overflow-hidden shadow-lg relative z-10 border-y-4 border-white/50">
        <div className="relative">
          <img 
            src="/lovable-uploads/9d992bf4-113d-4908-ba4a-145e7f5f7519.png" 
            alt="Criança com capacete branco segurando uma muda" 
            className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eco-500/20 to-transparent mix-blend-overlay"></div>
        </div>
      </div>
      
      {/* Bottom gradient transition - enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-earth-100/60 to-transparent z-10"></div>
    </section>
  );
};

export default Banner;
