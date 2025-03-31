import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import NewsSection from '@/components/home/NewsSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import EventsSection from '@/components/home/EventsSection';
import ContactSection from '@/components/home/ContactSection';
import CTASection from '@/components/home/CTASection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Set document title when component mounts
    document.title = "Sinafite-DF | Sindicato dos Auditores Fiscais do DF";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <NewsSection />
        <AboutSection />
        <StatsSection />
        <EventsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
