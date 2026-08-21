import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Truck, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const DELIVERY_OPTIONS = [
  { id: 'omniva', label: 'Omniva pakiautomaat', price: 2.99, icon: '📦' },
  { id: 'dpd', label: 'DPD pakiautomaat', price: 2.99, icon: '📦' },
  { id: 'courier', label: 'Kulleriteenus (ukseni)', price: 5.99, icon: '🚚' },
];

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [delivery, setDelivery] = useState('omniva');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '',
  });

  const deliveryPrice = DELIVERY_OPTIONS.find((d) => d.id === delivery)?.price ?? 2.99;
  const grandTotal = totalPrice + deliveryPrice;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 mx-auto text-secondary opacity-30 mb-4" />
          <h1 className="text-2xl font-bold text-primary mb-2">Ostukorv on tühi</h1>
          <Link to="/pood" className="text-amber font-medium hover:underline">
            Vaata poodi →
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-border p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-3">Tellimus edastatud!</h1>
          <p className="text-secondary mb-2">
            Täname ostu eest. Saatsime kinnituse aadressile <strong>{form.email}</strong>.
          </p>
          <p className="text-secondary text-sm mb-8">
            Tellimus jõuab kohale 1–3 tööpäeva jooksul.
          </p>
          <Link
            to="/pood"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Tagasi poodi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/pood" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Tagasi poodi
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-primary mb-8">Vormista tellimus</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left: form */}
            <div className="md:col-span-3 space-y-6">

              {/* Contact */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-bold text-primary text-lg mb-5">Kontaktandmed</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Nimi *</label>
                    <input
                      type="text" name="name" required value={form.name}
                      onChange={handleChange} placeholder="Teie täisnimi"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">E-post *</label>
                    <input
                      type="email" name="email" required value={form.email}
                      onChange={handleChange} placeholder="teie@email.ee"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Telefon *</label>
                    <input
                      type="tel" name="phone" required value={form.phone}
                      onChange={handleChange} placeholder="+372 ..."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-bold text-primary text-lg mb-5 flex items-center gap-2">
                  <Truck className="w-5 h-5" /> Tarneviis
                </h2>
                <div className="space-y-3">
                  {DELIVERY_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                        delivery === opt.id
                          ? 'border-primary bg-cream'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio" name="delivery" value={opt.id}
                          checked={delivery === opt.id}
                          onChange={() => setDelivery(opt.id)}
                          className="accent-amber"
                        />
                        <span className="text-lg">{opt.icon}</span>
                        <span className="text-sm font-medium text-primary">{opt.label}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{opt.price.toFixed(2)} €</span>
                    </label>
                  ))}
                </div>
                {delivery === 'courier' && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-primary mb-1">Tarneaadress *</label>
                    <input
                      type="text" name="address" required value={form.address}
                      onChange={handleChange} placeholder="Tänav, maja, linn"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right: order summary */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl border border-border p-6 sticky top-24">
                <h2 className="font-bold text-primary text-lg mb-5">Tellimuse kokkuvõte</h2>
                <div className="space-y-3 mb-5">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-3">
                      <img
                        src={product.image} alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-cream flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary truncate">{product.name}</p>
                        <p className="text-xs text-secondary">×{quantity}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {(product.price * quantity).toFixed(2)} €
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-secondary">
                    <span>Tooted</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm text-secondary">
                    <span>Tarne</span>
                    <span>{deliveryPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-primary pt-2 border-t border-border">
                    <span>Kokku</span>
                    <span>{grandTotal.toFixed(2)} €</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Esita tellimus
                </button>
                <p className="mt-3 text-xs text-secondary text-center">
                  Vajutades nupule nõustute meie tingimustega.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
