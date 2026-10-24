'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

const SETS = [
  { kg: '80', reps: 8 },
  { kg: '80', reps: 8 },
  { kg: '80', reps: 7 },
  { kg: '82,5', reps: 6 },
];

export function GymLog() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="gym" aria-label="Beispiel einer Trainingseinheit">
      <div className="gym__head">
        <p className="gym__exercise">Bankdrücken</p>
        <p className="gym__working">
          <span className="gym__working-kg">80</span>
          <span className="gym__working-unit">kg Arbeitsgewicht · 4 Sätze</span>
        </p>
      </div>
      <ol className="gym__sets">
        {SETS.map((set, index) => (
          <motion.li
            key={index}
            className="gym__set"
            initial={reduceMotion ? false : { opacity: 0.25 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ delay: 0.2 + index * 0.22, duration: 0.35 }}
          >
            <span className="gym__set-no">Satz {index + 1}</span>
            <span className="gym__set-value">
              {set.kg} kg <span aria-hidden="true">×</span>
              <span className="lb-visually-hidden">mal</span> {set.reps}
            </span>
            <motion.span
              className="gym__tick"
              initial={reduceMotion ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ delay: 0.35 + index * 0.22, type: 'spring', stiffness: 420, damping: 20 }}
            >
              <Check aria-label="erledigt" strokeWidth={3.2} />
            </motion.span>
          </motion.li>
        ))}
      </ol>
      <p className="gym__history">Letzte Woche: 4 × 80 kg × 6–7. Diese Woche: mehr.</p>
    </div>
  );
}
