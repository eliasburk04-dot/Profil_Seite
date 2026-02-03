'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollResetProps {
  children: ReactNode;
  className?: string;
}

/**
 * A client component that wraps the scrollable content area and
 * instantly resets scroll position on route changes.
 */
export function ScrollReset({ children, className }: ScrollResetProps) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Instantly reset scroll to top when route changes
    // No animation, just immediate scrollTop = 0
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  );
}
