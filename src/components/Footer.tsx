import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.png" alt="Mesila" className="h-16 w-auto invert brightness-200" />
            <p className="mt-4 text-white/70 max-w-md">
              Kvaliteetsed mesindustarbed Eesti mesinikele. Üle 25 aasta kogemust valdkonnas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Lingid</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Avaleht
                </Link>
              </li>
              <li>
                <Link to="/pood" className="text-white/70 hover:text-white transition-colors">
                  Pood
                </Link>
              </li>
              <li>
                <Link to="/meist" className="text-white/70 hover:text-white transition-colors">
                  Meist
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-white/70 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                +372 512 345 67
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                info@mesila.ee
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Mesila tn 1, Tallinn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; 2026 Mesila. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}
