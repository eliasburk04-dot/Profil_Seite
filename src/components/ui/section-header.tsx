import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'left',
  eyebrow,
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      <div
        className={cn(
          'inline-flex items-center gap-3 text-eyebrow uppercase text-white/60',
          centered && 'mx-auto'
        )}
      >
        <span className="h-px w-12 bg-white/18" />
        <span>{eyebrow ?? 'Burk-Solutions'}</span>
      </div>
      <div className={cn('space-y-3', centered && 'mx-auto max-w-3xl')}>
        <h2>
          {title.split(' ').length > 1 ? (
            <>
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="rich-accent">{title.split(' ').slice(-1)[0]}</span>
            </>
          ) : (
            title
          )}
        </h2>
        {description && (
          <p className={cn('max-w-2xl text-body text-text-secondary', centered && 'mx-auto')}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
