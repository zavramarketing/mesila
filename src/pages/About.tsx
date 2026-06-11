import { Link } from 'react-router-dom';
import { Truck, Clock, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Meist — Mesila lugu ja pühendumus mesinikele
          </h1>
          <p className="mt-2 text-secondary">Üle 25 aasta kogemust mesinduses.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Mesila on asutatud 1999. aastal, mil ühendati kirg mesinduse vastu ja soov pakkuda
                kvaliteetseid mesindustarbeid Eesti mesinikele. Alates esimesest päevast oleme olnud
                pühendunud sellele, et iga toode, mis meie riiulitelt lahkub, vastaks kõrgeimatele
                nõudmistele.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-border">
            <img
              src="/meist.png"
              alt="Mesilased töötavad tarus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team & Values */}
        <div className="bg-white rounded-xl border border-border p-8 md:p-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Asjatundjad, kes tunnevad mesinduse hingeelu
          </h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Meie tiim koosneb endistest ja praegustest mesinikest, kes mõistavad mesinduse
              spetsiifikat, tarude hooldamise eripärasid ning vajadust usaldusväärsete tarvikute
              järele. Alates kaitseriietusest kuni mee töötlemise seadmeteni — kõik meie tooted on
              testitud reaalses töös.
            </p>
            <p>
              Tänaseks oleme Eesti üks juhtivaid mesindustarvikute tarnijaid, teenindades sadu
              kliente üle kogu Eesti. Meie põhiväärtusteks on alati kvaliteet, tõhusus ja kliendi
              rahulolu.
            </p>
          </div>
        </div>

        {/* Delivery & Contact */}
        <div className="bg-white rounded-xl border border-border p-8 md:p-10">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">
            Tarne ja kontakt
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber/10 rounded-xl mb-4">
                <Truck className="w-6 h-6 text-amber" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Kiire tarne</h4>
              <p className="text-secondary text-sm">
                Tellimused jõuavad kohale 1–3 tööpäeva jooksul üle kogu Eesti.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber/10 rounded-xl mb-4">
                <Clock className="w-6 h-6 text-amber" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Meie lahtiolekuajad</h4>
              <p className="text-secondary text-sm">E–P 9.00–17.00</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber/10 rounded-xl mb-4">
                <Phone className="w-6 h-6 text-amber" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Helistage meile</h4>
              <p className="text-secondary text-sm">+372 512 345 67</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber/10 rounded-xl mb-4">
                <Mail className="w-6 h-6 text-amber" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Kirjutage meile</h4>
              <p className="text-secondary text-sm">info@mesila.ee</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Võtke ühendust
          </Link>
        </div>
      </div>
    </div>
  );
}
