import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Event } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import EventCard from '@/components/events/EventCard';

const EventsSection = () => {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Get the three closest future events
  const upcomingEvents = events?.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-neutral-800">Próximos Eventos</h2>
          <Link href="/eventos" className="mt-4 md:mt-0 text-[#1A3A6E] hover:text-blue-800 font-medium flex items-center">
            Ver todos os eventos
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="bg-[#1A3A6E] text-white p-4">
                  <Skeleton className="h-5 w-32 mb-1 bg-blue-400" />
                  <Skeleton className="h-4 w-24 bg-blue-400" />
                </div>
                <div className="p-6">
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-48 mb-4" />
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
            ))
          ) : (
            upcomingEvents?.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
