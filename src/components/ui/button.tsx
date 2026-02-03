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
          'border-border bg-glass-medium text-text-primary shadow-button',
          'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/12 before:to-transparent',
          'hover:-translate-y-1 hover:border-border-strong hover:bg-glass-strong hover:shadow-button-hover',
          'active:translate-y-0 active:shadow-button',
        ],
        ghost: [
          'border-transparent bg-transparent text-text-secondary',
          'hover:bg-glass-subtle hover:text-text-primary',
          'active:bg-glass-light',
        ],
        outline: [
          'border-border-strong bg-glass-subtle text-text-primary shadow-glass-xs',
          'hover:-translate-y-1 hover:border-border-glow hover:shadow-glow-sm',
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

