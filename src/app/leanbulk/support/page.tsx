import { Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/content';
import { BackLink } from '@/components/site-shell';
import { ContentSections } from '@/components/document';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Hilfe und Kontakt', site.support.intro, site.links.support);
export default function Support() {
  const s = site.support;
  return (
    <div className="document-page support-page container">
      <BackLink />
      <div className="page-heading">
        <h1>{s.title}</h1>
        <p>{s.intro}</p>
      </div>
      <section className="contact-panel">
        <div>
          <h2>{s.emailTitle}</h2>
          <p>{s.emailText}</p>
          <small>{s.emailNote}</small>
        </div>
        <a
          className="contact-email"
          href={'mailto:' + site.email + '?subject=' + encodeURIComponent(s.emailSubject)}
        >
          <Mail size={26} aria-hidden="true" />
          <span>{site.email}</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </section>
      <div className="document-layout">
        <details className="mobile-toc">
          <summary>{site.ui.contents}</summary>
          <nav aria-label={site.ui.contents}>
            {s.sections.map((section) => (
              <a href={'#' + section.id} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
        </details>
        <article>
          <ContentSections sections={s.sections} />
        </article>
        <aside className="document-toc">
          <nav aria-label={site.ui.contents}>
            <h2>{site.ui.contents}</h2>
            {s.sections.map((section) => (
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
