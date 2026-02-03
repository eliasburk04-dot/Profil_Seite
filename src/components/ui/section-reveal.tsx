'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type RevealElement = 'div' | 'section' | 'article';

interface SectionRevealProps {
  as?: RevealElement;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
}

const transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function SectionReveal({
  as = 'section',
  className,
  children,
  delay = 0,
  y = 18,
  once = true,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    if (as === 'div') {
      return <div className={className}>{children}</div>;
    }

    if (as === 'article') {
      return <article className={className}>{children}</article>;
    }

    return <section className={className}>{children}</section>;
  }

  const motionProps = {
    className: cn(className),
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once, amount: 0.25 },
    transition: { ...transition, delay },
  };

  if (as === 'div') {
    return <motion.div {...motionProps}>{children}</motion.div>;
  }

  if (as === 'article') {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return <motion.section {...motionProps}>{children}</motion.section>;
}
