# Rechts- und Markenprüfung · 28.10.2026

Prüfung der Website-Texte (`src/content/index.ts`) und der rechtlich relevanten App-Texte (`LeanBulk/Sources/LeanBulkCore/LegalLinks.swift`, Paywall) gegen Gesetzestexte, Behördenquellen, Anbieterbedingungen und Markenregister. Dies ist keine anwaltliche Beratung und keine Zusage von Rechtssicherheit. Grundlage ist der vorherige Abgleich in `docs/legal-research-2026-10-27.md`.

Ampel: **Rot** = Handlungsbedarf mit realem Risiko · **Gelb** = vertretbar, mit Restrisiko oder Empfehlung · **Grün** = erfüllt.

## 1. Hosting (Vercel Hobby) – Rot

Nutzerentscheidung vom 28.10.2026: Tarif bleibt vorerst Hobby.

- **Vertragsverstoß gegenüber Vercel.** Vercels Nutzungsbedingungen, Abschnitt 4, erlauben Hobby nur für persönliche oder nicht kommerzielle Nutzung. Die [Fair-Use-Richtlinien](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) nennen ausdrücklich „Advertising the sale of a product or service“ als kommerzielle Nutzung. Eine Produktseite für eine App mit kostenpflichtigem Abo fällt darunter. Folge: Vercel darf Hobby-Projekte ohne Vorankündigung deaktivieren. Das Projekt war am 27.10.2026 bereits pausiert. Fällt die Website aus, sind auch die in der App und in App Store Connect hinterlegten Datenschutz- und Support-URLs nicht erreichbar.
- **Kein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).** Das [Vercel-DPA](https://vercel.com/legal/dpa) gilt laut eigenem Text für „Customers who are on Enterprise and Pro plans“. Bei Hobby besteht damit keine Vereinbarung nach Art. 28 Abs. 3 DSGVO, obwohl Vercel IP-Adressen und Zugriffsdaten im Auftrag verarbeitet. Das ist ein formeller DSGVO-Mangel des Websitebetreibers. Bußgeldrisiko bei einer kleinen Info-Seite eher gering, aber abmahn- und prüffähig.
- **Text angepasst:** Die Datenschutzerklärung behauptet keinen „vereinbarten Hostingvertrag“ mehr, und der DPA-Link ist entfernt. Die DPF-Zertifizierung ist als Angabe von Vercel gekennzeichnet; Vercels [Datenschutzhinweis](https://vercel.com/legal/privacy-notice) bestätigt EU-US-, UK- und Swiss-US-DPF sowie die Anschrift 440 N Barranca Avenue #4133, Covina, CA 91723.
- **Empfehlung:** Vercel Pro, oder ein Anbieter, dessen Auftragsverarbeitungsvertrag auch für den kostenlosen Selbstbedienungsvertrag gilt. Cloudflare bindet sein [Kunden-DPA](https://www.cloudflare.com/cloudflare-customer-dpa/) in das „Self-Serve Subscription Agreement“ ein. Ob das den Gratistarif umfasst, vor einem Wechsel bei Cloudflare bestätigen lassen. Die Seite ist statisch und ließe sich ohne Codeänderung umziehen.

**Nachtrag 28.10.2026 – Umzug beschlossen:** Wechsel zu Cloudflare Pages (Gratistarif). Die [Self-Serve-Bedingungen](https://www.cloudflare.com/terms/) gelten nach Abschnitt 2.6 auch für Gratisdienste und enthalten kein Verbot kommerzieller Nutzung (untersagt ist im Gratistarif nur das Erfassen von Kreditkartendaten). Abschnitt 6.1 bindet das [Cloudflare-DPA](https://www.cloudflare.com/cloudflare-customer-dpa/) mit EU-Standardvertragsklauseln ein. Cloudflare erklärt in seiner [Datenschutzerklärung](https://www.cloudflare.com/privacypolicy/) die Teilnahme am EU-US Data Privacy Framework (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107). Datenschutzerklärung entsprechend umgestellt. Damit sind beide roten Punkte nach erfolgter Umstellung erledigt; EU-Datenlokalisierung gibt es erst im Enterprise-Tarif.

## 2. Datenschutzerklärung – Gelb

Geprüft gegen Art. 13 DSGVO (Pflichtangaben), Art. 6 und 9 DSGVO, Art. 44 ff. DSGVO, § 25 TDDDG.

| Punkt | Befund | Bewertung |
| --- | --- | --- |
| Verantwortlicher und Kontakt (Art. 13 Abs. 1 a) | Name, Anschrift, E-Mail, Telefon | Grün |
| Datenschutzbeauftragter (Art. 13 Abs. 1 b) | Nicht benannt. Pflicht erst ab 20 Personen mit ständiger Verarbeitung (§ 38 BDSG) bzw. bei Kerntätigkeit mit umfangreicher Verarbeitung besonderer Kategorien (Art. 37 DSGVO). Der Betreiber verarbeitet Gesundheitsdaten nicht selbst. | Grün |
| Zwecke und Rechtsgrundlagen (Art. 13 Abs. 1 c) | Je Datenfluss genannt (Website: Art. 6 Abs. 1 f; Kauf und Produktsuche: Art. 6 Abs. 1 b; Support: b, f, c) | Grün |
| Empfänger (Art. 13 Abs. 1 e) | Vercel, Open Food Facts, Apple, Google, gewählte Speicheranbieter | Grün |
| Drittland (Art. 13 Abs. 1 f) | USA mit DPF-Angemessenheitsbeschluss (Art. 45). Für Google-Mail und Apple ebenfalls DPF-zertifizierte Konzerne. | Grün |
| Speicherdauer (Art. 13 Abs. 2 a) | Journal: bis zur Löschung durch Nutzer. Support: Kriterien. Vercel: keine feste Frist laut Anbieter. Open Food Facts: bis zu 3 Jahre Server-Logs laut [OFF-Datenschutzerklärung](https://world.openfoodfacts.org/privacy), jetzt ergänzt. | Grün |
| Betroffenenrechte, Widerruf, Beschwerde (Art. 13 Abs. 2 b–d) | Vollständig, LfDI Baden-Württemberg benannt | Grün |
| Automatisierte Entscheidung (Art. 13 Abs. 2 f) | Ausdrücklich verneint | Grün |
| Gesundheitsdaten (Art. 9) | Verarbeitung nur lokal auf dem Gerät; die App sendet Journal- und Health-Daten nicht an den Betreiber. Dann ist umstritten, ob der App-Anbieter überhaupt Verantwortlicher ist (weite Auslegung durch den EuGH, z. B. C‑25/17 *Zeugen Jehovas*, C‑40/17 *Fashion ID*). Die Erklärung beansprucht dafür keine Rechtsgrundlage, sondern beschreibt die Datenflüsse. Eine ausdrückliche Einwilligung nach Art. 9 Abs. 2 a wäre der sichere Weg, falls künftig Daten das Gerät verlassen. | Gelb |
| Endgerätezugriff (§ 25 TDDDG) | Lokale Speicherung als für den ausdrücklich gewünschten Dienst unbedingt erforderlich begründet (§ 25 Abs. 2 Nr. 2). Website setzt keine Cookies (automatisierter Test). | Grün |
| Open Food Facts | Direkter Abruf vom Gerät; Verein mit Sitz 21 rue des Iles, 94100 Saint-Maur-des-Fossés, jetzt ergänzt. Rechtsgrundlage Art. 6 Abs. 1 b vertretbar (vom Nutzer ausgelöste Suche). | Grün |
| Support über privates Gmail | Google verarbeitet Inhalte nach Verbraucherbedingungen. Für geschäftliche Postfächer bietet Google Workspace einen Auftragsverarbeitungsvertrag, die private Gmail-Nutzung nicht. Transparent beschrieben, aber formell schwächer. | Gelb |

## 3. Impressum – Grün

- **§ 5 DDG:** Name, ladungsfähige Anschrift (vom Nutzer bestätigt), E-Mail und Telefon als zweiter schneller Kommunikationsweg (vgl. EuGH C‑298/07). USt-IdNr. und Wirtschafts-ID entfallen, da laut Nutzer keine vorhanden (28.10.2026). Keine Handelsregister- oder Kammerangaben nötig.
- **Streitbeilegung:** Die EU-OS-Plattform wurde mit Verordnung (EU) 2024/3228 zum 20.07.2025 abgeschafft; ein Link wäre inzwischen fehlerhaft und ist zu Recht nicht vorhanden. Der Hinweis nach § 36 VSBG ist bei höchstens 10 Beschäftigten nicht verpflichtend (§ 36 Abs. 3), schadet aber nicht.
- **Kleinigkeit:** Die Straße ist als „Friedrich-Naumann Straße“ geschrieben; amtlich vermutlich „Friedrich-Naumann-Straße“. Ladungsfähigkeit ist dadurch nicht gefährdet. Auf Wunsch angleichen.
- **§ 18 Abs. 2 MStV** (redaktionell Verantwortlicher) greift nicht: Produkt- und Hilfeseite ohne journalistisch-redaktionelle Inhalte.

## 4. Preis-, Abo- und Verbraucherinformationen – Grün

- **Vertragspartner und Kündigung:** Kauf ausschließlich über Apple. Die Pflichten zur Bestellübersicht und zum Kündigungsbutton (§§ 312j, 312k BGB) treffen den Anbieter, über dessen Plattform der Vertrag geschlossen wird; die Website schließt keine Verträge. Die Texte verweisen korrekt auf Apples Kündigungsweg.
- **Preisangaben (PAngV, § 5 UWG):** Endpreise in Euro. Die Monatsangabe stand direkt unter dem Jahrespreis und war als Umrechnung missverständlich lesbar; jetzt „oder 4,99 € im Monatsabo“. Preise und 7-Tage-Test stimmen mit `StoreKit/LeanBulk.storekit` überein (Jahresabo 29,99 € mit einwöchigem Gratiszeitraum, Monatsabo 4,99 € ohne Test, beide Familienfreigabe). „Geplant“ und „in Vorbereitung“ auf Nutzerwunsch entfernt.
- **Widerruf:** Keine pauschale Behauptung eines Widerrufsausschlusses; Verweis auf gesetzliche Rechte und Apples Erstattungsweg. Grün.
- **Nutzungsbedingungen:** Apples Standard-EULA, keine eigenen Haftungsausschlüsse – AGB-rechtlich unkritisch (§§ 305 ff., 309 Nr. 7 BGB).
- **Paywall in der App:** Links zu Nutzungsbedingungen und Datenschutz vorhanden (App Review Guideline 3.1.2).

## 5. Gesundheit, Werbung, Jugendschutz – Grün mit Hinweisen

- **Medizinprodukt (MDR):** Zweckbestimmung ausdrücklich als Journal ohne Diagnose, Behandlung oder Überwachung von Krankheiten. Nach MDCG 2019‑11 sind Lifestyle- und Wohlbefindens-Apps keine Medizinprodukte. Werbetexte dürfen diese Linie nicht verlassen (z. B. keine Aussagen zu Krankheiten oder Therapie).
- **Irreführung (UWG §§ 5, 5a):** Keine Erfolgs-, Gesundheits- oder Bewertungsversprechen; Abbildungen als synthetische Beispieldaten gekennzeichnet. Grün.
- **Jugendschutz:** Altersgrenze 16, eigener Jugendmodus, Hinweis auf Zustimmung der gesetzlichen Vertretung (§ 107 BGB). Auf der Website jetzt „für Menschen ab 16 Jahren gedacht“ statt einer noch nicht gesetzten Store-Altersfreigabe.
- **Barrierefreiheit (BFSG):** Für Dienstleistungen gilt die Ausnahme für Kleinstunternehmen (weniger als 10 Beschäftigte und höchstens 2 Mio. € Umsatz, § 3 Abs. 3 BFSG). Freiwillige Barrierefreiheit bleibt sinnvoll.
- **Lizenzen und Quellen:** BLS 4.0 (CC BY 4.0), Open Food Facts (ODbL/DbCL), exercises-dataset (MIT), Nunito Sans (OFL) mit Namensnennung und Lizenztexten. Apple-Marken mit Hinweis auf fehlende Verbindung. Grün.

## 6. Marke „Lean Bulk“ (DE/EU) – Gelb

Recherche am 28.10.2026 in [TMview](https://www.tmdn.org/tmview/) (DPMA, EUIPO, WIPO und alle angeschlossenen nationalen Ämter), im App Store (DE, US, GB) und im Web.

**Ergebnisse:**

- **„LEAN BULK“ / „LEANBULK“:** In keinem angeschlossenen Amt eingetragen oder angemeldet. Nächster Treffer: „LEAN N BULK“, Indien, Klasse 43 (Gastronomie) – ohne Wirkung in DE/EU.
- **„BULK“ (Software, Bildung, Fitness, IT: Klassen 9, 41, 42, 44):** Nur branchenfremde Marken (Logistik, Industrie, Wein, Infrastruktur). Angemeldet: „BULK“ der Bulk Infrastructure Group AS (WIPO, Kl. 35, 36, 38, 42, Rechenzentren).
- **„BULK“ (Lebensmittel und Nahrungsergänzung):** EU-Wortmarke **„bulk“ Nr. 019018112** und „BULK POWDERS“ Nr. 017884516 der Sports Supplements Limited (bulk.com), Klassen 5, 29, 30, 32 (und 35 bei BULK POWDERS). Das ist der relevanteste ältere Rechtsinhaber, weil er im Fitnessumfeld bekannt ist.
- **„LEAN“ (Kl. 9, 41, 44):** Viele Lean-Management-Marken und „LEAN“ der Lean FRO, LLC (Programmiersprache, Kl. 9, 41, 42). Keine Fitnessmarke.
- **App Store:** Keine aktive App „Lean Bulk“. Die App „LeanBulk: Gain lean weight“ (ID 6772881058, Mai 2026) wurde aus dem App Store entfernt. „Surplus: Lean Bulk Coach“ nutzt „Lean Bulk“ beschreibend im Untertitel.
- **Unternehmen:** Keine Firma „Lean Bulk“ gefunden; der Ausdruck wird im Web als Fachbegriff für magere Massephase verwendet.

**Bewertung:**

- **Benutzung des Namens:** Eine Verletzung setzt Zeichen- *und* Waren-/Dienstleistungsähnlichkeit voraus (§ 14 Abs. 2 Nr. 2 MarkenG, Art. 9 Abs. 2 b UMV). Gegenüber „bulk“ (Nahrungsergänzung) ist eine Fitness-Tracking-App in Klasse 9/42 allenfalls entfernt ähnlich, und das gemeinsame Element „Bulk“ ist im Fitnessbereich beschreibend; das schwächt den Schutzumfang. Ein Restrisiko besteht über den Bekanntheitsschutz (§ 14 Abs. 2 Nr. 3 MarkenG, Art. 9 Abs. 2 c UMV), falls bulk.com in der EU als bekannte Marke gilt und die App in die Nähe von Supplements rückt. **Vermeiden:** eigene Supplements, Shop-Funktionen oder Werbung mit Nahrungsergänzung unter „Lean Bulk“, und eine Schreibweise, die „Bulk“ grafisch hervorhebt.
- **Unregistrierte Rechte:** App-Namen können in Deutschland als Werktitel geschützt sein (§ 5 Abs. 3 MarkenG; BGH, Urteil vom 28.01.2016, I ZR 202/14 – *wetter.de*). Rein beschreibende Titel brauchen dafür Unterscheidungskraft. Die entfernte „LeanBulk“-App begründet keinen fortbestehenden Titelschutz von Bedeutung.
- **Eigene Eintragung:** „Lean Bulk“ beschreibt im Fitness- und Ernährungsbereich direkt das Trainingsziel („magere Massephase“). Eine Wortmarke für Fitness-Apps würde voraussichtlich an fehlender Unterscheidungskraft und Freihaltebedürfnis scheitern (§ 8 Abs. 2 Nr. 1 und 2 MarkenG, Art. 7 Abs. 1 b und c UMV). Eintragungsfähig wäre eher eine Wort-/Bildmarke mit dem App-Icon. Kehrseite: Dritte dürfen „Lean Bulk“ ebenfalls beschreibend benutzen (§ 23 Abs. 1 Nr. 2 MarkenG, Art. 14 Abs. 1 b UMV), der Name ist also kaum exklusiv.

**Fazit:** Nach dem recherchierten Registerstand ist die Benutzung von „Lean Bulk“ als App-Name in DE/EU zulässig mit geringem Restrisiko. Vor größeren Marketingausgaben empfiehlt sich eine professionelle Ähnlichkeitsrecherche (Markenanwalt oder kostenpflichtiger Rechercheservice), weil TMview kein amtliches Register ist und phonetische Ähnlichkeiten nur begrenzt abbildet.

## 7. Umgesetzt am 28.10.2026

- Datenschutz: Vercel-Absatz ohne Behauptung eines Hostingvertrags, DPA-Link entfernt, DPF als Anbieterangabe mit Prüfmöglichkeit; Open-Food-Facts-Anschrift und Log-Aufbewahrung ergänzt.
- Preise: „Geplante“ entfernt; Monatsabo eindeutig als eigenes Abo gekennzeichnet.
- Status „in Vorbereitung“ auf Website entfernt; Altersangabe ohne Behauptung einer bereits gesetzten Store-Freigabe.
- Hauptadresse www.burk-solutions.de für Website, App-Links und Open-Food-Facts-User-Agent.

## 8. Offen (Entscheidung des Betreibers)

1. Vercel Hobby: Vertragsverstoß und fehlender Auftragsverarbeitungsvertrag (Abschnitt 1).
2. Support-Postfach mit Auftragsverarbeitungsvertrag statt privatem Gmail (Abschnitt 2).
3. App-Store-ID für den „Laden im App Store“-Link, sobald die App in App Store Connect angelegt ist.
4. Vor Store-Einreichung: App-Datenschutzangaben in App Store Connect gegen die direkten Open-Food-Facts-Abrufe prüfen; Guideline 5.1.3(ii) und selbst gewählte iCloud-Drive-Sicherungen (siehe `legal-research-2026-10-27.md`).
5. Optional: professionelle Markenähnlichkeitsrecherche vor größeren Marketingausgaben.
