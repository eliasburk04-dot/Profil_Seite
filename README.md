# Lean Bulk Website

Produkt, Hilfe und Rechtliches für die iPhone-App Lean Bulk. Der frühere Portfolioauftritt und fremde App-Dokumentationen wurden auf Nutzerauftrag ersetzt.

## Entwicklung und Prüfung

Node.js ab 20.9, Installation mit `npm ci`. `npm run dev` startet die Entwicklung, `npm run build` erzeugt den Produktionsstand, `npm run typecheck` prüft TypeScript. `npm run start -- --port 3107` startet die Vorschau; gegen diese prüft `npm test` alle internen Links, Fragmente, Pflichtwege, alte URLs, Ressourcen und Sicherheitsheader. Ein anderer Server wird über `SITE_TEST_URL` angegeben.

Texte und Adressen: `src/content/index.ts`. Stabile App-URLs: `/leanbulk/datenschutz`, `/leanbulk/impressum`, `/leanbulk/support`, `/leanbulk/nutzung` und `/leanbulk/quellen`. Root-Pfade für alte eigene Rechtsseiten leiten weiter. Andere App-Dokumentationen sind entfernt und liefern 404.

Die Website setzt keine eigenen Cookies, keine Analytics und kein localStorage ein. Fonts und synthetische App-Aufnahmen liegen lokal unter `public/`. Der Support öffnet bewusst nur ein E-Mail-Programm; es existieren weder Upload noch Formular-Backend.

## Veröffentlichung

Bestehendes Vercel-Projekt und bestehende Produktionsadresse beibehalten. Die lokale Kopie ist noch nicht authentifiziert/verknüpft. Das Projekt war am 27.10.2026 pausiert. Vor Veröffentlichung Betreiber-/Kontaktdaten und die Hostingkonfiguration aus `docs/legal-research-2026-10-27.md` klären. Ein kommerzieller Auftritt benötigt bei Vercel einen passenden Tarif. Auftragsverarbeitung und Löschfristen lassen sich nicht durch Quellcode allein bestätigen.

`docs/screenshots.json` dokumentiert die Herkunft der ausschließlich synthetischen Simulatorbilder. Der App-Store-Start bleibt als in Vorbereitung gekennzeichnet, bis eine echte Store-URL vorliegt.
