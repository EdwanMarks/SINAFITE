import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/hooks';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileTextIcon, CalendarIcon, LawIcon, QuestionAnswerIcon } from '@/components/ui/icons';

const formSchema = z.object({
  username: z.string().min(1, { message: "Digite seu nome de usuário" }),
  password: z.string().min(1, { message: "Digite sua senha" }),
});

type FormValues = z.infer<typeof formSchema>;

const MemberArea: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setLoginError("");
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password
        }),
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }
      
      const userData = await response.json();
      login(userData);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Erro ao fazer login");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Área do Filiado | Sinafite-DF</title>
          <meta name="description" content="Acesse a área exclusiva para filiados do Sinafite-DF." />
        </Helmet>
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex items-center justify-center bg-neutral-50 py-12">
            <div className="w-full max-w-md px-4">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold">Área do Filiado</CardTitle>
                  <CardDescription>
                    Digite suas credenciais para acessar a área restrita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loginError && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                      {loginError}
                    </div>
                  )}
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Usuário</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Digite seu usuário" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="Digite sua senha" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Entrando..." : "Entrar"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <div className="text-sm text-center">
                    <a href="#" className="text-primary hover:underline">
                      Esqueci minha senha
                    </a>
                  </div>
                  <div className="text-sm text-center">
                    Ainda não é filiado?{" "}
                    <a href="/about#join" className="text-primary hover:underline">
                      Filie-se agora
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Área do Filiado | Sinafite-DF</title>
        <meta name="description" content="Área exclusiva para filiados do Sinafite-DF." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-4xl font-serif font-bold">Bem-vindo à Área do Filiado</h1>
              <p className="mt-4 text-lg text-neutral-100 max-w-3xl">
                Acesse recursos exclusivos, documentos e serviços disponíveis para os filiados do Sinafite-DF.
              </p>
            </div>
          </section>
          
          {/* Member area content */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Tabs defaultValue="documents" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="documents">Documentos</TabsTrigger>
                  <TabsTrigger value="calendar">Agenda</TabsTrigger>
                  <TabsTrigger value="legislation">Legislação</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="documents">
                  <h2 className="text-2xl font-bold mb-6">Documentos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="bg-primary-light bg-opacity-10 p-3 rounded mr-4">
                            <FileTextIcon className="text-primary text-xl" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Formulários</h3>
                            <p className="text-sm text-neutral-600">Documentos para solicitações e procedimentos administrativos</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Formulário de Atualização Cadastral</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Solicitação de Assistência Jurídica</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Declaração de Filiação</a>
                          </li>
                        </ul>
                        <a href="#" className="text-primary text-sm hover:underline">Ver todos os formulários</a>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="bg-primary-light bg-opacity-10 p-3 rounded mr-4">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Relatórios</h3>
                            <p className="text-sm text-neutral-600">Relatórios de atividades e prestação de contas</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Relatório de Atividades 2022</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Prestação de Contas 2022</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Balanço Financeiro 2022</a>
                          </li>
                        </ul>
                        <a href="#" className="text-primary text-sm hover:underline">Ver todos os relatórios</a>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="bg-primary-light bg-opacity-10 p-3 rounded mr-4">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Documentos Pessoais</h3>
                            <p className="text-sm text-neutral-600">Seus documentos e comprovantes</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Comprovante de Filiação</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Carteirinha Digital</a>
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <a href="#" className="text-sm hover:underline">Informe de Contribuições</a>
                          </li>
                        </ul>
                        <a href="#" className="text-primary text-sm hover:underline">Ver todos os documentos</a>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="calendar">
                  <h2 className="text-2xl font-bold mb-6">Agenda</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card className="mb-8">
                        <CardHeader>
                          <CardTitle>Próximos Eventos</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="flex border-l-4 border-primary pl-4">
                              <div className="w-16 text-center mr-4">
                                <div className="text-2xl font-bold">22</div>
                                <div className="text-sm text-neutral-500">AGO</div>
                              </div>
                              <div>
                                <h3 className="font-bold">Seminário sobre Reforma Tributária</h3>
                                <p className="text-sm text-neutral-600 mb-1">09:00 - 18:00 | Centro de Convenções</p>
                                <p className="text-sm">Discussão sobre os impactos da reforma tributária na atuação dos auditores fiscais do DF.</p>
                              </div>
                            </div>
                            
                            <div className="flex border-l-4 border-primary pl-4">
                              <div className="w-16 text-center mr-4">
                                <div className="text-2xl font-bold">15</div>
                                <div className="text-sm text-neutral-500">SET</div>
                              </div>
                              <div>
                                <h3 className="font-bold">Curso de Atualização em ICMS</h3>
                                <p className="text-sm text-neutral-600 mb-1">14:00 - 18:00 | Auditório do Sinafite-DF</p>
                                <p className="text-sm">Capacitação sobre as recentes alterações na legislação do ICMS no Distrito Federal.</p>
                              </div>
                            </div>
                            
                            <div className="flex border-l-4 border-primary pl-4">
                              <div className="w-16 text-center mr-4">
                                <div className="text-2xl font-bold">10</div>
                                <div className="text-sm text-neutral-500">OUT</div>
                              </div>
                              <div>
                                <h3 className="font-bold">Workshop de Tecnologia na Fiscalização</h3>
                                <p className="text-sm text-neutral-600 mb-1">09:00 - 13:00 | Auditório do Sinafite-DF</p>
                                <p className="text-sm">Apresentação de novas ferramentas e tecnologias para otimizar o trabalho de fiscalização tributária.</p>
                              </div>
                            </div>
                            
                            <div className="flex border-l-4 border-primary pl-4">
                              <div className="w-16 text-center mr-4">
                                <div className="text-2xl font-bold">25</div>
                                <div className="text-sm text-neutral-500">OUT</div>
                              </div>
                              <div>
                                <h3 className="font-bold">Assembleia Geral Ordinária</h3>
                                <p className="text-sm text-neutral-600 mb-1">18:00 | Auditório do Sinafite-DF</p>
                                <p className="text-sm">Assembleia para discussão de temas de interesse da categoria e apresentação de propostas para 2023.</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <Card className="mb-6">
                        <CardHeader>
                          <CardTitle>Calendário 2023</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-neutral-600 mb-4">
                            Consulte o calendário completo de atividades do Sinafite-DF para 2023, incluindo eventos, cursos, assembleias e datas importantes.
                          </p>
                          <Button className="w-full">Ver calendário completo</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Sugerir Evento</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-neutral-600 mb-4">
                            Tem uma sugestão de evento ou atividade para o sindicato? Compartilhe conosco!
                          </p>
                          <Button variant="outline" className="w-full">Enviar sugestão</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="legislation">
                  <h2 className="text-2xl font-bold mb-6">Legislação</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <div className="relative">
                          <Input 
                            type="text" 
                            placeholder="Buscar na legislação..." 
                            className="pr-10"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-bold text-lg mb-2">Legislação Tributária do DF</h3>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Código Tributário do Distrito Federal</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Lei Complementar nº 4, de 30/12/1994</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Decreto nº 18.955/1997 (RICMS/DF)</a>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="font-bold text-lg mb-2">Carreira Auditoria Fiscal</h3>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Lei nº 4.717/2011 (Carreira Auditoria Tributária)</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Decreto nº 33.871/2012 (Regulamento)</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Lei nº 5.212/2013 (Alterações)</a>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="font-bold text-lg mb-2">Legislação Sindical</h3>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Constituição Federal - Art. 8º (Sindicalização)</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Lei nº 8.112/1990 (Estatuto do Servidor Público)</a>
                                </li>
                                <li className="flex items-center">
                                  <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <a href="#" className="hover:underline">Estatuto do Sinafite-DF</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <Card className="mb-6">
                        <CardHeader>
                          <CardTitle>Análises Jurídicas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-neutral-600 mb-4">
                            Pareceres e análises jurídicas elaboradas pelo departamento jurídico do Sinafite-DF sobre temas relevantes para a categoria.
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                              <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <a href="#" className="text-sm hover:underline">Análise da Reforma Tributária</a>
                            </li>
                            <li className="flex items-center">
                              <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <a href="#" className="text-sm hover:underline">Parecer sobre Adicional de Férias</a>
                            </li>
                          </ul>
                          <Button variant="outline" className="w-full">Ver todas as análises</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Boletins Informativos</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-neutral-600 mb-4">
                            Boletins periódicos com atualizações sobre legislação, jurisprudência e outros temas de interesse.
                          </p>
                          <Button variant="outline" className="w-full">Acessar boletins</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq">
                  <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
                  <div className="space-y-6 max-w-3xl">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">Como posso atualizar meus dados cadastrais?</h3>
                        <p className="text-neutral-600">
                          Para atualizar seus dados cadastrais, acesse a seção "Meu Perfil" no menu superior direito após fazer login. Lá você poderá editar suas informações pessoais, como endereço, telefone e e-mail. Alternativamente, você pode preencher o formulário de atualização cadastral disponível na seção de Documentos e enviá-lo para o sindicato.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">Como solicitar atendimento jurídico?</h3>
                        <p className="text-neutral-600">
                          Para solicitar atendimento jurídico, você pode agendar uma consulta pelo telefone (61) 3321-8482, pelo e-mail juridico@sinafite-df.org.br, ou preencher o formulário de solicitação disponível na seção de Documentos. O departamento jurídico entrará em contato para agendar o atendimento, que pode ser presencial ou online.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">Como me inscrever nos cursos e eventos?</h3>
                        <p className="text-neutral-600">
                          As inscrições para cursos e eventos são realizadas pela seção "Agenda" do site, onde você encontrará um botão de inscrição para cada atividade. Alguns eventos têm vagas limitadas, por isso recomendamos fazer sua inscrição com antecedência. Após a inscrição, você receberá um e-mail de confirmação com todas as informações necessárias.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">Como utilizar os convênios do Sinafite-DF?</h3>
                        <p className="text-neutral-600">
                          Para utilizar os convênios, você precisa apresentar sua carteirinha física ou digital do Sinafite-DF no estabelecimento conveniado. A lista completa de convênios está disponível na seção "Convênios" do site, com os detalhes de cada parceria, como percentual de desconto e condições específicas. A carteirinha digital pode ser acessada na seção de Documentos.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">Como obter comprovantes de contribuição para o imposto de renda?</h3>
                        <p className="text-neutral-600">
                          O comprovante de contribuição para o imposto de renda está disponível na seção "Documentos Pessoais". Você pode visualizar e baixar o documento em formato PDF. Caso precise de algum comprovante específico que não esteja disponível no sistema, entre em contato com o departamento financeiro pelo e-mail financeiro@sinafite-df.org.br.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-bold mb-4">Não encontrou o que procurava?</h3>
                    <p className="mb-4">Envie sua pergunta para nossa equipe e responderemos o mais breve possível.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input placeholder="Digite sua pergunta" className="flex-grow" />
                      <Button>Enviar pergunta</Button>
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

export default MemberArea;
