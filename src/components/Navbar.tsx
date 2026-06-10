import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Avaleht', path: '/' },
    { name: 'Pood', path: '/pood' },
    { name: 'Meist', path: '/meist' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary tracking-tight">MESILA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/pood"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Telli nüüd
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-secondary hover:text-primary hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-cream text-primary'
                      : 'text-secondary hover:text-primary hover:bg-cream'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/pood"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                <ShoppingBag className="w-4 h-4" />
                Telli nüüd
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
