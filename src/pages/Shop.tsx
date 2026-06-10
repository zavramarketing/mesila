import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('kategooria') || '';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === '' || product.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? '' : categoryId);
    if (categoryId === activeCategory) {
      searchParams.delete('kategooria');
    } else {
      searchParams.set('kategooria', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Pood</h1>
          <p className="mt-2 text-secondary">Leia kvaliteetsed mesindustarbed</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
          <input
            type="text"
            placeholder="Otsi toodet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              setActiveCategory('');
              searchParams.delete('kategooria');
              setSearchParams(searchParams);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === ''
                ? 'bg-primary text-white'
                : 'bg-white border border-border text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            Kõik
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-secondary mb-6">
          Leitud {filteredProducts.length} toodet
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-secondary text-lg">Tooteid ei leitud</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('');
                setSearchParams(new URLSearchParams());
              }}
              className="mt-4 text-primary font-medium hover:text-amber transition-colors"
            >
              Selgitage filtrid
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
