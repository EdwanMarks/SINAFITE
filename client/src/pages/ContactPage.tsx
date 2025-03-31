import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/home/ContactSection';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contato | Sinafite-DF";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Entre em Contato</h1>
            <p className="text-neutral-100 max-w-3xl">
              Estamos à disposição para atender nossos filiados e responder quaisquer dúvidas. 
              Utilize um dos canais abaixo ou preencha o formulário.
            </p>
          </div>
        </section>
        
        <ContactSection />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-6 text-center">Nossa Localização</h2>
            <div className="max-w-5xl mx-auto rounded-lg overflow-hidden h-96 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.675887248696!2d-47.8941!3d-15.7977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ3JzUyLjciUyA0N8KwNTMnMzguOCJX!5e0!3m2!1spt-BR!2sbr!4v1625155261415!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa com a localização do SINAFITE-DF"
              ></iframe>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
