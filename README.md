# Events Platform Wireframe/Prototype

A clean, minimal events platform wireframe built with Next.js 15, TypeScript, and Tailwind CSS. This project focuses on UI design and visual aesthetics with no backend services - using only mock data.

## Design System

### Color Palette
- **Backgrounds**: #FAFAF9 (primary), #F4F2EE (secondary), #EBE7E0 (tertiary)
- **Text**: #2C2C2C (primary), #5A5A5A (secondary), #1A1A1A (buttons/CTAs)
- **Pure flat design** - NO shadows or gradients
- Visual hierarchy through spacing, typography, borders, and color steps

### Typography
- **Font**: Inter (via Google Fonts)
- **Hierarchy**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- **Line height**: 1.6 for body text, 1.2 for headings

### Layout System
- **Spacing**: 8px base unit system (8px, 16px, 24px, 32px, etc.)
- **Border radius**: 4-8px for modern minimal feel
- **Borders**: 1px normal, 2px for hover/focus states
- **Responsive**: Mobile-first design (mobile, tablet, desktop)

### Interactions
- Color transitions only (no transforms/lifts)
- Border weight changes on hover/focus
- Smooth transitions (200ms ease)

## Features

### Pages

1. **Homepage** (`/`)
   - Hero section with CTA buttons
   - Featured events grid
   - Browse by category section
   - Platform statistics
   - Bottom CTA section

2. **Events Browse** (`/events`)
   - Search functionality
   - Category and price filters
   - Responsive events grid
   - Active filters with clear options
   - Empty state handling

3. **Event Detail** (`/events/[id]`)
   - Large hero image
   - Event information cards (date, time, location)
   - Full description
   - Organizer information
   - Registration sidebar with capacity tracking
   - Related events section

4. **Create Event** (`/create`)
   - Multi-field form with validation
   - Real-time preview toggle
   - Category selection
   - Image URL input
   - Pricing and capacity settings

### Components

- **Header** - Navigation with logo and links
- **Footer** - Multi-column footer with links
- **Button** - Primary, Secondary, Text variants
- **Badge** - Category tags and status indicators
- **EventCard** - Reusable event display card
- **SearchBar** - Search input with icon
- **Input** - Styled form inputs with focus states

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI**: React 18
- **Data**: Mock JSON data (no database)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event-platform-gui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
event-platform-gui/
├── app/                      # Next.js app directory
│   ├── create/              # Create event page
│   ├── events/              # Events browse and detail pages
│   │   └── [id]/           # Dynamic event detail page
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and design system
├── components/              # Reusable React components
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── EventCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── SearchBar.tsx
├── data/                    # Mock data and types
│   ├── types.ts            # TypeScript interfaces
│   └── mockEvents.ts       # Sample event data
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Mock Data

The project includes 12 sample events across various categories:
- Music (Summer Music Festival, Jazz in the Garden)
- Tech (Tech Innovation Summit, Web Development Bootcamp)
- Art (Modern Art Exhibition, Digital Art Workshop)
- Sports (Marathon for Charity, Community Basketball Tournament)
- Food (Street Food Festival)
- Business (Startup Pitch Night)
- Health (Yoga & Wellness Retreat)
- Entertainment (Comedy Night Extravaganza)

All data is hardcoded in `/data/mockEvents.ts` - no backend or API calls.

## Design Principles

1. **Minimalism**: Clean layouts with generous whitespace
2. **Flat Design**: No shadows, gradients, or 3D effects
3. **Typography-First**: Clear hierarchy through font weights and sizes
4. **Color Restraint**: Limited neutral palette for sophistication
5. **Responsive**: Mobile-first approach with breakpoints
6. **Accessible**: Semantic HTML and proper contrast ratios

## Customization

### Modify Colors
Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  background: {
    primary: '#FAFAF9',
    secondary: '#F4F2EE',
    tertiary: '#EBE7E0',
  },
  // ... more colors
}
```

### Add Mock Events
Edit `/data/mockEvents.ts` to add or modify sample events:

```typescript
export const mockEvents: Event[] = [
  {
    id: 'new-event',
    title: 'Your Event',
    // ... event properties
  }
];
```

### Modify Spacing
The 8px spacing system is defined in `tailwind.config.ts`:

```typescript
spacing: {
  '1': '8px',
  '2': '16px',
  '3': '24px',
  // ... more spacing values
}
```

## Future Enhancements

Since this is a wireframe, here are potential next steps:

- Add backend API (REST or GraphQL)
- Implement user authentication
- Add real database (PostgreSQL, MongoDB)
- Event registration/ticketing system
- Payment integration
- Email notifications
- Event calendar view
- Map integration for locations
- User profiles and dashboards
- Social features (comments, likes, shares)

## License

This is a wireframe/prototype project for demonstration purposes.

## Notes

- This is a **wireframe only** - no backend functionality
- All event data is **mock/hardcoded**
- Form submissions show alerts but don't persist data
- Registration buttons are non-functional (UI only)
- No authentication or user management
- No actual payment processing
