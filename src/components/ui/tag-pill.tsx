import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagPillVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full border',
    'font-medium tracking-[0.01em] transition-colors duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'border-white/10 bg-white/[0.04] text-text-secondary',
        accent: 'border-accent/25 bg-accent/10 text-accent-solid',
        muted: 'border-white/8 bg-white/[0.02] text-text-muted',
      },
      size: {
        sm: 'px-2.5 py-1 text-2xs',
        default: 'px-3 py-1.5 text-xs',
        lg: 'px-4 py-2 text-sm',
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
    return (
      <span ref={ref} className={cn(tagPillVariants({ variant, size, className }))} {...props} />
    );
  }
);

TagPill.displayName = 'TagPill';
