import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Kontakt — Võta meiega ühendust
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Meie andmed</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Telefon</h3>
                    <p className="text-secondary mt-1">+372 512 345 67</p>
                    <p className="text-sm text-secondary mt-1">E–P 9.00–17.00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">E-post</h3>
                    <p className="text-secondary mt-1">info@mesila.ee</p>
                    <p className="text-sm text-secondary mt-1">Vastame 24 tunni jooksul.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Aadress</h3>
                    <p className="text-secondary mt-1">Mesila tn 1, Tallinn, Eesti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Kirjuta meile</h2>
            <div className="bg-white rounded-xl border border-border p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber/10 rounded-full mb-4">
                    <Check className="w-8 h-8 text-amber" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    Sõnum saadetud!
                  </h3>
                  <p className="text-secondary mt-2">
                    Võtame teiega ühendust peatselt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow"
                      placeholder="Teie nimi"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow"
                      placeholder="teie@email.ee"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow"
                      placeholder="+372 ..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Sõnum *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-shadow resize-none"
                      placeholder="Kirjeldage oma küsimust või tellimust..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Saada päring
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
