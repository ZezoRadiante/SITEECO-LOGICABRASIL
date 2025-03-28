
import React from 'react';
import ServiceDecorations from './services/ServiceDecorations';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="container relative px-4 mx-auto">
        <ServiceDecorations />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-earth-800 bg-gradient-to-r from-eco-500 to-eco-700 bg-clip-text text-transparent">Nossos Serviços</h2>
          <p className="text-earth-700 max-w-2xl mx-auto font-medium text-lg">
            Oferecemos soluções ambientais completas, desde consultoria até implementação de projetos sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Serviço 1 */}
          <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100">
            <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-800">Licenciamento Ambiental</h3>
            <p className="text-earth-700 mb-6">
              Facilitamos todo o processo de licenciamento ambiental para sua empresa, garantindo conformidade legal.
            </p>
            <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
              <a href="#contact">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Serviço 2 */}
          <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100">
            <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-800">Consultoria Ambiental</h3>
            <p className="text-earth-700 mb-6">
              Avaliamos seus processos e identificamos oportunidades para melhorar seu desempenho ambiental.
            </p>
            <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
              <a href="#contact">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Serviço 3 */}
          <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100">
            <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-800">Gestão de Resíduos</h3>
            <p className="text-earth-700 mb-6">
              Desenvolvemos e implementamos estratégias eficientes para gestão de resíduos industriais e comerciais.
            </p>
            <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
              <a href="#contact">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
