import { notFound } from 'next/navigation';
import { documents } from '@/content';
import { DocumentPage } from '@/components/document';
import { pageMetadata } from '@/lib/metadata';
type Slug = keyof typeof documents;
function getDocument(slug: string) {
  return Object.hasOwn(documents, slug) ? documents[slug as Slug] : undefined;
}
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocument(slug);
  return doc ? pageMetadata(doc.navTitle, doc.description, '/leanbulk/' + slug) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) notFound();
  return <DocumentPage document={doc} />;
}
