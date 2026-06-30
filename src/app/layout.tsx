import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Energijski Prihranki | Prihranite pri energiji',
  description:
    'Primerjajte stroške ogrevanja, izračunajte prihranke s toplotno črpalko in odkrijte najboljše načine za varčevanje z energijo.',
  keywords: ['energijski prihranki', 'toplotna črpalka', 'ogrevanje', 'sončna elektrarna', 'varčevanje z energijo', 'Slovenija'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold tracking-tight">
                ⚡ Energijski Prihranki
              </a>
              <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="/" className="hover:text-green-200 transition-colors">
                  Domov
                </a>
                <a
                  href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
                  className="hover:text-green-200 transition-colors"
                >
                  Kalkulator
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-800 text-gray-300 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-3">⚡ Energijski Prihranki</h3>
                <p className="text-sm text-gray-400">
                  Neodvisne informacije in orodja za pametnejšo rabo energije v Sloveniji.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Hitre povezave</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/kalkulatorji/toplotna-crpalka-vs-plinski-kotel"
                      className="hover:text-white transition-colors"
                    >
                      Kalkulator ogrevanja
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      Domov
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">O projektu</h3>
                <p className="text-sm text-gray-400">
                  Podatki temeljijo na javno dostopnih virih (PVGIS, Eko sklad, Borzen, SURS).
                  Izračuni so informativni.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Energijski Prihranki. Vse pravice pridržane.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
