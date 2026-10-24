import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './leanbulk.css';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.burk-solutions.de'),
  title: 'LeanBulk – Masse. Aber sauber.',
  description:
    'LeanBulk ist die iPhone-App für deinen Lean Bulk: Kalorien, Makros, Gewicht, Schritte und Gym-Training an einem Ort. Trag dich auf die Warteliste ein.',
  icons: { icon: '/favicon-v2.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'LeanBulk – Masse. Aber sauber.',
    description: 'Die iPhone-App für deinen Lean Bulk. Jetzt auf die Warteliste.',
    siteName: 'LeanBulk',
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#121312',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function LeanBulkLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={archivo.variable}>
      <body className="lb">{children}</body>
    </html>
  );
}
