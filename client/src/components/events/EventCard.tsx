import { Link } from 'wouter';
import { Event } from '@/lib/types';
import { formatDate, formatTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const eventEndDate = event.endDate ? new Date(event.endDate) : null;
  
  const formattedDate = formatDate(eventDate);
  const startTime = formatTime(eventDate);
  const endTime = eventEndDate ? formatTime(eventEndDate) : '';
  
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="bg-[#1A3A6E] text-white p-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{formattedDate}</div>
          <div className="text-xs text-neutral-200">{startTime}{endTime ? ` - ${endTime}` : ''}</div>
        </div>
        <span className="bg-white text-[#1A3A6E] text-xs font-semibold px-3 py-1 rounded-full">
          {event.isOnline ? 'Online' : 'Presencial'}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl mb-3 text-neutral-800">{event.title}</h3>
        <p className="text-neutral-600 mb-4">{event.description}</p>
        <div className="flex items-center text-neutral-500 mb-4">
          <i className={`fas ${event.isOnline ? 'fa-video' : 'fa-map-marker-alt'} mr-2`}></i>
          <span>{event.location}</span>
        </div>
        <Link href={`/eventos/${event.id}`}>
          <Button variant="outline" className="bg-neutral-100 hover:bg-neutral-200 text-[#1A3A6E] text-sm">
            Mais informações
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
