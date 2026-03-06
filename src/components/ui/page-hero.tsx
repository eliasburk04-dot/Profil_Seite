import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type HeroStat = {
  value: string;
  label: string;
};

interface PageHeroProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  description: string;
  supportingText?: string;
  actions?: ReactNode;
  stats?: HeroStat[];
  className?: string;
}

export function PageHero({
  badge,
  badgeIcon,
  title,
  description,
  supportingText,
  actions,
  stats,
  className,
}: PageHeroProps) {
  return (
    <div className={cn('relative z-10 flex flex-col justify-center items-center text-center max-w-4xl mx-auto w-full min-h-[100vh] space-y-10 pt-24 pb-16 lg:pt-32 lg:pb-24', className)}>
      {badge && (
        <div className="section-badge w-fit bg-white/5 border border-white/10 text-white/80 rounded-full px-4 py-1.5 flex items-center gap-2 backdrop-blur-md">
          {badgeIcon}
          <span className="text-xs tracking-wider uppercase font-semibold">{badge}</span>
        </div>
      )}

      <div className="space-y-6 w-full">
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] font-medium text-white max-w-[900px] mx-auto">
          {title.split(' ').length > 1 ? (
            <>
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="rich-accent">{title.split(' ').slice(-1)[0]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="max-w-2xl mx-auto text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-white/60">
          {description}
        </p>
        {supportingText && (
          <p className="max-w-2xl mx-auto font-accent text-[1.2rem] italic leading-[1.45] text-white/50">
            {supportingText}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {actions}
        </div>
      )}

      {stats && stats.length > 0 && (
        <div className="grid gap-4 md:grid-cols-3 pt-12 w-full max-w-3xl border-t border-white/10" data-testid="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[2rem] font-medium tracking-[-0.04em] text-white">
                {stat.value}
              </span>
              <span className="text-sm text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
