import type { ElementType, ReactNode } from 'react';
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
}: SectionRevealProps) {
  const Component = as as ElementType;

  return (
    <Component className={cn(className)}>
      {children}
    </Component>
  );
}
