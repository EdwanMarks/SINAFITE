import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/lib/hooks';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-primary py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90"></div>
        <div className="absolute inset-0 bg-grid-white/5"></div>
        
        {/* Animated patterns */}
        <div className="absolute right-0 bottom-0">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true" className="opacity-10">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="white" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        
        {/* Floating blobs - reduced opacity and blur */}
        <div className="absolute -right-20 top-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -left-20 bottom-10 w-56 h-56 bg-primary-dark/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center gap-8">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4 animate-fadeIn">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Representação sindical ativa
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fadeSlideUp">
              <span className="block">Defendendo os</span>
              <span className="text-white">
                direitos dos Auditores Fiscais
              </span>
              <span className="block mt-2">do Distrito Federal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-4 leading-relaxed animate-fadeSlideUp animation-delay-200">
              Há mais de 25 anos representando e protegendo os interesses dos integrantes da Carreira de Auditoria Fiscal do Tesouro do DF, com foco na valorização profissional e eficiência fiscal.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeSlideUp animation-delay-300">
              <Link href="/about#join">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="flex items-center">
                    Filie-se agora
                    <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
              
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-all duration-300 group">
                  <span className="flex items-center">
                    Nossos serviços
                    <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
            
            {/* Statistics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-white">
              <div className="group">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold group-hover:text-primary-light transition-colors duration-300">+1500</span>
                  <span className="ml-1 text-white/70">filiados</span>
                </div>
                <div className="w-16 h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-300 mt-1"></div>
              </div>
              
              <div className="group">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold group-hover:text-primary-light transition-colors duration-300">25+</span>
                  <span className="ml-1 text-white/70">anos</span>
                </div>
                <div className="w-16 h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-300 mt-1"></div>
              </div>
              
              <div className="group">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold group-hover:text-primary-light transition-colors duration-300">100%</span>
                  <span className="ml-1 text-white/70">dedicação</span>
                </div>
                <div className="w-16 h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-300 mt-1"></div>
              </div>
            </div>
          </div>
          
          {/* Hero right side */}
          {!isMobile && (
            <div className="md:w-2/5 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-2xl -rotate-6 transform-gpu"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">Próxima Assembleia</h3>
                <p className="text-white/80 mb-4">Discussão sobre a nova proposta de reajuste salarial e benefícios para a categoria.</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm text-white/70">Data</span>
                    <span className="block text-white font-medium">15 de Abril, 2023</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm text-white/70">Local</span>
                    <span className="block text-white font-medium">Auditório da sede - Brasília, DF</span>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver detalhes
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <a href="#features" className="text-white/70 hover:text-white transition-colors duration-300">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
