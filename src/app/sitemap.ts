import type { MetadataRoute } from 'next';
import { site, documents } from '@/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    site.links.support,
    ...Object.keys(documents).map((slug) => '/leanbulk/' + slug),
  ].map((path) => ({
    url: site.url + (path === '/' ? '' : path),
    lastModified: new Date('2026-10-27T12:00:00Z'),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.5,
  }));
}
