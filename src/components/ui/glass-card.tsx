'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'subtle';
  hover?: boolean;
  glow?: boolean;
}

/**
 * GlassCard - Reusable rounded glass surface with optional hover lift and glow.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = false, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass-reflection',
          variant === 'default' && 'glass-card-surface',
          variant === 'elevated' && 'glass-card-elevated',
          variant === 'subtle' && 'glass-card-subtle',
          hover && 'interactive-lift cursor-pointer',
          glow && 'shadow-glow-sm',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
