import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  glow?: boolean;
}

export function Divider({ className, glow = false }: DividerProps) {
  return (
    <div className={cn('relative py-3', className)} aria-hidden="true">
      <div className="glass-divider" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-tone-cyan/60 to-transparent blur-sm" />
        </div>
      )}
    </div>
  );
}
