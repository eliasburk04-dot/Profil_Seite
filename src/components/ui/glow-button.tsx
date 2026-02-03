'use client';

import { forwardRef, useEffect, useState } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * GlowButton - Primary CTA button with optional idle pulse animation.
 * The pulse stops after any user interaction within the widget.
 */
export const GlowButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    const [shouldPulse, setShouldPulse] = useState(true);

    useEffect(() => {
      // Stop pulsing on any user interaction
      const stopPulse = () => setShouldPulse(false);

      // Listen for interactions on the content scroll area
      const scrollArea = document.querySelector('.content-scroll-area');
      const events = ['mousedown', 'keydown', 'touchstart', 'scroll'] as const;

      events.forEach((event) => {
        scrollArea?.addEventListener(event, stopPulse, { passive: true, once: true });
        // Also listen on document for keyboard
        if (event === 'keydown') {
          document.addEventListener(event, stopPulse, { once: true });
        }
      });

      return () => {
        events.forEach((event) => {
          scrollArea?.removeEventListener(event, stopPulse);
          if (event === 'keydown') {
            document.removeEventListener(event, stopPulse);
          }
        });
      };
    }, []);

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(shouldPulse && 'cta-idle-pulse', className)}
        {...props}
      />
    );
  }
);

GlowButton.displayName = 'GlowButton';

