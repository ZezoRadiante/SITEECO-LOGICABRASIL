
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, forneça um email válido.",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      form.reset();
    }, 1500);
  }
  
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

        <div className="grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-sky-100 hover:bg-white/90 transition-all duration-500">
          {/* Contact Information */}
          <div className="space-y-7 bg-gradient-to-br from-eco-50 to-eco-100/40 p-8 rounded-lg border border-eco-200/50 shadow-inner">
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-eco-200 pb-2 inline-block text-sky-700">
              Informações de Contato
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <div className="bg-eco-200/80 p-3 rounded-full mr-4 group-hover:bg-eco-300 transition-colors shadow-sm group-hover:shadow-md">
                  <MapPin className="text-earth-700 flex-shrink-0 w-5 h-5" />
                </div>
                <div className="text-foreground/80 pt-1">
                  <span className="font-medium text-earth-800 block">Endereço</span>
                  Rua Eco 123, São Paulo, SP 01234-567
                </div>
              </li>
              
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <div className="bg-eco-200/80 p-3 rounded-full mr-4 group-hover:bg-eco-300 transition-colors shadow-sm group-hover:shadow-md">
                  <Phone className="text-earth-700 flex-shrink-0 w-5 h-5" />
                </div>
                <div className="text-foreground/80 pt-1">
                  <span className="font-medium text-earth-800 block">Telefone</span>
                  (11) 3456-7890
                </div>
              </li>
              
              <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <div className="bg-eco-200/80 p-3 rounded-full mr-4 group-hover:bg-eco-300 transition-colors shadow-sm group-hover:shadow-md">
                  <Mail className="text-earth-700 flex-shrink-0 w-5 h-5" />
                </div>
                <div className="text-foreground/80 pt-1">
                  <span className="font-medium text-earth-800 block">Email</span>
                  info@ecologicabrasil.com
                </div>
              </li>
            </ul>
            
            <div className="pt-6 mt-6 border-t border-eco-200/50">
              <h4 className="font-medium text-earth-800 mb-3">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4 justify-center">
                {/* Social Media Icons */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-eco-200/80 text-earth-700 hover:bg-eco-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-eco-200/80 text-earth-700 hover:bg-eco-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-eco-200/80 text-earth-700 hover:bg-eco-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-sky-700 border-b-2 border-eco-200 pb-2 inline-block">Formulário de Contato</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input 
                            placeholder="Seu Nome" 
                            className="pl-10 py-6 rounded-md border-eco-200 focus:border-eco-400 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm focus:shadow-md"
                            {...field}
                          />
                        </FormControl>
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-700/70" size={18} />
                      </div>
                      <FormMessage className="text-sm text-red-500 mt-1 ml-2" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Seu Email" 
                            className="pl-10 py-6 rounded-md border-eco-200 focus:border-eco-400 bg-white/70 hover:bg-white transition-all duration-300 shadow-sm focus:shadow-md"
                            {...field}
                          />
                        </FormControl>
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-700/70" size={18} />
                      </div>
                      <FormMessage className="text-sm text-red-500 mt-1 ml-2" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Textarea 
                            placeholder="Sua Mensagem" 
                            className="pl-10 pt-6 rounded-md border-eco-200 focus:border-eco-400 min-h-[120px] bg-white/70 hover:bg-white transition-all duration-300 shadow-sm focus:shadow-md"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <MessageSquare className="absolute left-3 top-6 text-eco-700/70" size={18} />
                      </div>
                      <FormMessage className="text-sm text-red-500 mt-1 ml-2" />
                    </FormItem>
                  )}
                />
                
                <div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gradient-to-r from-eco-600 to-eco-400 text-white hover:from-eco-500 hover:to-eco-300 py-6 flex items-center justify-center group shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition - Enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-eco-700/40 to-transparent"></div>
    </section>;
};
export default Contact;
