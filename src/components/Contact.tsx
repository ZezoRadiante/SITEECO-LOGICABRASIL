import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-100/30 to-eco-700/10">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-sky-100/40 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-eco-700 bg-eco-100 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1 text-eco-700">
            Vamos Conversar
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 opacity-0 animate-fade-in-delay-2">
            Estamos à disposição para discutir suas necessidades e como podemos ajudar a construir um futuro mais sustentável para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-eco-700">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-eco-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground/80">Rua Eco 123, São Paulo, SP 01234-567</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-eco-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground/80">(11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-eco-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground/80">info@ecologicabrasil.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-eco-700">Formulário de Contato</h3>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Seu Nome" className="rounded-md" />
              </div>
              <div>
                <Input type="email" placeholder="Seu Email" className="rounded-md" />
              </div>
              <div>
                <Textarea placeholder="Sua Mensagem" className="rounded-md" rows={4} />
              </div>
              <div>
                <Button className="w-full rounded-full eco-btn flex items-center justify-center group">
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-700/30 to-transparent"></div>
    </section>
  );
};

export default Contact;
