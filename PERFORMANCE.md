# Performance-Leitfaden

## Umgesetzte Optimierungen

- **Client-JS deutlich reduziert**
  - `framer-motion` vollständig entfernt.
  - `src/app/template.tsx` und `src/components/ui/section-reveal.tsx` auf CSS-basierte, serverfreundliche Animationen umgestellt.
  - Unnötige `'use client'` Direktiven in statischen UI-Komponenten entfernt.
- **Bundle-Optimierung**
  - Dynamische Icon-Pattern (`* as LucideIcons`) durch statische Icon-Mappings ersetzt, damit Tree-Shaking sauber greift.
  - `next.config.js` mit `optimizePackageImports: ['lucide-react']` ergänzt.
- **Rendering & Layout-Stabilität**
  - Scroll-Container als einzige Scroll-Fläche beibehalten und mit `contain` + `scrollbar-gutter: stable` optimiert.
  - Blur-/Glass-Effekte konsolidiert und in der Intensität reduziert, um GPU/Compositing-Last zu senken.
- **Fonts**
  - Nur eine Primärschrift (`Manrope`) via `next/font`.
  - Gewichte auf `400/500/600` reduziert.
- **Caching**
  - Immutable Caching für `/_next/static/*` Header ergänzt.

## Ergebnis nach Build

`npm run build` (Next.js 14.2.35) erzeugt statische Seiten mit deutlich reduziertem First-Load-JS:

- Shared First Load JS: **87.3 kB**
- Standardseiten (`/`, `/about`, `/services`, `/contact`): **96.2 kB**
- `/projects` (interaktiv): **112 kB**

## Guardrails für künftige Änderungen

- Neue Komponenten standardmäßig als **Server Components** anlegen; `'use client'` nur bei echter Interaktion.
- Keine dynamischen `lucide-react` Namespace-Lookups mehr (`* as Icons`), immer statische Imports.
- Keine zusätzlichen globalen Provider ohne zwingenden Grund.
- Animationen bevorzugt per CSS; JS-Animation nur bei echtem Mehrwert.
- Glass-/Blur-Effekte nur über zentrale Tokens und Utility-Klassen, keine ad-hoc Backdrop-Filter-Stapel.
- Neue Assets nur mit klarer Größenkontrolle und stabilen Abmessungen (CLS vermeiden).
