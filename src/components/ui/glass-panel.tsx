'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  showTopBar?: boolean;
}

/**
 * GlassPanel - Main floating frame used across app shell and larger callouts.
 */
export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, showTopBar = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('glass-panel-shell glass-reflection flex flex-col', className)}
        {...props}
      >
        {showTopBar && (
          <div
            className="relative flex h-11 shrink-0 items-center gap-2 border-b border-border px-5"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/75" />
          </div>
        )}
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';
