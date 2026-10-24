'use client';

import { motion, useReducedMotion } from 'framer-motion';

/** Synthetic example: 28 morning weigh-ins on a slow lean bulk (~+0,25 kg/Woche). */
const DAILY = [
  76.2, 75.8, 76.4, 76.1, 75.9, 76.6, 76.3, 76.0, 76.5, 76.8, 76.2, 76.4, 76.9, 76.5, 76.3, 76.9, 77.1,
  76.6, 76.8, 77.3, 76.9, 76.7, 77.2, 77.5, 77.0, 77.1, 77.6, 77.3,
];

const AVERAGE = DAILY.map((_, index) => {
  const window = DAILY.slice(Math.max(0, index - 6), index + 1);
  return window.reduce((sum, value) => sum + value, 0) / window.length;
});

const W = 340;
const H = 190;
const PAD = { top: 18, right: 14, bottom: 26, left: 14 };
const MIN = 75.5;
const MAX = 78;

const xAt = (index: number) => PAD.left + (index / (DAILY.length - 1)) * (W - PAD.left - PAD.right);
const yAt = (value: number) => PAD.top + ((MAX - value) / (MAX - MIN)) * (H - PAD.top - PAD.bottom);

const averagePath = AVERAGE.map((value, index) => `${index === 0 ? 'M' : 'L'}${xAt(index).toFixed(1)} ${yAt(value).toFixed(1)}`).join(' ');

const format = (value: number) => value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function WeightTrend() {
  const reduceMotion = useReducedMotion();
  const last = AVERAGE[AVERAGE.length - 1];
  const first = AVERAGE[6];

  return (
    <figure className="trend">
      <div className="trend__readout">
        <p>
          <span className="trend__big">{format(last)}</span>
          <span className="trend__unit">kg</span>
        </p>
        <p className="trend__label">7-Tage-Mittel · +{format(last - first)} kg in 3 Wochen</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="trend__chart" role="img" aria-label="Gewichtsverlauf über 28 Tage: Tageswerte schwanken, das 7-Tage-Mittel steigt gleichmäßig.">
        {[76, 77].map((tick) => (
          <g key={tick}>
            <line x1={PAD.left} x2={W - PAD.right} y1={yAt(tick)} y2={yAt(tick)} className="trend__grid" />
            {/* Label where the data is far from the gridline: 77 kg on the left, 76 kg on the right */}
            <text
              x={tick === 77 ? PAD.left : W - PAD.right}
              y={yAt(tick) - 5}
              className="trend__tick"
              textAnchor={tick === 77 ? 'start' : 'end'}
            >
              {tick} kg
            </text>
          </g>
        ))}
        {DAILY.map((value, index) => (
          <motion.circle
            key={index}
            cx={xAt(index)}
            cy={yAt(value)}
            r={2.6}
            className="trend__dot"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.025, duration: 0.2 }}
          />
        ))}
        <motion.path
          d={averagePath}
          className="trend__line"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <text x={PAD.left} y={H - 6} className="trend__tick">
          vor 4 Wochen
        </text>
        <text x={W - PAD.right} y={H - 6} className="trend__tick" textAnchor="end">
          heute
        </text>
      </svg>
      <figcaption className="trend__legend">
        <span>
          <i className="trend__key trend__key--dot" /> Tageswert
        </span>
        <span>
          <i className="trend__key trend__key--line" /> 7-Tage-Mittel
        </span>
        <span className="trend__sample">Beispieldaten</span>
      </figcaption>
    </figure>
  );
}
