import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
const Contact = () => {
  return <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-sky-100/20 to-eco-100/30">
      {/* Top gradient transition - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sky-50/50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-[#000070]/0">
        <div className="text-center mb-16">
          <span className="inline-block text-eco-700 bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in shadow-sm">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-delay-1 text-sky-700">
            Vamos Conversar
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-eco-700 to-eco-400 mx-auto rounded-full mb-6"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Estamos à disposição para discutir suas necessidades e como podemos ajudar a construir um futuro mais sustentável para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-md border border-sky-100/50">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-eco-200 pb-2 inline-block text-sky-700">Informações de Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors">
                  <MapPin className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1">Rua Eco 123, São Paulo, SP 01234-567</span>
              </li>
              <li className="flex items-start group">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors">
                  <Phone className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1">(11) 3456-7890</span>
              </li>
              <li className="flex items-start group">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors">
                  <Mail className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1">info@ecologicabrasil.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-eco-700 border-b-2 border-eco-200 pb-2 inline-block">Formulário de Contato</h3>
            <form className="space-y-5">
              <div>
                <Input type="text" placeholder="Seu Nome" className="rounded-md border-eco-200 focus:border-eco-400 py-6" />
              </div>
              <div>
                <Input type="email" placeholder="Seu Email" className="rounded-md border-eco-200 focus:border-eco-400 py-6" />
              </div>
              <div>
                <Textarea placeholder="Sua Mensagem" className="rounded-md border-eco-200 focus:border-eco-400 min-h-[120px]" rows={4} />
              </div>
              <div>
                <Button className="w-full rounded-full bg-gradient-to-r from-eco-600 to-eco-400 text-white hover:from-eco-500 hover:to-eco-300 py-6 flex items-center justify-center group shadow-md hover:shadow-lg">
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition - Enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-700/40 to-transparent"></div>
    </section>;
};
export default Contact;