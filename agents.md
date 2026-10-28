# Lean Bulk Website

Dieser Auftritt dient seit dem Nutzerauftrag vom 27.10.2026 ausschließlich Lean Bulk. Produktumfang und Belege stehen in PRODUCT.md, die von der iPhone-App übernommene Gestaltung in DESIGN.md.

- Öffentliche Texte, Betreiberangaben und URLs zentral in src/content/index.ts pflegen. App-Pfade mit LeanBulk/Sources/LeanBulkCore/LegalLinks.swift abgleichen.
- Bei Änderungen an Datenflüssen oder Rechtstexten zuerst docs/legal-research-2026-10-27.md und die betroffene aktuelle Implementierung lesen. Offene Vertrags-/Betreiberfragen bleiben ausdrücklich offen. Nur bestätigte Angaben veröffentlichen.
- App-Abbildungen aus synthetischen Fixtures beziehen; Herkunft in docs/screenshots.json festhalten. Persönliche Gesundheitsdaten und Zugangsdaten außerhalb von Git aufbewahren.
- Der Webauftritt hat keinen Formular-Backenddienst. Externe Einbettungen und neue Empfänger erfordern vor Nutzung einen Abgleich der Datenschutzhinweise.
- Vor Auslieferung Build, TypeScript-Prüfung und HTTP-Vertragsprüfung gegen `npm run preview` (Cloudflare-Laufzeit mit `_headers`/`_redirects`) ausführen. Desktop/mobile Darstellung und echte Navigationswege im Browser prüfen. Ein Push belegt keine erfolgreiche Veröffentlichung; Live-Status separat bestätigen.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
