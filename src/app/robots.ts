import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/apps/exposed/', '/apps/stirnraten/'],
    },
    sitemap: `${siteMetadata.url}/sitemap.xml`,
    host: siteMetadata.url,
  };
}
