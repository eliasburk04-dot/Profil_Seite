/**
 * Motion Design Tokens - Centralized animation configuration
 * 
 * All durations, easings, and animation values in one place.
 * Use CSS custom properties for CSS-based animations and
 * export JS values for any JS-based animation needs.
 */

// =============================================================================
// TIMING & EASING TOKENS
// =============================================================================

export const motion = {
  // Durations (in seconds for CSS, milliseconds available as *1000)
  duration: {
    instant: 0.1,
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
    reveal: 0.35,
    ambient: 12, // For ambient light sweep cycle
    drift: 20, // For background glow drift
    pulse: 15, // For CTA idle pulse
  },

  // Easing curves
  easing: {
    /** Smooth deceleration - good for entrances */
    out: 'cubic-bezier(0.22, 1, 0.36, 1)',
    /** Smooth acceleration - good for exits */
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    /** Smooth both ways - good for hover states */
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    /** Snappy spring-like feel */
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    /** Linear for ambient animations */
    linear: 'linear',
  },

  // Opacity values for ambient effects
  opacity: {
    sweep: 0.08, // Light sweep max opacity
    drift: 0.6, // Background glow base
    pulse: 0.12, // CTA pulse glow intensity
    hint: 0.8, // Scroll hint
  },

  // Transform values
  transform: {
    hoverLift: -3, // px
    activeLift: -1, // px
    revealY: 12, // px
    driftRange: 4, // px for background drift
    hintBob: 2, // px for scroll hint
  },

  // Stagger delays for reveals (in seconds)
  stagger: {
    fast: 0.04,
    normal: 0.06,
    slow: 0.08,
  },
} as const;

// =============================================================================
// CSS VARIABLE INJECTION (for use in CSS)
// =============================================================================

/**
 * Generate CSS custom properties string for motion tokens
 * Can be used in a style tag or CSS-in-JS
 */
export const motionCSSVariables = `
  --motion-duration-instant: ${motion.duration.instant}s;
  --motion-duration-fast: ${motion.duration.fast}s;
  --motion-duration-normal: ${motion.duration.normal}s;
  --motion-duration-slow: ${motion.duration.slow}s;
  --motion-duration-reveal: ${motion.duration.reveal}s;
  --motion-duration-ambient: ${motion.duration.ambient}s;
  --motion-duration-drift: ${motion.duration.drift}s;
  --motion-duration-pulse: ${motion.duration.pulse}s;
  
  --motion-ease-out: ${motion.easing.out};
  --motion-ease-in: ${motion.easing.in};
  --motion-ease-in-out: ${motion.easing.inOut};
  --motion-ease-spring: ${motion.easing.spring};
  
  --motion-opacity-sweep: ${motion.opacity.sweep};
  --motion-opacity-drift: ${motion.opacity.drift};
  --motion-opacity-pulse: ${motion.opacity.pulse};
  
  --motion-lift-hover: ${motion.transform.hoverLift}px;
  --motion-lift-active: ${motion.transform.activeLift}px;
  --motion-reveal-y: ${motion.transform.revealY}px;
  --motion-drift-range: ${motion.transform.driftRange}px;
  --motion-hint-bob: ${motion.transform.hintBob}px;
  
  --motion-stagger-fast: ${motion.stagger.fast}s;
  --motion-stagger-normal: ${motion.stagger.normal}s;
  --motion-stagger-slow: ${motion.stagger.slow}s;
`;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type MotionConfig = typeof motion;
export type MotionDuration = keyof typeof motion.duration;
export type MotionEasing = keyof typeof motion.easing;
