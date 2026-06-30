// Slovenian energy price data and calculator assumptions
// Last updated: 2026-06-29

export interface Energent {
  id: string;
  ime: string;
  cena: number; // €/kWh
  enota: string;
  opis: string;
}

export interface OgrevalniSistem {
  id: string;
  ime: string;
  investicija: { min: number; max: number }; // €
  izkoristek: number; // efficiency (0-1 or COP for heat pumps)
  zivljenjskaDoba: number; // years
  CO2: number; // kg CO2 per kWh
  opis: string;
}

export const ceneElektrike: Energent[] = [
  { id: 'elektrika-visoka', ime: 'Elektrika (visoka tarifa)', cena: 0.22, enota: '€/kWh', opis: 'VT, vključno z omrežnino' },
  { id: 'elektrika-nizka', ime: 'Elektrika (nizka tarifa)', cena: 0.14, enota: '€/kWh', opis: 'MT, vključno z omrežnino' },
  { id: 'elektrika-povprecna', ime: 'Elektrika (povprečna)', cena: 0.19, enota: '€/kWh', opis: 'Povprečna cena za Slovenijo 2026' },
];

export const ceneEnergentov: Record<string, number> = {
  elektrika: 0.19, // €/kWh (povprečje VT+MT)
  zemeljski_plin: 0.09, // €/kWh
  kurilno_olje: 0.11, // €/kWh (1L ≈ 10kWh, €1.1/L)
  peleti: 0.06, // €/kWh
  drva: 0.04, // €/kWh
  daljinsko_ogrevanje: 0.08, // €/kWh
};

export const sistemiOgrevanja: Record<string, OgrevalniSistem> = {
  toplotna_crpalka_zk_voda: {
    id: 'tc-zrak-voda',
    ime: 'Toplotna črpalka zrak-voda',
    investicija: { min: 6500, max: 13000 },
    izkoristek: 3.5, // COP (Coefficient of Performance)
    zivljenjskaDoba: 18,
    CO2: 0.15, // kg/kWh (Slovenian grid mix)
    opis: 'Najpogostejša izbira. Primerna za večino domov.',
  },
  plinski_kondenzacijski_kotel: {
    id: 'plin-kondenzacijski',
    ime: 'Plinski kondenzacijski kotel',
    investicija: { min: 3000, max: 6000 },
    izkoristek: 0.92, // efficiency
    zivljenjskaDoba: 15,
    CO2: 0.20, // kg/kWh
    opis: 'Preverjena tehnologija, nižja začetna investicija.',
  },
  toplotna_crpalka_zem_voda: {
    id: 'tc-zemlja-voda',
    ime: 'Toplotna črpalka zemlja-voda',
    investicija: { min: 12000, max: 22000 },
    izkoristek: 4.5, // COP
    zivljenjskaDoba: 22,
    CO2: 0.12,
    opis: 'Najvišji izkoristek, a najvišja začetna investicija.',
  },
  kotel_na_pelete: {
    id: 'peleti',
    ime: 'Kotel na pelete',
    investicija: { min: 7000, max: 12000 },
    izkoristek: 0.85,
    zivljenjskaDoba: 18,
    CO2: 0.03,
    opis: 'Obnovljiv vir, nižji stroški ogrevanja, več vzdrževanja.',
  },
};

export const stopnjeIzolacije = [
  { id: 'dobra', label: 'Dobra izolacija', faktor: 1.0, opis: 'Nova ali obnovljena hiša (15-20cm fasade, troslojna okna)' },
  { id: 'povprecna', label: 'Povprečna izolacija', faktor: 1.4, opis: 'Delno izolirana hiša, nekaj obnovljena okna' },
  { id: 'slaba', label: 'Slaba izolacija', faktor: 2.0, opis: 'Starejša hiša brez fasade, stara okna' },
];

// Povprečna letna potreba po toploti glede na velikost in izolacijo
export function izracunLetnePotrebePoToploti(
  povrsina: number, // m²
  izolacija: string // 'dobra' | 'povprecna' | 'slaba'
): number {
  // Osnova: ~100 kWh/m² za dobro izolirano hišo v Sloveniji
  const osnova = 100; // kWh/m²/leto
  const faktor = stopnjeIzolacije.find(s => s.id === izolacija)?.faktor ?? 1.4;
  return povrsina * osnova * faktor;
}

export function izracunLetnihStroškov(
  potrebaPoToploti: number, // kWh
  sistem: OgrevalniSistem,
  cenaEnergenta: number // €/kWh
): number {
  if (sistem.izkoristek > 1) {
    // Heat pump: COP > 1, electrical energy needed = heat / COP
    return (potrebaPoToploti / sistem.izkoristek) * cenaEnergenta;
  } else {
    // Combustion: efficiency < 1, fuel energy needed = heat / efficiency
    return (potrebaPoToploti / sistem.izkoristek) * cenaEnergenta;
  }
}

export function izracunCO2(
  potrebaPoToploti: number,
  sistem: OgrevalniSistem,
  cenaEnergenta?: number
): number {
  if (sistem.izkoristek > 1) {
    return (potrebaPoToploti / sistem.izkoristek) * sistem.CO2;
  } else {
    return (potrebaPoToploti / sistem.izkoristek) * sistem.CO2;
  }
}

export interface RezultatPrimerjave {
  ime: string;
  investicija: number;
  letniStrosek: number;
  letniCO2: number;
  desetLetSkupaj: number;
  zivljenjskaDoba: number;
  skupajVZivljenjskiDobi: number;
}

export function primerjajSistema(
  potrebaPoToploti: number,
  sistem: OgrevalniSistem,
  cenaEnergenta: number,
  investicija: number // dejanska investicija €
): RezultatPrimerjave {
  const letniStrosek = izracunLetnihStroškov(potrebaPoToploti, sistem, cenaEnergenta);
  const letniCO2 = izracunCO2(potrebaPoToploti, sistem);
  
  return {
    ime: sistem.ime,
    investicija,
    letniStrosek: Math.round(letniStrosek),
    letniCO2: Math.round(letniCO2),
    desetLetSkupaj: Math.round(investicija + letniStrosek * 10),
    zivljenjskaDoba: sistem.zivljenjskaDoba,
    skupajVZivljenjskiDobi: Math.round(investicija + letniStrosek * sistem.zivljenjskaDoba),
  };
}

// Subvencije Eko sklada 2026
export const subvencije = {
  toplotna_crpalka_zamenjava_fosil: { max: 2500, opis: 'Zamenjava stare kurilne naprave s TČ zrak-voda' },
  toplotna_crpalka_zem_voda: { max: 6000, opis: 'Vgradnja TČ zemlja-voda ali voda-voda' },
};
