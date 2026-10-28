# Lean Bulk Website

Produkt, Hilfe und Rechtliches für die iPhone-App Lean Bulk. Der frühere Portfolioauftritt und fremde App-Dokumentationen wurden auf Nutzerauftrag ersetzt.

## Entwicklung und Prüfung

Node.js ab 20.9, Installation mit `npm ci`. `npm run dev` startet die Entwicklung, `npm run build` erzeugt den Produktionsstand, `npm run typecheck` prüft TypeScript. `npm run start -- --port 3107` startet die Vorschau; gegen diese prüft `npm test` alle internen Links, Fragmente, Pflichtwege, alte URLs, Ressourcen und Sicherheitsheader. Ein anderer Server wird über `SITE_TEST_URL` angegeben.

Texte und Adressen: `src/content/index.ts`. Stabile App-URLs: `/leanbulk/datenschutz`, `/leanbulk/impressum`, `/leanbulk/support`, `/leanbulk/nutzung` und `/leanbulk/quellen`. Root-Pfade für alte eigene Rechtsseiten leiten weiter. Andere App-Dokumentationen sind entfernt und liefern 404.

Die Website setzt keine eigenen Cookies, keine Analytics und kein localStorage ein. Fonts und synthetische App-Aufnahmen liegen lokal unter `public/`. Der Support öffnet bewusst nur ein E-Mail-Programm; es existieren weder Upload noch Formular-Backend.

## Veröffentlichung

Seit 28.10.2026 über Cloudflare Workers mit statischen Dateien (früher „Pages“, inzwischen Teil von Workers; Worker `burk-solutions`, Domain www.burk-solutions.de; die DNS-Zone liegt bereits bei Cloudflare). Next.js erzeugt mit `output: 'export'` statische Dateien in `out/`; `wrangler.jsonc` liefert nur diese Dateien aus, ohne Servercode. Weiterleitungen und Sicherheits-Header stehen in `public/_redirects` und `public/_headers`. Ablauf: `npm run build`, lokal mit `npm run preview` (Cloudflare-Laufzeit auf Port 3107) und `SITE_TEST_URL=http://localhost:3107 npm test` prüfen, dann `npm run deploy` (einmalig `npx wrangler login`). Nicht `wrangler pages …` verwenden: Diese Befehle leiten auf eine automatische OpenNext-Umstellung um. Begründung des Wechsels von Vercel Hobby: `docs/legal-review-2026-10-28.md`, Abschnitt 1.

`docs/screenshots.json` dokumentiert die Herkunft der ausschließlich synthetischen Simulatorbilder. Der App-Store-Link folgt, sobald die App-ID feststeht.
