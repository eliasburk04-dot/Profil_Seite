import { ArrowRight, Check, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { site } from '@/content';
import { PhoneShot } from '@/components/site-shell';
export default function Home() {
  const h = site.home;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description: site.metadata.description,
    url: site.url,
    author: { '@type': 'Person', name: site.operator.name },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <section className="hero container">
        <div className="hero-copy">
          <h1>
            {h.headline[0]}
            <br />
            <em>{h.headline[1]}</em>
          </h1>
          <p className="hero-intro">{h.intro}</p>
          <a className="button" href="#funktionen">
            {h.primary}
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <p className="launch-status">
            <span />
            {h.status}
          </p>
        </div>
        <figure className="hero-visual">
          <div className="hero-visual-title">{h.heroCaption}</div>
          <PhoneShot src="/screens/today.webp" alt={h.features[0].alt} priority />
          <figcaption>{site.ui.synthetic}</figcaption>
        </figure>
      </section>
      <div className="trust-line container">
        {h.trust.map((text) => (
          <span key={text}>
            <Check size={19} aria-hidden="true" />
            {text}
          </span>
        ))}
      </div>
      <section className="features container" id="funktionen">
        <div className="section-heading">
          <h2>{h.featuresTitle}</h2>
          <p>{h.featuresIntro}</p>
        </div>
        {h.features.map((feature, index) => (
          <article
            className={'feature-row ' + (index % 2 ? 'reverse' : '')}
            key={feature.id}
            id={feature.id}
          >
            <div className="feature-copy">
              <span className="feature-symbol" aria-hidden="true">
                {index === 0 ? (
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M8 4v8m4-8v8M4 4v8c0 3 8 3 8 0M8 15v13M24 28V4c-5 5-6 12 0 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : index === 1 ? (
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M4 25h25M6 20l6-8 6 4L27 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M11 16h10M4 12v8m4-12v16m16-16v16m4-12v8M4 16h4m16 0h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <p className="secondary-copy">{feature.detail}</p>
            </div>
            <figure className={'feature-visual visual-' + index}>
              <PhoneShot src={feature.image} alt={feature.alt} />
              <figcaption>{site.ui.synthetic}</figcaption>
            </figure>
          </article>
        ))}
      </section>
      <section className="privacy-band">
        <div className="privacy-columns container">
          <div>
            <Heart size={30} strokeWidth={1.5} aria-hidden="true" />
            <h2>{h.healthTitle}</h2>
            <p>{h.healthText}</p>
          </div>
          <div>
            <ShieldCheck size={30} strokeWidth={1.5} aria-hidden="true" />
            <h2>{h.privacyTitle}</h2>
            <p>{h.privacyText}</p>
            <a href={site.links.privacy}>
              {h.privacyLink}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="premium container" id="premium">
        <div className="section-heading">
          <h2>{h.premiumTitle}</h2>
          <p>{h.premiumIntro}</p>
        </div>
        <div className="plans">
          <article className="plan free-plan">
            <h3>{h.free.name}</h3>
            <p className="plan-subtitle">{h.free.subtitle}</p>
            <p className="plan-price">{h.free.price}</p>
            <ul>
              {h.free.items.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="plan premium-plan">
            <h3>{h.premium.name}</h3>
            <p className="plan-subtitle">{h.premium.subtitle}</p>
            <p className="plan-price">
              {h.premium.year}
              <span>{h.premium.month}</span>
            </p>
            <p className="trial">{h.premium.trial}</p>
            <ul>
              {h.premium.items.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="price-notes">
          <p>{h.priceNote}</p>
          <p>{h.renewal}</p>
          <a href={site.links.usage}>
            {h.usageLink}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="care container">
        <h2>{h.careTitle}</h2>
        <div>
          <p>{h.careText}</p>
          <p>{h.careYouth}</p>
          <a href={site.links.counselling}>
            {h.careLink}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="faq-section container">
        <h2>{h.helpTitle}</h2>
        <div>
          {h.faq.map((item) => (
            <details className="faq" key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="final-cta container">
        <div>
          <h2>{h.finalTitle}</h2>
          <p>{h.finalText}</p>
        </div>
        <a className="button" href={site.links.support}>
          {site.ui.support}
          <ArrowRight size={20} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
