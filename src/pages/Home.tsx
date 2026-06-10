import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const benefits = [
    {
      icon: Shield,
      title: 'Kvaliteet',
      description: 'Kõik tooted on testitud ja sertifitseeritud Euroopa standarditele vastavaks.',
    },
    {
      icon: Truck,
      title: 'Kiire tarne',
      description: 'Tellimused saadetakse 1-3 tööpäeva jooksul üle Eesti.',
    },
    {
      icon: Headphones,
      title: 'Nõustamine',
      description: 'Oleme aastate jooksul kogunud kogemusi ja olevalt valmis nõustama mesindajaid.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-amber py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Kõik mida mesindajale vaja
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary/80">
              Kvaliteetsed mesindustarbed, kaitseriietus ja mee töötlemise seadmed. Üle 25 aasta kogemusega Eesti mesindajate teenistuses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/pood"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Vaata poodi
              </Link>
              <Link
                to="/meist"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Loe meist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Tootekategooriad</h2>
            <p className="mt-4 text-secondary">Vali vajalike tarvet kategooria</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/pood?kategooria=${category.id}`}
                className="group bg-white rounded-xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl">{category.icon}</span>
                <h3 className="mt-4 font-semibold text-primary group-hover:text-amber transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Populaarsed tooted</h2>
              <p className="mt-2 text-secondary">Parimad valikud mesindajatele</p>
            </div>
            <Link
              to="/pood"
              className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-amber transition-colors"
            >
              Vaata kõiki
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/pood"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium"
            >
              Vaata kõiki tooteid
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Miks Mesila?</h2>
            <p className="mt-4 text-secondary">Aastatepikkune kogemus ja pühendumus kvaliteedile</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber/10 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-amber" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-primary">{benefit.title}</h3>
                <p className="mt-3 text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Alusta mesindushooaja valmistumist
          </h2>
          <p className="mt-4 text-white/80">
            Vali parimad tooted oma tarude jaoks ja naudi suve koos mesilastega.
          </p>
          <Link
            to="/pood"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Tellin kohe
          </Link>
        </div>
      </section>
    </div>
  );
}
