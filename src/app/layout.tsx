import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { AppShell, BackgroundLayer } from '@/components/layout';
import { siteMetadata } from '@/content';
import './globals.css';

const manrope = Manrope({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  icons: {
    icon: '/favicon-v2.ico',
    shortcut: '/favicon-v2.ico',
    apple: '/apple-touch-icon.png',
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: 'Elias Burk' }],
  creator: 'Elias Burk',
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Burk-Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#040b14',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${manrope.variable} dark`}>
      <body className="h-dvh w-screen overflow-hidden font-sans">
        <BackgroundLayer />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
