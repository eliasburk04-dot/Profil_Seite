# Lean Bulk Website

Dieser Auftritt dient seit dem Nutzerauftrag vom 27.10.2026 ausschließlich Lean Bulk. Produktumfang und Belege stehen in PRODUCT.md, die von der iPhone-App übernommene Gestaltung in DESIGN.md.

- Öffentliche Texte, Betreiberangaben und URLs zentral in src/content/index.ts pflegen. App-Pfade mit LeanBulk/Sources/LeanBulkCore/LegalLinks.swift abgleichen.
- Bei Änderungen an Datenflüssen oder Rechtstexten zuerst docs/legal-research-2026-10-27.md und die betroffene aktuelle Implementierung lesen. Offene Vertrags-/Betreiberfragen bleiben ausdrücklich offen. Nur bestätigte Angaben veröffentlichen.
- App-Abbildungen aus synthetischen Fixtures beziehen; Herkunft in docs/screenshots.json festhalten. Persönliche Gesundheitsdaten und Zugangsdaten außerhalb von Git aufbewahren.
- Der Webauftritt hat keinen Formular-Backenddienst. Externe Einbettungen und neue Empfänger erfordern vor Nutzung einen Abgleich der Datenschutzhinweise.
- Vor Auslieferung Build, TypeScript-Prüfung und HTTP-Vertragsprüfung gegen den Produktionsserver ausführen. Desktop/mobile Darstellung und echte Navigationswege im Browser prüfen. Ein Push belegt keine erfolgreiche Veröffentlichung; Live-Status separat bestätigen.
