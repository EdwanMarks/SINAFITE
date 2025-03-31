import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Service } from '@shared/schema';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ScalesIcon, 
  GovernmentIcon, 
  BookOpenIcon,
  MapPinIcon, 
  PhoneIcon, 
  MailIcon,
  CalendarIcon,
  ComputerIcon,
  ArrowRightIcon,
  CheckIcon
} from '@/components/ui/icons';

const Services: React.FC = () => {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ri-scales-line':
        return <ScalesIcon className="text-primary text-2xl" />;
      case 'ri-government-line':
        return <GovernmentIcon className="text-primary text-2xl" />;
      case 'ri-book-open-line':
        return <BookOpenIcon className="text-primary text-2xl" />;
      default:
        return <ScalesIcon className="text-primary text-2xl" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Serviços | Sinafite-DF</title>
        <meta name="description" content="Conheça os serviços oferecidos pelo Sinafite-DF aos auditores fiscais do Distrito Federal." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero section */}
          <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-40"></div>
              <div className="absolute inset-0 bg-primary/60"></div>
              
              {/* Decorative circles - reduzidos em tamanho e opacidade */}
              <div className="absolute -right-20 top-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute -left-20 bottom-10 w-64 h-64 bg-primary-dark/15 rounded-full blur-xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-10 md:mb-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
                    Nossos Serviços
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-neutral-100 max-w-3xl">
                    O Sinafite-DF oferece diversos serviços especializados para apoiar, defender e valorizar os auditores fiscais do Distrito Federal em sua vida profissional e pessoal.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#juridico" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                      Assessoria Jurídica
                    </a>
                    <a href="#convenios" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Convênios
                    </a>
                    <a href="#capacitacao" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Capacitação
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-52 h-52 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-primary-light/30 rounded-full blur-xl"></div>
                    <div className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-1">3+</div>
                        <div className="text-sm md:text-base font-medium">Áreas de Serviços</div>
                        <div className="w-12 h-1 bg-white mx-auto mt-2"></div>
                        <div className="text-xs mt-2 opacity-80">Exclusivo para filiados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services section */}
          <section className="py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-2">
                  <TabsTrigger value="all" className="px-4 py-2 min-w-[120px]">Todos os Serviços</TabsTrigger>
                  <TabsTrigger value="legal" id="juridico" className="px-4 py-2 min-w-[120px]">Jurídico</TabsTrigger>
                  <TabsTrigger value="agreements" id="convenios" className="px-4 py-2 min-w-[120px]">Convênios</TabsTrigger>
                  <TabsTrigger value="training" id="capacitacao" className="px-4 py-2 min-w-[120px]">Capacitação</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6 sm:mt-8">
                  <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Conheça todos os nossos serviços</h2>
                    <p className="text-neutral-600">
                      O Sinafite-DF trabalha continuamente para expandir e aprimorar os serviços oferecidos, 
                      garantindo o melhor suporte possível aos auditores fiscais do Distrito Federal.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {isLoading ? (
                      // Loading skeleton
                      Array(6).fill(0).map((_, index) => (
                        <div key={index} className="bg-white rounded-xl border border-neutral-200 shadow-sm p-1">
                          <div className="animate-pulse bg-neutral-50 rounded-lg p-5 sm:p-6">
                            <div className="w-14 h-14 bg-neutral-200 rounded-full mx-auto mb-4"></div>
                            <div className="h-6 bg-neutral-200 rounded mb-3 w-2/3 mx-auto"></div>
                            <div className="h-4 bg-neutral-200 rounded mb-2 w-full"></div>
                            <div className="h-4 bg-neutral-200 rounded mb-2 w-full"></div>
                            <div className="h-4 bg-neutral-200 rounded w-3/4 mx-auto"></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      services?.map((service) => (
                        <div 
                          key={service.id}
                          className="group bg-white rounded-xl border border-neutral-200 shadow-sm p-1 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="bg-gradient-to-b from-neutral-50 to-white rounded-lg p-6 sm:p-7 relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute -right-6 -top-6 w-12 h-12 bg-primary/5 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute -left-6 -bottom-6 w-12 h-12 bg-primary/5 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative">
                              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/15">
                                <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                                  {getIconComponent(service.icon)}
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-neutral-800 mb-3 text-center">{service.title}</h3>
                              <p className="text-neutral-600 text-center">
                                {service.description}
                              </p>
                              
                              <div className="mt-5 pt-4 border-t border-neutral-100 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href="#" className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                                  Saiba mais
                                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Entre em contato para mais informações
                    </a>
                  </div>
                </TabsContent>
                
                <TabsContent value="legal" className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Assessoria Jurídica</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-base sm:text-lg mb-4 sm:mb-6">
                        O Sinafite-DF disponibiliza aos seus filiados uma equipe jurídica especializada em direito administrativo, trabalhista e previdenciário, oferecendo suporte completo para questões profissionais e pessoais.
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Serviços oferecidos:</h3>
                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Representação em processos administrativos disciplinares</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Ações judiciais de interesse coletivo da categoria</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Consultoria jurídica individual</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Acompanhamento de processos judiciais</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Elaboração de pareceres jurídicos</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <Card className="bg-neutral-50 border border-neutral-200">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-4 sm:mb-6">Horário de Atendimento Jurídico</h3>
                          <p className="text-sm sm:text-base mb-3 sm:mb-4">Nossa equipe jurídica está disponível para atendimento presencial ou online nos seguintes horários:</p>
                          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span><strong>Segunda a quinta:</strong> 9h às 18h</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span><strong>Sexta:</strong> 9h às 17h</span>
                            </li>
                          </ul>
                          <p className="text-sm sm:text-base mb-3 sm:mb-4">Para agendar uma consulta, entre em contato:</p>
                          <div className="flex items-center mb-2">
                            <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                            <span className="text-sm sm:text-base">(61) 3321-8482</span>
                          </div>
                          <div className="flex items-center">
                            <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                            <span className="text-sm sm:text-base">juridico@sinafite-df.org.br</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="agreements" className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Convênios</h2>
                  <p className="text-base sm:text-lg mb-6 sm:mb-8">
                    O Sinafite-DF mantém parcerias com diversas empresas e instituições para oferecer condições especiais e descontos exclusivos para seus filiados e dependentes.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="bg-neutral-50 border border-neutral-200">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Saúde e Bem-Estar</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                          <li>Planos de saúde com condições especiais</li>
                          <li>Clínicas médicas e odontológicas</li>
                          <li>Academias e estúdios de pilates</li>
                          <li>Farmácias</li>
                          <li>Óticas</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neutral-50 border border-neutral-200">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Educação</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                          <li>Universidades e faculdades</li>
                          <li>Escolas de idiomas</li>
                          <li>Cursos de especialização</li>
                          <li>Escolas técnicas</li>
                          <li>Livrarias</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neutral-50 border border-neutral-200">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Serviços</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                          <li>Seguros de vida e automóvel</li>
                          <li>Assistência jurídica</li>
                          <li>Agências de viagem</li>
                          <li>Hotéis e pousadas</li>
                          <li>Locadoras de veículos</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neutral-50 border border-neutral-200">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Lazer e Cultura</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                          <li>Cinemas e teatros</li>
                          <li>Clubes recreativos</li>
                          <li>Restaurantes</li>
                          <li>Parques temáticos</li>
                          <li>Eventos culturais</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neutral-50 border border-neutral-200">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Comércio</h3>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                          <li>Lojas de vestuário</li>
                          <li>Eletrodomésticos e eletrônicos</li>
                          <li>Móveis e decoração</li>
                          <li>Supermercados</li>
                          <li>Lojas de departamento</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-primary text-white">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Acesso exclusivo</h3>
                        <p className="text-sm sm:text-base mb-3 sm:mb-4">
                          Para consultar a lista completa de convênios e os benefícios exclusivos, acesse a Área do Filiado no site ou no aplicativo.
                        </p>
                        <a href="/member-area" className="inline-flex items-center text-sm sm:text-base text-white font-medium hover:underline">
                          Acessar área do filiado
                          <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="training" className="mt-6 sm:mt-8">
                  <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Capacitação Profissional</h2>
                    <p className="text-base sm:text-lg mb-4 text-neutral-600">
                      Investimos no aprimoramento técnico e no desenvolvimento profissional dos auditores fiscais através de diversos programas de qualificação e atualização.
                    </p>
                    <div className="flex justify-center">
                      <div className="h-1 w-24 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated stats section */}
                  <div className="relative mb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 via-transparent to-primary-light/5 -z-10"></div>
                    <div className="absolute -left-10 top-10 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10"></div>
                    <div className="absolute -right-10 bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4 transition-transform duration-300 hover:transform hover:scale-105">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
                          <div className="text-sm sm:text-base text-neutral-600">Cursos técnicos por ano</div>
                        </div>
                        <div className="p-4 transition-transform duration-300 hover:transform hover:scale-105">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">4</div>
                          <div className="text-sm sm:text-base text-neutral-600">Seminários anuais</div>
                        </div>
                        <div className="p-4 transition-transform duration-300 hover:transform hover:scale-105">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
                          <div className="text-sm sm:text-base text-neutral-600">Instituições parceiras</div>
                        </div>
                        <div className="p-4 transition-transform duration-300 hover:transform hover:scale-105">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                          <div className="text-sm sm:text-base text-neutral-600">Profissionais capacitados</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-neutral-100">Programas de capacitação</h3>
                        <ul className="space-y-4 sm:space-y-5">
                          <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-base sm:text-lg font-semibold block mb-1">Cursos técnicos</span>
                              <p className="text-sm text-neutral-600">Aprofundamento em legislação tributária, auditoria fiscal, contabilidade e áreas correlatas com professores especialistas.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-base sm:text-lg font-semibold block mb-1">Seminários e congressos</span>
                              <p className="text-sm text-neutral-600">Eventos com especialistas nacionais e internacionais sobre temas relevantes para a categoria fiscal.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-base sm:text-lg font-semibold block mb-1">Grupos de estudo</span>
                              <p className="text-sm text-neutral-600">Encontros periódicos para discutir novidades na legislação e jurisprudência tributária com mediação especializada.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-base sm:text-lg font-semibold block mb-1">Parcerias educacionais</span>
                              <p className="text-sm text-neutral-600">Descontos exclusivos em cursos de pós-graduação, MBA e especializações em instituições renomadas em todo o país.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-neutral-100">Próximos eventos</h3>
                        <div className="space-y-4">
                          <div className="group relative bg-gradient-to-r from-neutral-50 to-white rounded-lg p-4 border border-neutral-100 hover:border-primary/30 transition-all duration-200 hover:shadow-sm">
                            <div className="absolute right-3 top-3 bg-primary/10 text-primary text-xs font-bold py-1 px-2 rounded">Novo</div>
                            <div className="flex items-center mb-2">
                              <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                              <span className="text-sm text-neutral-500">22/08/2023</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">Seminário sobre Reforma Tributária</h4>
                            <p className="text-sm text-neutral-600 mb-3">Discussão sobre os impactos da reforma tributária na atuação dos auditores fiscais do DF com especialistas do setor público e privado.</p>
                            <div className="flex items-center justify-between pt-2 border-t border-dashed border-neutral-200">
                              <div className="flex items-center">
                                <MapPinIcon className="h-4 w-4 text-neutral-500 mr-1" />
                                <span className="text-xs text-neutral-500">Auditório Sinafite</span>
                              </div>
                              <a href="#" className="text-primary text-sm font-medium hover:underline">Inscrever-se</a>
                            </div>
                          </div>
                          
                          <div className="group relative bg-gradient-to-r from-neutral-50 to-white rounded-lg p-4 border border-neutral-100 hover:border-primary/30 transition-all duration-200 hover:shadow-sm">
                            <div className="flex items-center mb-2">
                              <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                              <span className="text-sm text-neutral-500">15/09/2023</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">Curso de Atualização em ICMS</h4>
                            <p className="text-sm text-neutral-600 mb-3">Capacitação sobre as recentes alterações na legislação do ICMS no Distrito Federal e seus impactos na fiscalização.</p>
                            <div className="flex items-center justify-between pt-2 border-t border-dashed border-neutral-200">
                              <div className="flex items-center">
                                <ComputerIcon className="h-4 w-4 text-neutral-500 mr-1" />
                                <span className="text-xs text-neutral-500">Online</span>
                              </div>
                              <a href="#" className="text-primary text-sm font-medium hover:underline">Inscrever-se</a>
                            </div>
                          </div>
                          
                          <div className="group relative bg-gradient-to-r from-neutral-50 to-white rounded-lg p-4 border border-neutral-100 hover:border-primary/30 transition-all duration-200 hover:shadow-sm">
                            <div className="flex items-center mb-2">
                              <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                              <span className="text-sm text-neutral-500">10/10/2023</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-200">Workshop de Tecnologia na Fiscalização</h4>
                            <p className="text-sm text-neutral-600 mb-3">Apresentação de novas ferramentas e tecnologias para otimizar o trabalho de fiscalização tributária e combate à sonegação.</p>
                            <div className="flex items-center justify-between pt-2 border-t border-dashed border-neutral-200">
                              <div className="flex items-center">
                                <MapPinIcon className="h-4 w-4 text-neutral-500 mr-1" />
                                <span className="text-xs text-neutral-500">Centro de Convenções</span>
                              </div>
                              <a href="#" className="text-primary text-sm font-medium hover:underline">Inscrever-se</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark z-0 opacity-95"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-3 z-0">
                      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <g opacity="0.2">
                          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" />
                          <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="1" />
                          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="1" />
                        </g>
                      </svg>
                    </div>
                    
                    <div className="relative z-10 p-8 sm:p-10 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-8">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Programa de Educação Continuada</h3>
                          <p className="text-white/90 text-base mb-6">
                            O Sinafite-DF oferece um programa completo de educação continuada para os auditores fiscais, com atividades formativas regulares e certificação das horas de capacitação reconhecidas pelos órgãos competentes.
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform transition-transform duration-300 hover:scale-105">
                              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 mx-auto">
                                <BookOpenIcon className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="text-white text-center font-semibold text-base mb-1">Cursos Online</h4>
                              <p className="text-white/90 text-center text-sm">Plataforma EAD com diversos cursos disponíveis 24/7</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform transition-transform duration-300 hover:scale-105">
                              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 mx-auto">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <h4 className="text-white text-center font-semibold text-base mb-1">Webinars</h4>
                              <p className="text-white/90 text-center text-sm">Encontros virtuais com especialistas do setor</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transform transition-transform duration-300 hover:scale-105">
                              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3 mx-auto">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <h4 className="text-white text-center font-semibold text-base mb-1">Certificação</h4>
                              <p className="text-white/90 text-center text-sm">Documentação oficial de horas de capacitação</p>
                            </div>
                          </div>
                          
                          <a href="/member-area" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-white/90 transition-colors">
                            Acessar plataforma de cursos
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                          </a>
                        </div>
                        
                        <div className="md:col-span-4 flex items-center justify-center">
                          <div className="bg-primary-dark/70 rounded-xl border border-white/20 p-5 text-center max-w-xs transform transition-transform duration-300 hover:scale-105">
                            <div className="bg-primary-dark/70 rounded-lg p-4 mb-4">
                              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">150h</div>
                              <div className="text-white">de capacitação anual</div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <CheckIcon className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                                <span className="text-white text-sm sm:text-base">Certificados reconhecidos</span>
                              </div>
                              <div className="flex items-center">
                                <CheckIcon className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                                <span className="text-white text-sm sm:text-base">Progressão na carreira</span>
                              </div>
                              <div className="flex items-center">
                                <CheckIcon className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                                <span className="text-white text-sm sm:text-base">Material didático exclusivo</span>
                              </div>
                              <div className="flex items-center">
                                <CheckIcon className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                                <span className="text-white text-sm sm:text-base">Suporte acadêmico</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
