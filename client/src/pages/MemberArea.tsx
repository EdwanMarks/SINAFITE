import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MemberArea = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [location, navigate] = useLocation();
  
  useEffect(() => {
    document.title = "Área do Sindicalizado | Sinafite-DF";
    
    // Check if user is authenticated 
    // This is a simplified example - in a real app, you'd check for a JWT token or session
    const user = localStorage.getItem('user');
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login?redirect=/area-sindicalizado');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);
  
  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Área do Sindicalizado</h1>
            <p className="text-neutral-100 max-w-3xl">
              Bem-vindo à área exclusiva para os filiados do SINAFITE-DF. Aqui você tem acesso a conteúdos e serviços exclusivos.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="documents" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="documents">Documentos</TabsTrigger>
                <TabsTrigger value="legal">Jurídico</TabsTrigger>
                <TabsTrigger value="benefits">Benefícios</TabsTrigger>
                <TabsTrigger value="profile">Meu Perfil</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentos e Publicações</CardTitle>
                    <CardDescription>Acesse documentos exclusivos para filiados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 text-[#1A3A6E] p-2 rounded mr-3">
                            <i className="fas fa-file-pdf"></i>
                          </div>
                          <div>
                            <h3 className="font-medium">Cartilha de Direitos Previdenciários</h3>
                            <p className="text-sm text-neutral-500">Atualizada em 10/06/2023</p>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm mb-3">
                          Guia completo sobre aposentadoria especial e outros direitos previdenciários dos auditores fiscais.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <i className="fas fa-download mr-2"></i>
                          Baixar PDF
                        </Button>
                      </div>
                      
                      <div className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 text-[#1A3A6E] p-2 rounded mr-3">
                            <i className="fas fa-file-alt"></i>
                          </div>
                          <div>
                            <h3 className="font-medium">Estatuto do SINAFITE-DF</h3>
                            <p className="text-sm text-neutral-500">Versão 2022</p>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm mb-3">
                          Documento completo com as normas de funcionamento do sindicato.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <i className="fas fa-download mr-2"></i>
                          Baixar PDF
                        </Button>
                      </div>
                      
                      <div className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 text-[#1A3A6E] p-2 rounded mr-3">
                            <i className="fas fa-newspaper"></i>
                          </div>
                          <div>
                            <h3 className="font-medium">Boletim Informativo - Julho 2023</h3>
                            <p className="text-sm text-neutral-500">Edição nº 45</p>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm mb-3">
                          Resumo das principais atividades e conquistas do mês.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <i className="fas fa-download mr-2"></i>
                          Baixar PDF
                        </Button>
                      </div>
                      
                      <div className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-100 text-[#1A3A6E] p-2 rounded mr-3">
                            <i className="fas fa-file-powerpoint"></i>
                          </div>
                          <div>
                            <h3 className="font-medium">Apresentação - Reforma Tributária</h3>
                            <p className="text-sm text-neutral-500">Seminário 15/05/2023</p>
                          </div>
                        </div>
                        <p className="text-neutral-600 text-sm mb-3">
                          Slides da apresentação realizada no último seminário sobre impactos da reforma.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <i className="fas fa-download mr-2"></i>
                          Baixar Apresentação
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline">
                        Ver todos os documentos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="legal" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Departamento Jurídico</CardTitle>
                    <CardDescription>Acompanhe processos e solicite atendimento jurídico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                        <h3 className="font-semibold text-lg mb-4">Ações Coletivas em Andamento</h3>
                        <div className="space-y-4">
                          <div className="border-b border-neutral-200 pb-4">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium">Reajuste Salarial 2022</h4>
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Em andamento</span>
                            </div>
                            <p className="text-sm text-neutral-600">Processo nº 0001234-56.2022.8.07.0001</p>
                            <p className="text-sm text-neutral-600">Última atualização: 15/07/2023</p>
                          </div>
                          
                          <div className="border-b border-neutral-200 pb-4">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium">Recomposição de Perdas Inflacionárias</h4>
                              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Ganho de causa</span>
                            </div>
                            <p className="text-sm text-neutral-600">Processo nº 0007890-12.2021.8.07.0001</p>
                            <p className="text-sm text-neutral-600">Última atualização: 20/06/2023</p>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <h4 className="font-medium">Incorporação de Gratificações</h4>
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Fase recursal</span>
                            </div>
                            <p className="text-sm text-neutral-600">Processo nº 0003456-78.2022.8.07.0001</p>
                            <p className="text-sm text-neutral-600">Última atualização: 05/07/2023</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                        <h3 className="font-semibold text-lg mb-4">Agendar Atendimento Jurídico</h3>
                        <p className="text-neutral-600 mb-4">
                          Nossos advogados estão disponíveis para atendimento individual mediante agendamento prévio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="bg-[#1A3A6E] hover:bg-blue-900">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            Agendar Consulta
                          </Button>
                          <Button variant="outline">
                            <i className="fas fa-phone-alt mr-2"></i>
                            Contato Direto
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Benefícios e Convênios</CardTitle>
                    <CardDescription>Confira os benefícios exclusivos para filiados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border border-neutral-200 rounded-lg overflow-hidden">
                        <div className="bg-[#1A3A6E] text-white p-4">
                          <h3 className="font-semibold text-lg">Saúde e Bem-estar</h3>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Desconto de 20% na Rede Fitness Academia</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Plano odontológico com 30% de desconto</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Clínica de fisioterapia - 15% de desconto</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            Ver todos
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-neutral-200 rounded-lg overflow-hidden">
                        <div className="bg-[#1A3A6E] text-white p-4">
                          <h3 className="font-semibold text-lg">Educação</h3>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Desconto de 25% em MBAs da FGV</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Cursos de idiomas com 20% de desconto</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Plataforma de cursos online gratuita</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            Ver todos
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-neutral-200 rounded-lg overflow-hidden">
                        <div className="bg-[#1A3A6E] text-white p-4">
                          <h3 className="font-semibold text-lg">Lazer</h3>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Clube de férias com tarifas especiais</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Desconto em ingressos de cinema e teatro</p>
                          </div>
                          <div className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <p className="text-neutral-700">Convênio com restaurantes - 10% de desconto</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            Ver todos
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                      <h3 className="font-semibold text-lg mb-4">Carteirinha Digital</h3>
                      <p className="text-neutral-600 mb-4">
                        Utilize sua carteirinha digital para identificação e acesso aos benefícios em estabelecimentos conveniados.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-[#1A3A6E] hover:bg-blue-900">
                          <i className="fas fa-id-card mr-2"></i>
                          Acessar Carteirinha
                        </Button>
                        <Button variant="outline">
                          <i className="fas fa-download mr-2"></i>
                          Baixar em PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meu Perfil</CardTitle>
                    <CardDescription>Gerencie suas informações pessoais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 text-center">
                          <div className="w-32 h-32 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-user text-4xl"></i>
                          </div>
                          <h3 className="font-semibold text-xl mb-1">José Silva</h3>
                          <p className="text-neutral-600 mb-4">Auditor Fiscal - Matrícula: 12345</p>
                          <Button variant="outline" size="sm" className="w-full">
                            <i className="fas fa-camera mr-2"></i>
                            Alterar foto
                          </Button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                          <h3 className="font-semibold text-lg mb-4">Dados Pessoais</h3>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Nome Completo</label>
                                <input 
                                  type="text" 
                                  value="José Carlos da Silva" 
                                  readOnly 
                                  className="w-full px-3 py-2 bg-neutral-100 border border-neutral-300 rounded-md"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">CPF</label>
                                <input 
                                  type="text" 
                                  value="123.456.789-00" 
                                  readOnly 
                                  className="w-full px-3 py-2 bg-neutral-100 border border-neutral-300 rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                <input 
                                  type="email" 
                                  value="jose.silva@email.com" 
                                  className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Telefone</label>
                                <input 
                                  type="tel" 
                                  value="(61) 98765-4321" 
                                  className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Endereço</label>
                              <input 
                                type="text" 
                                value="Rua das Palmeiras, 123 - Brasília/DF" 
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                              />
                            </div>
                            
                            <div className="pt-4 flex justify-end">
                              <Button className="bg-[#1A3A6E] hover:bg-blue-900">
                                <i className="fas fa-save mr-2"></i>
                                Salvar Alterações
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mt-6">
                          <h3 className="font-semibold text-lg mb-4">Alterar Senha</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Senha Atual</label>
                              <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Nova Senha</label>
                                <input 
                                  type="password" 
                                  className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Confirmar Nova Senha</label>
                                <input 
                                  type="password" 
                                  className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                                />
                              </div>
                            </div>
                            
                            <div className="pt-2 flex justify-end">
                              <Button variant="outline">
                                <i className="fas fa-key mr-2"></i>
                                Alterar Senha
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline" onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/login');
                      }}>
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Sair da conta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MemberArea;
