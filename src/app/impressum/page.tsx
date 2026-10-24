import type { Metadata } from 'next';
import { LegalPage } from '@/components/leanbulk/legal-page';
import { imprint } from '@/content/legal';

export const metadata: Metadata = { title: 'Impressum – LeanBulk', description: imprint.description };

export default function ImprintPage() {
  return <LegalPage document={imprint} />;
}
