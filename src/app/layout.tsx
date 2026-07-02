import type { Metadata } from 'next';
import { Sora, Outfit } from 'next/font/google';
import './globals.css';
import CursorGlow from '@/components/CursorGlow';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Energijski Prihranki | Prihranite pri energiji',
  description:
    'Primerjajte stroške ogrevanja, izračunajte prihranke s toplotno črpalko in odkrijte najboljše načine za varčevanje z energijo v Sloveniji.',
  keywords: ['energijski prihranki', 'toplotna črpalka', 'ogrevanje', 'sončna elektrarna', 'varčevanje z energijo', 'Slovenija'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${sora.variable} ${outfit.variable}`}>
      <body className="font-outfit antialiased">
        <CursorGlow />
        <header className="border-b border-surface sticky top-0 bg-paper/90 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-2xl leading-none">⚡</span>
              <span className="text-lg font-sora font-semibold tracking-tight text-ink group-hover:opacity-70 transition-opacity">
                Energijski Prihranki
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="text-muted hover:text-ink transition-colors">Domov</a>
              <a href="/clanki/soncna-elektrarna" className="text-muted hover:text-ink transition-colors">Sončna</a>
              <a href="/clanki/baterijski-hranilnik" className="text-muted hover:text-ink transition-colors">Baterije</a>
              <a href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel" className="text-muted hover:text-ink transition-colors">Kalkulator</a>
              <a
                href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
                className="bg-pine text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Izračunaj
              </a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-surface mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">⚡</span>
                  <span className="font-sora font-semibold text-ink">Energijski Prihranki</span>
                </div>
                <p className="text-sm text-muted leading-relaxed max-w-xs">
                  Neodvisne informacije in orodja za pametnejšo rabo energije v Sloveniji.
                </p>
              </div>
              <div>
                <h4 className="font-sora font-semibold text-sm text-ink mb-4">Vodiči</h4>
                <ul className="space-y-3 text-sm text-muted">
                  <li><a href="/clanki/soncna-elektrarna" className="hover:text-ink transition-colors">Sončna elektrarna</a></li>
                  <li><a href="/clanki/baterijski-hranilnik" className="hover:text-ink transition-colors">Baterijski hranilnik</a></li>
                  <li><a href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel" className="hover:text-ink transition-colors">Toplotna črpalka vs plin</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-sora font-semibold text-sm text-ink mb-4">Orodja</h4>
                <ul className="space-y-3 text-sm text-muted">
                  <li><a href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel" className="hover:text-ink transition-colors">Kalkulator ogrevanja</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-sora font-semibold text-sm text-ink mb-4">Informacije</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Podatki: PVGIS, Eko sklad, Borzen, SURS.
                  Izračuni so informativni.
                </p>
              </div>
            </div>
            <div className="border-t border-surface mt-10 pt-6 text-center text-sm text-muted">
              © {new Date().getFullYear()} Energijski Prihranki
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
