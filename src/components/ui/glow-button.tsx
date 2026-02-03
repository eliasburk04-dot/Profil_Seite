'use client';

import { forwardRef } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';

export const GlowButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return <Button ref={ref} variant={variant} {...props} />;
  }
);

GlowButton.displayName = 'GlowButton';
