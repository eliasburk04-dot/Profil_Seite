import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { LegalDocument } from '@/content/legal';

function Paragraph({ text }: { text: string }) {
  if (text.startsWith('E-Mail: ')) {
    const email = text.replace('E-Mail: ', '').trim();
    return (
      <p>
        E-Mail: <a href={`mailto:${email}`}>{email}</a>
      </p>
    );
  }
  return <p>{text}</p>;
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <header className="lb-top">
        <Link href="/" className="lb-wordmark lb-top__home">
          LeanBulk
        </Link>
        <Link href="/" className="lb-top__back">
          <ArrowLeft aria-hidden="true" /> Zur Startseite
        </Link>
      </header>
      <main className="lb-legal">
        <h1 className="lb-display lb-legal__title">{document.title}</h1>
        <p className="lb-legal__intro">{document.description}</p>
        <p className="lb-legal__date">{document.effectiveDate}</p>
        {document.sections.map((section) => (
          <section key={section.title} className="lb-legal__section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph} text={paragraph} />
            ))}
          </section>
        ))}
      </main>
      <footer className="lb-footer">
        <span>© {new Date().getFullYear()} Elias Burk</span>
        <nav aria-label="Rechtliches">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </footer>
    </>
  );
}
