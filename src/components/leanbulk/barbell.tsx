'use client';

import { motion, useAnimationControls, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useId, useRef, useState } from 'react';

export const JOINED_EVENT = 'leanbulk:joined';

/** Competition bumper colours, heaviest first, as they go onto the sleeve. */
const PLATES = [
  { kg: 25, color: 'var(--plate-red)', width: 24, height: 148 },
  { kg: 20, color: 'var(--plate-blue)', width: 20, height: 148 },
  { kg: 15, color: 'var(--plate-yellow)', width: 17, height: 148 },
  { kg: 10, color: 'var(--plate-green)', width: 14, height: 148 },
  { kg: 5, color: 'var(--plate-white)', width: 11, height: 92 },
];

const VIEW_W = 420;
const VIEW_H = 170;
const MID_Y = VIEW_H / 2;
const COLLAR_INSET = 128;

interface BarbellProps {
  /** Plates per side loaded on mount; the last one waits for a waitlist signup. */
  initialPlates?: number;
  className?: string;
}

export function Barbell({ initialPlates = 4, className }: BarbellProps) {
  const reduceMotion = useReducedMotion();
  const [joined, setJoined] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const loaded = !inView && !reduceMotion ? 0 : joined ? PLATES.length : initialPlates;
  const bar = useAnimationControls();
  const uid = useId().replace(/:/g, '');
  const steel = `url(#${uid}-steel)`;

  useEffect(() => {
    const onJoined = () => setJoined(true);
    window.addEventListener(JOINED_EVENT, onJoined);
    return () => window.removeEventListener(JOINED_EVENT, onJoined);
  }, []);

  useEffect(() => {
    if (reduceMotion || loaded === 0) return;
    // The bar takes the weight: a short dip once the last plate of a batch lands.
    const delay = loaded === initialPlates ? 0.35 + initialPlates * 0.14 : 0.45;
    bar.start({ y: [0, 3.5, -1, 0], transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
  }, [bar, loaded, initialPlates, reduceMotion]);

  const plateRects = (side: 'left' | 'right') => {
    let offset = 0;
    return PLATES.map((plate, index) => {
      const x =
        side === 'left'
          ? COLLAR_INSET - offset - plate.width
          : VIEW_W - COLLAR_INSET + offset;
      offset += plate.width + 1.5;
      const isLoaded = index < loaded;
      const travel = side === 'left' ? -COLLAR_INSET - 40 : COLLAR_INSET + 40;
      const fromMount = index < initialPlates;
      return (
        <motion.g
          key={`${side}-${plate.kg}`}
          initial={reduceMotion ? false : { x: travel, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : { x: travel, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 24,
            delay: fromMount ? 0.25 + index * 0.14 : 0.1,
          }}
        >
          <rect
            x={x}
            y={MID_Y - plate.height / 2}
            width={plate.width}
            height={plate.height}
            rx={3}
            fill={plate.color}
          />
          {/* Moulded rim and steel hub seen edge-on */}
          <rect
            x={x + 2}
            y={MID_Y - plate.height / 2 + 6}
            width={plate.width - 4}
            height={plate.height - 12}
            rx={2}
            fill="none"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth={1}
          />
          <rect x={x} y={MID_Y - 13} width={plate.width} height={26} fill={steel} opacity={0.55} />
        </motion.g>
      );
    });
  };

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        width="100%"
        role="presentation"
        animate={bar}
        style={{ overflow: 'visible', display: 'block' }}
      >
        <defs>
          <linearGradient id={`${uid}-steel`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e9ebee" />
            <stop offset="0.45" stopColor="#a7abb1" />
            <stop offset="1" stopColor="#5d6168" />
          </linearGradient>
          <pattern id={`${uid}-knurl`} width="3" height="3" patternUnits="userSpaceOnUse">
            <path d="M0 3 L3 0" stroke="#3a3d42" strokeWidth="0.6" />
          </pattern>
        </defs>
        {/* Shaft, sleeves and collars */}
        <rect x={-30} y={MID_Y - 4} width={VIEW_W + 60} height={8} rx={4} fill={steel} />
        <rect x={-30} y={MID_Y - 7} width={COLLAR_INSET + 30} height={14} rx={3} fill={steel} />
        <rect
          x={VIEW_W - COLLAR_INSET}
          y={MID_Y - 7}
          width={COLLAR_INSET + 30}
          height={14}
          rx={3}
          fill={steel}
        />
        <rect x={COLLAR_INSET} y={MID_Y - 17} width={9} height={34} rx={2} fill={steel} />
        <rect x={VIEW_W - COLLAR_INSET - 9} y={MID_Y - 17} width={9} height={34} rx={2} fill={steel} />
        {/* Knurling marks */}
        {Array.from({ length: 2 }).map((_, i) => (
          <rect
            key={i}
            x={i === 0 ? 168 : 222}
            y={MID_Y - 4}
            width={30}
            height={8}
            fill={`url(#${uid}-knurl)`}
            opacity={0.5}
          />
        ))}
        {plateRects('left')}
        {plateRects('right')}
      </motion.svg>
    </div>
  );
}
