import type { Metadata } from 'next';
import { site } from '@/content';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · ${site.name}`, description, url: path },
  };
}
