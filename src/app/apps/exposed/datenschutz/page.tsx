import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung für EXPOSED – Party Game',
    description: 'Datenschutzerklärung für die mobile App EXPOSED – Party Game.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ExposedDatenschutzPage() {
    return (
        <div className="section-stack">
            <section className="space-y-4">
                <h1>Datenschutzerklärung für EXPOSED – Party Game</h1>
                <p className="text-sm text-text-muted">Stand: 24. Februar 2026</p>
                <p className="text-body text-text-secondary">
                    EXPOSED – Party Game (&bdquo;EXPOSED&ldquo;, &bdquo;wir&ldquo;, &bdquo;uns&ldquo;) wird von Elias Burk entwickelt und betrieben.
                    Wir nehmen den Schutz deiner Daten sehr ernst. Diese Datenschutzerklärung erläutert, welche Daten
                    wir erheben, wie wir sie verwenden und welche Rechte du hast.
                </p>
            </section>

            <section className="space-y-3">
                <h2>1. Welche Daten wir erheben</h2>
                <h3 className="font-semibold text-text-primary">1.1 Von dir bereitgestellte Daten</h3>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>
                        Anzeigename: Beim Online-Spielen gibst du einen Anzeigenamen für die Lobby ein.
                        Dieser wird nur während der Spielsitzung verwendet und nicht dauerhaft gespeichert.
                    </li>
                    <li>
                        Kein Konto erforderlich: EXPOSED erfordert keine Registrierung, keine E-Mail-Adresse,
                        Telefonnummer oder sonstige persönliche Daten.
                    </li>
                </ul>

                <h3 className="font-semibold text-text-primary">1.2 Automatisch erhobene Daten</h3>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>Geräteinformationen: Wir erheben keine Gerätekennungen, IP-Adressen oder Hardware-Informationen.</li>
                    <li>
                        Analyse-Tools: EXPOSED verwendet keinerlei Drittanbieter-Analyse- oder Tracking-Dienste
                        (kein Google Analytics, Firebase Analytics, Facebook SDK o. Ä.).
                    </li>
                    <li>Absturzberichte: Wir erheben keine Absturzberichte oder Diagnosedaten.</li>
                    <li>Cookies: EXPOSED verwendet keine Cookies oder ähnliche Tracking-Technologien.</li>
                </ul>

                <h3 className="font-semibold text-text-primary">1.3 In-App-Käufe</h3>
                <p className="text-body text-text-secondary">
                    Premium-Käufe werden vollständig über Apple (App Store) bzw. Google (Google Play) abgewickelt.
                    Wir erhalten und speichern keinerlei Zahlungsinformationen wie Kreditkartendaten,
                    Rechnungsadressen oder Apple-/Google-Kontodaten.
                    Der Kaufstatus wird ausschließlich lokal auf deinem Gerät gespeichert.
                </p>
            </section>

            <section className="space-y-3">
                <h2>2. Wie wir Daten verwenden</h2>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>
                        Online-Multiplayer: Wenn du einer Online-Lobby beitrittst, werden dein Anzeigename und
                        deine Spielantworten an unseren Spielserver übertragen, um Echtzeit-Multiplayer zu ermöglichen.
                        Diese Daten existieren nur für die Dauer der Spielsitzung und werden beim Schließen der Lobby gelöscht.
                    </li>
                    <li>
                        Offline-Modus: Alle Offline-Spieldaten werden ausschließlich auf deinem Gerät gespeichert
                        und verlassen es niemals.
                    </li>
                    <li>
                        Premium-Status: Dein Premium-Kaufstatus wird lokal auf deinem Gerät mittels SharedPreferences gespeichert.
                    </li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2>3. Datenspeicherung &amp; Server</h2>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>Online-Spielsitzungen werden auf unserem selbst gehosteten Spielserver verarbeitet.</li>
                    <li>Es werden keine personenbezogenen Daten dauerhaft auf unseren Servern gespeichert.</li>
                    <li>
                        Lobby-Daten (Anzeigenamen, Antworten) werden nur während aktiver Sitzungen im Arbeitsspeicher gehalten
                        und beim Ende der Lobby automatisch gelöscht.
                    </li>
                    <li>Wir führen keine Nutzerdatenbanken, Profile oder dauerhafte Spielverlaufs-Aufzeichnungen.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2>4. Datenweitergabe</h2>
                <p className="text-body text-text-secondary">
                    Wir verkaufen, handeln, vermieten oder teilen deine Daten nicht mit Dritten. Im Einzelnen:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>Keine Werbenetzwerke</li>
                    <li>Keine Analyse-Anbieter</li>
                    <li>Keine Social-Media-Plattformen</li>
                    <li>Keine Datenhändler</li>
                    <li>Keine sonstigen Drittanbieter-Dienste</li>
                </ul>
                <p className="text-body text-text-secondary">
                    Die einzigen extern übertragenen Daten sind Spielsitzungsdaten an unseren eigenen Server
                    während des Online-Spiels.
                </p>
            </section>

            <section className="space-y-3">
                <h2>5. Jugendschutz</h2>
                <p className="text-body text-text-secondary">
                    EXPOSED ist mit 17+ eingestuft und enthält optionale NSFW-Inhalte für Erwachsene.
                    Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 17 Jahren.
                    Der NSFW-Modus ist standardmäßig deaktiviert und muss explizit aktiviert werden.
                    Falls du glaubst, dass ein Kind über unsere App personenbezogene Daten bereitgestellt hat,
                    kontaktiere uns bitte, damit wir entsprechende Maßnahmen ergreifen können.
                </p>
            </section>

            <section className="space-y-3">
                <h2>6. Deine Rechte</h2>
                <p className="text-body text-text-secondary">
                    Da wir keine personenbezogenen Daten erheben oder speichern, gibt es in der Regel keine Daten,
                    auf die zugegriffen, die korrigiert oder gelöscht werden müssten. Du hast dennoch das Recht:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>Lokale App-Daten zu löschen: Deinstalliere die App oder lösche die App-Daten in den Geräteeinstellungen.</li>
                    <li>Käufe wiederherzustellen: Nutze die Funktion &bdquo;Käufe wiederherstellen&ldquo; im Premium-Bereich.</li>
                    <li>Uns zu kontaktieren: Bei datenschutzbezogenen Fragen oder Anliegen.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2>7. Datensicherheit</h2>
                <p className="text-body text-text-secondary">
                    Wir setzen angemessene technische Maßnahmen ein, um während des Online-Spiels übertragene Daten zu schützen:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-body text-text-secondary">
                    <li>Sämtliche Netzwerkkommunikation erfolgt über HTTPS/TLS-Verschlüsselung.</li>
                    <li>Online-Spielsitzungen verwenden sichere WebSocket-Verbindungen.</li>
                    <li>Es werden keine sensiblen personenbezogenen Daten übertragen oder gespeichert.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2>8. Änderungen dieser Erklärung</h2>
                <p className="text-body text-text-secondary">
                    Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden in der App
                    mit aktualisiertem Datum angezeigt. Wir empfehlen, diese Erklärung regelmäßig zu überprüfen.
                </p>
            </section>

            <section className="space-y-3">
                <h2>9. Kontakt</h2>
                <p className="text-body text-text-secondary">
                    Bei Fragen, Anliegen oder Anfragen zu dieser Datenschutzerklärung oder deinen Daten
                    wende dich bitte an:
                </p>
                <p className="text-body text-text-secondary">
                    Elias Burk
                    <br />
                    E-Mail: <a href="mailto:elias@burk-solutions.de">elias@burk-solutions.de</a>
                </p>
            </section>
        </div>
    );
}
