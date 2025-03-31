import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Sobre | Sinafite-DF";
    
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Sobre o SINAFITE-DF</h1>
            <p className="text-neutral-100 max-w-3xl">
              Conheça nossa história, missão, valores e como trabalhamos pela valorização da carreira fiscal no Distrito Federal.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-white" id="historia">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Fundado em 1988, o Sindicato dos Funcionários Integrantes da Carreira Auditoria Fiscal do Tesouro do Distrito Federal (SINAFITE-DF) nasceu da necessidade de ter uma representação forte e atuante para defender os interesses dos Auditores Fiscais do DF.
                </p>
                <p>
                  Desde sua criação, o SINAFITE-DF tem desempenhado um papel fundamental na valorização da carreira fiscal, lutando por melhores condições de trabalho, remuneração justa e pelo fortalecimento da administração tributária como instituição essencial ao funcionamento do Estado.
                </p>
                <p>
                  Ao longo dessas décadas, conquistamos importantes avanços para a categoria, como a reestruturação da carreira, a implementação de planos de capacitação continuada e a participação ativa em discussões sobre políticas fiscais e tributárias no Distrito Federal.
                </p>
              </div>
              
              <div className="mt-12" id="missao">
                <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6">Missão e Valores</h2>
                <Tabs defaultValue="missao" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="missao">Missão</TabsTrigger>
                    <TabsTrigger value="visao">Visão</TabsTrigger>
                    <TabsTrigger value="valores">Valores</TabsTrigger>
                  </TabsList>
                  <TabsContent value="missao" className="prose prose-lg max-w-none mt-6">
                    <p>
                      Defender os direitos e interesses profissionais dos Auditores Fiscais do Distrito Federal, promovendo a valorização da carreira e contribuindo para uma administração tributária eficiente, justa e essencial ao desenvolvimento econômico e social.
                    </p>
                  </TabsContent>
                  <TabsContent value="visao" className="prose prose-lg max-w-none mt-6">
                    <p>
                      Ser reconhecido como referência nacional entre os sindicatos da área fiscal, pela excelência na representação da categoria, pela defesa intransigente da justiça fiscal e pelo compromisso com a sociedade brasiliense.
                    </p>
                  </TabsContent>
                  <TabsContent value="valores" className="prose prose-lg max-w-none mt-6">
                    <ul>
                      <li><strong>Ética e Transparência:</strong> Em todas as ações e relações institucionais;</li>
                      <li><strong>Independência:</strong> Nas decisões e posicionamentos;</li>
                      <li><strong>Comprometimento:</strong> Com os interesses da categoria fiscal;</li>
                      <li><strong>Responsabilidade Social:</strong> Reconhecendo o papel da tributação para o desenvolvimento;</li>
                      <li><strong>Excelência:</strong> Na prestação de serviços aos filiados;</li>
                      <li><strong>Inovação:</strong> Na busca por soluções eficientes para os desafios da categoria.</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="mt-12" id="diretoria">
                <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6">Diretoria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">João Silva</h3>
                    <p className="text-center text-neutral-600 mb-2">Presidente</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">Maria Oliveira</h3>
                    <p className="text-center text-neutral-600 mb-2">Vice-Presidente</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">Carlos Santos</h3>
                    <p className="text-center text-neutral-600 mb-2">Diretor Financeiro</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">Ana Pereira</h3>
                    <p className="text-center text-neutral-600 mb-2">Diretora Jurídica</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">Paulo Costa</h3>
                    <p className="text-center text-neutral-600 mb-2">Diretor de Comunicação</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div className="w-24 h-24 bg-[#1A3A6E] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-user text-3xl"></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-center mb-2">Lucia Ferreira</h3>
                    <p className="text-center text-neutral-600 mb-2">Diretora de Formação</p>
                    <p className="text-center text-sm text-neutral-500">Gestão 2023-2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12" id="estatuto">
                <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6">Estatuto</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    O Estatuto do SINAFITE-DF é o documento que estabelece as normas de organização e funcionamento do sindicato, definindo seus objetivos, estrutura administrativa, direitos e deveres dos filiados, entre outros aspectos importantes.
                  </p>
                  <p>
                    A última atualização do Estatuto foi aprovada em Assembleia Geral realizada em 15 de março de 2022, incorporando mudanças necessárias para adequação às novas realidades da categoria e do sindicalismo.
                  </p>
                  <div className="flex justify-center mt-6">
                    <Button className="bg-[#1A3A6E]">
                      <i className="fas fa-download mr-2"></i>
                      Baixar Estatuto (PDF)
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12" id="associe-se">
                <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6">Associe-se</h2>
                <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                  <h3 className="font-montserrat font-semibold text-xl mb-4">Como se tornar um filiado</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Para se associar ao SINAFITE-DF, o Auditor Fiscal do Tesouro do Distrito Federal (ativo ou aposentado) deve preencher a ficha de filiação e entregá-la na sede do sindicato, junto com a documentação necessária.
                    </p>
                    <h4>Documentos necessários:</h4>
                    <ul>
                      <li>Cópia do RG e CPF</li>
                      <li>Comprovante de residência</li>
                      <li>Último contracheque</li>
                      <li>Foto 3x4 recente</li>
                    </ul>
                    <p>
                      A contribuição sindical corresponde a 1% do vencimento base, descontada diretamente em folha de pagamento após autorização do filiado.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <Button className="bg-[#1A3A6E]">
                        <i className="fas fa-download mr-2"></i>
                        Baixar Ficha de Filiação
                      </Button>
                      <Button variant="outline">
                        <i className="fas fa-envelope mr-2"></i>
                        Solicitar Informações
                      </Button>
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

export default AboutPage;
