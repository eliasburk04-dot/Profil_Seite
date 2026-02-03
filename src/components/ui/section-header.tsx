'use client';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center', className)}>
      <div className={cn('h-px w-16 rounded-full bg-accent/70', align === 'center' && 'mx-auto')} />
      <h2 className="text-heading sm:text-[1.9rem]">{title}</h2>
      {description && (
        <p className={cn('max-w-2xl text-body text-text-secondary', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
