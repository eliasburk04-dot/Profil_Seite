import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung für Stirnraten-Spiel',
  description: 'Datenschutzerklärung für die mobile App Stirnraten.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StirnratenDatenschutzPage() {
  return (
    <div className="section-stack">
      <section className="space-y-4">
        <h1>Datenschutzerklärung für Stirnraten-Spiel</h1>
        <p className="text-sm text-text-muted">Stand: 09.02.2026</p>
        <p className="text-body text-text-secondary">
          Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten bei der Nutzung
          der App „Stirnraten“.
        </p>
      </section>

      <section className="space-y-3">
        <h2>1. Verantwortlicher</h2>
        <p className="text-body text-text-secondary">
          Elias Burk
          <br />
          Friedrich-Naumann Straße 11
          <br />
          71636 Ludwigsburg, Deutschland
          <br />
          E-Mail: <a href="mailto:eliasburk04@gmail.com">eliasburk04@gmail.com</a>
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Verarbeitete Daten in der App</h2>
        <p className="text-body text-text-secondary">
          Die App ist auf lokale Nutzung ausgelegt. Spielstände und Einstellungen werden lokal auf dem Gerät
          gespeichert.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Lokale Spiel- und Einstellungsdaten im App-Speicher</li>
          <li>Sensorwerte (z. B. Beschleunigungssensor) zur Spielsteuerung</li>
          <li>Keine Registrierung und kein eigenes Nutzerkonto in der App</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. In-App-Käufe (Premium)</h2>
        <p className="text-body text-text-secondary">
          Premium-Funktionen werden über Apple App Store beziehungsweise Google Play abgewickelt. Zahlungsdaten
          werden durch den jeweiligen Store verarbeitet. Es werden nur notwendige Transaktionsinformationen für
          die Freischaltung verarbeitet.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Zwecke und Rechtsgrundlagen</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Bereitstellung der App-Funktionen (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>Technische Stabilität und Sicherheit (Art. 6 Abs. 1 lit. f DSGVO)</li>
          <li>Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>5. Empfänger und Dienstleister</h2>
        <p className="text-body text-text-secondary">
          Für App-Vertrieb und In-App-Käufe werden Plattformdienste von Apple beziehungsweise Google genutzt.
          Aktuell wird kein eigener Backend-Service für die App im produktiven Betrieb eingesetzt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Speicherdauer</h2>
        <p className="text-body text-text-secondary">
          Lokal gespeicherte Daten verbleiben bis zur Löschung in der App oder bis zur Deinstallation.
          Store-bezogene Daten werden durch Apple beziehungsweise Google nach deren Richtlinien verarbeitet.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Betroffenenrechte</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Auskunft, Berichtigung, Löschung</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen</li>
          <li>Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
        </ul>
      </section>
    </div>
  );
}
