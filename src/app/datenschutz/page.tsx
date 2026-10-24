import type { Metadata } from 'next';
import { LegalPage } from '@/components/leanbulk/legal-page';
import { privacy } from '@/content/legal';

export const metadata: Metadata = { title: 'Datenschutz – LeanBulk', description: privacy.description };

export default function PrivacyPage() {
  return <LegalPage document={privacy} />;
}
