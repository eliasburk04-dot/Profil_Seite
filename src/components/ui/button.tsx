import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-full border text-sm font-semibold tracking-[0.01em]',
    'relative overflow-hidden transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
    'disabled:pointer-events-none disabled:opacity-55',
    'active:scale-[0.98]',
    'motion-reduce:transition-none motion-reduce:transform-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-border-glow text-bg-primary',
          'bg-[linear-gradient(135deg,rgba(139,248,238,0.95),rgba(107,236,224,0.78))]',
          'shadow-button-primary',
          'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/35 before:to-transparent',
          'hover:-translate-y-1 hover:shadow-button-primary-hover',
          'active:translate-y-0 active:shadow-button-primary',
        ],
        secondary: [
          'border-white/20 bg-white/10 text-text-primary shadow-button backdrop-blur-lg',
          'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/22 before:to-transparent',
          'hover:-translate-y-1 hover:border-white/35 hover:bg-white/16 hover:shadow-button-hover',
          'active:translate-y-0 active:shadow-button',
        ],
        ghost: [
          'border-transparent bg-transparent text-text-secondary',
          'hover:bg-glass-subtle hover:text-text-primary',
          'active:bg-glass-light',
        ],
        outline: [
          'border-white/24 bg-white/8 text-text-primary shadow-glass-xs backdrop-blur-lg',
          'hover:-translate-y-1 hover:border-white/38 hover:shadow-glow-sm',
          'active:translate-y-0',
        ],
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-5',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';

export { buttonVariants };

