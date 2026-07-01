import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sončna elektrarna — cene, subvencije in donosnost 2026 | Energijski Prihranki',
  description:
    'Celoten vodič o sončnih elektrarnah v Sloveniji. Cene, Borzen subvencije, doba povračila, primeri hiš in nasveti za izbiro pravega sistema.',
};

export default function SoncnaElektrarnaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* ── Header ── */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full text-xs font-medium text-muted mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
          Vodič
        </div>
        <h1 className="text-3xl md:text-4xl font-sora font-semibold text-ink leading-tight mb-3">
          Sončna elektrarna v Sloveniji 2026
        </h1>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Cene, subvencije Borzena, doba povračila in nasveti za izbiro. Vse, kar
          morate vedeti pred nakupom sončne elektrarne za vaš dom.
        </p>
      </div>

      {/* ── Key stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          ['1.038 kWh/kWp', 'Letni sončni donos (Slovenija)'],
          ['675 €/kW', 'Subvencija z baterijo (Borzen)'],
          ['7–10 let', 'Povprečna doba povračila'],
          ['30+ let', 'Življenjska doba sistema'],
        ].map(([val, label]) => (
          <div key={label} className="bg-surface rounded-xl p-4 text-center">
            <p className="text-lg font-sora font-semibold text-pine">{val}</p>
            <p className="text-xs text-muted mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Content sections ── */}
      {/* ── Hero image ── */}
      <div className="mb-10 relative h-56 md:h-72 rounded-2xl overflow-hidden">
        <Image
          src="/images/solar-panels.webp"
          alt="Sončni paneli na strehi hiše"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/60 to-transparent" />
      </div>

      <div className="space-y-8">
        {/* How solar works */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Kako deluje sončna elektrarna?
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              Sončna elektrarna pretvarja sončno svetlobo v električno energijo. Sestavljajo jo:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <strong>Fotonapetostni moduli (paneli)</strong> — pretvarjajo svetlobo v enosmerni tok
              </li>
              <li>
                <strong>Razsmernik (inverter)</strong> — pretvarja enosmerni tok v izmeničnega za uporabo v hiši
              </li>
              <li>
                <strong>Nosilna konstrukcija</strong> — pritrditev panelov na streho
              </li>
              <li>
                <strong>Baterijski hranilnik (neobvezno)</strong> — shranjuje viške za večerno/nočno porabo
              </li>
            </ul>
            <p className="mt-3">
              Priklop na omrežje omogoča, da viške proizvodnje oddate v omrežje (po tržni ceni),
              ob pomanjkanju pa elektriko črpate iz omrežja.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Cene sončnih elektrarn (2026)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface text-left">
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Sistem</th>
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Cena (z DDV)</th>
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Po subvenciji</th>
                  <th className="py-2 font-sora font-semibold text-ink">Letna proizvodnja</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ['5 kWp (manjša hiša)', '8.000–9.000 €', '~6.750 €', '~5.500 kWh'],
                  ['8 kWp', '10.000–12.000 €', '~8.000 €', '~8.300 kWh'],
                  ['11 kWp + baterija', '15.000–19.000 €', '~11.000 €', '~12.100 kWh'],
                  ['13 kWp + baterija', '18.000–22.000 €', '~13.000 €', '~14.300 kWh'],
                ].map(([sistem, cena, poSub, proizvodnja]) => (
                  <tr key={sistem} className="border-b border-surface/50">
                    <td className="py-2.5 pr-4">{sistem}</td>
                    <td className="py-2.5 pr-4">{cena}</td>
                    <td className="py-2.5 pr-4">{poSub}</td>
                    <td className="py-2.5">{proizvodnja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            * Cene so okvirne. Končna cena je odvisna od izbrane opreme, zahtevnosti montaže in dobavitelja.
            Subvencije veljajo za sisteme z baterijo (675 €/kW, max 40 %).
          </p>
        </div>

        {/* Subsidies */}
        <div className="bg-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Subvencije Borzen 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-5">
              <p className="font-sora font-semibold text-pine mb-1">Z baterijskim hranilnikom</p>
              <p className="text-2xl font-sora font-semibold text-ink">675 €/kW</p>
              <p className="text-xs text-muted mt-1">Največ 40 % upravičenih stroškov</p>
            </div>
            <div className="bg-white rounded-xl p-5">
              <p className="font-sora font-semibold text-muted mb-1">Brez baterijskega hranilnika</p>
              <p className="text-2xl font-sora font-semibold text-ink">250 €/kW</p>
              <p className="text-xs text-muted mt-1">Največ 25 % upravičenih stroškov</p>
            </div>
          </div>
          <p className="text-xs text-muted mt-4">
            Vir: Borzen, javni poziv JP-SO-02 (2026). Višina subvencije je odvisna od razpoložljivih sredstev.
            Priporočamo preveritev aktualnega javnega poziva pred investicijo.
          </p>
        </div>

        {/* Real example */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Primer: Družinska hiša, 11.000 kWh/leto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Sistem</span>
                <span className="font-semibold text-ink">11 kW + 10 kWh baterija</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Investicija</span>
                <span className="font-semibold text-ink">~17.000 €</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Subvencija Borzen</span>
                <span className="font-semibold text-pine">- 7.425 €</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="font-semibold text-ink">Končni strošek</span>
                <span className="font-sora font-semibold text-lg text-pine">~9.575 €</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Letni prihranek</span>
                <span className="font-semibold text-pine">~1.446 €</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Doba povračila</span>
                <span className="font-semibold text-ink">~7 let</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface">
                <span className="text-muted">Prihranek v 25 letih</span>
                <span className="font-sora font-semibold text-lg text-pine">~27.500 €</span>
              </div>
              <p className="text-xs text-muted mt-2">
                Primer povzet po podatkih GEN-I Sonce in izracun-soncne.si.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended products */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Priporočena oprema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-2">Paneli</h3>
              <p className="text-muted text-xs leading-relaxed">
                Monokristalni paneli, 400–500 W. Izbirajte med priznanimi
                proizvajalci (Longi, Jinko, Trina, Canadian Solar).
              </p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-2">Razsmernik</h3>
              <p className="text-muted text-xs leading-relaxed">
                Huawei, Deye, SolarEdge, Fronius. Hibridni razsmernik
                omogoča dodajanje baterije kadarkoli kasneje.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-2">Baterija</h3>
              <p className="text-muted text-xs leading-relaxed">
                Huawei Luna2000, Sigenergy SigenStor, Deye GB-L.
                Modularna zasnova omogoča nadgradnjo.
              </p>
            </div>
          </div>
        </div>

        {/* Installers CTA */}
        <div className="bg-pine/5 border border-pine/15 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sm font-sora font-semibold text-muted mb-1">Poiščite izvajalca</p>
          <h3 className="text-lg font-sora font-semibold text-ink mb-2">
            Želite informativno ponudbo?
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto mb-4">
            Priporočamo, da pridobite več ponudb priznanih slovenskih
            izvajalcev — Termo Shop, GEN-I Sonce, Sol Navitas in drugi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.termoshop.si"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pine text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Termo Shop →
            </a>
            <a
              href="https://gen-isonce.si"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-surface text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface transition-colors"
            >
              GEN-I Sonce →
            </a>
            <a
              href="https://sol-navitas.si"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-surface text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface transition-colors"
            >
              Sol Navitas →
            </a>
          </div>
        </div>

        {/* CTA to calculator */}
        <div className="text-center py-6">
          <Link
            href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine hover:opacity-70 transition-opacity"
          >
            ← Nazaj na kalkulator ogrevanja
          </Link>
        </div>
      </div>
    </div>
  );
}
