import Image from 'next/image';
import { ArrowUpRight, Menu, ArrowLeft } from 'lucide-react';
import { site } from '@/content';

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="brand" href="/" aria-label={site.ui.home}>
          <Image src="/app-icon.png" width={38} height={38} alt="" priority />
          <span>{site.name}</span>
        </a>
        <nav className="desktop-nav" aria-label={site.footer.productTitle}>
          {site.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary>
            <span>{site.ui.menu}</span>
            <Menu size={20} aria-hidden="true" />
          </summary>
          <nav aria-label={site.ui.menu}>
            {site.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div>
          <a href="/" className="brand footer-brand">
            {site.name}
            <span className="brand-dot" />
          </a>
          <p>{site.footer.description}</p>
        </div>
        <div>
          <h2>{site.footer.helpTitle}</h2>
          <a href={site.links.support}>{site.ui.support}</a>
          <a href={'mailto:' + site.email}>{site.email}</a>
        </div>
        <div>
          <h2>{site.footer.legalTitle}</h2>
          {site.footer.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom container">
        <span>{site.footer.copyright}</span>
        <span>{site.footer.note}</span>
        <a href="#top">{site.ui.top} ↑</a>
      </div>
    </footer>
  );
}
/** Colours the sentence after the first full stop, echoing the hero headline. */
export function TwoTone({ text }: { text: string }) {
  const split = text.indexOf('. ');
  if (split < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, split + 1)} <em>{text.slice(split + 2)}</em>
    </>
  );
}
export function BackLink() {
  return (
    <a href="/" className="back-link">
      <ArrowLeft size={18} aria-hidden="true" />
      {site.ui.back}
    </a>
  );
}
export function PhoneShot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="phone-frame">
      <Image
        src={src}
        alt={alt}
        width={440}
        height={956}
        priority={priority}
        sizes="(max-width: 700px) 72vw, 340px"
      />
    </div>
  );
}
