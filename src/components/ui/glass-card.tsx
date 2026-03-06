import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'subtle';
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = false, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl',
          variant === 'default' && 'surface-card',
          variant === 'elevated' && 'surface-card-hero',
          variant === 'subtle' && 'surface-card-muted',
          hover && 'transform-gpu transition-transform duration-200 hover:-translate-y-1',
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
