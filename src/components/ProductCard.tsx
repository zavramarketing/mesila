import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/toode/${product.id}`}
      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category & Stock */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-secondary">{product.categoryName}</span>
          {product.inStock ? (
            <span className="text-xs bg-amber text-primary px-2 py-0.5 rounded-full font-medium">
              Laos
            </span>
          ) : (
            <span className="text-xs bg-border text-secondary px-2 py-0.5 rounded-full">
              Otsas
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-primary group-hover:text-amber transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-secondary">{product.nameRu}</p>

        {/* Price + Add button */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">{product.price.toFixed(2)} €</p>
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
              !product.inStock
                ? 'bg-border text-secondary cursor-not-allowed'
                : added
                ? 'bg-success-light text-success'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Lisatud
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                Lisa
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
