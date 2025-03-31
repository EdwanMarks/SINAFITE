import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Event } from '@/lib/types';
import EventCard from '@/components/events/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from '@/components/ui/skeleton';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'upcoming' | 'past'>('upcoming');
  
  useEffect(() => {
    document.title = "Eventos | Sinafite-DF";
  }, []);

  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const today = new Date();
  
  const filteredEvents = events?.filter(event => {
    // Filter by search term
    const matchesSearch = !searchTerm || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by event date
    const eventDate = new Date(event.date);
    const isPastEvent = eventDate < today;
    
    if (filterType === 'upcoming' && isPastEvent) return false;
    if (filterType === 'past' && !isPastEvent) return false;
    
    return matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Eventos</h1>
            <p className="text-neutral-100 max-w-3xl">
              Confira nossa agenda de eventos, assembleias, cursos e confraternizações para os associados do SINAFITE-DF.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <Tabs 
                defaultValue="upcoming" 
                className="w-full md:w-auto"
                onValueChange={(value) => setFilterType(value as 'all' | 'upcoming' | 'past')}
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="upcoming">Próximos</TabsTrigger>
                  <TabsTrigger value="past">Anteriores</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="w-full md:w-64 mt-4 md:mt-0">
                <Input
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <Skeleton key={index} className="h-64" />
                ))}
              </div>
            ) : filteredEvents && filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Nenhum evento encontrado</h3>
                <p className="text-neutral-600 mb-6">
                  Não encontramos eventos que correspondam aos seus critérios de busca.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterType('all');
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-2xl text-neutral-800 mb-4">Sugerir um Evento</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
              Tem alguma sugestão de evento, palestra ou atividade para o SINAFITE-DF? 
              Entre em contato conosco e compartilhe suas ideias.
            </p>
            <Button className="bg-[#1A3A6E] hover:bg-blue-900">
              <i className="fas fa-envelope mr-2"></i>
              Enviar Sugestão
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
