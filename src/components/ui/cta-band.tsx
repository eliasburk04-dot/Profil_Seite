import type { ReactNode } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { HeroRibbonBackground } from '@/components/ui/hero-ribbon-background';
import { cn } from '@/lib/utils';

interface CtaBandProps {
  title: string;
  description: string;
  actions: ReactNode;
  eyebrow?: string;
  className?: string;
}

export function CtaBand({ title, description, actions, eyebrow, className }: CtaBandProps) {
  return (
    <GlassCard variant="elevated" className={cn('relative overflow-hidden p-6 sm:p-8 lg:p-10', className)}>
      <HeroRibbonBackground variant="page" className="opacity-70" />
      <div className="surface-card-grid" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          {eyebrow && <p className="text-eyebrow uppercase text-white/58">{eyebrow}</p>}
          <h2 className="max-w-2xl text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.98] tracking-[-0.05em]">
            {title}
          </h2>
          <p className="text-body text-text-secondary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3">{actions}</div>
      </div>
    </GlassCard>
  );
}
