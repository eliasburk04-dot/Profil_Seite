'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type RevealElement = 'div' | 'section' | 'article';

interface SectionRevealProps {
  as?: RevealElement;
  className?: string;
  children: ReactNode;
  /** @deprecated No longer used - kept for API compatibility */
  delay?: number;
  y?: number;
}

export function SectionReveal({
  as = 'section',
  className,
  children,
  delay = 0,
  y = 20,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent =
    as === 'div' ? motion.div : as === 'article' ? motion.article : motion.section;

  return (
    <MotionComponent
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
