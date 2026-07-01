import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Baterijski hranilnik — cene, subvencije in prednosti 2026 | Energijski Prihranki',
  description:
    'Vodič po baterijskih hranilnikih v Sloveniji. Zakaj ga potrebujete, cene, subvencije Borzena, primeri uporabe in priporočeni modeli.',
};

export default function BaterijskiHranilnikPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* ── Header ── */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full text-xs font-medium text-muted mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
          Vodič
        </div>
        <h1 className="text-3xl md:text-4xl font-sora font-semibold text-ink leading-tight mb-3">
          Baterijski hranilnik — zakaj ga potrebujete?
        </h1>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Po koncu net meteringa je baterijski hranilnik ključen za dobro donosnost
          sončne elektrarne. Kako deluje, koliko stane in kakšne subvencije so na voljo.
        </p>
      </div>

      {/* ── Hero image ── */}
      <div className="mb-10 relative h-56 md:h-72 rounded-2xl overflow-hidden">
        <Image
          src="/images/battery-system.webp"
          alt="Baterijski sistem za shranjevanje energije"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/60 to-transparent" />
      </div>

      <div className="space-y-8">
        {/* Why battery */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Zakaj sploh potrebujem baterijo?
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              Sončna elektrarna proizvede največ energije sredi dneva, ko je poraba v
              gospodinjstvu najmanjša. Brez baterije viške oddate v omrežje po nizki ceni
              (~0,04 €/kWh), zvečer pa elektriko kupujete po polni ceni (~0,22 €/kWh).
            </p>
            <p>
              Z baterijo viške shranite in jih porabite zvečer — s tem:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Povečate lastno porabo s 30 % na 70 %</li>
              <li>Znižate račun za elektriko do 66 %</li>
              <li>Postanete neodvisni od nihanja cen na trgu</li>
              <li>Imate rezervno napajanje ob izpadu elektrike</li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Kako deluje?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
            {[
              ['☀️ Proizvodnja', 'Sončna elektrarna čez dan proizvaja elektriko.'],
              ['🏠 Poraba', 'Energija gre najprej v porabo v hiši.'],
              ['🔋 Shranjevanje', 'Višek se samodejno shrani v baterijo.'],
              ['🌙 Nočna poraba', 'Baterija napaja hišo, ko sonce ne sije.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-surface rounded-xl p-4">
                <p className="font-sora font-semibold text-ink mb-1">{title}</p>
                <p className="text-xs text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Cene baterijskih hranilnikov
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface text-left">
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Kapaciteta</th>
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Cena (z montažo)</th>
                  <th className="py-2 pr-4 font-sora font-semibold text-ink">Primeren za</th>
                  <th className="py-2 font-sora font-semibold text-ink">Priljubljen model</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ['5–8 kWh', '2.500–4.000 €', 'Manjša hiša, stanovanje', 'Huawei Luna2000'],
                  ['10–14 kWh', '4.000–6.000 €', 'Povprečna hiša (11 kW SE)', 'Huawei Luna2000 S1'],
                  ['15–20 kWh', '6.000–9.000 €', 'Večja hiša, večja poraba', 'Sigenergy SigenStor'],
                  ['20+ kWh', '9.000+ €', 'Hiša + toplotna črpalka + EV', 'Deye GB-L'],
                ].map(([kap, cena, primeren, model]) => (
                  <tr key={kap} className="border-b border-surface/50">
                    <td className="py-2.5 pr-4">{kap}</td>
                    <td className="py-2.5 pr-4">{cena}</td>
                    <td className="py-2.5 pr-4">{primeren}</td>
                    <td className="py-2.5">{model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            * Cene so okvirne in vključujejo montažo. Baterijski hranilniki so modularni
            — kapaciteto lahko povečate kasneje.
          </p>
        </div>

        {/* Subsidies */}
        <div className="bg-surface rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Subvencije za baterijske hranilnike
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-5">
              <p className="font-sora font-semibold text-pine mb-1">S sončno elektrarno</p>
              <p className="text-2xl font-sora font-semibold text-ink">675 €/kW</p>
              <p className="text-xs text-muted mt-1">Max 40 % stroškov. Velja za celoten sistem.</p>
            </div>
            <div className="bg-white rounded-xl p-5">
              <p className="font-sora font-semibold text-pine mb-1">Samo baterijski hranilnik</p>
              <p className="text-2xl font-sora font-semibold text-ink">275 €/kWh</p>
              <p className="text-xs text-muted mt-1">Max 40 % stroškov. Novo v 2026.</p>
            </div>
          </div>
          <p className="text-xs text-muted mt-4">
            Vir: Borzen, JP-SO-02 in JP-SO-03. Nov razpis za baterijske hranilnike v višini
            16,9 milijona € je objavilo Ministrstvo za okolje, podnebje in energijo (2026).
          </p>
        </div>

        {/* Smart battery management */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Pametno upravljanje — EMGsmart
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Sodobni hranilniki (SunContract, Huawei, Sigenergy) uporabljajo AI za
            optimizacijo polnjenja in praznjenja. Sistem samodejno:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-surface rounded-xl p-4">
              <p className="font-sora font-semibold text-ink mb-1">📊 Spremlja cene</p>
              <p className="text-xs text-muted">Polni baterijo, ko je elektrika poceni (ali negativna).</p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <p className="font-sora font-semibold text-ink mb-1">🌤️ Napoveduje vreme</p>
              <p className="text-xs text-muted">Prilagaja strategijo glede na sončno napoved.</p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <p className="font-sora font-semibold text-ink mb-1">💰 Prodaja viške</p>
              <p className="text-xs text-muted">Viške proda v omrežje, ko so cene najvišje.</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-2xl border border-surface p-6 md:p-8">
          <h2 className="text-xl font-sora font-semibold text-ink mb-4">
            Priporočeni modeli v Sloveniji
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-1">Huawei Luna2000 S1</h3>
              <p className="text-xs text-muted leading-relaxed">
                Najbolj prodajan hranilnik v Sloveniji. Modularen (5–30 kWh),
                visoka varnost, primeren za notranjo in zunanjo montažo.
              </p>
              <p className="text-xs text-muted mt-2">Dobavitelj: Termo Shop, GEN-I Sonce</p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-1">Sigenergy SigenStor</h3>
              <p className="text-xs text-muted leading-relaxed">
                Modernejši sistem z možnostjo dograditve k starejšim modulom.
                Združljiv s SolarEdge. Visoka varnost.
              </p>
              <p className="text-xs text-muted mt-2">Dobavitelj: Termo Shop</p>
            </div>
            <div className="bg-surface rounded-xl p-4">
              <h3 className="font-sora font-semibold text-ink mb-1">Deye GB-L</h3>
              <p className="text-xs text-muted leading-relaxed">
                Visokonapetostni sistem, združljiv z različnimi inverterji
                (SolarEdge, Huawei, Sungrow). LCD-zaslon za nadzor.
              </p>
              <p className="text-xs text-muted mt-2">Dobavitelj: Termo Shop</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-pine/5 border border-pine/15 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-lg font-sora font-semibold text-ink mb-2">
            Preverite svoj prihranek
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto mb-4">
            Naš kalkulator ogrevanja vam pomaga oceniti stroške in prihranke
            za vaš dom.
          </p>
          <Link
            href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
            className="inline-block bg-pine text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Odpri kalkulator
          </Link>
        </div>
      </div>
    </div>
  );
}
