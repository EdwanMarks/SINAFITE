import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Service } from '@shared/schema';
import { cn } from '@/lib/utils';

const Features: React.FC = () => {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });
  
  const getIconComponent = (iconName: string) => {
    // SVG icons based on the iconName
    switch (iconName) {
      case 'ri-scales-line':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case 'ri-government-line':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case 'ri-book-open-line':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-3 py-1 rounded-full inline-block mb-3">
            Nossos Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            O que oferecemos aos filiados
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Conheça os principais benefícios e serviços disponíveis para os integrantes da carreira de Auditoria Fiscal do DF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-8 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-neutral-200 rounded-full"></div>
                  <div className="h-5 bg-neutral-200 rounded ml-4 w-1/2"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-200 rounded w-full"></div>
                  <div className="h-4 bg-neutral-200 rounded w-full"></div>
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                </div>
              </div>
            ))
          ) : (
            services?.map((service, index) => (
              <div 
                key={service.id} 
                className={cn(
                  "group bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-all duration-300 hover:border-primary/30 p-8 relative overflow-hidden",
                  index % 3 === 0 && "transform hover:-translate-y-1",
                  index % 3 === 1 && "transform hover:scale-[1.02]",
                  index % 3 === 2 && "transform hover:rotate-1",
                  !service.isActive && "opacity-60"
                )}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-primary-light/20 flex items-center justify-center text-primary ring-4 ring-white group-hover:ring-primary/10 transition-all duration-300">
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 ml-5 pt-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 relative z-10 mb-5">
                  {service.description}
                </p>
                
                <div className="relative z-10 mt-4 text-primary-dark font-medium">
                  <Link href={`/services#${service.id}`}>
                    <span className="inline-flex items-center text-sm hover:underline group-hover:translate-x-0.5 transition-transform duration-300">
                      Saiba mais
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="secondary" className="shadow-sm group">
            <Link href="/services">
              <span className="flex items-center">
                Ver todos os benefícios e serviços
                <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
