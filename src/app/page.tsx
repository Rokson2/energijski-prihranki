import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* ── Full-bleed hero with image + text overlay ── */}
      <section className="relative h-[80vh] min-h-[500px] max-h-[700px]">
        <Image
          src="/images/solar-hero.webp"
          alt="Sončna energija za slovenski dom"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/10" />

        {/* Centered content on image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white/90 mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
                Neodvisen vir — narejeno za Slovenijo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-sora font-semibold tracking-tight text-white leading-[1.05] mb-5 animate-slide-up">
                Prihranite pri
                <br />
                <span className="text-signal">energiji</span> doma
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md animate-slide-up">
                Neodvisne primerjave, pametni kalkulatorji in nasveti za nižje
                stroške ogrevanja in elektrike.
              </p>
              <div className="flex flex-wrap gap-3 animate-slide-up">
                <Link
                  href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
                  className="bg-signal text-ink px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Izračunaj prihranek
                </Link>
                <Link
                  href="/clanki/soncna-elektrarna"
                  className="bg-white/15 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/25 transition-colors"
                >
                  Sončne elektrarne →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-50">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="white" strokeWidth="2" />
            <circle cx="10" cy="10" r="2" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Rest of content ── */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats bar */}
        <section className="border-y border-surface py-8 my-16 stagger-children">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-entrance">
              <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">1.038</p>
              <p className="text-xs text-muted mt-1">kWh/kWp letni sončni donos</p>
            </div>
            <div className="stat-entrance">
              <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">~7</p>
              <p className="text-xs text-muted mt-1">let povprečna doba povračila</p>
            </div>
            <div className="stat-entrance">
              <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">2.500 €</p>
              <p className="text-xs text-muted mt-1">subvencije Eko sklada za TČ</p>
            </div>
            <div className="stat-entrance">
              <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">675 €/kW</p>
              <p className="text-xs text-muted mt-1">subvencije Borzen za SE+baterijo</p>
            </div>
          </div>
        </section>

        {/* Guide cards */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-lg font-sora font-semibold text-ink">Vodiči</h2>
            <span className="text-xs text-muted">Izberite temo</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/clanki/soncna-elektrarna" className="bg-white rounded-2xl border border-surface p-6 hover-lift card-glow group">
              <span className="text-2xl mb-3 block">☀️</span>
              <h3 className="font-sora font-semibold text-ink mb-1.5 group-hover:text-pine transition-colors">
                Sončna elektrarna
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Cene, subvencije Borzena, donosnost in primeri hiš. Vse za 2026.
              </p>
            </Link>
            <Link href="/clanki/baterijski-hranilnik" className="bg-white rounded-2xl border border-surface p-6 hover-lift card-glow group">
              <span className="text-2xl mb-3 block">🔋</span>
              <h3 className="font-sora font-semibold text-ink mb-1.5 group-hover:text-pine transition-colors">
                Baterijski hranilnik
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Zakaj ga potrebujete, cene, modeli (Huawei, Sigenergy, Deye).
              </p>
            </Link>
            <Link href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel" className="bg-white rounded-2xl border border-surface p-6 hover-lift card-glow group">
              <span className="text-2xl mb-3 block">📊</span>
              <h3 className="font-sora font-semibold text-ink mb-1.5 group-hover:text-pine transition-colors">
                Kalkulator ogrevanja
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Primerjajte stroške toplotne črpalke in plinskega kotla.
              </p>
            </Link>
          </div>
        </section>

        {/* Why section */}
        <section className="mb-16">
          <div className="bg-surface rounded-2xl p-8 md:p-10">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-lg font-sora font-semibold text-ink">Zakaj Energijski Prihranki?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted leading-relaxed">
              <div className="bg-white rounded-xl p-5 hover-lift">
                <h3 className="font-sora font-semibold text-ink mb-2">📈 Cene energije rastejo</h3>
                <p>
                  Stroški ogrevanja in elektrike v Sloveniji naraščajo. Pametne odločitve
                  danes pomenijo tisoče evrov prihrankov v prihodnosti.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 hover-lift">
                <h3 className="font-sora font-semibold text-ink mb-2">🎯 Državne subvencije</h3>
                <p>
                  Eko sklad in Borzen ponujata do 6.750 € nepovratnih sredstev. Večina
                  ljudi ne izkoristi vseh možnosti.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 hover-lift">
                <h3 className="font-sora font-semibold text-ink mb-2">🔧 Neodvisno svetovanje</h3>
                <p>
                  Za razliko od prodajalcev nimamo interesa prodati vam določenega
                  produkta. Naše primerjave so objektivne.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 hover-lift">
                <h3 className="font-sora font-semibold text-ink mb-2">🏠 Narejeno za Slovenijo</h3>
                <p>
                  Upoštevamo slovenske cene, podnebje, zakonodajo in specifike
                  lokalnega trga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-20">
          <div className="border border-surface rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto">
            <p className="text-sm font-sora font-semibold text-muted mb-2">Začnite zdaj</p>
            <h2 className="text-2xl md:text-3xl font-sora font-semibold text-ink mb-4">
              Pripravljeni na izračun?
            </h2>
            <p className="text-sm text-muted max-w-sm mx-auto mb-6">
              Naš kalkulator upošteva slovenske cene energentov, podnebne
              razmere in aktualne subvencije.
            </p>
            <Link
              href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
              className="inline-block bg-pine text-white px-8 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              🚀 Odpri kalkulator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
