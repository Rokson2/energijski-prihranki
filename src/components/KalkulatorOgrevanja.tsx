'use client';

import { useState } from 'react';
import {
  ceneEnergentov,
  sistemiOgrevanja,
  stopnjeIzolacije,
  izracunLetnePotrebePoToploti,
  primerjajSistema,
  RezultatPrimerjave,
  subvencije,
} from '@/lib/podatki';

export default function KalkulatorOgrevanja() {
  const [povrsina, setPovrsina] = useState(150);
  const [izolacija, setIzolacija] = useState('povprecna');
  const [investicijaTC, setInvesticijaTC] = useState(9000);
  const [investicijaPlin, setInvesticijaPlin] = useState(4000);
  const [cenaElektrike, setCenaElektrike] = useState(0.19);
  const [cenaPlina, setCenaPlina] = useState(0.09);
  const [subvencija, setSubvencija] = useState(2500);
  const [rezultati, setRezultati] = useState<RezultatPrimerjave[] | null>(null);

  const potreba = izracunLetnePotrebePoToploti(povrsina, izolacija);
  const tcSistem = sistemiOgrevanja.toplotna_crpalka_zk_voda;
  const plinSistem = sistemiOgrevanja.plinski_kondenzacijski_kotel;

  const izracunaj = () => {
    const tcRez = primerjajSistema(potreba, tcSistem, cenaElektrike, investicijaTC - subvencija);
    const plinRez = primerjajSistema(potreba, plinSistem, cenaPlina, investicijaPlin);
    setRezultati([tcRez, plinRez]);
  };

  const getBarWidth = (vrednost: number, max: number) => {
    return max > 0 ? (vrednost / max) * 100 : 0;
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Površina hiše (m²)
          </label>
          <input
            type="range"
            min="50"
            max="350"
            step="10"
            value={povrsina}
            onChange={(e) => setPovrsina(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <span className="text-lg font-semibold text-green-700">{povrsina} m²</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Izolacija objekta
          </label>
          <select
            value={izolacija}
            onChange={(e) => setIzolacija(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {stopnjeIzolacije.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            {stopnjeIzolacije.find((s) => s.id === izolacija)?.opis}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investicija v toplotno črpalko (€)
          </label>
          <input
            type="range"
            min="5000"
            max="15000"
            step="500"
            value={investicijaTC}
            onChange={(e) => setInvesticijaTC(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <span className="text-lg font-semibold text-blue-700">{investicijaTC.toLocaleString('sl-SI')} €</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investicija v plinski kotel (€)
          </label>
          <input
            type="range"
            min="2000"
            max="8000"
            step="500"
            value={investicijaPlin}
            onChange={(e) => setInvesticijaPlin(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <span className="text-lg font-semibold text-orange-700">{investicijaPlin.toLocaleString('sl-SI')} €</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cena elektrike (€/kWh)
          </label>
          <input
            type="number"
            step="0.01"
            value={cenaElektrike}
            onChange={(e) => setCenaElektrike(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <p className="text-xs text-gray-500">Povprečna Slovenija: ~0,19 €/kWh</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cena zemeljskega plina (€/kWh)
          </label>
          <input
            type="number"
            step="0.01"
            value={cenaPlina}
            onChange={(e) => setCenaPlina(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <p className="text-xs text-gray-500">Povprečna Slovenija: ~0,09 €/kWh</p>
        </div>
      </div>

      {/* Subvencija */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <label className="block text-sm font-medium text-green-800 mb-1">
          Eko sklad subvencija za toplotno črpalko (€)
        </label>
        <input
          type="range"
          min="0"
          max="6000"
          step="500"
          value={subvencija}
          onChange={(e) => setSubvencija(Number(e.target.value))}
          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-sm text-green-700">
          <span>0 €</span>
          <span className="font-semibold">{subvencija.toLocaleString('sl-SI')} €</span>
          <span>6.000 €</span>
        </div>
        <p className="text-xs text-green-600 mt-1">
          {subvencije.toplotna_crpalka_zamenjava_fosil.opis} (do {subvencije.toplotna_crpalka_zamenjava_fosil.max.toLocaleString('sl-SI')} €)
        </p>
      </div>

      <button
        onClick={izracunaj}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
      >
        Izračunaj primerjavo
      </button>

      {/* Results */}
      {rezultati && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Letna potreba po toploti</h3>
            <p className="text-3xl font-bold text-green-600">
              {potreba.toLocaleString('sl-SI')} <span className="text-lg font-normal text-gray-500">kWh/leto</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rezultati.map((r, i) => {
              const isHeatPump = i === 0;
              const barColor = isHeatPump ? 'bg-blue-500' : 'bg-orange-500';
              const bgColor = isHeatPump ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200';
              const textColor = isHeatPump ? 'text-blue-800' : 'text-orange-800';
              const maxCost = Math.max(...rezultati.map((x) => x.letniStrosek));

              return (
                <div key={r.ime} className={`rounded-xl border ${bgColor} p-5 shadow-sm`}>
                  <h3 className={`font-bold text-lg ${textColor} mb-3`}>{r.ime}</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Investicija</span>
                        <span className="font-semibold">{r.investicija.toLocaleString('sl-SI')} €</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${barColor} h-3 rounded-full`}
                          style={{ width: `${getBarWidth(r.investicija, Math.max(...rezultati.map((x) => x.investicija)))}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Letni strošek ogrevanja</span>
                        <span className="font-bold text-lg">{r.letniStrosek.toLocaleString('sl-SI')} €</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`${barColor} h-4 rounded-full transition-all duration-500`}
                          style={{ width: `${getBarWidth(r.letniStrosek, maxCost)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm border-t pt-2">
                      <span className="text-gray-600">10-letni strošek</span>
                      <span className="font-semibold">{r.desetLetSkupaj.toLocaleString('sl-SI')} €</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Življenjska doba</span>
                      <span className="font-semibold">{r.zivljenjskaDoba} let</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CO₂ izpust (letno)</span>
                      <span className="font-semibold">{r.letniCO2.toLocaleString('sl-SI')} kg</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payback analysis */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Analiza povračila investicije</h3>
            
            {(() => {
              const tc = rezultati[0];
              const plin = rezultati[1];
              const letniPrihranek = plin.letniStrosek - tc.letniStrosek;
              const razlikaVInvesticiji = tc.investicija - plin.investicija;
              const povraciloLet = razlikaVInvesticiji > 0 && letniPrihranek > 0
                ? (razlikaVInvesticiji / letniPrihranek).toFixed(1)
                : null;

              return (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Letni prihranek s toplotno črpalko:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {letniPrihranek > 0 ? `~${letniPrihranek.toLocaleString('sl-SI')} €` : 'Primerljivo'}
                    </span>
                  </div>
                  {povraciloLet && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Čas povračila razlike v investiciji:</span>
                      <span className="text-xl font-bold text-blue-600">~{povraciloLet} let</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prihranek v 10 letih (skupaj):</span>
                    <span className="text-xl font-bold text-green-700">
                      ~{(plin.desetLetSkupaj - tc.desetLetSkupaj).toLocaleString('sl-SI')} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Prihranek v življenjski dobi (18 let):</span>
                    <span className="text-xl font-bold text-green-800">
                      ~{(plin.skupajVZivljenjskiDobi - tc.skupajVZivljenjskiDobi).toLocaleString('sl-SI')} €
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
            <p className="text-gray-600 text-sm mb-3">
              📌 Ta izračun je informativen. Dejanski stroški so odvisni od specifičnih pogojev vašega doma.
              Priporočamo posvet s strokovnjakom in preveritev aktualnih subvencij na <strong>Eko sklad</strong>.
            </p>
            <p className="text-xs text-gray-400">
              * Cene energentov so povprečne za Slovenijo v letu 2026. Subvencije so okvirne.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
