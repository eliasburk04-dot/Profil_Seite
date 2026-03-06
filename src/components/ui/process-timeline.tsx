'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { WorkflowStep } from '@/content';
import { cn } from '@/lib/utils';

interface ProcessTimelineProps {
  steps: readonly WorkflowStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn('grid gap-4 lg:grid-cols-4', className)} data-testid="process-timeline">
      {steps.map((step, index) => (
        <motion.article
          key={step.step}
          className="surface-card-muted rounded-3xl p-5 sm:p-6"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-eyebrow text-white/46">Schritt {step.step}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-semibold text-white/86">
                {String(step.step).padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-[1.35rem] leading-[1.08] tracking-[-0.03em]">{step.title}</h3>
              <p className="text-body-sm text-text-secondary">{step.description}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
