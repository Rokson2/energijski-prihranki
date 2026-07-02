import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sandbox — testiranje | Energijski Prihranki',
  robots: { index: false, follow: false },
};

export default function SandboxPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
          🧪 Sandbox / testna stran
        </div>
        <h1 className="text-3xl font-sora font-semibold text-ink mb-2">
          Pripomoček za razvijalca
        </h1>
        <p className="text-sm text-muted max-w-lg">
          Stran ni v navigaciji in ni indeksirana. Namenjena testiranju
          novih elementov, preden gredo v produkcijo.
        </p>
      </div>

      {/* ═══════════ 1. IME / identiteta ═══════════ */}
      <Section title="1. IME" subtitle="Ime projekta">
        <div className="text-sm text-muted">
          <code className="bg-surface px-2 py-0.5 rounded">Energijski Prihranki</code>
          {' — '}domena: <code className="bg-surface px-2 py-0.5 rounded">energijski-prihranki.si</code>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl">⚡</span>
          <span className="text-lg font-sora font-semibold tracking-tight">Energijski Prihranki</span>
        </div>
      </Section>

      {/* ═══════════ 2. BARVE ═══════════ */}
      <Section title="2. Barve" subtitle="Design tokens">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: '--paper', class: 'bg-paper', hex: '#f5f2eb' },
            { name: '--surface', class: 'bg-surface', hex: '#e8e3da' },
            { name: '--ink', class: 'bg-ink', hex: '#1e2b26', text: 'text-white' },
            { name: '--pine', class: 'bg-pine', hex: '#2b5a4c', text: 'text-white' },
            { name: '--signal', class: 'bg-signal', hex: '#d4a843' },
            { name: '--muted', class: 'bg-muted', hex: '#7c8a81', text: 'text-white' },
            { name: '--ember', class: 'bg-ember', hex: '#b86b4a', text: 'text-white' },
            { name: '--white', class: 'bg-white border border-surface', hex: '#ffffff' },
          ].map((c) => (
            <div key={c.name} className={`${c.class} rounded-xl p-4 ${c.text || 'text-ink'}`}>
              <p className="font-mono text-xs font-semibold">{c.name}</p>
              <p className="font-mono text-xs opacity-70 mt-0.5">{c.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════ 3. TIPOGRAFIJA ═══════════ */}
      <Section title="3. Tipografija" subtitle="Type scale">
        <div className="space-y-2">
          {[
            { size: '6xl', text: 'Display 6xl (60px)', tag: 'h1' },
            { size: '4xl', text: 'Heading 4xl (36px)', tag: 'h2' },
            { size: '3xl', text: 'Heading 3xl (30px)', tag: 'h3' },
            { size: '2xl', text: 'Heading 2xl (24px)', tag: 'h4' },
            { size: 'lg', text: 'Subtitle lg (18px)', tag: 'p' },
            { size: 'base', text: 'Body base (16px)', tag: 'p' },
            { size: 'sm', text: 'Body small (14px)', tag: 'p' },
            { size: 'xs', text: 'Caption xs (12px)', tag: 'p' },
          ].map((s) => (
            <p key={s.size} className={`text-${s.size} font-sora text-ink`}>
              {s.tag}.{' '}
              <span className="text-muted font-outfit">{s.text}</span>
            </p>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">
          Font: <strong>Sora</strong> (headings) + <strong>Outfit</strong> (body)
        </p>
      </Section>

      {/* ═══════════ 4. GUMBI ═══════════ */}
      <Section title="4. Gumbi" subtitle="Button styles">
        <div className="flex flex-wrap gap-3">
          <button className="bg-pine text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Primarni (pine)
          </button>
          <button className="bg-signal text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Akcent (signal)
          </button>
          <button className="border border-surface text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface transition-colors">
            Sekundarni
          </button>
          <button className="bg-white/15 border border-white/30 text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface/50 transition-colors">
            Ghost
          </button>
          <button className="text-pine text-sm font-semibold hover:opacity-70 transition-opacity">
            Tekstni link →
          </button>
        </div>
      </Section>

      {/* ═══════════ 5. LAYOUT — stolpci ═══════════ */}
      <Section title="5. Layout stolpci" subtitle="Grid and column tests">
        <p className="text-xs text-muted mb-3">Primeri različnih razporeditev stolpcev:</p>

        <p className="text-xs font-sora font-semibold text-muted mb-2">2 stolpca (1:1)</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-surface rounded-xl p-4 text-xs text-muted">Levi stolpec • 1/2</div>
          <div className="bg-surface rounded-xl p-4 text-xs text-muted">Desni stolpec • 1/2</div>
        </div>

        <p className="text-xs font-sora font-semibold text-muted mb-2">2 stolpca (7:5 — asimetričen)</p>
        <div className="grid grid-cols-12 gap-3 mb-6">
          <div className="col-span-7 bg-surface rounded-xl p-4 text-xs text-muted">Širši • 7/12</div>
          <div className="col-span-5 bg-surface rounded-xl p-4 text-xs text-muted">Ožji • 5/12</div>
        </div>

        <p className="text-xs font-sora font-semibold text-muted mb-2">3 stolpci (1:1:1)</p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface rounded-xl p-4 text-xs text-muted">Stolpec {i}</div>
          ))}
        </div>

        <p className="text-xs font-sora font-semibold text-muted mb-2">4 stolpci (1:1:1:1)</p>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-surface rounded-xl p-4 text-xs text-muted">Stolpec {i}</div>
          ))}
        </div>
      </Section>

      {/* ═══════════ 6. KARTICE — vse variante ═══════════ */}
      <Section title="6. Kartice" subtitle="Card variants">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-surface p-5 hover-lift card-glow">
            <p className="font-sora font-semibold text-ink mb-1">Standardna</p>
            <p className="text-xs text-muted">Z hover-lift in card-glow efekti. border + white bg.</p>
          </div>
          <div className="bg-surface rounded-2xl p-5">
            <p className="font-sora font-semibold text-ink mb-1">Površinska</p>
            <p className="text-xs text-muted">bg-surface, brez roba. Idealna za sekundarne elemente.</p>
          </div>
          <div className="bg-pine/5 border border-pine/15 rounded-2xl p-5">
            <p className="font-sora font-semibold text-pine mb-1">Poudarjena</p>
            <p className="text-xs text-muted">Z robom v pine barvi za pomembnejše vsebine.</p>
          </div>
          <div className="bg-signal/10 border border-signal/20 rounded-2xl p-5">
            <p className="font-sora font-semibold text-ink mb-1">Označevalna</p>
            <p className="text-xs text-muted">Z akcentom (signal) za opozorila ali pozive k akciji.</p>
          </div>
          <div className="bg-ember/5 border border-ember/15 rounded-2xl p-5">
            <p className="font-sora font-semibold text-ember mb-1">Opozorilna</p>
            <p className="text-xs text-muted">Z ember za tople opozorilne vsebine.</p>
          </div>
          <div className="bg-ink text-white rounded-2xl p-5">
            <p className="font-sora font-semibold mb-1">Temna</p>
            <p className="text-xs text-white/70">Za kontrastne sekcije, footer, highlight elemente.</p>
          </div>
        </div>
      </Section>

      {/* ═══════════ 7. ANIMACIJE ═══════════ */}
      <Section title="7. Animacije" subtitle="CSS animation tests">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'fade-in', class: 'animate-fade-in' },
            { name: 'slide-up', class: 'animate-slide-up' },
            { name: 'scale-in', class: 'animate-scale-in' },
            { name: 'hover-lift', class: '' },
          ].map((a) => (
            <div key={a.name} className={`bg-surface rounded-xl p-4 text-center ${a.class} hover-lift`}>
              <p className="text-xs font-medium text-ink">{a.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {['stagger'].map((s) => (
            <div key={s} className="bg-surface rounded-xl px-3 py-1.5 text-xs text-muted">
              <code>stagger-children</code> — za sekvenčno pojavljanje otrok
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════ 8. SLIKE ═══════════ */}
      <Section title="8. Slike" subtitle="Image gallery — vse razpoložljive">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            <div key={img.src} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-surface">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════ 9. ODZIVNOST ═══════════ */}
      <Section title="9. Odzivnost" subtitle="Responsive breakpoints">
        <div className="space-y-2 text-xs text-muted">
          {[
            { bp: 'default', w: '< 640px', cols: '1 stolpec' },
            { bp: 'sm', w: '640px+', cols: '1–2 stolpca' },
            { bp: 'md', w: '768px+', cols: '2–3 stolpci' },
            { bp: 'lg', w: '1024px+', cols: '3–4 stolpci' },
            { bp: 'xl', w: '1280px+', cols: '4+ stolpci / max-width: 6xl' },
          ].map((r) => (
            <div key={r.bp} className="flex gap-4">
              <span className="w-12 font-mono font-semibold text-ink">{r.bp}</span>
              <span className="w-24 opacity-70">{r.w}</span>
              <span className="opacity-70">{r.cols}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════ 10. PRESLEDKI ═══════════ */}
      <Section title="10. Presledki" subtitle="Spacing reference">
        <div className="space-y-2 text-xs text-muted">
          {[
            { class: 'p-3 md:p-4', desc: 'Ozek (mobile/compact)' },
            { class: 'p-4 md:p-6', desc: 'Standardni' },
            { class: 'p-6 md:p-8', desc: 'Široki (večina kartic/sekcij)' },
            { class: 'p-8 md:p-10', desc: 'Razkošni (hero, poudarjene sekcije)' },
            { class: 'p-10 md:p-14', desc: 'Maksimalni (CTA, featured)' },
            { class: 'max-w-4xl mx-auto px-6', desc: 'Omejitev vsebine (članki)' },
            { class: 'max-w-6xl mx-auto px-6', desc: 'Omejitev vsebine (široko)' },
          ].map((s) => (
            <div key={s.class} className="flex gap-4">
              <code className="w-48 shrink-0 bg-surface px-2 py-0.5 rounded text-[11px]">{s.class}</code>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      </Section>

      <p className="text-xs text-muted text-center mt-16 border-t border-surface pt-6">
        Stran je dostopna samo preko neposrednega URL-ja. Ni povezave iz navigacije. ⚡
      </p>
    </div>
  );
}

/* ── Reusable section component ── */
function Section({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="mb-12 border-b border-surface pb-8">
      <div className="flex items-baseline gap-3 mb-5">
        <h2 className="font-sora font-semibold text-lg text-ink">{title}</h2>
        <span className="text-xs text-muted">{subtitle}</span>
      </div>
      {children}
    </section>
  );
}
