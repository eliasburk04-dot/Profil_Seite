import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Header, Footer } from '@/components/site-shell';
import { site } from '@/content';
import './globals.css';
const nunito = localFont({
  src: [
    { path: '../../public/fonts/nunito-sans-800.ttf', weight: '800' },
    { path: '../../public/fonts/nunito-sans-900.ttf', weight: '900' },
  ],
  variable: '--font-display',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.metadata.title, template: `%s · ${site.name}` },
  description: site.metadata.description,
  icons: { icon: '/app-icon.png', apple: '/app-icon.png' },
  authors: [{ name: site.operator.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.metadata.title,
    description: site.metadata.description,
    url: '/',
    locale: site.metadata.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metadata.title,
    description: site.metadata.description,
  },
  robots: { index: true, follow: true },
  itunes: { appId: site.appStoreId },
};
export const viewport: Viewport = {
  themeColor: '#f8f6f3',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={nunito.variable}>
        <a className="skip-link" href="#main">
          {site.ui.skip}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
