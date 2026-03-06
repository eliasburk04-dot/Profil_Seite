'use client';

import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroRibbonBackgroundProps {
  className?: string;
  variant?: 'hero' | 'page';
}

export function HeroRibbonBackground({
  className,
  variant = 'hero',
}: HeroRibbonBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        'fixed top-0 left-[50%] w-[100vw] h-[100vh] -translate-x-[50%] overflow-hidden flex items-center justify-center pointer-events-none z-0',
        className
      )}
      data-testid="hero-ribbon"
      aria-hidden="true"
    >
      <video
        src="https://framerusercontent.com/assets/iWlVr4qV5BuFxjhc6g7QcPK5o.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          'absolute w-full h-full object-cover opacity-90 mix-blend-screen scale-[1.15]'
        )}
        style={shouldReduceMotion ? { display: 'none' } : {}}
      />
      {/* Top radial gradient for subtle light if needed */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_28%)]" />
      {/* Bottom fade to black */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,1)_100%)]" />
    </div>
  );
}
