import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sandbox — testiranje | Energijski Prihranki',
  robots: { index: false, follow: false },
};

export default function SandboxPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
          🧪 Pripomoček za razvijalca
        </div>
        <h1 className="text-3xl font-sora font-semibold text-ink mb-2">
          Sandbox / testna stran
        </h1>
        <p className="text-sm text-muted">
          Stran ni vidna v navigaciji in ni indeksirana. Uporablja se za testiranje
          novih funkcij, preden gredo v produkcijo.
        </p>
      </div>

      {/* ── Image test grid ── */}
      <section className="mb-12">
        <h2 className="text-lg font-sora font-semibold text-ink mb-4">📸 Galerija slik</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: '/images/solar-hero.webp', alt: 'Sončna energija' },
            { src: '/images/solar-panels.webp', alt: 'Sončni paneli' },
            { src: '/images/modern-house.webp', alt: 'Moderna hiša' },
            { src: '/images/heat-pump.webp', alt: 'Toplotna črpalka' },
            { src: '/images/battery-system.webp', alt: 'Baterijski sistem' },
            { src: '/images/green-energy.webp', alt: 'Zelena energija' },
            { src: '/images/battery.webp', alt: 'Baterija' },
            { src: '/images/smart-home.webp', alt: 'Pametni dom' },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-surface">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Animation test ── */}
      <section className="mb-12">
        <h2 className="text-lg font-sora font-semibold text-ink mb-4">🎬 Test animacij</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-surface rounded-xl p-4 text-center animate-fade-in">
            <p className="text-xs font-medium text-ink">fade-in</p>
          </div>
          <div className="bg-surface rounded-xl p-4 text-center animate-slide-up">
            <p className="text-xs font-medium text-ink">slide-up</p>
          </div>
          <div className="bg-surface rounded-xl p-4 text-center animate-scale-in">
            <p className="text-xs font-medium text-ink">scale-in</p>
          </div>
          <div className="bg-surface rounded-xl p-4 text-center hover-lift">
            <p className="text-xs font-medium text-ink">hover-lift</p>
          </div>
        </div>
      </section>

      {/* ── Button styles ── */}
      <section className="mb-12">
        <h2 className="text-lg font-sora font-semibold text-ink mb-4">🔘 Vzorci gumbov</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-pine text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Primarni (pine)
          </button>
          <button className="border border-surface text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface transition-colors">
            Sekundarni (border)
          </button>
          <button className="bg-signal text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Akcent (signal)
          </button>
          <button className="text-pine text-sm font-semibold hover:opacity-70 transition-opacity">
            Tekstni link →
          </button>
        </div>
      </section>

      {/* ── Card variants ── */}
      <section className="mb-12">
        <h2 className="text-lg font-sora font-semibold text-ink mb-4">🃏 Vzorci kartic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-surface p-5 hover-lift card-glow">
            <p className="font-sora font-semibold text-ink mb-1">Standardna</p>
            <p className="text-xs text-muted">Z hover-lift in card-glow efekti.</p>
          </div>
          <div className="bg-surface rounded-2xl p-5">
            <p className="font-sora font-semibold text-ink mb-1">Površinska</p>
            <p className="text-xs text-muted">Uporaba bg-surface namesto bele.</p>
          </div>
          <div className="bg-pine/5 border border-pine/15 rounded-2xl p-5">
            <p className="font-sora font-semibold text-pine mb-1">Poudarjena</p>
            <p className="text-xs text-muted">Z robom v pine barvi.</p>
          </div>
        </div>
      </section>

      <p className="text-xs text-muted text-center">
        Stran je dostopna samo preko neposrednega URL-ja. Ni povezave iz navigacije.
      </p>
    </div>
  );
}
