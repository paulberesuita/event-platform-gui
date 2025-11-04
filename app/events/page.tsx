'use client';

import { useState, useMemo } from 'react';
import EventCard from '@/components/EventCard';
import SearchBar from '@/components/SearchBar';
import Badge from '@/components/Badge';
import { mockEvents } from '@/data/mockEvents';
import { CATEGORIES, EventCategory } from '@/data/types';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceFilter, setPriceFilter] = useState<string>('All');

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      // Search filter
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      // Price filter
      const matchesPrice =
        priceFilter === 'All' ||
        (priceFilter === 'Free' && event.price === 'Free') ||
        (priceFilter === 'Paid' && event.price !== 'Free');

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceFilter]);

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bold text-text-primary mb-2">
          Discover Events
        </h1>
        <p className="text-sm text-text-secondary">
          Find your next adventure from {mockEvents.length} events
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search events by name, description, or location..."
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input cursor-pointer"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Price
            </label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="input cursor-pointer"
            >
              <option value="All">All Prices</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategory !== 'All' || priceFilter !== 'All' || searchQuery) && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-text-secondary">Active filters:</span>

          {selectedCategory !== 'All' && (
            <Badge>
              {selectedCategory}
              <button
                onClick={() => setSelectedCategory('All')}
                className="ml-2 hover:text-button-primary"
              >
                ×
              </button>
            </Badge>
          )}

          {priceFilter !== 'All' && (
            <Badge>
              {priceFilter}
              <button
                onClick={() => setPriceFilter('All')}
                className="ml-2 hover:text-button-primary"
              >
                ×
              </button>
            </Badge>
          )}

          {searchQuery && (
            <Badge>
              Search: &quot;{searchQuery}&quot;
              <button
                onClick={() => setSearchQuery('')}
                className="ml-2 hover:text-button-primary"
              >
                ×
              </button>
            </Badge>
          )}

          <button
            onClick={() => {
              setSelectedCategory('All');
              setPriceFilter('All');
              setSearchQuery('');
            }}
            className="text-sm text-text-secondary hover:text-text-primary underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-text-secondary">
          Showing <span className="font-semibold text-text-primary">{filteredEvents.length}</span> events
        </p>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            No events found
          </h3>
          <p className="text-sm text-text-secondary mb-5">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setPriceFilter('All');
              setSearchQuery('');
            }}
            className="btn btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
