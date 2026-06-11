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
      description: 'Kõik tooted on testitud ja vastavad Euroopa standarditele.',
    },
    {
      icon: Truck,
      title: 'Kiire tarne',
      description: 'Tellimused saadetakse 1–3 tööpäeva jooksul üle kogu Eesti.',
    },
    {
      icon: Headphones,
      title: 'Professionaalne nõustamine',
      description: 'Oleme aastate jooksul kogunud väärtuslikke kogemusi ja oleme alati valmis mesinikke nõustama.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-amber py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Kõik, mida mesinik vajab
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary/80">
              Kvaliteetsed mesindustarbed, kaitseriietus ja mee töötlemise seadmed. Üle 25-aastase kogemusega Eesti mesinike teenistuses.
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
        {/* Honey drip - overlaps the section below */}
        <div
          className="absolute left-0 w-full z-10 pointer-events-none"
          style={{ bottom: '-110px', height: '140px' }}
        >
          <svg
            viewBox="0 0 1440 130"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%', height: '100%' }}
          >
            <path
              fill="#E8960C"
              d="M0,0 L1440,0 L1440,30 L1400,30
              C1390,30 1372,108 1360,118 C1348,108 1330,30 1320,30
              L1280,30
              C1270,30 1252,95 1240,105 C1228,95 1210,30 1200,30
              L1160,30
              C1150,30 1132,122 1120,128 C1108,122 1090,30 1080,30
              L1040,30
              C1030,30 1012,82 1000,92 C988,82 970,30 960,30
              L920,30
              C910,30 892,112 880,118 C868,112 850,30 840,30
              L800,30
              C790,30 772,88 760,98 C748,88 730,30 720,30
              L680,30
              C670,30 652,118 640,125 C628,118 610,30 600,30
              L560,30
              C550,30 532,78 520,88 C508,78 490,30 480,30
              L440,30
              C430,30 412,105 400,115 C388,105 370,30 360,30
              L320,30
              C310,30 292,93 280,103 C268,93 250,30 240,30
              L200,30
              C190,30 172,118 160,125 C148,118 130,30 120,30
              L80,30
              C70,30 52,86 40,96 C28,86 10,30 0,30
              Z"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pt-36 pb-16 md:pt-40 md:pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Tootekategooriad</h2>
            <p className="mt-4 text-secondary">Vali vajalike tarvikute kategooria:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/pood?kategooria=${category.id}`}
                className="group bg-white rounded-xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img src={category.icon} alt={category.name} className="w-12 h-12 mx-auto object-contain" />
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
              <p className="mt-2 text-secondary">Parimad valikud mesinikele.</p>
            </div>
            <Link
              to="/pood"
              className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-amber transition-colors"
            >
              Vaata kõiki →
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Miks valida Mesila?</h2>
            <p className="mt-4 text-secondary">Aastatepikkune kogemus ja pühendumus kvaliteedile.</p>
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
            Alusta valmistumist mesindushooajaks!
          </h2>
          <p className="mt-4 text-white/80">
            Vali parimad tooted oma tarude jaoks ja naudi suve koos mesilastega.
          </p>
          <Link
            to="/pood"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Telli kohe
          </Link>
        </div>
      </section>
    </div>
  );
}
