import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default"
      });

      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  return <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-sky-100/20 to-eco-100/30 transition-all duration-1000 ease-in-out" data-section="contact">
      {/* Top gradient transition - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-sky-50/50 to-transparent z-10 transition-all duration-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-[#000070]/0">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-eco-200/70 text-sky-700">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-700 transition-all duration-500 hover:text-sky-600">
            Vamos Conversar
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-eco-700 to-eco-400 mx-auto rounded-full mb-6 transition-all duration-500 hover:w-32"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Estamos à disposição para discutir suas necessidades e como podemos ajudar a construir um futuro mais sustentável para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-sky-100 transition-all duration-500 hover:shadow-xl hover:bg-white/90 animate-on-scroll transform translate-y-0">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-eco-200 pb-2 inline-block text-sky-700 transition-colors duration-300 hover:text-sky-600 hover:border-eco-300">
              Informações de Contato
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group transition-transform duration-500 hover:-translate-y-1">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <MapPin className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1 group-hover:text-foreground transition-colors duration-300">
                  Rua Eco 123, São Paulo, SP 01234-567
                </span>
              </li>
              <li className="flex items-start group transition-transform duration-500 hover:-translate-y-1">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <Phone className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1 group-hover:text-foreground transition-colors duration-300">
                  (11) 3456-7890
                </span>
              </li>
              <li className="flex items-start group transition-transform duration-500 hover:-translate-y-1">
                <div className="bg-eco-100 p-3 rounded-full mr-4 group-hover:bg-eco-200 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <Mail className="text-eco-700 flex-shrink-0 w-5 h-5" />
                </div>
                <span className="text-foreground/80 pt-1 group-hover:text-foreground transition-colors duration-300">
                  info@ecologicabrasil.com
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-sky-700 border-b-2 border-eco-200 pb-2 inline-block transition-colors duration-300 hover:text-sky-600 hover:border-eco-300">
              Formulário de Contato
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <Input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Seu Nome" className="rounded-md border-eco-200 focus:border-eco-400 py-6 shadow-sm focus:shadow-md transition-shadow duration-300" required />
              </div>
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <Input type="email" name="email" value={formState.email} onChange={handleInputChange} placeholder="Seu Email" className="rounded-md border-eco-200 focus:border-eco-400 py-6 shadow-sm focus:shadow-md transition-shadow duration-300" required />
              </div>
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <Textarea name="message" value={formState.message} onChange={handleInputChange} placeholder="Sua Mensagem" className="rounded-md border-eco-200 focus:border-eco-400 min-h-[120px] shadow-sm focus:shadow-md transition-shadow duration-300" rows={4} required />
              </div>
              <div>
                <Button type="submit" disabled={isSubmitting || isSuccess} className="w-full rounded-full bg-gradient-to-r from-eco-600 to-eco-400 text-white hover:from-eco-500 hover:to-eco-300 py-6 flex items-center justify-center group shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 disabled:opacity-80">
                  {isSubmitting ? "Enviando..." : isSuccess ? <>
                      Mensagem Enviada
                      <CheckCircle className="ml-2 w-4 h-4" />
                    </> : <>
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition - Enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-700/30 to-transparent transition-all duration-700"></div>
    </section>;
};
export default Contact;