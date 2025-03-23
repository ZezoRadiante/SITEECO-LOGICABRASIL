
import React from 'react';
import { Seedling, Recycle, Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 opacity-0 border-l-4 border-eco-600/50 hover:border-eco-600",
        index === 0 ? "animate-fade-in" : 
        index === 1 ? "animate-fade-in-delay-1" : 
        "animate-fade-in-delay-2"
      )}
    >
      <div className="w-16 h-16 rounded-full bg-eco-100 flex items-center justify-center mb-6 shadow-inner shadow-eco-200">
        <div className="text-eco-700">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-eco-800">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Consultoria Ambiental",
      description: "Avaliações abrangentes e soluções personalizadas para garantir conformidade regulatória enquanto avançamos nas metas de sustentabilidade para sua organização.",
      icon: <Seedling size={32} />
    },
    {
      title: "Gestão de Resíduos",
      description: "Planejamento estratégico e implementação de sistemas eficientes de redução de resíduos projetados para minimizar o impacto ambiental e maximizar a recuperação de recursos.",
      icon: <Recycle size={32} />
    },
    {
      title: "Educação Ambiental",
      description: "Programas e workshops envolventes que cultivam a conscientização ambiental e promovem práticas sustentáveis dentro de comunidades e organizações.",
      icon: <Sprout size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-eco-50/30 to-background">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d2ed2b6b-6558-4a93-8c71-95038edaa049.png')] opacity-5 bg-repeat"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-eco-700 bg-eco-100 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Nossa Especialidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1 text-eco-800">
            Nossos Serviços Profissionais
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 opacity-0 animate-fade-in-delay-2">
            Oferecemos soluções ambientais especializadas e adaptadas às suas necessidades específicas, 
            com foco em práticas sustentáveis e responsabilidade ecológica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Nature-inspired decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-eco-50/20 to-transparent"></div>
    </section>
  );
};

export default Services;
