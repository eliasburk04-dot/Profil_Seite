import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagPillVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full border',
    'text-xs font-medium tracking-[0.01em] transition-all duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'border-border bg-glass-subtle text-text-secondary',
        accent: 'border-border-accent bg-accent-muted text-text-primary shadow-glow-sm',
        muted: 'border-border-subtle bg-bg-elevated/50 text-text-muted',
      },
      size: {
        sm: 'px-2.5 py-1 text-2xs',
        default: 'px-3 py-1.5 text-xs',
        lg: 'px-3.5 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface TagPillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagPillVariants> {}

export const TagPill = forwardRef<HTMLSpanElement, TagPillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <span ref={ref} className={cn(tagPillVariants({ variant, size, className }))} {...props} />;
  }
);

TagPill.displayName = 'TagPill';

