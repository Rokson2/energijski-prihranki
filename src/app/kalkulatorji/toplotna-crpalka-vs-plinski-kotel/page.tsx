import type { Metadata } from 'next';
import KalkulatorOgrevanja from '@/components/KalkulatorOgrevanja';

export const metadata: Metadata = {
  title: 'Kalkulator ogrevanja — TČ ali plin | Energijski Prihranki',
  description:
    'Primerjajte letne stroške ogrevanja s toplotno črpalko in plinskim kotlom po slovenskih cenah. Upošteva subvencije Eko sklada.',
};

export default function KalkulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* ── Header ── */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full text-xs font-medium text-muted mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
          Orodje
        </div>
        <h1 className="text-3xl md:text-4xl font-sora font-semibold text-ink leading-tight mb-3">
          Toplotna črpalka <span className="text-muted">ali</span> plinski kotel?
        </h1>
        <p className="text-sm text-muted max-w-xl leading-relaxed">
          Primerjajte celotne stroške ogrevanja. Prilagodite parametre
          svojemu domu in takoj vidite razliko. Podatki za Slovenijo 2026.
        </p>
      </div>

      {/* ── Calculator tool ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-surface p-6 md:p-8">
        <KalkulatorOgrevanja />
      </div>

      {/* ── Notes ── */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted leading-relaxed">
        <div className="bg-surface rounded-xl p-5">
          <h3 className="font-sora font-semibold text-ink text-sm mb-2">
            📐 Kako izračunamo?
          </h3>
          <ul className="space-y-1.5">
            <li>— Letna potreba po toploti: slovensko povprečje glede na izolacijo in velikost</li>
            <li>— COP toplotne črpalke: 3,5 (letno povprečje za Slovenijo)</li>
            <li>— Izkoristek plinskega kotla: 92% (kondenzacijski)</li>
            <li>— Cene: povprečne slovenske 2026 (SURS, distributerji)</li>
            <li>— Subvencije: Eko sklad 2026, do 2.500 €</li>
          </ul>
        </div>
        <div className="bg-surface rounded-xl p-5">
          <h3 className="font-sora font-semibold text-ink text-sm mb-2">
            ⚡ Nasveti
          </h3>
          <ul className="space-y-1.5">
            <li>— Pred nakupom vedno preverite Eko sklad subvencije</li>
            <li>— Kombinacija TČ + sončna elektrarna = največji prihranek</li>
            <li>— Boljša izolacija zmanjša potrebo po toploti za 30–50%</li>
            <li>— Pametna regulacija prihrani dodatnih 10–20%</li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-muted mt-6 text-center">
        ⚠️ Ta kalkulator je informativen. Dejanski stroški so odvisni od
        specifičnih pogojev. Priporočamo posvet s pooblaščenim svetovalcem.
      </p>
    </div>
  );
}
