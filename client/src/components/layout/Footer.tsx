import React from 'react';
import { Link } from 'wouter';
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  TimeIcon
} from '@/components/ui/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-xl">SF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sinafite-DF</h3>
                <p className="text-xs text-neutral-300 leading-tight">Sindicato dos Auditores Fiscais do DF</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6">
              Defendendo os direitos e interesses dos integrantes da Carreira Auditoria Fiscal do Tesouro do DF desde 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">
                <FacebookIcon className="text-xl" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">
                <InstagramIcon className="text-xl" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">
                <TwitterIcon className="text-xl" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200">
                <YoutubeIcon className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/member-area" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Área do Filiado
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#juridico" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Assessoria Jurídica
                </Link>
              </li>
              <li>
                <Link href="/services#convenios" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Convênios
                </Link>
              </li>
              <li>
                <Link href="/services#capacitacao" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Capacitação
                </Link>
              </li>
              <li>
                <Link href="/services#eventos" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/services#representacao" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Representação Política
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPinIcon className="text-neutral-300 text-xl mr-3" />
                <span className="text-neutral-300">SBS Quadra 2, Bloco E, Ed. Prime, Salas 1401-1409, Brasília/DF</span>
              </li>
              <li className="flex">
                <PhoneIcon className="text-neutral-300 text-xl mr-3" />
                <span className="text-neutral-300">(61) 3321-8482</span>
              </li>
              <li className="flex">
                <MailIcon className="text-neutral-300 text-xl mr-3" />
                <span className="text-neutral-300">contato@sinafite-df.org.br</span>
              </li>
              <li className="flex">
                <TimeIcon className="text-neutral-300 text-xl mr-3" />
                <span className="text-neutral-300">Segunda a sexta, das 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-700 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sinafite-DF. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <Link href="/about" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Sobre Nós
            </Link>
            <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Contato
            </Link>
            <Link href="/member-area" className="text-neutral-400 hover:text-white transition-colors duration-200">
              Área do Filiado
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
