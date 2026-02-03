# Burk-Solutions Portfolio

Premium Portfolio-Website für Burk-Solutions auf Basis von Next.js, TypeScript und Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion (subtil)
- Radix UI primitives

## Development

```bash
npm install
npm run dev
```

Wichtige Befehle:

- `npm run dev` – lokaler Dev-Server
- `npm run build` – Production Build
- `npm run start` – Production Server lokal
- `npm run lint` – ESLint
- `npm run format` – Prettier

## Content

Alle Inhalte liegen zentral in `src/content/index.ts`.

## Glass Theme Tokens

Die Visual Tokens für das neue Dark-Glass-Design liegen in:

- `src/styles/glass.css` (Single Source of Truth für Farben, Opacity, Blur, Border, Glow, Shadows, Radii, Spacing)
- `tailwind.config.ts` (Tailwind-Mapping auf die CSS-Variablen)

Wichtige Regler:

- `--glass-opacity-*` steuert Flächen-Transparenz
- `--blur-*` steuert Weichzeichner
- `--border-alpha-*` steuert Border-Intensität
- `--shadow-*` steuert Depth/Glow
- `--accent-rgb` und `--accent-alpha-*` steuern Cyan-Glow-Farbe und Intensität

## Deployment

```bash
vercel --prod
```

## Hinweise

- Design- und Interaktionslogik ist in wiederverwendbaren Komponenten unter `src/components/ui/` gekapselt.
- Kontaktformular nutzt konsistente Input-Komponenten (`GlassInput`, `GlassSelect`, `GlassTextarea`).
