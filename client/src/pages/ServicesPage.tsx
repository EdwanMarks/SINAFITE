import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Service } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Serviços | Sinafite-DF";
    
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Nossos Serviços</h1>
            <p className="text-neutral-100 max-w-3xl">
              O SINAFITE-DF oferece diversos serviços e benefícios exclusivos para seus associados,
              garantindo suporte em diferentes aspectos da carreira e vida pessoal.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6 text-center">
                Serviços Disponíveis para Associados
              </h2>
              
              {isLoading ? (
                <div className="space-y-8">
                  {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg p-6">
                      <div className="flex items-start">
                        <Skeleton className="h-16 w-16 rounded-full mr-6" />
                        <div className="flex-1">
                          <Skeleton className="h-7 w-48 mb-3" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {services?.map((service) => (
                    <div 
                      key={service.id} 
                      id={service.title.toLowerCase().replace(/\s+/g, '-')}
                      className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition"
                    >
                      <div className="flex flex-col sm:flex-row items-start">
                        <div className="bg-[#1A3A6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                          <i className={`fas ${service.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold text-xl mb-3 text-neutral-800">
                            {service.title}
                          </h3>
                          <div className="prose prose-lg max-w-none text-neutral-600">
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-16">
                <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6 text-center">
                  Informações Adicionais
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="font-montserrat font-semibold text-xl mb-4" id="juridico">Assessoria Jurídica</h3>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Nossa assessoria jurídica especializada atende os filiados em questões relacionadas a:
                      </p>
                      <ul>
                        <li>Direitos funcionais</li>
                        <li>Ações coletivas</li>
                        <li>Defesa em processos administrativos</li>
                        <li>Orientação em matéria previdenciária</li>
                        <li>Consultoria em questões tributárias</li>
                      </ul>
                      <p>
                        O atendimento é realizado mediante agendamento prévio na sede do sindicato ou de forma online.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="font-montserrat font-semibold text-xl mb-4" id="convenios">Convênios</h3>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        O SINAFITE-DF mantém parcerias com diversas empresas e instituições, proporcionando descontos e condições especiais para os filiados:
                      </p>
                      <ul>
                        <li>Planos de saúde e odontológicos</li>
                        <li>Faculdades e cursos de pós-graduação</li>
                        <li>Academias e centros esportivos</li>
                        <li>Hotéis e pousadas</li>
                        <li>Livrarias e cursos de idiomas</li>
                      </ul>
                      <p>
                        A lista completa de convênios está disponível na área do sindicalizado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="font-montserrat font-semibold text-xl mb-4" id="beneficios">Benefícios</h3>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Além dos serviços e convênios, os filiados ao SINAFITE-DF contam com diversos benefícios exclusivos:
                      </p>
                      <ul>
                        <li>Seguro de vida em grupo</li>
                        <li>Auxílio funeral</li>
                        <li>Clube de vantagens com descontos em estabelecimentos parceiros</li>
                        <li>Acesso à biblioteca especializada em direito tributário e fiscal</li>
                        <li>Descontos em eventos e seminários promovidos pelo sindicato</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="font-montserrat font-semibold text-xl mb-4" id="documentos">Documentos</h3>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        O SINAFITE-DF disponibiliza diversos documentos e materiais de apoio para seus filiados:
                      </p>
                      <ul>
                        <li>Legislação tributária atualizada</li>
                        <li>Modelos de documentos e petições</li>
                        <li>Estudos técnicos sobre temas fiscais</li>
                        <li>Boletins informativos</li>
                        <li>Cartilhas de orientação sobre direitos e benefícios</li>
                      </ul>
                      <p>
                        Para acessar estes documentos, faça login na área restrita do sindicalizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
