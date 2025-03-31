import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Service } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesSection = () => {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-neutral-800 mb-4">Nossos Serviços</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">O SINAFITE-DF oferece diversos serviços e benefícios para seus associados, garantindo suporte em diferentes aspectos da carreira e vida pessoal.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6">
                <Skeleton className="h-14 w-14 rounded-full mb-4" />
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))
          ) : (
            services?.map((service) => (
              <div key={service.id} className="bg-neutral-50 rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-md">
                <div className="bg-[#1A3A6E] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-neutral-800">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link href={`/servicos#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#1A3A6E] hover:text-blue-800 font-medium flex items-center text-sm">
                  Saiba mais
                  <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
