import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Event } from '@/lib/types';
import { formatDateTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, MapPin, Video, Calendar, Share2, Clock } from 'lucide-react';

const EventDetail = () => {
  const [match, params] = useRoute('/eventos/:id');
  const eventId = params?.id ? parseInt(params.id) : null;
  
  const { data: event, isLoading, error } = useQuery<Event>({
    queryKey: [`/api/events/${eventId}`],
    enabled: !!eventId,
  });
  
  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Sinafite-DF`;
    }
  }, [event]);
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="flex items-center mb-6">
              <Skeleton className="h-4 w-32 mr-4" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-60 w-full rounded-lg mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !event) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="font-montserrat font-bold text-2xl mb-4">Evento não encontrado</h1>
            <p className="text-neutral-600 mb-6">
              O evento que você está procurando não existe ou foi removido.
            </p>
            <Link href="/eventos">
              <Button className="bg-[#1A3A6E]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Eventos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const eventDate = new Date(event.date);
  const eventEndDate = event.endDate ? new Date(event.endDate) : null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <Link href="/eventos">
              <button className="flex items-center text-white mb-6 hover:text-amber-300 transition">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para todos os eventos
              </button>
            </Link>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">{event.title}</h1>
            <div className="flex items-center flex-wrap gap-3">
              <span className="flex items-center text-neutral-200">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDateTime(eventDate)}
              </span>
              {eventEndDate && (
                <span className="flex items-center text-neutral-200">
                  <Clock className="mr-2 h-4 w-4" />
                  Término: {formatDateTime(eventEndDate)}
                </span>
              )}
              <span className="bg-white text-[#1A3A6E] text-xs font-semibold px-3 py-1 rounded-full">
                {event.isOnline ? 'Online' : 'Presencial'}
              </span>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-50 p-6 md:p-8 rounded-lg border border-neutral-200 mb-8">
                <div className="flex items-center mb-4">
                  {event.isOnline ? (
                    <Video className="h-6 w-6 text-[#1A3A6E] mr-3" />
                  ) : (
                    <MapPin className="h-6 w-6 text-[#1A3A6E] mr-3" />
                  )}
                  <h3 className="font-montserrat font-semibold text-lg">
                    {event.isOnline ? 'Evento Online' : 'Local do Evento'}
                  </h3>
                </div>
                <p className="text-neutral-700">{event.location}</p>
                {event.isOnline && (
                  <p className="text-neutral-600 mt-2 text-sm">
                    O link de acesso será enviado por email para os participantes confirmados.
                  </p>
                )}
              </div>
              
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Sobre o Evento</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>{event.description}</p>
              </div>
              
              <div className="bg-neutral-50 p-6 md:p-8 rounded-lg border border-neutral-200 mb-8">
                <h3 className="font-montserrat font-semibold text-xl mb-4">Informações Adicionais</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-[#1A3A6E] rounded-full p-2 mr-3 mt-1">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Público-alvo</h4>
                      <p className="text-neutral-600">Auditores Fiscais filiados ao SINAFITE-DF</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-[#1A3A6E] rounded-full p-2 mr-3 mt-1">
                      <i className="fas fa-ticket-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Inscrição</h4>
                      <p className="text-neutral-600">Gratuita para filiados. Necessário confirmar presença.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-[#1A3A6E] rounded-full p-2 mr-3 mt-1">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Observações</h4>
                      <p className="text-neutral-600">Material de apoio será disponibilizado após o evento na área do sindicalizado.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button className="bg-[#1A3A6E] hover:bg-blue-900">
                  <i className="fas fa-check-circle mr-2"></i>
                  Confirmar Presença
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => navigator.share?.({
                    title: event.title,
                    text: event.description,
                    url: window.location.href
                  }).catch(err => console.error('Error sharing', err))}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                  
                  <Button variant="outline">
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Adicionar ao Calendário
                  </Button>
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

export default EventDetail;
