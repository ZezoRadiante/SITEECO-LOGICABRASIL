
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-6 text-center max-w-3xl mx-auto opacity-0 animate-fade-in-delay-2">
      <div className="space-y-4 text-lg glass p-6 rounded-xl shadow-lg">
        <p className="font-medium text-xl text-earth-800">
          Fundada em 2010, a Eco-lógica Brasil nasceu da paixão de um grupo de ambientalistas 
          determinados a fazer a diferença no cenário de conservação ambiental brasileiro.
        </p>
        
        <p className="text-earth-700">
          Nossa missão é promover soluções sustentáveis que harmonizem o desenvolvimento 
          econômico com a preservação ambiental, criando um legado positivo para as 
          futuras gerações.
        </p>
        
        <p className="text-earth-700">
          Com uma equipe multidisciplinar de especialistas em biologia, engenharia ambiental, 
          gestão de recursos naturais e educação, oferecemos serviços abrangentes que 
          atendem às necessidades específicas de cada cliente e comunidade.
        </p>
      </div>
      
      <div className="pt-4">
        <Button
          variant="outline"
          className="rounded-full border-sky-300 text-sky-700 hover:bg-sky-50 group glass-eco"
          asChild
        >
          <a href="#contact">
            Fale Conosco
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};
