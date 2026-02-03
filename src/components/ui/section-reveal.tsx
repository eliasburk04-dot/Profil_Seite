import type { CSSProperties, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type RevealElement = 'div' | 'section' | 'article';

interface SectionRevealProps {
  as?: RevealElement;
  className?: string;
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function SectionReveal({
  as = 'section',
  className,
  children,
  delay = 0,
  y = 18,
}: SectionRevealProps) {
  const Component = as as ElementType;
  const style = {
    animationDelay: delay > 0 ? `${delay}s` : undefined,
    '--reveal-y': `${y}px`,
  } as CSSProperties & Record<'--reveal-y', string>;

  return (
    <Component className={cn('motion-safe:animate-section-reveal', className)} style={style}>
      {children}
    </Component>
  );
}
