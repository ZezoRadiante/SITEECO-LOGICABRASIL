
import React from 'react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section id="banner" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-earth-800 mb-12">
          SOLUÇÕES PARA CONSTRUIR UM<br />
          FUTURO MAIS SUSTENTÁVEL
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Mission Box */}
          <div className="bg-eco-50 rounded-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-sky-300 rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#3B82F6" fill="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-earth-800 mb-4 text-center">MISSÃO</h3>
            <p className="text-sm text-earth-700 text-center mb-6">
              Contribuir efetivamente para o desenvolvimento sustentável, oferecendo soluções integradas e inovadoras em gestão ambiental.
            </p>
          </div>
          
          {/* Vision Box */}
          <div className="bg-eco-50 rounded-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-sky-300 rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#3B82F6" fill="white" strokeWidth="2"/>
                <path d="M12 16V16.01M12 8V12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-earth-800 mb-4 text-center">VISÃO</h3>
            <p className="text-sm text-earth-700 text-center mb-6">
              Ser referência em consultoria ambiental, reconhecida pela excelência em serviços e compromisso com a proteção do meio ambiente.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="green" 
            className="rounded-full bg-eco-900 hover:bg-eco-800 text-white px-8 py-4"
          >
            FALE COM NOSSOS CONSULTORES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
