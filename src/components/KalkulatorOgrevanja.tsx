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

  return (
    <div className="space-y-8">
      {/* ── Input section ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* House size */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-ink mb-2">
            <span>Površina hiše</span>
            <span className="font-sora font-semibold text-pine text-lg">{povrsina} m²</span>
          </label>
          <input
            type="range"
            min="50"
            max="350"
            step="10"
            value={povrsina}
            onChange={(e) => setPovrsina(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>50 m²</span>
            <span>350 m²</span>
          </div>
        </div>

        {/* Insulation */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Izolacija objekta</label>
          <select
            value={izolacija}
            onChange={(e) => setIzolacija(e.target.value)}
            className="w-full bg-paper border border-surface rounded-lg p-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-signal/50"
          >
            {stopnjeIzolacije.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted mt-1.5">
            {stopnjeIzolacije.find((s) => s.id === izolacija)?.opis}
          </p>
        </div>

        {/* Heat pump investment */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-ink mb-2">
            <span>Investicija — toplotna črpalka</span>
            <span className="font-sora font-semibold text-pine text-lg">
              {investicijaTC.toLocaleString('sl-SI')} €
            </span>
          </label>
          <input
            type="range"
            min="5000"
            max="15000"
            step="500"
            value={investicijaTC}
            onChange={(e) => setInvesticijaTC(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>5.000 €</span>
            <span>15.000 €</span>
          </div>
        </div>

        {/* Gas boiler investment */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-ink mb-2">
            <span>Investicija — plinski kotel</span>
            <span className="font-sora font-semibold text-ember text-lg">
              {investicijaPlin.toLocaleString('sl-SI')} €
            </span>
          </label>
          <input
            type="range"
            min="2000"
            max="8000"
            step="500"
            value={investicijaPlin}
            onChange={(e) => setInvesticijaPlin(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>2.000 €</span>
            <span>8.000 €</span>
          </div>
        </div>

        {/* Electricity price */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Cena elektrike
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              step="0.01"
              value={cenaElektrike}
              onChange={(e) => setCenaElektrike(Number(e.target.value))}
              className="w-24 bg-paper border border-surface rounded-lg p-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-signal/50"
            />
            <span className="text-sm text-muted">€/kWh</span>
          </div>
          <p className="text-xs text-muted mt-1.5">Povprečje Slovenija 2026: ~0,19 €/kWh</p>
        </div>

        {/* Gas price */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Cena zemeljskega plina
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              step="0.01"
              value={cenaPlina}
              onChange={(e) => setCenaPlina(Number(e.target.value))}
              className="w-24 bg-paper border border-surface rounded-lg p-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-signal/50"
            />
            <span className="text-sm text-muted">€/kWh</span>
          </div>
          <p className="text-xs text-muted mt-1.5">Povprečje Slovenija 2026: ~0,09 €/kWh</p>
        </div>
      </div>

      {/* ── Subsidy ── */}
      <div className="bg-surface rounded-xl p-5">
        <label className="flex items-center justify-between text-sm font-medium text-ink mb-2">
          <span>Eko sklad subvencija</span>
          <span className="font-sora font-semibold text-pine text-lg">
            {subvencija.toLocaleString('sl-SI')} €
          </span>
        </label>
        <input
          type="range"
          min="0"
          max="6000"
          step="500"
          value={subvencija}
          onChange={(e) => setSubvencija(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>0 €</span>
          <span>6.000 €</span>
        </div>
        <p className="text-xs text-muted mt-2">
          {subvencije.toplotna_crpalka_zamenjava_fosil.opis} (max{' '}
          {subvencije.toplotna_crpalka_zamenjava_fosil.max.toLocaleString('sl-SI')} €)
        </p>
      </div>

      {/* ── Calculate button ── */}
      <button
        onClick={izracunaj}
        className="w-full bg-pine text-white font-sora font-semibold py-3.5 px-6 rounded-xl text-sm hover:opacity-90 transition-opacity"
      >
        Izračunaj primerjavo
      </button>

      {/* ── Results ── */}
      {rezultati && (
        <div className="space-y-6 animate-[fadeIn_0.3s_ease]">
          {/* Heat need */}
          <div className="text-center py-4">
            <p className="text-xs text-muted mb-1">Letna potreba po toploti</p>
            <p className="text-3xl font-sora font-semibold text-ink">
              {potreba.toLocaleString('sl-SI')}{' '}
              <span className="text-sm font-normal text-muted">kWh/leto</span>
            </p>
          </div>

          {/* Two-column comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rezultati.map((r, i) => {
              const isHeatPump = i === 0;
              const accent = isHeatPump ? 'text-pine' : 'text-ember';
              const label = isHeatPump ? 'Toplotna črpalka' : 'Plinski kotel';
              const maxCost = Math.max(...rezultati.map((x) => x.letniStrosek));

              return (
                <div
                  key={r.ime}
                  className={`rounded-xl border p-5 ${
                    isHeatPump
                      ? 'border-pine/20 bg-pine/[0.03]'
                      : 'border-ember/20 bg-ember/[0.03]'
                  }`}
                >
                  <h3 className={`font-sora font-semibold text-sm ${accent} mb-4`}>
                    {label}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-muted mb-1">
                        <span>Investicija</span>
                        <span className="font-semibold text-ink">
                          {r.investicija.toLocaleString('sl-SI')} €
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isHeatPump ? 'bg-pine' : 'bg-ember'
                          }`}
                          style={{
                            width: `${Math.min(
                              (r.investicija / Math.max(...rezultati.map((x) => x.investicija))) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-muted mb-1">
                        <span>Letni strošek</span>
                        <span className={`font-sora font-semibold text-lg ${accent}`}>
                          {r.letniStrosek.toLocaleString('sl-SI')} €
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-surface overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isHeatPump ? 'bg-pine' : 'bg-ember'
                          }`}
                          style={{
                            width: `${(r.letniStrosek / maxCost) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-muted border-t border-surface">
                      <div>
                        <span className="block">10-letni strošek</span>
                        <span className="font-semibold text-ink">
                          {r.desetLetSkupaj.toLocaleString('sl-SI')} €
                        </span>
                      </div>
                      <div>
                        <span className="block">CO₂ / leto</span>
                        <span className="font-semibold text-ink">
                          {r.letniCO2.toLocaleString('sl-SI')} kg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Payback analysis ── */}
          {(() => {
            const tc = rezultati[0];
            const plin = rezultati[1];
            const letniPrihranek = plin.letniStrosek - tc.letniStrosek;
            const razlikaVInvesticiji = tc.investicija - plin.investicija;
            const povraciloLet =
              razlikaVInvesticiji > 0 && letniPrihranek > 0
                ? (razlikaVInvesticiji / letniPrihranek).toFixed(1)
                : null;

            return (
              <div className="bg-pine/5 border border-pine/15 rounded-xl p-6">
                <h3 className="font-sora font-semibold text-sm text-ink mb-4">
                  Analiza povračila
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-xs text-muted mb-1">Letni prihranek s TČ</p>
                    <p className="text-2xl font-sora font-semibold text-pine">
                      {letniPrihranek > 0
                        ? `~${letniPrihranek.toLocaleString('sl-SI')} €`
                        : 'Primerljivo'}
                    </p>
                  </div>
                  {povraciloLet && (
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-xs text-muted mb-1">Povračilo razlike</p>
                      <p className="text-2xl font-sora font-semibold text-ink">
                        ~{povraciloLet} let
                      </p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-xs text-muted mb-1">Prihranek v 10 letih</p>
                    <p className="text-2xl font-sora font-semibold text-pine">
                      ~{(plin.desetLetSkupaj - tc.desetLetSkupaj).toLocaleString('sl-SI')} €
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
