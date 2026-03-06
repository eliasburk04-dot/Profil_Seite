import type { Metadata } from 'next';
import { siteMetadata } from '@/content';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataInput): Metadata {
  const canonicalUrl = path === '/' ? siteMetadata.url : `${siteMetadata.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteMetadata.locale,
      url: canonicalUrl,
      title,
      description,
      siteName: 'Burk-Solutions',
      images: [
        {
          url: siteMetadata.ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteMetadata.ogImage],
    },
    robots: {
      index,
      follow: index,
    },
  };
}
