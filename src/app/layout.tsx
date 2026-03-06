import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { AppShell, BackgroundLayer } from '@/components/layout';
import { siteMetadata } from '@/content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
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
  alternates: {
    canonical: siteMetadata.url,
  },
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Burk-Solutions',
    images: [
      {
        url: siteMetadata.ogImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
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
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className={`min-h-screen w-full overflow-x-hidden font-sans ${inter.variable} ${sourceSerif.variable}`}>
        <BackgroundLayer />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
