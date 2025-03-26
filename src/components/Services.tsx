
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-earth-800 mb-10">
          Projetos em destaque
        </h2>
        
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/5b48fe05-0bbc-4168-b053-956b46e28792.jpg" 
              alt="Projeto em destaque" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <h3 className="text-white text-xl font-bold mb-2">Rio do Vento</h3>
              <p className="text-white text-sm">Complexo Eólico</p>
            </div>
          </div>
          
          {/* Project navigation dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-3 h-3 rounded-full bg-eco-900"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="rounded-full border-2 border-eco-900 text-eco-900 hover:bg-eco-900 hover:text-white px-8 py-4 mb-8"
          >
            VER MAIS PROJETOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
