import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/toode/${product.id}`}
      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
      <div className="p-4">
        {/* Stock Badge */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-secondary">{product.categoryName}</span>
          {product.inStock ? (
            <span className="text-xs bg-amber text-primary px-2 py-0.5 rounded-full font-medium">
              Laos
            </span>
          ) : (
            <span className="text-xs bg-border text-secondary px-2 py-0.5 rounded-full">
              Lõpp
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-primary group-hover:text-amber transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-secondary">{product.nameRu}</p>

        {/* Price */}
        <p className="mt-3 text-lg font-bold text-primary">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </Link>
  );
}
