'use client';

import { animate, useReducedMotion } from 'framer-motion';
import { Calendar, Dumbbell, Footprints, Lock, Plus, RotateCcw, Scale, Utensils } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Phone } from './phone';

const formatter = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 });

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const previous = useRef(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduceMotion) {
      node.textContent = formatter.format(value);
      previous.current = value;
      return;
    }
    const controls = animate(previous.current, value, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = formatter.format(Math.round(latest));
      },
    });
    previous.current = value;
    return () => controls.stop();
  }, [value, reduceMotion]);

  return <span ref={ref}>{formatter.format(value)}</span>;
}

const WORKOUT_KCAL = 412;

const TABS = [
  { label: 'Heute', Icon: Calendar },
  { label: 'Lebensmittel', Icon: Utensils },
  { label: 'Sport', Icon: Footprints },
  { label: 'Gym', Icon: Dumbbell },
  { label: 'Gewicht', Icon: Scale },
];

export function TodayDemo() {
  const [logged, setLogged] = useState(false);
  const activity = 486 + (logged ? WORKOUT_KCAL : 0);

  return (
    <div className="lb-demo">
      <Phone label="LeanBulk Tagesübersicht mit Beispielwerten">
        <div className={`ios${logged ? ' ios--scrolled' : ''}`}>
          <p className="ios__large-title">Tagesübersicht</p>
          <p className="ios__section-label">Aufnahme und Tagesziele</p>
          <ul className="ios__group">
            <li className={`ios__row${logged ? ' ios__row--held' : ''}`}>
              <span>Kalorien</span>
              <span className="ios__value">
                2.140 / 3.050 kcal
                <Lock className="ios__lock" aria-label="Ziel bleibt fest" />
              </span>
            </li>
            <li className="ios__row">
              <span>Protein</span>
              <span className="ios__value">148 / 180 g</span>
            </li>
            <li className="ios__row">
              <span>Kohlenhydrate</span>
              <span className="ios__value">251 / 390 g</span>
            </li>
            <li className="ios__row">
              <span>Fett</span>
              <span className="ios__value">62 / 85 g</span>
            </li>
          </ul>
          <p className="ios__section-label">Gewicht</p>
          <ul className="ios__group">
            <li className="ios__row">
              <span>Messwert</span>
              <span className="ios__value">77,3 kg</span>
            </li>
            <li className="ios__row">
              <span>7-Tage-Mittel</span>
              <span className="ios__value">77,2 kg</span>
            </li>
          </ul>
          <p className="ios__section-label">Aktivität</p>
          <ul className="ios__group">
            <li className="ios__row">
              <span>Schritte</span>
              <span className="ios__value">9.812</span>
            </li>
            <li className={`ios__row${logged ? ' ios__row--pulse' : ''}`}>
              <span>Aktivitätsverbrauch</span>
              <span className="ios__value">
                <AnimatedNumber value={activity} /> kcal
              </span>
            </li>
            {logged && (
              <li className="ios__row ios__row--new">
                <span>Ergometer · 45 min</span>
                <span className="ios__value" title="Schätzung">≈ {WORKOUT_KCAL} kcal</span>
              </li>
            )}
          </ul>
        </div>
        <nav className="ios__tabs" aria-hidden="true">
          {TABS.map(({ label, Icon }, index) => (
            <span key={label} className={index === 0 ? 'ios__tab ios__tab--active' : 'ios__tab'}>
              <Icon />
              {label}
            </span>
          ))}
        </nav>
      </Phone>
      <div className="lb-demo__control">
        <button
          type="button"
          className="lb-chip"
          aria-pressed={logged}
          onClick={() => setLogged((value) => !value)}
        >
          {logged ? <RotateCcw aria-hidden="true" /> : <Plus aria-hidden="true" />}
          {logged ? 'Zurücksetzen' : 'Workout eintragen'}
        </button>
        <p className="lb-demo__caption" aria-live="polite">
          {logged
            ? 'Aktivitätsverbrauch +412 kcal. Dein Kalorienziel: weiter 3.050.'
            : 'Tipp drauf und schau, was mit dem Kalorienziel passiert.'}
        </p>
      </div>
    </div>
  );
}
