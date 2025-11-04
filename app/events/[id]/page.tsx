import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getEventById, mockEvents } from '@/data/mockEvents';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import EventCard from '@/components/EventCard';

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const spotsLeft = event.capacity - event.attendees;
  const percentageFilled = (event.attendees / event.capacity) * 100;

  // Get related events (same category, exclude current)
  const relatedEvents = mockEvents
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[320px] bg-background-tertiary">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-button-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="mb-3 text-xs text-text-secondary">
              <Link href="/" className="hover:text-text-primary">Home</Link>
              {' / '}
              <Link href="/events" className="hover:text-text-primary">Events</Link>
              {' / '}
              <span className="text-text-primary">{event.title}</span>
            </div>

            {/* Title and Category */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <Badge>{event.category}</Badge>
                {event.featured && (
                  <Badge variant="outline">Featured</Badge>
                )}
              </div>
              <h1 className="font-bold text-text-primary mb-3">
                {event.title}
              </h1>
            </div>

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
              {/* Date & Time */}
              <div className="card p-3">
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-text-secondary flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-xs text-text-secondary mb-0.5">Date & Time</div>
                    <div className="text-sm font-medium text-text-primary">{formatDate(event.date)}</div>
                    <div className="text-xs text-text-secondary">{event.time}</div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card p-3">
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-text-secondary flex-shrink-0 mt-0.5"
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
                  <div>
                    <div className="text-xs text-text-secondary mb-0.5">Location</div>
                    <div className="text-sm font-medium text-text-primary">{event.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-text-primary mb-2">
                About This Event
              </h2>
              <p className="text-sm text-text-secondary">
                {event.description}
              </p>
            </div>

            {/* Organizer */}
            <div className="card p-4 mb-5">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                Hosted By
              </h3>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-background-tertiary flex-shrink-0">
                  <Image
                    src={event.organizer.avatar}
                    alt={event.organizer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-text-primary">
                    {event.organizer.name}
                  </div>
                  {event.organizer.bio && (
                    <div className="text-xs text-text-secondary">
                      {event.organizer.bio}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Registration Card */}
              <div className="card p-4 mb-4">
                <div className="mb-3">
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {event.price === 'Free' ? 'Free' : `$${event.price}`}
                  </div>
                  {event.price !== 'Free' && (
                    <div className="text-xs text-text-secondary">per person</div>
                  )}
                </div>

                <Button variant="primary" className="w-full mb-3">
                  Register Now
                </Button>

                <div className="border-t border-border pt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-secondary">Attendees</span>
                    <span className="font-medium text-text-primary">{event.attendees}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-secondary">Capacity</span>
                    <span className="font-medium text-text-primary">{event.capacity}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-secondary">Spots Left</span>
                    <span className={`font-medium ${spotsLeft <= event.capacity * 0.1 ? 'text-button-primary' : 'text-text-primary'}`}>
                      {spotsLeft}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-1">
                    <div className="w-full h-1.5 bg-background-tertiary rounded overflow-hidden">
                      <div
                        className="h-full bg-button-primary transition-all duration-200"
                        style={{ width: `${percentageFilled}%` }}
                      />
                    </div>
                    <div className="text-xs text-text-secondary mt-1">
                      {percentageFilled.toFixed(0)}% filled
                    </div>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="card p-4">
                <h3 className="text-sm font-semibold text-text-primary mb-2">Share Event</h3>
                <div className="flex gap-2">
                  <Button variant="secondary" className="flex-1">
                    Share
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Similar Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedEvents.map((relatedEvent) => (
                <EventCard key={relatedEvent.id} event={relatedEvent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
