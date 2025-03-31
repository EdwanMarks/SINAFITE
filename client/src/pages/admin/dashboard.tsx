import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/hooks';
import { formatDate } from '@/lib/hooks';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Article, 
  ContactMessage, 
  Service, 
  Subscriber 
} from '@shared/schema';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Check if user is authenticated and is admin
    if (!isAuthenticated || user?.role !== 'admin') {
      setLocation('/admin');
    }
  }, [isAuthenticated, user, setLocation]);

  const { data: articles, isLoading: isLoadingArticles } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const { data: services, isLoading: isLoadingServices } = useQuery<Service[]>({
    queryKey: ['/api/services'],
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const { data: messages, isLoading: isLoadingMessages } = useQuery<ContactMessage[]>({
    queryKey: ['/api/contact'],
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const { data: subscribers, isLoading: isLoadingSubscribers } = useQuery<Subscriber[]>({
    queryKey: ['/api/subscribers'],
    enabled: isAuthenticated && user?.role === 'admin',
  });

  const handleLogout = () => {
    logout();
    setLocation('/admin');
  };

  // Count unread messages
  const unreadMessages = messages?.filter(msg => !msg.isRead).length || 0;

  return (
    <>
      <Helmet>
        <title>Painel Administrativo | Sinafite-DF</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Admin header */}
        <header className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">Sinafite-DF</span>
                </div>
                <div className="hidden md:block ml-10">
                  <div className="flex items-center space-x-4">
                    <a href="/admin/dashboard" className="bg-primary-dark px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                    <a href="/admin/news" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Notícias</a>
                    <a href="/admin/services" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Serviços</a>
                    <a href="/admin/messages" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Mensagens</a>
                    <a href="/admin/pages" className="text-white hover:bg-primary-light px-3 py-2 rounded-md text-sm font-medium">Páginas</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-white">
                      <span className="mr-2">{user?.name || 'Admin'}</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Administrador</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setLocation('/')}>
                      Ver site
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        
        {/* Admin content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-neutral-800 mb-6">Painel Administrativo</h1>
            
            {/* Dashboard overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Notícias</p>
                      {isLoadingArticles ? (
                        <Skeleton className="h-8 w-16" />
                      ) : (
                        <h3 className="text-3xl font-bold">{articles?.length || 0}</h3>
                      )}
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="/admin/news" className="text-sm text-blue-600 hover:underline">Gerenciar notícias</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Serviços</p>
                      {isLoadingServices ? (
                        <Skeleton className="h-8 w-16" />
                      ) : (
                        <h3 className="text-3xl font-bold">{services?.length || 0}</h3>
                      )}
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="/admin/services" className="text-sm text-green-600 hover:underline">Gerenciar serviços</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Mensagens</p>
                      {isLoadingMessages ? (
                        <Skeleton className="h-8 w-16" />
                      ) : (
                        <h3 className="text-3xl font-bold">
                          {messages?.length || 0}
                          {unreadMessages > 0 && (
                            <span className="ml-2 text-sm bg-red-500 text-white px-2 py-1 rounded-full">
                              {unreadMessages} não lidas
                            </span>
                          )}
                        </h3>
                      )}
                    </div>
                    <div className="bg-amber-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="/admin/messages" className="text-sm text-amber-600 hover:underline">Verificar mensagens</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Inscritos na Newsletter</p>
                      {isLoadingSubscribers ? (
                        <Skeleton className="h-8 w-16" />
                      ) : (
                        <h3 className="text-3xl font-bold">{subscribers?.length || 0}</h3>
                      )}
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="/admin/subscribers" className="text-sm text-purple-600 hover:underline">Gerenciar inscritos</a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Dashboard tabs */}
            <Tabs defaultValue="recent-articles" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="recent-articles">Notícias Recentes</TabsTrigger>
                <TabsTrigger value="recent-messages">Mensagens Recentes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent-articles">
                <Card>
                  <CardHeader>
                    <CardTitle>Notícias Recentes</CardTitle>
                    <CardDescription>
                      As últimas notícias publicadas no site
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoadingArticles ? (
                      <div className="space-y-4">
                        {Array(5).fill(0).map((_, index) => (
                          <div key={index} className="flex justify-between items-center border-b pb-4">
                            <div className="space-y-2">
                              <Skeleton className="h-5 w-64" />
                              <Skeleton className="h-4 w-32" />
                            </div>
                            <Skeleton className="h-8 w-20" />
                          </div>
                        ))}
                      </div>
                    ) : articles && articles.length > 0 ? (
                      <div className="space-y-4">
                        {articles.slice(0, 5).map((article) => (
                          <div key={article.id} className="flex justify-between items-center border-b pb-4">
                            <div>
                              <h4 className="font-medium">{article.title}</h4>
                              <p className="text-sm text-neutral-500">{formatDate(article.publishedAt)} - {article.category}</p>
                            </div>
                            <Button size="sm" variant="outline" onClick={() => setLocation(`/admin/news/${article.id}`)}>
                              Editar
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-500">Nenhuma notícia encontrada.</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setLocation('/admin/news')}>Ver todas as notícias</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="recent-messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Mensagens Recentes</CardTitle>
                    <CardDescription>
                      As últimas mensagens recebidas pelo formulário de contato
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoadingMessages ? (
                      <div className="space-y-4">
                        {Array(5).fill(0).map((_, index) => (
                          <div key={index} className="flex justify-between items-center border-b pb-4">
                            <div className="space-y-2">
                              <Skeleton className="h-5 w-64" />
                              <Skeleton className="h-4 w-32" />
                            </div>
                            <Skeleton className="h-8 w-20" />
                          </div>
                        ))}
                      </div>
                    ) : messages && messages.length > 0 ? (
                      <div className="space-y-4">
                        {messages.slice(0, 5).map((message) => (
                          <div key={message.id} className="flex justify-between items-center border-b pb-4">
                            <div>
                              <h4 className="font-medium flex items-center">
                                {message.subject}
                                {!message.isRead && (
                                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Não lida</span>
                                )}
                              </h4>
                              <p className="text-sm text-neutral-500">De: {message.name} ({message.email})</p>
                              <p className="text-sm text-neutral-500">{formatDate(message.createdAt)}</p>
                            </div>
                            <Button size="sm" variant="outline" onClick={() => setLocation(`/admin/messages/${message.id}`)}>
                              Ver
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-500">Nenhuma mensagem encontrada.</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setLocation('/admin/messages')}>Ver todas as mensagens</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
