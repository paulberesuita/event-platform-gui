import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    Platform: [
      { label: 'Browse Events', href: '/events' },
      { label: 'Create Event', href: '/create' },
      { label: 'How It Works', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-background-secondary border-t border-border mt-12">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-button-primary rounded flex items-center justify-center">
                <span className="text-text-inverse font-semibold text-sm">E</span>
              </div>
              <span className="font-semibold text-base text-text-primary">Events</span>
            </div>
            <p className="text-xs text-text-secondary">
              Discover and create amazing events in your community.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-sm text-text-primary mb-2">{category}</h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-5 border-t border-border">
          <p className="text-xs text-text-secondary text-center">
            © 2025 Events Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
