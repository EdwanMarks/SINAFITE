import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import LatestNews from '@/components/home/LatestNews';
import Resources from '@/components/home/Resources';
import Newsletter from '@/components/home/Newsletter';
import Contact from '@/components/home/Contact';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sinafite-DF | Sindicato dos Auditores Fiscais do DF</title>
        <meta name="description" content="Representando e defendendo os interesses dos funcionários integrantes da Carreira Auditoria Fiscal do Tesouro do Distrito Federal." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <LatestNews />
          <Resources />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
