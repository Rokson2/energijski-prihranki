import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* ── Left-aligned hero, stat-driven ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full text-xs font-medium text-muted mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
            Neodvisen vir
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-semibold tracking-tight text-ink leading-[1.05] mb-5">
            Prihranite pri
            <br />
            <span className="text-pine">energiji</span> doma
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-md">
            Neodvisne primerjave, pametni kalkulatorji in nasveti za nižje
            stroške ogrevanja in elektrike — narejeno za Slovenijo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
              className="bg-pine text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Izračunaj prihranek
            </Link>
            <Link
              href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
              className="border border-surface text-ink px-6 py-3 rounded-lg text-sm font-medium hover:bg-surface transition-colors"
            >
              Več o kalkulatorju
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-surface py-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">1.038</p>
            <p className="text-xs text-muted mt-1">kWh/kWp letno — slovenski sončni donos</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">~7</p>
            <p className="text-xs text-muted mt-1">let — povprečna doba povračila sončne elektrarne</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">2.500 €</p>
            <p className="text-xs text-muted mt-1">subvencije Eko sklada za toplotno črpalko</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-sora font-semibold text-pine">~75%</p>
            <p className="text-xs text-muted mt-1">delež lastnikov hiš v Sloveniji</p>
          </div>
        </div>
      </section>

      {/* ── Asymmetrical feature section ── */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        <div className="md:col-span-7 bg-surface rounded-2xl p-8 md:p-10">
          <span className="text-sm font-sora font-semibold text-pine">🖩 Kalkulator</span>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold text-ink mt-2 mb-3">
            Toplotna črpalka ali plinski kotel?
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-md mb-6">
            Primerjajte skupne stroške ogrevanja po slovenskih cenah. Vnesite
            podatke o svojem domu in izračunajte, kaj se vam bolj splača.
          </p>
          <Link
            href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine hover:opacity-70 transition-opacity"
          >
            Odpri kalkulator →
          </Link>
        </div>
        <div className="md:col-span-5 bg-pine rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between">
          <div>
            <span className="text-sm font-sora font-semibold opacity-80">💰 Subvencije</span>
            <h3 className="text-xl font-sora font-semibold mt-2 mb-2">
              Do 6.750 € nepovratnih sredstev
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Borzen + Eko sklad. Večina jih ne izkoristi vseh možnosti.
            </p>
          </div>
        </div>
      </section>

      {/* ── Single strong CTA section ── */}
      <section className="mb-20">
        <div className="border border-surface rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto">
          <p className="text-sm font-sora font-semibold text-muted mb-2">
            Narejeno za slovenski trg
          </p>
          <h2 className="text-2xl md:text-3xl font-sora font-semibold text-ink mb-4">
            Pripravljeni na izračun?
          </h2>
          <p className="text-sm text-muted max-w-sm mx-auto mb-6">
            Naš kalkulator upošteva slovenske cene energentov, podnebne
            razmere in aktualne subvencije. Brez zapletov.
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
  );
}
