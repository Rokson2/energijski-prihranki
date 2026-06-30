import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Prihranite pri energiji
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Neodvisne primerjave, pametni kalkulatorji in nasveti za nižje stroške
          ogrevanja in elektrike v Sloveniji.
        </p>
        <Link
          href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
        >
          🖩 Začnite z izračunom
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-3">🖩</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Kalkulator ogrevanja</h2>
          <p className="text-gray-600 text-sm">
            Primerjajte stroške ogrevanja s toplotno črpalko in plinskim kotlom.
            Upošteva vašo hišo, cene energentov in subvencije.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-3">📊</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Neodvisne primerjave</h2>
          <p className="text-gray-600 text-sm">
            Brez oglaševalskih vplivov. Podatki temeljijo na uradnih virih
            in realnih cenah energentov v Sloveniji.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-4xl mb-3">💰</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Subvencije in prihranki</h2>
          <p className="text-gray-600 text-sm">
            Informacije o Eko sklad subvencijah in povračilnih dobah
            za različne energetske naložbe.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Zakaj Energijski Prihranki?
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">📈 Cene energije rastejo</h3>
              <p>
                Stroški ogrevanja in elektrike v Sloveniji naraščajo. Pametne odločitve
                danes pomenijo tisoče evrov prihrankov v prihodnosti.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🎯 Državne subvencije</h3>
              <p>
                Eko sklad in Borzen ponujata do 6.750 € nepovratnih sredstev za sončne elektrarne
                in toplotne črpalke. Večina ljudi ne izkoristi vseh možnosti.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🔧 Neodvisno svetovanje</h3>
              <p>
                Za razliko od prodajalcev in monterjev nimamo interesa prodati vam
                določenega produkta. Naše primerjave so objektivne.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🏠 Narejeno za Slovenijo</h3>
              <p>
                Upoštevamo slovenske cene energentov, podnebne razmere, zakonodajo
                in specifike lokalnega trga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Pripravljeni na izračun?
        </h2>
        <Link
          href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
        >
          🚀 Odprite kalkulator
        </Link>
      </section>
    </div>
  );
}
