'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { CATEGORIES, EventCategory } from '@/data/types';

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Music' as EventCategory,
    date: '',
    time: '',
    location: '',
    imageUrl: '',
    price: '',
    capacity: '',
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log('Event created:', formData);
    alert('Event created successfully! (This is a wireframe - no backend)');
    router.push('/events');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFree = formData.price === '' || formData.price === '0';

  return (
    <div className="container-custom py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-bold text-text-primary mb-2">
            Create New Event
          </h1>
          <p className="text-sm text-text-secondary">
            Fill in the details below to create your event
          </p>
        </div>

        {/* Toggle Preview */}
        <div className="mb-5 flex items-center gap-2 border-b border-border">
          <button
            onClick={() => setShowPreview(false)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
              !showPreview
                ? 'border-button-primary text-button-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
              showPreview
                ? 'border-button-primary text-button-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            Preview
          </button>
        </div>

        {/* Form */}
        {!showPreview ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Event Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-text-primary mb-2">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Summer Music Festival 2025"
                className="input"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-text-primary mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="input cursor-pointer"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell people what your event is about..."
                rows={6}
                className="input resize-none"
              />
              <p className="text-xs text-text-secondary mt-1">
                {formData.description.length} characters
              </p>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-text-primary mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-text-primary mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-text-primary mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Central Park, New York"
                className="input"
              />
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-text-primary mb-2">
                Image URL *
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                required
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="input"
              />
              <p className="text-xs text-text-secondary mt-1">
                Provide a URL to an image that represents your event
              </p>
            </div>

            {/* Price and Capacity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-text-primary mb-2">
                  Price (USD) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0 for free"
                  className="input"
                />
                {isFree && (
                  <p className="text-xs text-text-secondary mt-1">
                    This event will be marked as Free
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-text-primary mb-2">
                  Capacity *
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  required
                  min="1"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="Maximum attendees"
                  className="input"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" variant="primary" className="flex-1">
                Create Event
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          /* Preview */
          <div className="card p-5">
            <div className="mb-3">
              <Badge>{formData.category}</Badge>
            </div>

            <h2 className="text-xl font-bold text-text-primary mb-3">
              {formData.title || 'Your Event Title'}
            </h2>

            {formData.imageUrl && (
              <div className="w-full h-48 bg-background-tertiary rounded mb-4 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={formData.imageUrl}
                  alt="Event preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                  }}
                />
              </div>
            )}

            <div className="space-y-2.5 mb-4">
              <div className="flex items-start gap-2">
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
                  <div className="text-xs text-text-secondary">Date & Time</div>
                  <div className="text-sm font-medium text-text-primary">
                    {formData.date || 'Not set'} at {formData.time || 'Not set'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
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
                  <div className="text-xs text-text-secondary">Location</div>
                  <div className="text-sm font-medium text-text-primary">
                    {formData.location || 'Not set'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-text-primary mb-1.5">Description</h3>
              <p className="text-sm text-text-secondary">
                {formData.description || 'No description provided'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div>
                <div className="text-xs text-text-secondary">Price</div>
                <div className="text-xl font-bold text-text-primary">
                  {isFree ? 'Free' : `$${formData.price}`}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-secondary">Capacity</div>
                <div className="text-xl font-bold text-text-primary">
                  {formData.capacity || '0'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
