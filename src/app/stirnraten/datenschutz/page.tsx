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
        <p className="text-sm text-text-muted">Stand: 10.02.2026</p>
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
        <h2>2. Verarbeitete Daten in der App (lokal)</h2>
        <p className="text-body text-text-secondary">
          Die App ist auf lokale Nutzung ausgelegt. Viele Daten werden ausschließlich lokal auf deinem Gerät
          gespeichert und nicht an uns übertragen.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Lokale Spiel- und Einstellungsdaten im App-Speicher</li>
          <li>Manuell erstellte Wortlisten (lokal, offline)</li>
          <li>Sensorwerte (z. B. Beschleunigungssensor) zur Spielsteuerung (nur lokal)</li>
          <li>Keine Registrierung und kein eigenes Nutzerkonto mit E-Mail/Passwort in der App</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Supabase (Cloud-Sync, KI-Wortlisten, Quota)</h2>
        <p className="text-body text-text-secondary">
          Für die Generierung und Speicherung von KI-Wortlisten sowie serverseitige Schutzmechanismen nutzen wir
          Supabase (Datenbank, Authentifizierung, Edge Functions).
        </p>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Anonyme Nutzer-ID (Supabase Anonymous Auth) und Sitzungs-Token (JWT)</li>
          <li>KI-Wortlisten: Titel, Sprache, Quelle (manual/ai), Zeitstempel</li>
          <li>Wortlisten-Einträge: Begriffe und Position innerhalb der Liste</li>
          <li>KI-Quota-Nutzung: Datumsschlüssel (Europe/Berlin) und Zähler (z. B. 3/Tag in Free)</li>
          <li>Premium-Status (serverseitiges Flag), um Limits durchzusetzen</li>
        </ul>
        <p className="text-body text-text-secondary">
          Die Daten werden pro Nutzer-ID gespeichert. Zugriffe sind technisch durch Zugriffskontrollen und
          Row-Level-Security auf eigene Daten beschränkt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. KI-Wortlisten (Supabase Edge Function + Groq)</h2>
        <p className="text-body text-text-secondary">
          Wenn du eine KI-Wortliste generierst, wird eine serverseitige Supabase Edge Function aufgerufen. Diese
          prüft Quota/Premium-Status, generiert Begriffe und gibt eine bereinigte Wortliste zurück.
        </p>
        <p className="text-body text-text-secondary">
          Die eigentliche KI-Anfrage wird serverseitig an Groq übermittelt. Dabei werden in der Regel nur die
          von dir eingegebenen Inhalte (z. B. Thema, Sprache, Schwierigkeit, gewünschte Anzahl) übertragen. Bitte
          gib keine sensiblen oder personenbezogenen Daten als Thema/Prompt ein.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. In-App-Käufe (Premium) und RevenueCat</h2>
        <p className="text-body text-text-secondary">
          Premium-Funktionen werden über Apple App Store beziehungsweise Google Play abgewickelt. Zahlungsdaten
          (z. B. Kreditkartendaten) werden durch den jeweiligen Store verarbeitet.
        </p>
        <p className="text-body text-text-secondary">
          Zusätzlich nutzen wir RevenueCat zur Verwaltung von Käufen/Restores und zur Prüfung, ob Premium aktiv
          ist. Dafür werden notwendige technische Informationen zur Kaufabwicklung verarbeitet (z. B. Store-ID,
          Kaufstatus). Der Premium-Status kann serverseitig in Supabase gespiegelt werden, um Limits zuverlässig
          durchzusetzen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Zwecke und Rechtsgrundlagen</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Bereitstellung der App-Funktionen (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>KI-Wortlisten und Cloud-Speicherung (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>Missbrauchsschutz/Quota und technische Sicherheit (Art. 6 Abs. 1 lit. f DSGVO)</li>
          <li>Abwicklung von In-App-Käufen (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>7. Empfänger und Dienstleister</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Supabase (Backend: Datenbank, Auth, Edge Functions)</li>
          <li>Groq (KI-API, serverseitig über Supabase Edge Functions)</li>
          <li>RevenueCat (Kauf-/Entitlement-Verwaltung für Premium)</li>
          <li>Apple App Store / Google Play (Kaufabwicklung, Restore)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>8. Drittlandübermittlung</h2>
        <p className="text-body text-text-secondary">
          Je nach Standort der jeweiligen Anbieter kann es zu einer Verarbeitung in Drittländern (z. B. USA)
          kommen. In diesen Fällen stützen wir die Übermittlung auf geeignete Garantien (z. B. EU-Standardvertragsklauseln),
          sofern erforderlich.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Speicherdauer</h2>
        <p className="text-body text-text-secondary">
          Lokal gespeicherte Daten verbleiben bis zur Löschung in der App oder bis zur Deinstallation.
          Cloud-Daten (z. B. KI-Listen, Quota) werden gespeichert, solange sie für die App-Funktionen erforderlich
          sind oder bis du sie löschst. Store-bezogene Daten werden durch Apple beziehungsweise Google nach deren
          Richtlinien verarbeitet.
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Betroffenenrechte</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Auskunft, Berichtigung, Löschung</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen</li>
          <li>Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>11. Keine Werbung / kein Tracking</h2>
        <p className="text-body text-text-secondary">
          In der App werden keine Werbe-SDKs eingesetzt. Wir verwenden kein aggressives Tracking und keine
          personalisierte Werbung.
        </p>
      </section>
    </div>
  );
}
