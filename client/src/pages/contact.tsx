import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Sinafite-DF</title>
        <meta name="description" content="Entre em contato com o Sinafite-DF, estamos à disposição para ajudar e responder suas dúvidas." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-4xl font-serif font-bold">Entre em Contato</h1>
              <p className="mt-4 text-lg text-neutral-100 max-w-3xl">
                Estamos à disposição para ajudar e responder suas dúvidas. Utilize um dos nossos canais de comunicação.
              </p>
            </div>
          </section>
          
          {/* Contact form and info */}
          <Contact />
          
          {/* Map section */}
          <section className="py-12 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">Nossa Localização</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm p-2 md:p-4">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.211574072887!2d-47.88293062427551!3d-15.790138984520025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b258d6a7e3f%3A0x8f46f86aa3ee94ef!2sSetor%20Banc%C3%A1rio%20Sul%20Q.%202%20-%20Asa%20Sul%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1696874542409!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Sinafite-DF"
                  ></iframe>
                </div>
              </div>
              <div className="text-center mt-6 text-neutral-600">
                <p>SBS Quadra 2, Bloco E, Ed. Prime, Salas 1401-1409, Brasília/DF, CEP 70070-120</p>
              </div>
            </div>
          </section>
          
          {/* FAQ section */}
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">Como me filiar ao Sinafite-DF?</h3>
                  <p className="text-neutral-600">
                    Para se filiar, você precisa preencher o formulário de filiação disponível no site ou na sede do sindicato, apresentar documentos pessoais e comprovante de vínculo com a carreira. Após análise, sua filiação será processada.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">Quais são os benefícios de ser filiado?</h3>
                  <p className="text-neutral-600">
                    Os filiados têm acesso a assessoria jurídica, convênios exclusivos, participação em eventos de capacitação, representação política da categoria, entre outros benefícios detalhados na seção de serviços.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">Como acessar a área restrita do filiado?</h3>
                  <p className="text-neutral-600">
                    Para acessar a área restrita, utilize seu CPF como login e a senha cadastrada. Caso não tenha senha ou a tenha esquecido, clique em "Esqueci minha senha" na página de login.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">Como solicitar assistência jurídica?</h3>
                  <p className="text-neutral-600">
                    Para solicitar assistência jurídica, entre em contato com o departamento jurídico pelo telefone (61) 3321-8482 ou pelo e-mail juridico@sinafite-df.org.br, informando seu nome, matrícula e uma breve descrição do caso.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">O Sinafite-DF oferece cursos de capacitação?</h3>
                  <p className="text-neutral-600">
                    Sim, o sindicato promove regularmente cursos, palestras e seminários para a capacitação profissional dos filiados. A programação é divulgada no site, nas redes sociais e por e-mail aos filiados.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-neutral-600 mb-4">Não encontrou a resposta que procurava?</p>
                <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200">
                  Entre em contato conosco
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
