import { LegalDocument } from '@/components/ui';
import { siteLegal } from '@/content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: siteLegal.privacy.title,
  description: siteLegal.privacy.description,
  path: '/datenschutz',
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={siteLegal.privacy.title}
      description={siteLegal.privacy.description}
      effectiveDate={siteLegal.privacy.effectiveDate}
      sections={siteLegal.privacy.sections}
    />
  );
}
