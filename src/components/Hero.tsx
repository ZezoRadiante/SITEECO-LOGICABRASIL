
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-eco-50 pt-14">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-eco-900 mb-4">
            Promovendo um <br />
            <span className="text-eco-900">Futuro mais Sustentável</span>
          </h1>
          
          <p className="text-base text-earth-800 mb-8 leading-relaxed">
            A Eco-logica Brasil está comprometida com o futuro do nosso planeta. Trabalhamos para desenvolver soluções que alinham crescimento econômico com responsabilidade ambiental.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              variant="green" 
              className="rounded-full bg-eco-900 hover:bg-eco-800 text-white px-6 py-5"
            >
              Conheça-nos Melhor
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full mt-6">
        <img 
          src="/lovable-uploads/2c958347-a96c-4881-b071-2f20b42301b8.png" 
          alt="Criança com capacete segurando uma planta" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-eco-900">+100.000</p>
              <p className="text-sm text-earth-700">Árvores Plantadas</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-eco-900">+100.000</p>
              <p className="text-sm text-earth-700">Árvores Plantadas</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-eco-900">+500</p>
              <p className="text-sm text-earth-700">Áreas recuperadas</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-eco-900">+10 Anos</p>
              <p className="text-sm text-earth-700">De experiência</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-eco-900 text-eco-900 hover:bg-eco-900 hover:text-white px-6 py-3"
            >
              Conheça o Impacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
