import Link from 'next/link';
import { Barbell } from '@/components/leanbulk/barbell';
import { GymLog } from '@/components/leanbulk/gym-log';
import { ScanDemo } from '@/components/leanbulk/scan-demo';
import { StickyJoin } from '@/components/leanbulk/sticky-join';
import { TodayDemo } from '@/components/leanbulk/today-demo';
import { WaitlistForm } from '@/components/leanbulk/waitlist-form';
import { WeightTrend } from '@/components/leanbulk/weight-trend';

const PRIVACY_SPEC = [
  { term: 'Speicherort', detail: 'Auf deinem iPhone. Die App funktioniert auch offline.' },
  { term: 'Konto', detail: 'Brauchst du nicht. Kein Login, keine Cloud.' },
  { term: 'Apple Health', detail: 'Nur lesen, nur nach deiner Freigabe: Schritte und Aktivitätsenergie.' },
  { term: 'Export', detail: 'Vollständige Sicherung mit Wiederherstellung, dazu CSV für Tabellen.' },
];

export default function LeanBulkPage() {
  return (
    <>
      <a href="#inhalt" className="lb-skip">
        Zum Inhalt springen
      </a>

      <header className="lb-top">
        <span className="lb-wordmark">LeanBulk</span>
        <span className="lb-top__tag">Für iPhone · Start bald</span>
      </header>

      <main id="inhalt">
        <section className="lb-hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="lb-display lb-hero__title">
            <span>Masse.</span>
            <span>Aber sauber.</span>
          </h1>
          <Barbell className="lb-hero__bar" initialPlates={4} />
          <div className="lb-hero__body">
            <p className="lb-lead">
              LeanBulk ist die iPhone-App für deinen Lean Bulk. Kalorien, Makros, Gewicht, Schritte und dein
              Training an einem Ort, mit einem Ziel, das sich nicht verbiegt.
            </p>
            <WaitlistForm id="warteliste-oben" />
          </div>
        </section>

        <section className="lb-field lb-field--red" aria-labelledby="ziel-title">
          <div className="lb-split">
            <div className="lb-copy">
              <p className="lb-plate-mark" aria-hidden="true">25</p>
              <h2 id="ziel-title" className="lb-display lb-h2">
                Dein Ziel bleibt dein Ziel.
              </h2>
              <p>
                Du legst dein Kalorienziel fest, und dabei bleibt es. Schritte aus Apple Health, Cardio und
                Training laufen als eigener Aktivitätsverbrauch daneben.
              </p>
              <p>
                Keine Kalorien, die du dir „zurückverdienst“. Kein Ziel, das jeden Tag woanders liegt. Nur die
                Zahl, die du dir vorgenommen hast.
              </p>
            </div>
            <TodayDemo />
          </div>
        </section>

        <section className="lb-field lb-field--blue" aria-labelledby="scan-title">
          <div className="lb-split lb-split--flip">
            <div className="lb-copy">
              <p className="lb-plate-mark" aria-hidden="true">20</p>
              <h2 id="scan-title" className="lb-display lb-h2">
                Scannen statt schätzen.
              </h2>
              <p>
                Barcode scannen oder in Open Food Facts suchen, Menge eintippen, fertig. Kalorien und Makros
                rechnet LeanBulk selbst.
              </p>
              <p>
                Eigene Lebensmittel legst du einmal an. Dein Standard-Frühstück speicherst du als Vorlage und
                trägst es danach mit zwei Taps ein.
              </p>
            </div>
            <ScanDemo />
          </div>
        </section>

        <section className="lb-field lb-field--yellow" aria-labelledby="gym-title">
          <div className="lb-split">
            <div className="lb-copy">
              <p className="lb-plate-mark" aria-hidden="true">15</p>
              <h2 id="gym-title" className="lb-display lb-h2">
                Jeder Satz zählt.
              </h2>
              <p>
                Übungen anlegen, Arbeitsgewicht und Satzzahl festlegen, im Training Gewicht und Wiederholungen
                pro Satz eintragen. Die Historie zeigt dir schwarz auf gelb, ob du stärker wirst.
              </p>
            </div>
            <GymLog />
          </div>
        </section>

        <section className="lb-field lb-field--green" aria-labelledby="trend-title">
          <div className="lb-split lb-split--flip">
            <div className="lb-copy">
              <p className="lb-plate-mark" aria-hidden="true">10</p>
              <h2 id="trend-title" className="lb-display lb-h2">
                Der Trend zählt, nicht der Tag.
              </h2>
              <p>
                Ein Gewicht pro Tag, dazu der 7-Tage-Durchschnitt. Wasser und Salz schwanken, der Schnitt zeigt
                dir, ob dein Aufbau sauber läuft.
              </p>
              <p className="lb-import">
                <span className="lb-import__raw">Mo, 06.10.26: 76,2kg</span>
                <span className="lb-import__note">
                  Alte Werte aus der Notizen-App fügst du einfach ein. LeanBulk erkennt sie und zeigt dir vor dem
                  Speichern eine Vorschau.
                </span>
              </p>
            </div>
            <WeightTrend />
          </div>
        </section>

        <section className="lb-field lb-field--chalk" aria-labelledby="daten-title">
          <div className="lb-privacy">
            <p className="lb-plate-mark" aria-hidden="true">5</p>
            <h2 id="daten-title" className="lb-display lb-h2">
              Deine Daten bleiben bei dir.
            </h2>
            <dl className="lb-spec">
              {PRIVACY_SPEC.map((row) => (
                <div key={row.term} className="lb-spec__row">
                  <dt>{row.term}</dt>
                  <dd>{row.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="warteliste" className="lb-close" aria-labelledby="close-title">
          <h2 id="close-title" className="lb-display lb-h2 lb-close__title">
            Leg die letzte Scheibe auf.
          </h2>
          <Barbell className="lb-close__bar" initialPlates={4} />
          <p className="lb-lead">
            Trag dich ein, und du erfährst als Erstes, wenn LeanBulk startet.
          </p>
          <WaitlistForm id="warteliste-unten" />
        </section>
      </main>

      <footer className="lb-footer">
        <span>© {new Date().getFullYear()} Elias Burk</span>
        <nav aria-label="Rechtliches">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
        <p className="lb-footer__note">Alle Werte in den App-Ansichten sind Beispielwerte.</p>
      </footer>

      <StickyJoin heroFormId="warteliste-oben" finalFormId="warteliste-unten" />
    </>
  );
}
