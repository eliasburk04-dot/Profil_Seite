'use client';

import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  glow?: boolean;
}

export function Divider({ className, glow = false }: DividerProps) {
  return (
    <div className={cn('relative py-4', className)}>
      <div className="glass-divider" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-accent/70 to-transparent blur-[0.5px]" />
        </div>
      )}
    </div>
  );
}
