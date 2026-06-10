import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
  onClose: () => void;
}

export default function CartDropdown({ onClose }: CartDropdownProps) {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2 w-96 bg-white rounded-xl border border-border shadow-xl z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h3 className="font-bold text-primary text-lg">Minu ostukorv</h3>
        <button onClick={onClose} className="text-secondary hover:text-primary transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="py-12 text-center text-secondary">
          <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">Ostukorv on tühi</p>
          <Link
            to="/pood"
            onClick={onClose}
            className="mt-4 inline-block text-sm text-amber font-medium hover:underline"
          >
            Vaata poodi →
          </Link>
        </div>
      ) : (
        <>
          {/* Items */}
          <div className="max-h-80 overflow-y-auto divide-y divide-border">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3 px-5 py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0 bg-cream"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-primary leading-tight truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-secondary mt-0.5">{product.nameRu}</p>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-primary w-5 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">
                        {(product.price * quantity).toFixed(2)} €
                      </span>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-secondary hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondary text-sm">Kokku</span>
              <span className="text-xl font-bold text-primary">{totalPrice.toFixed(2)} €</span>
            </div>
            <Link
              to="/tellimus"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Vormista tellimus
            </Link>
            <button
              onClick={() => { clearCart(); onClose(); }}
              className="w-full mt-2 text-sm text-secondary hover:text-primary transition-colors py-1"
            >
              Tühjenda ostukorv
            </button>
          </div>
        </>
      )}
    </div>
  );
}
