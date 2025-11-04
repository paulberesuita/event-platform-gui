import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/data/types';
import Badge from './Badge';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const spotsLeft = event.capacity - event.attendees;
  const isAlmostFull = spotsLeft <= event.capacity * 0.1 && spotsLeft > 0;

  return (
    <Link href={`/events/${event.id}`}>
      <div className="card h-full flex flex-col overflow-hidden group">
        {/* Image */}
        <div className="relative w-full h-44 bg-background-tertiary">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {event.featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-background-primary text-xs">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 mb-2">
            <Badge>{event.category}</Badge>
            {isAlmostFull && (
              <Badge variant="outline" className="text-xs">
                {spotsLeft} left
              </Badge>
            )}
          </div>

          <h3 className="font-semibold text-base text-text-primary mb-1.5 line-clamp-2 group-hover:text-button-primary transition-colors duration-200">
            {event.title}
          </h3>

          <p className="text-xs text-text-secondary mb-3 line-clamp-2 flex-1">
            {event.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-1 text-xs text-text-secondary">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(event.date)}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{event.location}</span>
            </div>

            <div className="flex items-center justify-between pt-2 mt-1 border-t border-border">
              <span className="font-semibold text-sm text-text-primary">
                {event.price === 'Free' ? 'Free' : `$${event.price}`}
              </span>
              <span className="text-xs text-text-secondary">
                {event.attendees} attending
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
