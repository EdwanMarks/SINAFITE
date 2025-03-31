import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';
import { Page } from '@shared/schema';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  const { data: page, isLoading } = useQuery<Page>({
    queryKey: ['/api/pages/about'],
  });

  // O conteúdo da página está em formato Markdown, não JSON
  const pageContent = page ? page.content : null;

  return (
    <>
      <Helmet>
        <title>Sobre Nós | Sinafite-DF</title>
        <meta name="description" content="Conheça o Sinafite-DF, nossa história, missão, valores e diretoria." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero section */}
          <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-70"></div>
              <div className="absolute inset-0 bg-grid-white/10"></div>
            </div>
            
            <div className="absolute right-0 top-1/4 w-1/3 h-56 bg-primary-light blur-3xl rounded-full opacity-30 -z-10"></div>
            <div className="absolute left-0 bottom-1/4 w-1/4 h-32 bg-primary-dark blur-3xl rounded-full opacity-20 -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8 md:w-2/3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">Sobre o Sinafite-DF</h1>
                  <p className="mt-4 text-base sm:text-lg text-neutral-100 max-w-3xl">
                    Conheça nossa história, missão, valores e como trabalhamos para defender os interesses dos auditores fiscais do DF há mais de 30 anos.
                  </p>
                  <div className="mt-6 flex space-x-4 items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Fundado em 1995</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>+1500 associados</span>
                    </div>
                  </div>
                </div>
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-xl">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-2xl md:text-3xl">
                    SINAFITE-DF
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main content */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Tabs defaultValue="quem-somos" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="quem-somos">Quem Somos</TabsTrigger>
                  <TabsTrigger value="history">História</TabsTrigger>
                  <TabsTrigger value="board">Diretoria</TabsTrigger>
                  <TabsTrigger value="statute">Estatuto</TabsTrigger>
                </TabsList>
                
                <TabsContent value="quem-somos" className="mt-6">
                  {isLoading ? (
                    <div className="animate-pulse space-y-4">
                      <div className="h-6 bg-neutral-200 rounded w-1/4 mb-6"></div>
                      <div className="h-4 bg-neutral-200 rounded"></div>
                      <div className="h-4 bg-neutral-200 rounded"></div>
                      <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-3xl font-bold mb-8 text-center">Nossa Missão, Visão e Valores</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-primary/90 p-4 text-white">
                            <div className="flex items-center justify-center mb-2">
                              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 16L16 12L14 10L12 12L10 10L8 12L12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center">Missão</h3>
                          </div>
                          <div className="p-5">
                            <p className="text-neutral-700 text-center">Defender e valorizar os auditores fiscais do Distrito Federal, promovendo melhorias nas condições de trabalho e representando os interesses da categoria.</p>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-primary/90 p-4 text-white">
                            <div className="flex items-center justify-center mb-2">
                              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 11L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 11L22 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 11V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 18.25L12 22L15 18.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center">Visão</h3>
                          </div>
                          <div className="p-5">
                            <p className="text-neutral-700 text-center">Ser reconhecido como um sindicato de excelência, referência em representatividade e defesa dos direitos dos servidores públicos.</p>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-primary/90 p-4 text-white">
                            <div className="flex items-center justify-center mb-2">
                              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center">Valores</h3>
                          </div>
                          <div className="p-5">
                            <ul className="grid grid-cols-1 gap-2">
                              <li className="flex items-center text-neutral-700">
                                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Ética</span>
                              </li>
                              <li className="flex items-center text-neutral-700">
                                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Transparência</span>
                              </li>
                              <li className="flex items-center text-neutral-700">
                                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Comprometimento</span>
                              </li>
                              <li className="flex items-center text-neutral-700">
                                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Solidariedade</span>
                              </li>
                              <li className="flex items-center text-neutral-700">
                                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Eficiência</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">Representatividade e Atuação</h3>
                        <p className="mb-4">O Sinafite-DF representa os auditores fiscais do Distrito Federal em diversas frentes, promovendo a valorização profissional e defendendo os interesses da categoria junto ao governo e à sociedade.</p>
                        <p>Nossa atuação abrange desde a defesa de direitos trabalhistas até a promoção de eventos e cursos de capacitação, sempre com o objetivo de fortalecer a categoria e contribuir para a excelência do serviço público.</p>
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="history" className="mt-6">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                      <p className="mb-4 text-lg">
                        Fundado em 1990, o Sinafite-DF nasceu da necessidade de uma representação forte e atuante para os Auditores Fiscais do Tesouro do Distrito Federal. Desde então, tem sido voz ativa na defesa dos direitos e interesses da categoria.
                      </p>
                      <p className="text-lg">
                        Ao longo dos anos, o sindicato conquistou importantes vitórias para seus filiados, incluindo melhorias salariais, condições de trabalho adequadas e reconhecimento do papel fundamental dos auditores fiscais na administração pública do DF.
                      </p>
                    </div>
                  
                    <h3 className="text-2xl font-bold mt-12 mb-8 text-center">Linha do Tempo</h3>
                    
                    <div className="relative">
                      {/* Linha central */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light"></div>
                      
                      {/* Timeline items */}
                      <div className="space-y-12">
                        {/* 1990 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">1990</h4>
                              <p>Fundação do Sinafite-DF, com a eleição da primeira diretoria e estabelecimento dos objetivos iniciais do sindicato.</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                        </div>
                        
                        {/* 1995 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">1995</h4>
                              <p>Conquista do primeiro plano de carreira específico para os auditores fiscais, um marco importante na valorização da categoria.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* 2002 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">2002</h4>
                              <p>Implementação de melhorias no sistema de fiscalização, com a adoção de novas tecnologias e metodologias de trabalho.</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                        </div>
                        
                        {/* 2010 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">2010</h4>
                              <p>Inauguração da sede própria, oferecendo estrutura adequada para atendimento aos filiados e realização de eventos.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* 2015 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">2015</h4>
                              <p>Celebração dos 25 anos com expansão dos serviços oferecidos, incluindo assessoria jurídica especializada e convênios com parceiros.</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                        </div>
                        
                        {/* 2020 */}
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                          <div className="flex items-center justify-center z-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 transform transition-transform hover:scale-105">
                              <h4 className="text-xl font-bold text-primary mb-2">2020</h4>
                              <p>Modernização dos processos e criação da plataforma digital, permitindo maior agilidade e eficiência no atendimento aos filiados.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 bg-neutral-50 p-6 rounded-lg shadow-sm border border-neutral-200">
                      <h3 className="text-xl font-bold mb-4">Compromisso com o Futuro</h3>
                      <p className="text-lg">
                        Atualmente, o Sinafite-DF continua seu trabalho incansável, adaptando-se aos novos desafios e mantendo-se fiel aos princípios que nortearam sua criação: a defesa dos direitos e a valorização dos auditores fiscais do Distrito Federal.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="board" className="mt-6">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Diretoria (Gestão 2022-2025)</h2>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
                      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                        Nossa diretoria é composta por profissionais dedicados e comprometidos com a missão 
                        de defender e valorizar os auditores fiscais do Distrito Federal.
                      </p>
                      
                      <h3 className="text-2xl font-bold mb-6 text-center">Diretoria Executiva</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Presidente */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                            <div className="rounded-full w-24 h-24 mx-auto bg-white flex items-center justify-center overflow-hidden border-4 border-white">
                              <svg className="w-20 h-20 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="p-5 text-center">
                            <h4 className="text-xl font-bold">Carlos Alberto Silva</h4>
                            <p className="text-primary-dark font-medium mb-2">Presidente</p>
                            <p className="text-sm text-neutral-600 mb-4">
                              Auditor Fiscal desde 1998, com extensa experiência em gestão pública e defesa dos direitos da categoria.
                            </p>
                            <div className="flex justify-center space-x-3">
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                              </svg>
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Vice-Presidente */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                            <div className="rounded-full w-24 h-24 mx-auto bg-white flex items-center justify-center overflow-hidden border-4 border-white">
                              <svg className="w-20 h-20 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="p-5 text-center">
                            <h4 className="text-xl font-bold">Maria Luiza Fernandes</h4>
                            <p className="text-primary-dark font-medium mb-2">Vice-Presidente</p>
                            <p className="text-sm text-neutral-600 mb-4">
                              Auditora Fiscal com formação em Direito e especialização em Administração Pública, atuando na defesa da carreira desde 2005.
                            </p>
                            <div className="flex justify-center space-x-3">
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                              </svg>
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Secretário-Geral */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 transform transition-transform hover:scale-105">
                          <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
                            <div className="rounded-full w-24 h-24 mx-auto bg-white flex items-center justify-center overflow-hidden border-4 border-white">
                              <svg className="w-20 h-20 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="p-5 text-center">
                            <h4 className="text-xl font-bold">Roberto Almeida Santos</h4>
                            <p className="text-primary-dark font-medium mb-2">Secretário-Geral</p>
                            <p className="text-sm text-neutral-600 mb-4">
                              Especialista em comunicação institucional e gestão de documentos, contribui com seu conhecimento organizacional desde 2010.
                            </p>
                            <div className="flex justify-center space-x-3">
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                              </svg>
                              <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
                          <div className="bg-primary/10 p-4">
                            <h4 className="text-lg font-bold text-primary">Outros Membros da Diretoria</h4>
                          </div>
                          <div className="p-5">
                            <ul className="space-y-4">
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold">Antônio Pereira da Costa</div>
                                  <div className="text-primary-dark text-sm">Diretor Financeiro</div>
                                  <div className="text-sm text-neutral-600 mt-1">Especialista em finanças públicas com MBA em Gestão Financeira.</div>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold">Juliana Martins Vieira</div>
                                  <div className="text-primary-dark text-sm">Diretora Jurídica</div>
                                  <div className="text-sm text-neutral-600 mt-1">Advogada com especialização em Direito Administrativo e do Trabalho.</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
                          <div className="bg-primary/10 p-4">
                            <h4 className="text-lg font-bold text-primary">Conselho Fiscal</h4>
                          </div>
                          <div className="p-5">
                            <ul className="space-y-4">
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold">Fernando Matos Silva</div>
                                  <div className="text-primary-dark text-sm">Presidente do Conselho</div>
                                </div>
                              </li>
                              <li>
                                <div className="font-semibold mt-4 mb-2">Membros Titulares</div>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Ana Paula Rodrigues</span>
                                  </div>
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Ricardo Gomes de Oliveira</span>
                                  </div>
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Luciana Costa Pereira</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="font-semibold mt-2 mb-2">Membros Suplentes</div>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Marcos Vinícius Lopes</span>
                                  </div>
                                  <div className="flex items-center">
                                    <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span>Sandra Regina Alves</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="statute" className="mt-6">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Estatuto do Sinafite-DF</h2>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:mr-8">
                          <p className="text-lg mb-4">
                            O Estatuto do Sinafite-DF é o documento que estabelece as normas que regem o funcionamento do sindicato, definindo sua estrutura, objetivos, direitos e deveres dos filiados, entre outros aspectos importantes.
                          </p>
                          <p className="text-lg">
                            Este documento é a base para todas as ações e decisões tomadas pelo sindicato, garantindo transparência e legalidade em todos os processos.
                          </p>
                        </div>
                        
                        <div className="md:w-1/3 flex flex-col items-center justify-center">
                          <div className="w-32 h-40 bg-neutral-100 rounded-md shadow-md flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                            <div className="absolute top-0 inset-x-0 h-10 bg-primary flex items-center justify-center text-white font-bold">
                              ESTATUTO
                            </div>
                            <div className="absolute top-14 inset-x-0 flex flex-col items-center">
                              <svg className="w-12 h-12 text-primary/70 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <div className="text-xs text-neutral-600 text-center px-2">
                                Documento Oficial
                              </div>
                            </div>
                          </div>
                          
                          <button className="bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary-dark transition-colors duration-200 flex items-center shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Baixar Estatuto (PDF)
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-center">Principais Capítulos</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-lg shadow-md border border-neutral-100 overflow-hidden transform transition-transform hover:scale-105">
                        <div className="bg-primary p-4 text-white">
                          <div className="flex items-center mb-2">
                            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <h4 className="text-lg font-bold">Capítulo I - Da Constituição, Sede, Foro e Finalidades</h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3">
                            Estabelece a natureza jurídica, sede, foro e as finalidades do sindicato, incluindo a representação e defesa dos interesses da categoria.
                          </p>
                          <div className="text-sm text-neutral-600 space-y-1">
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Personalidade jurídica e representatividade legal</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Jurisdição e localização da sede</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Objetivos e missão institucional</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md border border-neutral-100 overflow-hidden transform transition-transform hover:scale-105">
                        <div className="bg-primary p-4 text-white">
                          <div className="flex items-center mb-2">
                            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h4 className="text-lg font-bold">Capítulo II - Dos Filiados: Direitos e Deveres</h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3">
                            Define quem pode se filiar ao sindicato, os direitos e deveres dos filiados, incluindo o pagamento de contribuições e a participação nas assembleias.
                          </p>
                          <div className="text-sm text-neutral-600 space-y-1">
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Critérios para filiação</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Direitos e benefícios dos associados</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Responsabilidades e obrigações</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md border border-neutral-100 overflow-hidden transform transition-transform hover:scale-105">
                        <div className="bg-primary p-4 text-white">
                          <div className="flex items-center mb-2">
                            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h4 className="text-lg font-bold">Capítulo III - Da Estrutura e Administração</h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3">
                            Detalha a estrutura organizacional do sindicato, incluindo a Assembleia Geral, a Diretoria Executiva e o Conselho Fiscal, bem como suas atribuições.
                          </p>
                          <div className="text-sm text-neutral-600 space-y-1">
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Órgãos de administração e fiscalização</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Funções e competências da diretoria</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Processo decisório e assembleias</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md border border-neutral-100 overflow-hidden transform transition-transform hover:scale-105">
                        <div className="bg-primary p-4 text-white">
                          <div className="flex items-center mb-2">
                            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <h4 className="text-lg font-bold">Capítulo IV - Das Eleições</h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3">
                            Estabelece as regras para o processo eleitoral, incluindo os requisitos para candidatura, o período de mandato e o procedimento de votação.
                          </p>
                          <div className="text-sm text-neutral-600 space-y-1">
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Elegibilidade e critérios para candidaturas</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Regras do processo eleitoral</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="h-4 w-4 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              <span>Duração dos mandatos e transição</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mt-8">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">Nota Importante</h4>
                          <p className="text-neutral-600">
                            Este é apenas um resumo dos principais capítulos do estatuto. O documento completo contém todas as disposições legais, procedimentos administrativos e normas detalhadas que regem o funcionamento do Sinafite-DF. Para consultar o estatuto na íntegra, baixe o arquivo PDF disponibilizado acima.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
          
          {/* Join us section */}
          <section className="py-20 relative" id="join">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-primary/5"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-4">Junte-se a nós</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
                  Fortaleça nossa representatividade. Seja um filiado e contribua para uma categoria mais unida e valorizada.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md border border-neutral-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Vantagens de ser um filiado</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Assessoria Jurídica</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Apoio jurídico especializado para questões profissionais e trabalhistas.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Convênios Exclusivos</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Parcerias com empresas e descontos em diversos serviços e produtos.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Voz nas Decisões</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Participação ativa nas decisões e assembleias que afetam a categoria.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Espaços Exclusivos</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Acesso às instalações da sede para reuniões e eventos profissionais.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Capacitação</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Cursos, workshops e eventos de desenvolvimento profissional.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm transform transition-transform hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold">Representatividade</h4>
                      </div>
                      <p className="text-sm text-neutral-600 pl-12">Representação forte junto aos órgãos governamentais e legislativos.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200 shadow-md flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Solicitar filiação
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md border border-neutral-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Fale Conosco</h3>
                  </div>
                  
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Nome completo</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                          placeholder="Seu nome"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">E-mail</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Telefone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="registration" className="block text-sm font-medium text-neutral-700">Matrícula/Registro</label>
                        <input 
                          type="text" 
                          id="registration" 
                          className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                          placeholder="Seu número de matrícula"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Assunto</label>
                      <select 
                        id="subject" 
                        className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="filiacao">Filiação</option>
                        <option value="informacoes">Informações Gerais</option>
                        <option value="juridico">Assessoria Jurídica</option>
                        <option value="sugestoes">Sugestões</option>
                        <option value="outros">Outros Assuntos</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Mensagem</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" 
                        placeholder="Digite sua mensagem aqui..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="privacy" className="w-4 h-4 text-primary focus:ring-primary" />
                      <label htmlFor="privacy" className="ml-2 text-sm text-neutral-600">
                        Concordo com a política de privacidade e com o tratamento dos meus dados para fins de contato
                      </label>
                    </div>
                    
                    <div className="flex justify-center pt-2">
                      <button type="submit" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200 shadow-md flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Enviar mensagem
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="mt-16 bg-white p-6 rounded-xl shadow-md border border-neutral-100 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-bold mb-3">Atendimento Presencial</h3>
                    <p className="text-neutral-700 mb-4">
                      Venha nos visitar em nossa sede e converse pessoalmente com nossa equipe de atendimento.
                    </p>
                    <div className="flex items-start mb-2">
                      <svg className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>SBS Quadra 2, Bloco E, Edifício Prime - Brasília, DF</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <svg className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Segunda a Sexta, das 9h às 18h</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:border-l md:pl-8 border-neutral-200 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">Canais de Atendimento</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="tel:+556133030000" className="flex items-center p-3 rounded-md border border-neutral-200 hover:border-primary transition-colors">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">Telefone</span>
                      </a>
                      <a href="mailto:contato@sinafitedf.org.br" className="flex items-center p-3 rounded-md border border-neutral-200 hover:border-primary transition-colors">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">E-mail</span>
                      </a>
                      <a href="#" className="flex items-center p-3 rounded-md border border-neutral-200 hover:border-primary transition-colors">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm">WhatsApp</span>
                      </a>
                      <a href="#" className="flex items-center p-3 rounded-md border border-neutral-200 hover:border-primary transition-colors">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
