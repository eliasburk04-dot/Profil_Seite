import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/content';

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/apps',
  '/datenschutz',
  '/impressum',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === '/' ? siteMetadata.url : `${siteMetadata.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
