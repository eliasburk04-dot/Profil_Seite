# LeanBulk – Website

Landingpage mit Warteliste für die iPhone-App **LeanBulk**. Gedacht als Ziel für den Link in der Instagram-Bio, deshalb mobile-first.

## Stack

- Next.js 14 (App Router), TypeScript
- Eigenes CSS (`src/app/leanbulk.css`), kein Tailwind
- Framer Motion für die Hantel, die Satz-Häkchen und den Gewichtsverlauf
- lucide-react für Icons

## Entwicklung

```bash
npm install
npm run dev -- -H 0.0.0.0   # auch im lokalen Netz erreichbar, z. B. vom Handy
```

- `npm run build` – Production-Build
- `npm run lint` / `npm run typecheck`
- `npm test` – Playwright-Tests (iPhone- und Desktop-Viewport)

## Warteliste

`POST /api/waitlist` mit `{ email, source }`. Lokal landen die Einträge in `.data/waitlist.json` (gitignored).
`?ref=insta` oder `?utm_source=…` im Link wird als Quelle mitgespeichert.

**Vor dem Livegang:** Auf Vercel ist das Dateisystem schreibgeschützt. `src/lib/waitlist.ts` muss dann auf einen echten Speicher umgestellt werden, also eine Datenbank oder einen Mail-Anbieter mit Double-Opt-in. Die Datenschutzerklärung (`src/content/legal.ts`) muss diesen Anbieter und das Hosting nennen.

## Struktur

```
src/app/page.tsx              Landingpage
src/app/impressum, datenschutz Rechtliches
src/app/api/waitlist          Wartelisten-Endpunkt
src/components/leanbulk/      Hantel, Formular, App-Screens, Charts
src/content/legal.ts          Texte für Impressum und Datenschutz
docs/leanbulk-landing-brief.md Design-Richtung
```
