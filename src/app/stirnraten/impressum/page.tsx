import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum für Stirnraten-Spiel',
  description: 'Impressum für die mobile App Stirnraten.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StirnratenImpressumPage() {
  return (
    <div className="section-stack">
      <section className="space-y-4">
        <h1>Impressum für Stirnraten-Spiel</h1>
        <p className="text-sm text-text-muted">Stand: 09.02.2026</p>
        <p className="text-body text-text-secondary">Angaben gemäß § 5 DDG.</p>
      </section>

      <section className="space-y-3">
        <h2>1. Anbieter</h2>
        <p className="text-body text-text-secondary">
          Elias Burk
          <br />
          Friedrich-Naumann Straße 11
          <br />
          71636 Ludwigsburg, Deutschland
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Kontakt</h2>
        <p className="text-body text-text-secondary">
          E-Mail: <a href="mailto:eliasburk04@gmail.com">eliasburk04@gmail.com</a>
          <br />
          Telefon: nicht angegeben
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Vertretungsberechtigt</h2>
        <p className="text-body text-text-secondary">Nicht zutreffend (natürliche Person, kein Unternehmen).</p>
      </section>

      <section className="space-y-3">
        <h2>4. Registereintrag</h2>
        <p className="text-body text-text-secondary">Nicht vorhanden.</p>
      </section>

      <section className="space-y-3">
        <h2>5. Umsatzsteuer-ID</h2>
        <p className="text-body text-text-secondary">Nicht vorhanden.</p>
      </section>

      <section className="space-y-3">
        <h2>6. Inhaltlich verantwortlich</h2>
        <p className="text-body text-text-secondary">
          Elias Burk
          <br />
          Friedrich-Naumann Straße 11
          <br />
          71636 Ludwigsburg, Deutschland
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Verbraucherstreitbeilegung</h2>
        <p className="text-body text-text-secondary">
          Es besteht keine Bereitschaft und keine Verpflichtung zur Teilnahme an Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle.
        </p>
      </section>
    </div>
  );
}
