import { LegalDocument } from '@/components/ui';
import { siteLegal } from '@/content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: siteLegal.imprint.title,
  description: siteLegal.imprint.description,
  path: '/impressum',
});

export default function ImprintPage() {
  return (
    <LegalDocument
      title={siteLegal.imprint.title}
      description={siteLegal.imprint.description}
      effectiveDate={siteLegal.imprint.effectiveDate}
      sections={siteLegal.imprint.sections}
    />
  );
}
