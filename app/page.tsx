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
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
              Discover Events That Matter
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-body">
              Connect with your community through amazing events. From music festivals to tech conferences, find experiences that inspire you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/events">
                <Button variant="primary" className="w-full sm:w-auto">
                  Browse All Events
                </Button>
              </Link>
              <Link href="/create">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Create an Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container-custom py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-text-primary">
            Featured Events
          </h2>
          <Link href="/events">
            <Button variant="text">View All →</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-background-secondary border-y border-border py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/events?category=${category}`}
                className="card p-6 text-center hover:border-2 hover:border-text-primary transition-all duration-200"
              >
                <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                <h3 className="font-medium text-text-primary">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-text-primary mb-2">1,200+</div>
            <div className="text-text-secondary">Events Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-text-primary mb-2">50K+</div>
            <div className="text-text-secondary">Community Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-text-primary mb-2">100+</div>
            <div className="text-text-secondary">Cities Worldwide</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-button-primary text-text-inverse py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Host Your Own Event?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
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

// Helper function to get category icons (you can customize these)
function getCategoryIcon(category: string): string {
  const icons: { [key: string]: string } = {
    Music: '🎵',
    Tech: '💻',
    Art: '🎨',
    Sports: '⚽',
    Food: '🍔',
    Business: '💼',
    Health: '🧘',
    Education: '📚',
    Entertainment: '🎭',
    Other: '✨',
  };
  return icons[category] || '✨';
}
