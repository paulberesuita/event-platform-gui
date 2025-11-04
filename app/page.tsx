import Link from 'next/link';
import EventCard from '@/components/EventCard';
import Button from '@/components/Button';
import { getFeaturedEvents } from '@/data/mockEvents';
import { CATEGORIES } from '@/data/types';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-secondary border-b border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="font-bold text-text-primary mb-3">
              Discover Events That Matter
            </h1>
            <p className="text-base text-text-secondary mb-6">
              Connect with your community through curated events. From music festivals to tech conferences, find experiences that inspire you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/events">
                <Button variant="primary" className="w-full sm:w-auto">
                  Browse Events
                </Button>
              </Link>
              <Link href="/create">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Create Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container-custom py-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-text-primary">
            Featured Events
          </h2>
          <Link href="/events">
            <Button variant="text">View All →</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-background-secondary border-y border-border py-10">
        <div className="container-custom">
          <h2 className="font-semibold text-text-primary mb-5">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/events?category=${category}`}
                className="card p-4 text-center transition-all duration-200"
              >
                <h3 className="text-sm font-medium text-text-primary">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">1,200+</div>
            <div className="text-sm text-text-secondary">Events Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">50K+</div>
            <div className="text-sm text-text-secondary">Community Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">100+</div>
            <div className="text-sm text-text-secondary">Cities Worldwide</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-button-primary text-text-inverse py-12">
        <div className="container-custom text-center">
          <h2 className="font-bold mb-3">
            Ready to Host Your Own Event?
          </h2>
          <p className="text-sm mb-6 opacity-90 max-w-xl mx-auto">
            Create memorable experiences for your community. Our platform makes it easy to organize and promote your events.
          </p>
          <Link href="/create">
            <Button variant="secondary" className="bg-text-inverse text-button-primary hover:bg-background-secondary">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
