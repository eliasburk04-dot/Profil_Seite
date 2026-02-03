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
            className="relative h-11 shrink-0 border-b border-border"
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';

