import { ArrowUpRight } from 'lucide-react';
import { site, type ContentSection, type DocumentContent } from '@/content';
import { BackLink } from './site-shell';

export function ContentSections({ sections }: { sections: readonly ContentSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section className="reading-section" key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {section.items && (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.links && (
            <ul className="reference-links">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}
export function DocumentPage({ document }: { document: DocumentContent }) {
  return (
    <div className="document-page container">
      <BackLink />
      <div className="page-heading">
        <h1>{document.title}</h1>
        <p>{document.description}</p>
        <span className="date">
          {site.ui.date}: {site.date}
        </span>
      </div>
      <div className="document-layout">
        <details className="mobile-toc">
          <summary>{site.ui.contents}</summary>
          <nav aria-label={site.ui.contents}>
            {document.sections.map((section) => (
              <a href={'#' + section.id} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
        </details>
        <article>
          <ContentSections sections={document.sections} />
        </article>
        <aside className="document-toc">
          <nav aria-label={site.ui.contents}>
            <h2>{site.ui.contents}</h2>
            {document.sections.map((section) => (
              <a href={'#' + section.id} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
