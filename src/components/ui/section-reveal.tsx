import type { CSSProperties, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type RevealElement = 'div' | 'section' | 'article';

interface SectionRevealProps {
  as?: RevealElement;
  className?: string;
  children: ReactNode;
  /** @deprecated No longer used - kept for API compatibility */
  delay?: number;
  y?: number;
}

export function SectionReveal({
  as = 'section',
  className,
  children,
  y = 8,
}: SectionRevealProps) {
  const Component = as as ElementType;
  // No delays - instant content appearance for fast navigation
  const style = {
    '--reveal-y': `${y}px`,
  } as CSSProperties & Record<'--reveal-y', string>;

  return (
    <Component className={cn('motion-safe:animate-section-reveal', className)} style={style}>
      {children}
    </Component>
  );
}
