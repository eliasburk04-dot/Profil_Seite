import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-full border text-sm font-semibold tracking-[0.01em]',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
    'disabled:pointer-events-none disabled:opacity-50',
    'motion-reduce:transform-none motion-reduce:transition-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-white text-black shadow-button-primary border border-transparent',
          'hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-button-primary-hover',
          'active:translate-y-0',
        ],
        secondary: [
          'border border-white/10 bg-white/5 text-text-primary backdrop-blur-xl shadow-button',
          'hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-button-hover',
          'active:translate-y-0',
        ],
        outline: [
          'border-white/18 bg-transparent text-text-primary',
          'hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.04]',
          'active:translate-y-0',
        ],
        ghost: [
          'border-transparent bg-transparent text-text-secondary shadow-none',
          'hover:bg-white/[0.05] hover:text-text-primary',
        ],
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        default: 'h-11 px-5',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 rounded-full p-0',
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

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
