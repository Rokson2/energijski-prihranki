import type { Metadata } from 'next';
import KalkulatorOgrevanja from '@/components/KalkulatorOgrevanja';

export const metadata: Metadata = {
  title: 'Toplotna črpalka ali plinski kotel - Kalkulator | Energijski Prihranki',
  description:
    'Primerjajte letne stroške ogrevanja s toplotno črpalko in plinskim kotlom. Upošteva velikost hiše, izolacijo, cene energentov in Eko sklad subvencije.',
};

export default function KalkulatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Toplotna črpalka ali plinski kotel?
        </h1>
        <p className="text-lg text-gray-600">
          Primerjajte skupne stroške ogrevanja v Sloveniji. Prilagodite parametre
          svojemu domu in izračunajte, katera rešitev se vam bolj splača.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
        <KalkulatorOgrevanja />
      </div>

      <div className="mt-10 space-y-6 text-sm text-gray-600 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-800">Kako deluje primerjava?</h2>

        <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-2">📝 Predpostavke</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Letna potreba po toploti:</strong> Izračunana na podlagi
              povprečnih slovenskih vrednosti (~100 kWh/m² za dobro izolirano hišo,
              do ~200 kWh/m² za slabo izolirano).
            </li>
            <li>
              <strong>COP toplotne črpalke:</strong> 3,5 (povprečni letni izkoristek
              za zrak-voda sistem v slovenskem podnebju).
            </li>
            <li>
              <strong>Izkoristek plinskega kotla:</strong> 92% (kondenzacijski kotel).
            </li>
            <li>
              <strong>Cene energentov:</strong> Povprečne slovenske cene v letu 2026.
            </li>
            <li>
              <strong>Subvencije:</strong> Eko sklad do 2.500 € za zamenjavo
              fosilnega vira s toplotno črpalko.
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-100">
          <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Pomembno</h3>
          <p>
            Ta kalkulator je informativne narave. Dejanski stroški so odvisni od
            specifičnih pogojev vašega doma, lokacije, navad uporabe in dejanske
            cene energentov. Priporočamo posvet s pooblaščenim energetskim
            svetovalcem pred večjimi investicijami.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-5 border border-green-100">
          <h3 className="font-semibold text-green-800 mb-2">💡 Nasveti za znižanje stroškov</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Pred nakupom novega ogrevalnega sistema vedno preverite možnosti Eko sklad subvencij.</li>
            <li>Kombinacija toplotne črpalke s sončno elektrarno lahko dodatno zniža stroške ogrevanja.</li>
            <li>Izboljšanje izolacije lahko zmanjša potrebo po toploti za 30-50%.</li>
            <li>Pametni termostati in regulacija lahko prihranijo 10-20% pri stroških ogrevanja.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
