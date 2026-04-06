import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung für Glow Era',
  description: 'Datenschutzerklärung für die mobile App Glow Era.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlowEraDatenschutzPage() {
  return (
    <div className="section-stack">
      <section className="space-y-4">
        <h1>Datenschutzerklärung für Glow Era</h1>
        <p className="text-sm text-text-muted">Stand: 6. April 2026</p>
        <p className="text-body text-text-secondary">
          Glow Era (&bdquo;Glow Era&ldquo;, &bdquo;wir&ldquo;, &bdquo;uns&ldquo;) wird von Elias
          Burk entwickelt und betrieben. Wir nehmen den Schutz deiner Daten sehr ernst. Diese
          Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und welche
          Rechte du hast.
        </p>
      </section>

      <section className="space-y-3">
        <h2>1. Welche Daten wir erheben</h2>
        <h3 className="font-semibold text-text-primary">1.1 Von dir bereitgestellte Daten</h3>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>
            Kontodaten: Bei der Registrierung erheben wir deine E-Mail-Adresse und einen
            Benutzernamen. Bei Anmeldung über Google oder Apple erhalten wir die von dir
            freigegebenen Profildaten (Name, E-Mail).
          </li>
          <li>
            Profildaten: Dein Hauttyp, Fitnesslevel, Style-Vorlieben und weitere Angaben aus dem
            Onboarding-Quiz werden gespeichert, um deinen personalisierten Plan zu erstellen.
          </li>
          <li>
            Fotos: Fortschrittsfotos und Hautanalyse-Fotos, die du freiwillig hochlädst, werden in
            unserem Cloud-Speicher gesichert.
          </li>
          <li>
            Community-Inhalte: Beiträge, Kommentare und Likes, die du in der Community erstellst.
          </li>
        </ul>

        <h3 className="font-semibold text-text-primary">1.2 Automatisch erhobene Daten</h3>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>
            Nutzungsdaten: Wir erheben anonymisierte Nutzungsdaten wie Streak-Verläufe und
            Aufgaben-Abschlussraten, um den Service zu verbessern.
          </li>
          <li>
            Geräteinformationen: Wir erheben keine Gerätekennungen oder Hardware-Informationen über
            das für die App-Funktion notwendige Maß hinaus.
          </li>
          <li>
            Analyse-Tools: Glow Era verwendet keinerlei Drittanbieter-Analyse- oder
            Tracking-Dienste (kein Google Analytics, Firebase Analytics, Facebook SDK o.&nbsp;Ä.).
          </li>
        </ul>

        <h3 className="font-semibold text-text-primary">1.3 In-App-Käufe</h3>
        <p className="text-body text-text-secondary">
          Premium-Käufe (Glow Pass) werden über Apple (App Store) abgewickelt. Wir verwenden
          RevenueCat als Abo-Verwaltungsdienst. Dabei werden deine Kauf-Transaktions-IDs und der
          Abonnementstatus verarbeitet. Wir erhalten und speichern keinerlei Zahlungsinformationen
          wie Kreditkartendaten oder Rechnungsadressen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Wie wir Daten verwenden</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>
            Personalisierung: Deine Profildaten werden an unseren KI-Dienst (Anthropic Claude)
            übermittelt, um personalisierte Fitness-, Skincare- und Style-Aufgaben zu generieren.
            Dabei werden keine E-Mail-Adressen oder Kontodaten an die KI übermittelt &ndash; nur
            anonymisierte Profilmerkmale.
          </li>
          <li>
            Hautanalyse: Hochgeladene Fotos werden zur KI-gestützten Hautanalyse verarbeitet und in
            unserem Cloud-Speicher gesichert.
          </li>
          <li>
            Community: Dein Benutzername und Avatar werden in der Community öffentlich angezeigt.
            Beiträge, Kommentare und Likes sind für andere Nutzer sichtbar.
          </li>
          <li>
            Fortschrittsverfolgung: Deine Aufgabenabschlüsse und Streak-Daten werden gespeichert, um
            deinen Fortschritt anzuzeigen.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Datenspeicherung &amp; Server</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Deine Daten werden auf Servern von Supabase (gehostet bei AWS) gespeichert.</li>
          <li>
            Fotos werden im Supabase Storage gesichert und sind nur über authentifizierte Zugriffe
            erreichbar (mit Ausnahme von Community-Beitragsfotos, die öffentlich sichtbar sind).
          </li>
          <li>
            Die Kommunikation zwischen der App und unseren Servern erfolgt ausschließlich über
            HTTPS/TLS-Verschlüsselung.
          </li>
          <li>
            Abo-Daten werden zusätzlich bei RevenueCat (USA) verarbeitet. RevenueCat speichert
            Transaktions-IDs und den Abonnementstatus.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>4. Datenweitergabe</h2>
        <p className="text-body text-text-secondary">
          Wir verkaufen, handeln oder vermieten deine persönlichen Daten nicht an Dritte.
        </p>
        <p className="text-body text-text-secondary">
          Folgende Drittanbieter-Dienste werden für den Betrieb der App verwendet:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li><strong>Supabase</strong> &ndash; Authentifizierung, Datenbank und Datei-Speicher</li>
          <li><strong>Anthropic (Claude)</strong> &ndash; KI-gestützte Plan- und Aufgabengenerierung (nur anonymisierte Profildaten)</li>
          <li><strong>RevenueCat</strong> &ndash; Abo-Verwaltung und Kaufvalidierung</li>
          <li><strong>Apple Sign-In / Google Sign-In</strong> &ndash; Authentifizierung (optional)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>5. Jugendschutz</h2>
        <p className="text-body text-text-secondary">
          Glow Era richtet sich an Nutzer ab 13 Jahren. Wir erheben wissentlich keine
          personenbezogenen Daten von Kindern unter 13 Jahren.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Deine Rechte</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Konto löschen: Über die Profil-Einstellungen in der App kannst du dein Konto und alle damit verbundenen Daten dauerhaft löschen.</li>
          <li>Daten exportieren: Auf Anfrage per E-Mail stellen wir dir eine Kopie deiner gespeicherten Daten bereit.</li>
          <li>Käufe wiederherstellen: Nutze die Funktion &bdquo;Restore Purchases&ldquo; auf der Paywall-Seite.</li>
          <li>Uns kontaktieren: Bei datenschutzbezogenen Fragen oder Anliegen.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>7. Datensicherheit</h2>
        <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
          <li>Sämtliche Netzwerkkommunikation erfolgt über HTTPS/TLS-Verschlüsselung.</li>
          <li>Datenbankzugriffe sind durch Row-Level-Security-Policies (RLS) abgesichert.</li>
          <li>Passwörter werden niemals im Klartext gespeichert.</li>
          <li>Sensible API-Schlüssel werden serverseitig verwaltet.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>8. Änderungen dieser Erklärung</h2>
        <p className="text-body text-text-secondary">
          Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden
          mit aktualisiertem Datum angezeigt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Kontakt</h2>
        <p className="text-body text-text-secondary">
          Elias Burk<br />
          E-Mail: <a href="mailto:eliasburk04@gmail.com">eliasburk04@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
