import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-600 text-background/90 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 text-background font-medium mb-6">
              <Logo size={24} className="text-white" />
              <span className="text-xl font-semibold tracking-tight">Eco-logica Brasil</span>
            </div>
            <p className="text-background/70 mb-6">
              Fornecendo soluções ambientais sustentáveis com integridade e expertise para um amanhã mais verde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Consultoria Ambiental
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Gestão de Resíduos
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Educação Ambiental
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Planejamento de Sustentabilidade
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-background/70 hover:text-white transition-colors duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors duration-300">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-white transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-white mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">Rua Eco 123, São Paulo, SP 01234-567</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-white mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">(11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-white mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/70">info@ecologicabrasil.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © {currentYear} Eco-logica Brasil. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300 text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/70 hover:text-white transition-colors duration-300 text-sm">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
