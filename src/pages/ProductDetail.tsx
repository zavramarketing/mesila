import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Check, X, Minus, Plus } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Toodet ei leitud</h1>
          <Link
            to="/pood"
            className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:text-amber transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tagasi poodi
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/pood"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tagasi poodi
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="aspect-square rounded-xl overflow-hidden bg-white border border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="bg-white rounded-xl border border-border p-6 md:p-8">
            {/* Category & Stock */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-secondary">{product.categoryName}</span>
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-sm bg-amber text-primary px-3 py-1 rounded-full font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Laos
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-sm bg-border text-secondary px-3 py-1 rounded-full">
                  <X className="w-3.5 h-3.5" />
                  Otsas
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-primary">{product.name}</h1>
            <p className="mt-1 text-secondary">{product.nameRu}</p>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-primary">{product.price.toFixed(2)} €</p>

            {/* Description */}
            <div className="mt-6 pt-6 border-t border-border">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Kirjeldus
              </h2>
              <p className="text-secondary leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity + Add to Cart */}
            {product.inStock && (
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-primary font-semibold w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${
                    added
                      ? 'bg-green-100 text-green-700'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      Lisatud ostukorvi!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Lisa ostukorvi
                    </>
                  )}
                </button>
              </div>
            )}

            {!product.inStock && (
              <div className="mt-8">
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold bg-border text-secondary cursor-not-allowed"
                >
                  Laos otsas
                </button>
              </div>
            )}

            {/* Shipping Info */}
            <div className="mt-6 flex items-start gap-3 text-sm text-secondary">
              <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-base">📦</span>
              </div>
              <div>
                <p className="font-medium text-primary">Tarne üle Eesti</p>
                <p>1–3 tööpäeva jooksul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary">Seotud tooted</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
