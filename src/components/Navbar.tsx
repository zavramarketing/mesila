import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Avaleht', path: '/' },
    { name: 'Pood', path: '/pood' },
    { name: 'Meist', path: '/meist' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Backdrop — closes cart when clicking outside */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center overflow-hidden h-16">
              <img src="/logo.png" alt="Mesila" className="h-32 w-auto" />
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

            {/* Cart Button */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setCartOpen((v) => !v)}
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors relative"
              >
                <ShoppingBag className="w-4 h-4" />
                Minu ostukorv
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
            </div>

            {/* Mobile: cart icon + burger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setCartOpen((v) => !v)}
                className="relative p-2 text-primary"
                aria-label="Ostukorv"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber text-primary text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-cream transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Cart Dropdown */}
          {cartOpen && (
            <div className="md:hidden border-t border-border">
              <CartDropdown onClose={() => setCartOpen(false)} />
            </div>
          )}

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
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
