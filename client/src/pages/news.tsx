import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Article } from '@shared/schema';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/lib/hooks';

const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  // Filter articles based on search query and active tab
  const filteredArticles = articles?.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === 'all' || article.category.toLowerCase() === activeTab.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Notícias | Sinafite-DF</title>
        <meta name="description" content="Acompanhe as últimas notícias e atualizações do Sinafite-DF e da categoria dos auditores fiscais do DF." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero section */}
          <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-70"></div>
              <div className="absolute inset-0 bg-grid-white/10"></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-20 top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 bottom-10 w-80 h-80 bg-primary-dark/20 rounded-full blur-3xl"></div>
              
              {/* Animated dots pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-10 md:mb-0">
                  <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                    Informações atualizadas para a categoria
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
                    Notícias & Atualizações
                  </h1>
                  <p className="text-base sm:text-lg text-white/90 max-w-3xl">
                    Acompanhe as últimas notícias, eventos, atualizações legislativas e informações relevantes para os auditores fiscais do Distrito Federal.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#" onClick={() => setActiveTab('all')} className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      Todas as Notícias
                    </a>
                    <a href="#" onClick={() => setActiveTab('Eventos')} className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Eventos
                    </a>
                    <a href="#" onClick={() => setActiveTab('Jurídico')} className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors duration-200 border border-white/20">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                      Jurídico
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-52 h-52 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-primary-light/30 rounded-full blur-xl"></div>
                    <div className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-1">
                          {articles?.length || '0'}
                        </div>
                        <div className="text-sm md:text-base font-medium">Publicações</div>
                        <div className="w-12 h-1 bg-white mx-auto mt-2"></div>
                        <div className="text-xs mt-2 opacity-80">Atualizações frequentes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* News section */}
          <section className="py-16 relative bg-neutral-50">
            <div className="absolute inset-0 bg-grid-neutral-200/50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Search and filter */}
              <div className="bg-white shadow-md rounded-xl p-6 mb-12 border border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="w-full md:w-2/5">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <Input
                        type="text"
                        placeholder="Buscar por título ou conteúdo..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 py-2 border-neutral-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    {searchQuery && (
                      <div className="mt-2 text-sm text-neutral-500">
                        {filteredArticles?.length || 0} resultado(s) encontrado(s)
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="ml-2 text-primary hover:text-primary-dark"
                        >
                          Limpar busca
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full md:w-3/5">
                    <div className="text-sm font-medium text-neutral-500 mb-2">Filtrar por categoria:</div>
                    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="w-full justify-start bg-neutral-100 p-1">
                        <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-white">
                          <span className="flex items-center justify-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Todas
                          </span>
                        </TabsTrigger>
                        <TabsTrigger value="Notícias" className="flex-1 data-[state=active]:bg-white">
                          <span className="flex items-center justify-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            Notícias
                          </span>
                        </TabsTrigger>
                        <TabsTrigger value="Eventos" className="flex-1 data-[state=active]:bg-white">
                          <span className="flex items-center justify-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Eventos
                          </span>
                        </TabsTrigger>
                        <TabsTrigger value="Jurídico" className="flex-1 data-[state=active]:bg-white">
                          <span className="flex items-center justify-center">
                            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            Jurídico
                          </span>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </div>
              
              {/* Articles list */}
              <div className="space-y-8">
                {isLoading ? (
                  // Loading skeleton
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 animate-pulse">
                      <div className="md:flex gap-6">
                        <div className="md:w-[280px] w-full h-48 md:h-64 bg-neutral-200 rounded-lg mb-6 md:mb-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="h-5 w-24 bg-neutral-200 rounded"></div>
                            <div className="mx-2 h-5 w-5 rounded-full bg-neutral-200"></div>
                            <div className="h-5 w-16 bg-neutral-200 rounded"></div>
                          </div>
                          <div className="h-8 w-3/4 bg-neutral-200 rounded mb-4"></div>
                          <div className="space-y-2">
                            <div className="h-4 w-full bg-neutral-200 rounded"></div>
                            <div className="h-4 w-full bg-neutral-200 rounded"></div>
                            <div className="h-4 w-2/3 bg-neutral-200 rounded"></div>
                          </div>
                          <div className="mt-6 h-6 w-28 bg-neutral-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : filteredArticles?.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-neutral-200">
                    <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-2">Nenhuma notícia encontrada</h3>
                    <p className="text-neutral-500 mb-6">Não encontramos notícias que correspondam aos filtros selecionados.</p>
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Limpar filtros
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-neutral-800">
                        Resultados{activeTab !== 'all' ? ` em ${activeTab}` : ''}
                        {searchQuery ? ` para "${searchQuery}"` : ''}
                      </h2>
                      <div className="text-sm text-neutral-500">
                        Mostrando {filteredArticles?.length || 0} de {articles?.length || 0} notícias
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {filteredArticles?.map((article) => (
                        <div key={article.id} className="group bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/30">
                          <div className="md:flex">
                            <div className="md:w-[280px] w-full h-48 md:h-auto relative overflow-hidden flex-shrink-0">
                              {/* Article image or gradient placeholder */}
                              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/20 to-primary-dark/10 absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
                              
                              {/* Category label */}
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary shadow-sm">
                                {article.category}
                              </div>
                              
                              {/* Image overlay with gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* Date label */}
                              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded text-neutral-600 flex items-center shadow-sm">
                                <svg className="h-3 w-3 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {formatDate(article.publishedAt)}
                              </div>
                            </div>
                            
                            <div className="p-6 md:p-8 flex-1">
                              <div className="mb-4">
                                <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-200">
                                  {article.title}
                                </h2>
                                <p className="text-neutral-600 mb-6 line-clamp-3">
                                  {article.summary}
                                </p>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <Link href={`/news/${article.id}`}>
                                  <a className="inline-flex items-center text-primary font-medium hover:underline transition-all duration-200 group-hover:translate-x-1">
                                    Leia mais
                                    <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                  </a>
                                </Link>
                                
                                <div className="flex items-center text-neutral-500 text-sm">
                                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  <span>Tempo de leitura: 5 min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default News;
