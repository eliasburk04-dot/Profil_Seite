import { GlassCard } from '@/components/ui/glass-card';
import type { LegalSection } from '@/content';

interface LegalDocumentProps {
  title: string;
  description: string;
  effectiveDate: string;
  sections: readonly LegalSection[];
}

function renderParagraph(paragraph: string) {
  if (paragraph.startsWith('E-Mail: ')) {
    const email = paragraph.replace('E-Mail: ', '').trim();

    return (
      <p className="text-body text-text-secondary">
        E-Mail:{' '}
        <a
          href={`mailto:${email}`}
          className="text-text-primary underline decoration-border-strong underline-offset-4"
        >
          {email}
        </a>
      </p>
    );
  }

  return <p className="text-body text-text-secondary">{paragraph}</p>;
}

export function LegalDocument({ title, description, effectiveDate, sections }: LegalDocumentProps) {
  return (
    <div className="section-stack">
      <section className="space-y-4">
        <h1>{title}</h1>
        <p className="max-w-3xl text-body text-text-secondary">{description}</p>
        <p className="text-sm text-text-muted">{effectiveDate}</p>
      </section>

      <section className="grid gap-4">
        {sections.map((section) => (
          <GlassCard key={section.title} variant="subtle" className="p-5 sm:p-6">
            <div className="space-y-4">
              <h2 className="text-heading-sm">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <div key={paragraph}>{renderParagraph(paragraph)}</div>
                ))}
              </div>
              {section.items && section.items.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5 text-body text-text-secondary">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
