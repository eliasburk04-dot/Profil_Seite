// Central source for all public Lean Bulk copy. Operator details require confirmation before publication.
export type ContentLink = { label: string; href: string };
export type ContentSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
  links?: readonly ContentLink[];
};
export type DocumentContent = {
  title: string;
  navTitle: string;
  description: string;
  sections: readonly ContentSection[];
};
export const site = {
  name: 'Lean Bulk',
  url: 'https://www.burk-solutions.de',
  email: 'eliasburk04@gmail.com',
  phone: '0176 74736492',
  phoneHref: 'tel:+4917674736492',
  date: '28. Oktober 2026',
  operator: {
    name: 'Elias Burk',
    street: 'Friedrich-Naumann Straße 11',
    city: '71636 Ludwigsburg',
    country: 'Deutschland',
  },
  metadata: {
    title: 'Lean Bulk – Ernährung, Gewicht und Training für iPhone',
    description:
      'Dein Aufbau im Überblick: Essen erfassen, Gewicht verstehen und Krafttraining festhalten. Lean Bulk für iPhone – ohne Konto, mit lokalem Journal.',
    locale: 'de_DE',
  },
  links: {
    privacy: '/leanbulk/datenschutz',
    imprint: '/leanbulk/impressum',
    support: '/leanbulk/support',
    usage: '/leanbulk/nutzung',
    sources: '/leanbulk/quellen',
    eula: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
    subscriptions: 'https://apps.apple.com/account/subscriptions',
    cancel: 'https://support.apple.com/de-de/118428',
    refund: 'https://support.apple.com/de-de/118223',
    applePrivacy: 'https://www.apple.com/de/legal/privacy/',
    offPrivacy: 'https://world.openfoodfacts.org/privacy',
    vercelPrivacy: 'https://vercel.com/legal/privacy-notice',
    vercelDpa: 'https://vercel.com/legal/dpa',
    googlePrivacy: 'https://policies.google.com/privacy?hl=de',
    complaint: 'https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/',
    counselling: 'https://essstoerungen.bioeg.de',
  },
  nav: [
    {
      label: 'Funktionen',
      href: '/#funktionen',
    },
    {
      label: 'Free & Premium',
      href: '/#premium',
    },
    {
      label: 'Datenschutz',
      href: '/leanbulk/datenschutz',
    },
    {
      label: 'Hilfe',
      href: '/leanbulk/support',
    },
  ],
  footer: {
    description: 'Ernährung, Gewicht und Training. Ein Journal für deinen Aufbau.',
    productTitle: 'Lean Bulk',
    helpTitle: 'Hilfe & Kontakt',
    legalTitle: 'Rechtliches',
    copyright: '© 2026 Elias Burk · Lean Bulk',
    note: 'Lean Bulk für iPhone.',
    links: [
      {
        label: 'Datenschutz',
        href: '/leanbulk/datenschutz',
      },
      {
        label: 'Impressum',
        href: '/leanbulk/impressum',
      },
      {
        label: 'Nutzung & Abos',
        href: '/leanbulk/nutzung',
      },
      {
        label: 'Quellen & Lizenzen',
        href: '/leanbulk/quellen',
      },
    ],
  },
  ui: {
    skip: 'Zum Inhalt',
    menu: 'Menü',
    close: 'Menü schließen',
    home: 'Lean Bulk – Startseite',
    back: 'Zur Startseite',
    contents: 'Auf dieser Seite',
    date: 'Stand',
    faq: 'Häufige Fragen',
    source: 'Weiterlesen',
    mail: 'E-Mail schreiben',
    support: 'Zum Support',
    synthetic: 'App-Ansichten mit synthetischen Beispieldaten.',
    next: 'Weiterlesen',
    external: 'Externer Link',
    notFoundTitle: 'Diese Seite gibt es nicht mehr.',
    notFoundText:
      'Diese Website ist jetzt ganz Lean Bulk gewidmet. Produktinformationen, Hilfe und Rechtliches findest du auf der Startseite.',
    top: 'Nach oben',
  },
  home: {
    headline: ['Dein Aufbau.', 'Im Überblick.'],
    intro:
      'Essen, Gewicht und Krafttraining gehören zusammen. Halte sie an einem Ort fest – und erkenne, wie sich dein Alltag entwickelt.',
    primary: 'Funktionen entdecken',
    secondary: 'Fragen zur App?',
    status: 'Für iPhone · Kostenlos mit optionalem Premium-Abo',
    heroCaption: 'Dein Tag. Essen, Ziele und Bewegung auf einen Blick.',
    trust: ['Ohne Nutzerkonto', 'Dein Journal lokal', 'Keine Werbung'],
    featuresTitle: 'Weniger Wechseln. Mehr Überblick.',
    featuresIntro:
      'Vom ersten Eintrag bis zum letzten Satz: Lean Bulk verbindet, was du für deinen Aufbau festhalten möchtest.',
    features: [
      {
        id: 'ernaehrung',
        title: 'Essen eintragen. Weiter geht’s.',
        text: 'Finde allgemeine Lebensmittel im lokalen Katalog, ergänze Markenprodukte per Suche oder Barcode und passe deine Portion an. Häufige Lebensmittel und gespeicherte Mahlzeiten machen den nächsten Eintrag leichter.',
        detail:
          'Kalorien, Protein, Kohlenhydrate und Fett bleiben zusammen sichtbar. Erst dein ausdrücklicher Abschluss speichert die Mahlzeit.',
        image: '/screens/today.webp',
        alt: 'Lean Bulk: Tagesübersicht mit Kalorien, Makros und Mahlzeiten aus synthetischen Beispieldaten.',
      },
      {
        id: 'gewicht',
        title: 'Den Verlauf sehen. Nicht nur die Tageszahl.',
        text: 'Einzelne Messungen schwanken. Der 7-Tage-Durchschnitt hilft dir, den Verlauf einzuordnen. Trage dein Gewicht selbst ein oder übernimm Messungen aus Apple Health.',
        detail:
          'Zielgewicht und gewünschte Wochenrate sind deine Orientierung. Dein Kalorienziel ändert sich erst, wenn du einen Vorschlag bewusst übernimmst.',
        image: '/screens/weight.webp',
        alt: 'Lean Bulk: Gewichtsverlauf mit 7-Tage-Durchschnitt und Zielorientierung, synthetische Werte.',
      },
      {
        id: 'training',
        title: 'Dein Plan. Dein nächster Satz.',
        text: 'Stelle eigene Trainingspläne zusammen, erfasse Gewicht und Wiederholungen und hake ausgeführte Sätze ab. Pausenuhr und Live Activity begleiten die laufende Einheit.',
        detail:
          'Deine bisherigen Sätze bleiben im Übungsverlauf. Premium ergänzt Planvorlagen, Steigerungsvorschläge und Bestwerte.',
        image: '/screens/training.webp',
        alt: 'Lean Bulk: Trainingsplanübersicht mit synthetischen Übungen und Trainingsdaten.',
      },
    ],
    healthTitle: 'Apple Health, wenn du möchtest.',
    healthText:
      'Schritte, aktive Energie, Wasser und Körpergewicht lassen sich mit deiner Freigabe übernehmen. Selbst eingetragenes Wasser kannst du in Health speichern. Die App verbindet sich über Health mit deinen Daten; sie koppelt sich nicht direkt mit deiner Trinkflasche.',
    privacyTitle: 'Dein Journal braucht kein Konto.',
    privacyText:
      'Deine Einträge und Einrichtungsantworten liegen lokal auf deinem Gerät. Es gibt keinen eigenen Journal-Server. Für Online-Produktsuchen, Käufe, Website und selbst gewählte Sicherungsanbieter entstehen eigene Datenverbindungen – die erklären wir transparent.',
    privacyLink: 'So werden deine Daten verwendet',
    premiumTitle: 'Tracking bleibt kostenlos.',
    premiumIntro:
      'Premium ergänzt Vorschläge und längere Auswertungen. Deine Einträge gehören immer zu deinem Journal.',
    free: {
      name: 'Free',
      subtitle: 'Für deinen Alltag',
      price: 'Kostenlos',
      items: [
        'Ernährung mit Kalorien, Makros und Barcode',
        'Gewicht, 7-Tage-Durchschnitt und eigene Ziele',
        'Eigene Trainingspläne, Sätze und Live Activity',
        'Wasser, Schritte, Kalender und Tages-Serie',
        'Einmaliger Zielrechner bei der Einrichtung',
        'Sicherung als Datei, Import und Ordnersicherung',
      ],
    },
    premium: {
      name: 'Premium',
      subtitle: 'Für den nächsten Schritt',
      month: 'oder 4,99 € im Monatsabo',
      year: '29,99 € / Jahr',
      trial: '7 Tage kostenlos testen beim Jahresabo, sofern du berechtigt bist.',
      items: [
        'Kalorienvorschläge im wöchentlichen Check-in',
        'Fünf Trainingsplan-Vorlagen als eigene Kopie',
        'Steigerungsvorschläge für offene Trainingssätze',
        'Statistikzeiträume über 30 Tage',
        'Bestwerte im Übungsverlauf',
        'Ziele erneut berechnen',
      ],
    },
    priceNote:
      'Startpreise für Deutschland. Maßgeblich sind der in der App und im Apple-Kaufdialog angezeigte Gesamtpreis, die Währung und die Angebotsberechtigung. Der Kauf erfolgt ausschließlich in der App über Apple; auf dieser Website gibt es keinen Kaufabschluss.',
    renewal:
      'Abos verlängern sich automatisch, bis du sie rechtzeitig bei Apple kündigst. Bei einer kostenlosen Testphase kündige mindestens 24 Stunden vor deren Ende. Nach Abo-Ende bleiben deine Daten, übernommenen Pläne und bestätigten Ziele erhalten.',
    usageLink: 'Alle Informationen zu Nutzung und Abos',
    careTitle: 'Ein Startwert. Kein Gesundheitsversprechen.',
    careText:
      'Kalorienbedarf, Zunahmerate und Sportverbrauch sind Schätzungen. Lean Bulk dient der Dokumentation von Ernährung und Fitness und ersetzt keine Diagnose, Behandlung oder individuelle Ernährungsberatung. Besonders bei Erkrankungen, Schwangerschaft, Stillzeit oder Essstörungen solltest du Ziele fachlich begleiten lassen.',
    careYouth:
      'Der Zielrechner bietet für 16- und 17-Jährige einen gesonderten Jugendmodus; unter 16 gibt es keine berechneten Zielvorschläge. Ein bezahltes Abo setzt bei Minderjährigen die nötige Zustimmung der gesetzlichen Vertretung voraus.',
    careLink: 'Beratung bei Essstörungen (BIÖG)',
    helpTitle: 'Gut zu wissen, bevor du startest.',
    faq: [
      {
        question: 'Kann ich die App ohne Premium nutzen?',
        answer:
          'Ja. Ernährung, Gewicht, eigene Trainingspläne, Satzerfassung, Wasser, Schritte und Sicherung bleiben kostenlos. Premium ergänzt Coaching-Vorschläge, Vorlagen, Bestwerte und längere Statistikzeiträume.',
      },
      {
        question: 'Funktioniert Lean Bulk ohne Internet?',
        answer:
          'Dein lokales Journal und der allgemeine Lebensmittelkatalog funktionieren offline. Neue Online-Produkte, Käufe, Wiederherstellen von Käufen und Webseiten brauchen eine Verbindung. Health-Daten hängen von den vorhandenen Messungen und Freigaben ab.',
      },
      {
        question: 'Werden meine Daten zwischen Geräten synchronisiert?',
        answer:
          'Lean Bulk hat keine eigene Cloud-Synchronisierung. Du kannst dein Journal als vollständige Sicherungsdatei exportieren und auf einem anderen Gerät importieren. Der Import ersetzt dort das Journal. Sichere vorher den vorhandenen Stand.',
      },
      {
        question: 'Was passiert, wenn ich Premium kündige?',
        answer:
          'Deine Daten bleiben erhalten. Übernommene Trainingspläne und Ziele bleiben nutzbar. Neue Premium-Vorschläge, Vorlagen und Bestwerte entfallen; Statistikzeiträume fallen auf 30 Tage zurück.',
      },
    ],
    finalTitle: 'Noch eine Frage offen?',
    finalText:
      'In der Hilfe findest du die Wege für Health, Sicherungen und dein Abo. Für alles Weitere erreichst du den Entwickler direkt.',
  },
  support: {
    title: 'Wir helfen dir weiter.',
    intro:
      'Kurze Wege für Fragen zu Lean Bulk. Schau in die Anleitungen oder schreib direkt an Elias.',
    emailTitle: 'Direkter Kontakt',
    emailText:
      'Beschreibe kurz, was du tun wolltest und was passiert ist. Hilfreich sind App-Version, iOS-Version und iPhone-Modell. Bitte sende keine Journal-Dateien, Sicherungen, Geburtsdaten oder Screenshots mit Gesundheitsdaten.',
    emailNote:
      'Dein E-Mail-Programm öffnet sich. Erst wenn du die Nachricht selbst absendest, wird sie übermittelt. Es gibt kein Kontaktformular und keinen automatischen Dateiupload.',
    emailSubject: 'Frage zu Lean Bulk',
    sections: [
      {
        id: 'erste-schritte',
        title: 'Einrichtung und erste Einträge',
        paragraphs: [
          'Die Einrichtung ist freiwillig. Du kannst jeden Schritt überspringen und ohne Zielrechner manuell erfassen. Solange du noch keinen Plan übernommen hast, findest du „Einrichtung fortsetzen“ im Profil.',
          'Ernährung: Heute → Essen hinzufügen. Gewicht: Reiter Gewicht → Eintragen. Training: Reiter Training → eigenen Plan anlegen oder einen vorhandenen Plan starten.',
        ],
      },
      {
        id: 'health',
        title: 'Apple Health verbinden',
        paragraphs: [
          'Erlaube die gewünschten Datentypen im Health-Dialog. Freigaben kannst du anschließend in Apple Health über dein Profil → Apps bzw. Apps und Dienste → Lean Bulk verwalten. Die Bezeichnungen können sich je nach iOS-Version unterscheiden.',
          'Fehlende Werte können fehlende Messungen oder fehlenden Lesezugriff bedeuten. Lean Bulk kann eine verweigerte Lesefreigabe nicht zuverlässig von fehlenden Messungen unterscheiden. Gewicht wird ausdrücklich übernommen; eigene Gewichtseinträge haben Vorrang.',
          'Für Flaschendaten muss zuerst die Hersteller-App nach Apple Health schreiben. Prüfe dort die Messung und aktualisiere anschließend den passenden Tag in Lean Bulk. Eine unmittelbare Hintergrundzustellung kann iOS nicht garantieren.',
        ],
      },
      {
        id: 'sicherung',
        title: 'Journal sichern und übertragen',
        paragraphs: [
          'Öffne Profil → Datensicherung und exportiere die vollständige Sicherung. Sie enthält auch Gesundheitsangaben und zwischengespeicherte Health-Tageswerte. Bewahre sie geschützt auf; Lean Bulk verschlüsselt die exportierte JSON-Datei nicht zusätzlich.',
          'Beim Import ersetzt die Sicherung das gesamte Journal. Es gibt keine Zusammenführung. Vor dem Ersetzen erstellt die App eine Schutzsicherung. Prüfe nach dem Import den Inhalt, bevor du alte Dateien löschst.',
          'Für automatische Sicherungen wählst du selbst einen Ordner. Die App versucht beim Benutzen einmal pro Tag zu sichern und behält die letzten sieben automatischen Dateien. Das ist keine garantierte Sicherung bei geschlossener App. Ein Cloud-Ordner überträgt die Datei an den gewählten Anbieter.',
        ],
      },
      {
        id: 'abo',
        title: 'Premium, Kündigung und Wiederherstellen',
        paragraphs: [
          'Käufe und Abos laufen über deinen Apple Account. Unter Profil → Premium findest du den Abo-Status und „Käufe wiederherstellen“. Nutze denselben Apple Account, mit dem das Abo abgeschlossen wurde.',
          'Verwalten oder kündigen: iPhone-Einstellungen → dein Name → Abonnements → Lean Bulk. Die App zu löschen kündigt kein Abo. Wird keine Kündigung angeboten und stattdessen ein Ablaufdatum angezeigt, ist es in der Regel bereits beendet.',
          'Bei einer kostenlosen oder vergünstigten Testphase kündige mindestens 24 Stunden vor Ablauf, wenn du keine Verlängerung möchtest. Ob eine Erstattung möglich ist, prüft Apple über den dafür vorgesehenen Weg. Gesetzliche Rechte bleiben unberührt.',
        ],
        links: [
          {
            label: 'Apple-Abos verwalten',
            href: 'https://apps.apple.com/account/subscriptions',
          },
          {
            label: 'Apples Kündigungsanleitung',
            href: 'https://support.apple.com/de-de/118428',
          },
          {
            label: 'Erstattung bei Apple anfragen',
            href: 'https://support.apple.com/de-de/118223',
          },
        ],
      },
      {
        id: 'loeschen',
        title: 'Daten löschen und Freigaben entziehen',
        paragraphs: [
          'Du kannst Einträge und Ziele über ihre jeweiligen Bearbeitungswege entfernen. Um die lokalen App-Daten vollständig zu entfernen, nutze in den iPhone-Einstellungen → Allgemein → iPhone-Speicher → Lean Bulk die Aktion „App löschen“. „App auslagern“ behält Dokumente und Daten.',
          'Exportdateien, automatische Ordnersicherungen und Gerätesicherungen löschst du separat beim jeweiligen Speicheranbieter. In Apple Health gespeicherte Wassereinträge bleiben nach dem Löschen der App bestehen und lassen sich dort verwalten. Das Entziehen einer Health-Freigabe entfernt bereits übernommene Journalwerte nicht.',
          'Es gibt kein Lean-Bulk-Nutzerkonto, das beim Entwickler gelöscht werden müsste. Ein bestehendes Abo ist unabhängig von den App-Daten und muss separat bei Apple gekündigt werden.',
        ],
      },
      {
        id: 'erinnerungen',
        title: 'Erinnerungen und Live Activity',
        paragraphs: [
          'Erinnerungen sind lokale iPhone-Mitteilungen. Du verwaltest sie im Profil und in den iOS-Mitteilungseinstellungen. Die Live Activity zeigt Trainingsinformationen auf dem Sperrbildschirm; andere Personen mit Sicht auf dein Gerät können sie sehen. Du kannst Live Activities in den iPhone-Einstellungen für Lean Bulk deaktivieren.',
        ],
      },
      {
        id: 'gesundheit',
        title: 'Fragen zu Zielen und Gesundheit',
        paragraphs: [
          'Lean Bulk gibt keine medizinische Beratung. Die berechneten Werte sind Startschätzungen. Bei Beschwerden, gesundheitlichen Einschränkungen oder belastendem Ess- und Wiegeverhalten wende dich an eine Ärztin, einen Arzt oder eine qualifizierte Ernährungsfachkraft. Für akute Notfälle ist der App-Support nicht geeignet.',
        ],
        links: [
          {
            label: 'Vertrauliche Beratung bei Essstörungen',
            href: 'https://essstoerungen.bioeg.de',
          },
        ],
      },
    ],
  },
} as const;
export const documents = {
  datenschutz: {
    title: 'Deine Daten. Klar erklärt.',
    navTitle: 'Datenschutz',
    description:
      'Welche Daten Lean Bulk auf deinem Gerät verarbeitet und was beim Suchen, Kaufen, Sichern und beim Website-Besuch passiert.',
    sections: [
      {
        id: 'verantwortlicher',
        title: 'Wer verantwortlich ist',
        paragraphs: [
          'Verantwortlich für diese Website, die Bereitstellung der App und Supportanfragen ist Elias Burk, Friedrich-Naumann Straße 11, 71636 Ludwigsburg, Deutschland. E-Mail: eliasburk04@gmail.com, Telefon: 0176 74736492.',
          'Diese Erklärung beschreibt die Lean-Bulk-App für iPhone und diese Website. Apple, Open Food Facts und von dir gewählte Datei- oder E-Mail-Dienste verarbeiten Daten in ihrem jeweiligen Verantwortungsbereich. Die App hat keinen eigenen Journal-Server und kein Lean-Bulk-Nutzerkonto.',
        ],
      },
      {
        id: 'journal',
        title: 'Dein Journal und deine Einrichtungsantworten',
        paragraphs: [
          'Auf deinem Gerät speichert Lean Bulk von dir eingegebene Mahlzeiten und Lebensmittel, Kalorien und Makros, Körpergewicht mit Messdatum, Trainingspläne und Trainingssätze, Sporteinträge, Ziele und Zielhistorien. Bei Nutzung der Einrichtung kommen Geburtsdatum, Geschlechtsangabe, Größe, Gewicht, Aktivität, Trainingserfahrung, Trainingstage und Antworten zur Zielberechnung hinzu. Angaben können Gesundheitsdaten sein.',
          'Die Angaben dienen der von dir gewünschten Dokumentation, den lokalen Berechnungen und Auswertungen. Die App sendet diese Journal- und Einrichtungsdaten nicht an Elias Burk. Du entscheidest, welche optionalen Angaben du einträgst und welche Funktionen du nutzt. Ohne einzelne Angaben stehen zugehörige Berechnungen gegebenenfalls nicht zur Verfügung.',
          'Die technische lokale Speicherung ist für die jeweils ausdrücklich genutzte Journalfunktion erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Daraus folgt keine Erlaubnis für eine anderweitige Weitergabe. Die App verkauft keine Journal- oder Gesundheitsdaten und verwendet sie nicht für Werbung.',
        ],
      },
      {
        id: 'apple-health',
        title: 'Apple Health: lesen, übernehmen, schreiben',
        paragraphs: [
          'Nach deiner Freigabe kann Lean Bulk Schritte, aktive Energie, Trinkmenge und Körpergewicht aus Apple Health lesen. Tageswerte werden lokal zwischengespeichert. Bei der ausdrücklich gestarteten Gewichtsübernahme werden ältere Messungen gelesen; je Kalendertag wird die früheste verwendet. Eigene Einträge haben Vorrang.',
          'Nur Wassermengen, die du selbst in Lean Bulk eingibst und zum Speichern bestätigst, schreibt die App nach Schreibfreigabe in Apple Health. Das Lesen von Wasser kann auch im Hintergrund durch Health-Änderungen angestoßen werden. Eine unmittelbare Aktualisierung ist vom System abhängig. Es gibt keine direkte Verbindung zur Trinkflasche oder zur Hersteller-App.',
          'Du kannst Freigaben jederzeit in Apple Health ändern oder entziehen. Das stoppt entsprechende künftige Zugriffe, löscht aber keine zuvor übernommenen Journalwerte oder Sicherungen. In Health geschriebene Wassereinträge verwaltest du separat in Health. Elias Burk erhält keinen Zugriff auf dein Health-Konto oder deine Messungen. Die Health-Freigabe erfolgt über den iOS-Systemdialog für die gewählten Datentypen.',
        ],
        links: [
          {
            label: 'Datenschutz bei Apple',
            href: 'https://www.apple.com/de/legal/privacy/',
          },
        ],
      },
      {
        id: 'online-suche',
        title: 'Online-Produktsuche und Barcode-Abruf',
        paragraphs: [
          'Der allgemeine Lebensmittelkatalog ist lokal vorhanden. Die ergänzende Markenproduktsuche sendet deinen Suchtext automatisch nach einer kurzen Eingabepause an Open Food Facts. Beim Abruf eines Barcodes wird die Produktnummer gesendet. Auch Seitenwechsel innerhalb der Online-Ergebnisse lösen Anfragen aus. Gib in die Produktsuche keine Namen, Geburtsdaten oder Gesundheitsangaben ein.',
          'Empfänger ist der gemeinnützige Verein Open Food Facts, 21 rue des Iles, 94100 Saint-Maur-des-Fossés, Frankreich. Die Verbindung geht direkt von deinem Gerät an search.openfoodfacts.org beziehungsweise world.openfoodfacts.org. Dabei erhält der Dienst technisch notwendige Verbindungsdaten einschließlich IP-Adresse, Anfragedatum und App-Kennung. Journal, Mahlzeitenhistorie und Kamerabilder werden nicht mitgeschickt.',
          'Die Anfrage dient der von dir aufgerufenen Produktsuche (Art. 6 Abs. 1 Buchst. b DSGVO). Online-Abrufe kannst du vermeiden, indem du offline arbeitest oder eigene Lebensmittel manuell anlegst. Übernommene Produkte bleiben lokal wiederverwendbar. Open Food Facts ist für seine Verarbeitung selbst verantwortlich und gibt in seiner Datenschutzerklärung für Server-Protokolle mit IP-Adressen eine Aufbewahrung von bis zu drei Jahren an; wir steuern das nicht.',
        ],
        links: [
          {
            label: 'Datenschutz bei Open Food Facts',
            href: 'https://world.openfoodfacts.org/privacy',
          },
        ],
      },
      {
        id: 'kamera',
        title: 'Kamera und Produktbarcodes',
        paragraphs: [
          'Die Kamera wird nach deiner Freigabe ausschließlich zur Erkennung eines Produktbarcodes auf dem Gerät verwendet. Lean Bulk speichert oder überträgt keine Kamerabilder. Erst der erkannte oder manuell eingegebene Barcode wird für die Produktsuche übermittelt. Du kannst die Kamera verweigern oder ihre Freigabe in den iPhone-Einstellungen entziehen und Lebensmittel weiterhin manuell erfassen.',
        ],
      },
      {
        id: 'apple-kaeufe',
        title: 'Abos und Apple StoreKit',
        paragraphs: [
          'Käufe, Abrechnung und gegebenenfalls Familienfreigabe laufen über Apple. Lean Bulk verarbeitet auf deinem Gerät von Apple signierte Transaktionen, etwa Produktkennung, Transaktionskennung, Laufzeit, Ablauf, Testphase und Widerrufs- beziehungsweise Erstattungsstatus. Damit wird der Premium-Zugang geprüft und für einen Offline-Start bis zum bekannten Ablauf lokal zwischengespeichert.',
          'Diese Verarbeitung dient der Bereitstellung gekaufter Funktionen (Art. 6 Abs. 1 Buchst. b DSGVO). Es gibt keinen externen Abo-Verwaltungsdienst und keinen eigenen Transaktionsserver von Lean Bulk. Elias Burk erhält über die App keine Kreditkarten- oder Kontodaten und keinen Apple-Account-Login. Apple verarbeitet Kaufdaten nach seinen eigenen Bedingungen.',
        ],
        links: [
          {
            label: 'Datenschutz bei Apple',
            href: 'https://www.apple.com/de/legal/privacy/',
          },
          {
            label: 'Abos verwalten',
            href: 'https://apps.apple.com/account/subscriptions',
          },
        ],
      },
      {
        id: 'mitteilungen',
        title: 'Lokale Erinnerungen und Sperrbildschirm',
        paragraphs: [
          'Optionale Wiege-, Ernährungs- und Check-in-Erinnerungen werden lokal über iOS geplant. Es gibt keinen eigenen Push-Server. Du kannst die Erinnerungen in der App und in den iOS-Mitteilungseinstellungen deaktivieren. Bereits geplante Mitteilungen hängen auch vom Systemzustand ab.',
          'Eine Live Activity kann den Namen einer laufenden Trainingsübung und die Pausenuhr auf dem Sperrbildschirm anzeigen. Diese Informationen können Personen sehen, die auf dein Gerät schauen. Live Activities und die Darstellung von Mitteilungsvorschauen lassen sich in iOS verwalten.',
        ],
      },
      {
        id: 'sicherung',
        title: 'Sicherungen, Export und Gerätewechsel',
        paragraphs: [
          'Eine vollständige Sicherung enthält das Journal einschließlich Einrichtungsantworten und zwischengespeicherten Health-Tageswerten, jedoch keine Sammlung einzelner Health-Rohmessungen. Die JSON-Datei ist nicht zusätzlich durch Lean Bulk verschlüsselt. CSV-Exporte können ebenfalls sensible Einträge enthalten.',
          'Du bestimmst Speicherort und Empfänger. Bei einem Cloud-Ordner oder beim Teilen verarbeitet der gewählte Anbieter die Datei. Lean Bulk betreibt keine Cloud-Synchronisierung. Bei automatischer Ordnersicherung bleiben die letzten sieben automatischen Dateien erhalten; ein Import ersetzt das Journal und erstellt zuvor eine Schutzsicherung.',
          'App-Daten können außerdem Bestandteil einer von dir aktivierten iOS-Gerätesicherung sein. Die Sicherungseinstellungen und Löschfristen des jeweiligen Anbieters liegen außerhalb von Lean Bulk. Nutze nur vertrauenswürdige Speicherorte und Geräte und teile Sicherungen nicht mit dem Support.',
          'Die App ist nicht dafür vorgesehen, Journal- oder Gesundheitsdateien an den Website-Hoster Vercel zu senden. Diese Website bietet keinen Upload an.',
        ],
      },
      {
        id: 'website',
        title: 'Beim Besuch dieser Website',
        paragraphs: [
          'Die Website wird über Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, ausgeliefert. Beim Aufruf werden insbesondere IP-Adresse, Zeitpunkt, angefragte Adresse, technische Browser-/Verbindungsangaben und gegebenenfalls Fehler- und Sicherheitsinformationen verarbeitet, um Seiten auszuliefern und Angriffe abzuwehren.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse ist eine sichere und zuverlässig erreichbare Informations- und Supportwebsite. Wir betreiben keine Besucherprofile, Werbetracker, Web-Analytics oder Sitzungsaufzeichnungen im Website-Code. Schriftdateien und Abbildungen werden vom selben Webauftritt ausgeliefert; Videos und Social-Media-Inhalte sind nicht extern eingebettet.',
          'Der Website-Code setzt keine Analyse- oder Marketing-Cookies und speichert keine Besucherdaten in localStorage. Technisch erforderliche Netzwerk- und Cachefunktionen des Browsers und des Hosters bleiben möglich. Für rein notwendige Vorgänge gilt § 25 Abs. 2 TDDDG; zusätzliche Trackingfunktionen würden vor ihrer Aktivierung neu bewertet und gegebenenfalls erst nach Einwilligung eingesetzt.',
          'Vercel verarbeitet diese technischen Betriebsdaten nach seinen Nutzungsbedingungen und seiner Datenschutzerklärung. Nach eigener Angabe bewahrt Vercel sie nur so lange auf, wie es für Betrieb, Sicherheit und gesetzliche Pflichten nötig ist, und löscht oder anonymisiert sie danach; eine feste Frist nennt Vercel nicht. Wir betreiben keinen eigenen zusätzlichen Besucher-Logspeicher und werten keine Zugriffsprotokolle aus.',
        ],
        links: [
          {
            label: 'Vercel-Datenschutzhinweise',
            href: 'https://vercel.com/legal/privacy-notice',
          },
        ],
      },
      {
        id: 'support',
        title: 'Wenn du den Support kontaktierst',
        paragraphs: [
          'Sendest du eine E-Mail, verarbeiten wir deine Absenderadresse, den Nachrichtentext und freiwillig beigefügte Angaben zur Bearbeitung und Beantwortung. Nutze für normale technische Fragen keine Gesundheitsdaten. Die Supportadresse ist ein Gmail-Postfach; Google verarbeitet E-Mail-Inhalte und Verbindungsdaten nach den für das verwendete Konto geltenden Bedingungen. Rufst du an, verarbeiten wir deine Telefonnummer, sofern sie übermittelt wird, und den Inhalt des Gesprächs zur Beantwortung deiner Anfrage.',
          'Für vertragsbezogene Anfragen gilt Art. 6 Abs. 1 Buchst. b DSGVO, für allgemeine Anfragen Art. 6 Abs. 1 Buchst. f DSGVO (Interesse an der Beantwortung). Für rechtlich erforderliche Aufbewahrung gilt Art. 6 Abs. 1 Buchst. c DSGVO. Eine gewöhnliche Supportanfrage ist keine Einwilligung in eine weitergehende Auswertung von Gesundheitsdaten.',
          'Nach Abschluss wird die Kommunikation gelöscht, sobald sie zur Bearbeitung nicht mehr erforderlich ist und keine gesetzlichen Aufbewahrungspflichten oder Erfordernisse zur Rechtsverteidigung entgegenstehen. Vertrags- oder steuerrelevante Nachrichten werden nur im gesetzlich erforderlichen Umfang aufbewahrt. Frage bei Bedarf nach der für deine konkrete Anfrage geltenden Frist.',
        ],
        links: [
          {
            label: 'Google-Datenschutzerklärung',
            href: 'https://policies.google.com/privacy?hl=de',
          },
        ],
      },
      {
        id: 'ausland',
        title: 'Empfänger und Verarbeitung im Ausland',
        paragraphs: [
          'Vercel ist ein US-Anbieter. Auch bei Apple, Google und von dir gewählten Speicheranbietern kann eine Verarbeitung außerhalb der EU beziehungsweise der Schweiz stattfinden. App-Journalwerte gehen nicht automatisch an den Website-Hoster oder per Support-E-Mail an den Entwickler.',
          'Vercel ist nach eigener Angabe unter dem EU-US Data Privacy Framework einschließlich der Schweizer Erweiterung zertifiziert; für die USA besteht dafür ein Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Ob eine Zertifizierung aktuell besteht, kannst du in der öffentlichen Liste unter dataprivacyframework.gov prüfen. Informationen und Kopien einschlägiger Garantien kannst du über die oben genannte Kontaktadresse anfragen.',
          'Für Nutzerinnen und Nutzer in der Schweiz gelten ergänzend die Rechte nach dem Schweizer Datenschutzgesetz. Empfängerstaaten können insbesondere Deutschland, Frankreich, Irland und die USA sein; weitere Staaten können sich aus den von dir gewählten Apple-, Google- oder Speicherdiensten ergeben.',
        ],
      },
      {
        id: 'speichern-loeschen',
        title: 'Wie lange Daten bleiben und wie du sie entfernst',
        paragraphs: [
          'Das Journal bleibt auf deinem Gerät, bis du Einträge entfernst, es durch einen Import ersetzt oder die App samt Daten löschst. „App auslagern“ löscht die Dokumente nicht. Bereits exportierte Dateien, Gerätesicherungen und Health-Einträge sind davon getrennt und müssen an ihrem jeweiligen Speicherort gelöscht werden. Eine Neuinstallation mit Wiederherstellung aus einer Gerätesicherung kann zuvor gesicherte Daten zurückbringen.',
          'Das Entziehen einer Systemfreigabe wirkt für künftige Zugriffe. Du kannst den Entwickler nicht zur Löschung eines lokalen Journals auf einem Gerät auffordern, auf das er keinen Zugriff hat; bei Support-Nachrichten oder Website-Daten kannst du deine Rechte gegenüber dem Verantwortlichen ausüben. Ein Abo endet durch das Löschen von Daten oder der App nicht.',
        ],
      },
      {
        id: 'rechte',
        title: 'Deine Rechte',
        paragraphs: [
          'Soweit die jeweiligen gesetzlichen Voraussetzungen erfüllt sind, hast du Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen; die bis dahin rechtmäßige Verarbeitung bleibt davon unberührt.',
          'Verarbeiten wir Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 Buchst. f DSGVO), kannst du aus Gründen deiner besonderen Situation widersprechen (Art. 21). Für die Ausübung deiner Rechte genügt eine Nachricht an eliasburk04@gmail.com.',
          'Du kannst dich bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere am Ort deines gewöhnlichen Aufenthalts, Arbeitsplatzes oder des vermuteten Verstoßes. Zuständig für den Betreiber in Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg. Für die Schweiz kannst du dich auch an den EDÖB wenden.',
          'Die lokalen Zielvorschläge sind freiwillige Rechenhilfen; sie entscheiden nicht über rechtliche Ansprüche oder den Zugang zu Versicherungen oder medizinischer Versorgung. Es findet durch den Betreiber keine ausschließlich automatisierte Entscheidung mit rechtlicher oder vergleichbar erheblicher Wirkung statt.',
        ],
        links: [
          {
            label: 'Beschwerde und Kontakt beim LfDI Baden-Württemberg',
            href: 'https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/',
          },
          {
            label: 'Eidgenössischer Datenschutzbeauftragter',
            href: 'https://www.edoeb.admin.ch',
          },
        ],
      },
      {
        id: 'minderjaehrige',
        title: 'Jüngere Nutzer und Änderungen',
        paragraphs: [
          'Lean Bulk ist als Fitnessjournal für Menschen ab 16 Jahren gedacht. Der Zielrechner verwendet für 16- und 17-Jährige eigene Regeln; unter 16 gibt es keine berechneten Vorschläge. Das ist keine medizinische Freigabe und ersetzt bei Minderjährigen nicht die notwendige Zustimmung der gesetzlichen Vertretung zu kostenpflichtigen Verträgen.',
          'Wenn sich Funktionen, Empfänger oder Datenflüsse ändern, wird diese Erklärung angepasst. Der oben genannte Stand kennzeichnet diese Fassung. Eine Datenschutzerklärung ersetzt keine gegebenenfalls separat erforderliche Einwilligung.',
        ],
      },
    ],
  },
  impressum: {
    title: 'Impressum',
    navTitle: 'Impressum',
    description: 'Anbieter und Kontakt für Lean Bulk und diese Website.',
    sections: [
      {
        id: 'anbieter',
        title: 'Angaben nach § 5 DDG',
        paragraphs: [
          'Elias Burk',
          'Friedrich-Naumann Straße 11',
          '71636 Ludwigsburg',
          'Deutschland',
        ],
      },
      {
        id: 'kontakt',
        title: 'Kontakt',
        paragraphs: ['E-Mail: eliasburk04@gmail.com', 'Telefon: 0176 74736492'],
        links: [
          {
            label: 'E-Mail an Elias Burk',
            href: 'mailto:eliasburk04@gmail.com',
          },
          {
            label: 'Elias Burk anrufen',
            href: 'tel:+4917674736492',
          },
          {
            label: 'Support für Lean Bulk',
            href: '/leanbulk/support',
          },
        ],
      },
      {
        id: 'streitbeilegung',
        title: 'Verbraucherstreitbeilegung',
        paragraphs: [
          'Der Betreiber ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Gesetzliche Rechte, insbesondere der Zugang zu Gerichten und zuständigen Behörden, bleiben unberührt.',
        ],
      },
      {
        id: 'inhalte',
        title: 'Inhalte und Rechte',
        paragraphs: [
          'Lean Bulk und die Inhalte dieses Webauftritts werden von Elias Burk bereitgestellt. Die App-Abbildungen zeigen synthetische Beispieldaten. Fremde Datenquellen, Schriften und Lizenzen sind auf der Quellenseite benannt. Apple, App Store und Apple Health sind Marken ihrer jeweiligen Rechteinhaber. Es wird keine geschäftliche Verbindung zu Apple oder eine Empfehlung durch Apple behauptet.',
        ],
        links: [
          {
            label: 'Quellen und Lizenzen',
            href: '/leanbulk/quellen',
          },
        ],
      },
    ],
  },
  nutzung: {
    title: 'Nutzung und Abos',
    navTitle: 'Nutzung & Abos',
    description: 'Was Lean Bulk leistet, wie Premium funktioniert und wo du dein Abo verwaltest.',
    sections: [
      {
        id: 'zweck',
        title: 'Wofür Lean Bulk gedacht ist',
        paragraphs: [
          'Lean Bulk ist ein Journal für Ernährung, Körpergewicht und Krafttraining mit freiwilligen Rechenhilfen für Aufbau und Erhalt. Die App dient weder der Diagnose noch der Behandlung, Überwachung oder Vorbeugung von Krankheiten. Es wird kein bestimmter Muskelaufbau, Gewichtsverlauf oder gesundheitlicher Erfolg zugesagt.',
          'Nährwerte, Energiebedarf, Sportverbrauch und Gewichtsprognosen sind Näherungen. Prüfe Produktangaben an der Verpackung und lege Ziele bei gesundheitlichen Fragen mit einer qualifizierten Fachkraft fest. Die App ist kein Notfallangebot.',
        ],
      },
      {
        id: 'lizenz',
        title: 'Lizenz und gesetzliche Rechte',
        paragraphs: [
          'Für die über den App Store bezogene App gilt Apples Standard-Lizenzvertrag für Endnutzer (Standard-EULA), soweit keine abweichende Vereinbarung im App Store ausgewiesen wird. Diese Seite erläutert Funktionen und Kaufwege; sie führt keine zusätzlichen Haftungsausschlüsse oder abweichenden Gerichtsstände ein.',
          'Zwingende Verbraucherrechte, einschließlich gesetzlicher Rechte bei Mängeln digitaler Produkte, bleiben unberührt. Aus einem allgemeinen Hinweis auf Rechenschätzungen folgt kein pauschaler Ausschluss gesetzlicher Haftung.',
        ],
        links: [
          {
            label: 'Apples Standard-EULA im Original',
            href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
          },
        ],
      },
      {
        id: 'free-premium',
        title: 'Kostenlose Funktionen und Premium',
        paragraphs: [
          'Das grundlegende Tracking, eigene Trainingspläne und Datensicherung bleiben kostenlos. Premium ergänzt Kalorienvorschläge, Trainingsplan-Vorlagen, Steigerungsvorschläge, Bestwerte, längere Statistikzeiträume und erneute Zielberechnung. Die genaue Leistungsbeschreibung und Verfügbarkeit werden vor dem Kauf in der App angezeigt.',
          'Ein bestätigter Vorschlag ist erst nach ausdrücklicher Übernahme ein Ziel. Automatische Anpassungen ohne Bestätigung gibt es nicht. Ein Abo-Ende löscht keine Journaldaten und nimmt kopierte Pläne oder bestätigte Ziele nicht zurück; neue Premium-Leistungen entfallen und Statistiken sind wieder auf 30 Tage begrenzt.',
        ],
      },
      {
        id: 'preise',
        title: 'Preise, Testphase und Verlängerung',
        paragraphs: [
          'Deutsche Startpreise: 4,99 Euro pro Monat oder 29,99 Euro pro Jahr. Für berechtigte neue Abonnentinnen und Abonnenten enthält das Jahresabo eine kostenlose Testphase von sieben Tagen. Maßgeblich sind stets Gesamtpreis, Währung, Laufzeit und Testberechtigung im Apple-Kaufdialog. Andere Länder und spätere Angebote können abweichen.',
          'Ein kostenpflichtiges Abo wird erst durch den Kaufabschluss bei Apple ausgelöst. Nach der Testphase beziehungsweise dem bezahlten Zeitraum verlängert es sich automatisch zum angezeigten Preis, sofern es nicht rechtzeitig gekündigt wird. Die Website nimmt keine Bestellungen und keine Zahlungen an.',
          'Die Darstellung eines Tages in einer Testphasen-Zeitleiste ist keine zugesagte Kündigungserinnerung. Verlasse dich auf das bei Apple angezeigte Verlängerungsdatum und stelle bei Bedarf selbst eine Erinnerung ein.',
        ],
      },
      {
        id: 'kuendigen',
        title: 'Abo verwalten oder kündigen',
        paragraphs: [
          'Öffne die iPhone-Einstellungen → dein Name → Abonnements → Lean Bulk oder den unten verlinkten Apple-Bereich. Bei einer kostenlosen oder vergünstigten Testphase empfiehlt Apple die Kündigung mindestens 24 Stunden vor Ablauf. Die im Apple-Kaufdialog angezeigten Bedingungen gelten.',
          'Eine Kündigung verhindert die künftige Verlängerung. Wann der Zugriff endet, zeigt Apple im Abo-Status; bei Testangeboten kann dies vom Angebot abhängen. Das Löschen der App oder des Journals ist keine Kündigung. Für Fragen oder Schwierigkeiten kannst du außerdem den Lean-Bulk-Support kontaktieren.',
        ],
        links: [
          {
            label: 'Apple-Abos verwalten',
            href: 'https://apps.apple.com/account/subscriptions',
          },
          {
            label: 'Kündigung bei Apple erklärt',
            href: 'https://support.apple.com/de-de/118428',
          },
          {
            label: 'Lean-Bulk-Support',
            href: '/leanbulk/support',
          },
        ],
      },
      {
        id: 'widerruf',
        title: 'Widerruf, Rückerstattung und Kaufprobleme',
        paragraphs: [
          'Für Widerruf und Rückerstattung gelten die gesetzlichen Rechte und die beim Kauf über Apple bereitgestellten Informationen. Widerruf und Kündigung einer künftigen Verlängerung sind unterschiedliche Vorgänge. Eine kostenlose Testphase ersetzt kein gesetzliches Widerrufsrecht.',
          'Für über Apple abgerechnete Käufe kannst du eine Erstattung über Apples vorgesehenen Weg beantragen. Diese Seite erklärt keinen pauschalen Verzicht auf Widerrufsrechte und behauptet nicht, dass jedes gestartete digitale Abo vom Widerruf ausgeschlossen sei. Bei Fragen erreichst du auch den Betreiber über die Supportseite.',
        ],
        links: [
          {
            label: 'Rückerstattung bei Apple anfragen',
            href: 'https://support.apple.com/de-de/118223',
          },
        ],
      },
      {
        id: 'alter',
        title: 'Alter und verantwortliche Nutzung',
        paragraphs: [
          'Für 16- und 17-Jährige verwendet der Rechner einen begrenzten Jugendmodus. Unter 16 stehen keine berechneten Ziele zur Verfügung. Minderjährige benötigen für einen kostenpflichtigen Vertrag die nach dem anwendbaren Recht erforderliche Zustimmung ihrer gesetzlichen Vertretung.',
          'Bei Erkrankungen, Schwangerschaft, Stillzeit, Essstörungen oder anderen besonderen Bedürfnissen sind pauschale Formeln keine individuelle Empfehlung. Hole fachlichen Rat ein, bevor du Ziele änderst. Wenn Essen oder Wiegen belastend wird, findest du über das BIÖG vertrauliche Beratung.',
        ],
        links: [
          {
            label: 'Beratungsangebote bei Essstörungen',
            href: 'https://essstoerungen.bioeg.de',
          },
        ],
      },
      {
        id: 'daten',
        title: 'Deine Daten und Sicherungen',
        paragraphs: [
          'Dein Journal liegt auf deinem Gerät. Lege regelmäßig eine Sicherung an, bevor du Geräte wechselst, Daten importierst oder die App löschst. Der Import ersetzt den bisherigen Journalstand. Export- und Sicherungsdateien enthalten sensible Daten und werden nicht zusätzlich von Lean Bulk verschlüsselt.',
          'Es gibt keine eigene Cloud-Synchronisierung. Wählst du einen Cloud-Ordner, gelten zusätzlich die Bedingungen dieses Anbieters. Deine gesetzlichen Rechte werden durch diese Hinweise nicht eingeschränkt.',
        ],
        links: [
          {
            label: 'Sicherung und Löschung erklärt',
            href: '/leanbulk/support#sicherung',
          },
          {
            label: 'Vollständige Datenschutzerklärung',
            href: '/leanbulk/datenschutz',
          },
        ],
      },
    ],
  },
  quellen: {
    title: 'Quellen und Lizenzen',
    navTitle: 'Quellen & Lizenzen',
    description:
      'Die Daten, Schriften und Rechengrundlagen hinter Lean Bulk – mit Herkunft und Grenzen.',
    sections: [
      {
        id: 'bls',
        title: 'Allgemeine Lebensmittel: BLS 4.0',
        paragraphs: [
          'Max Rubner-Institut (2025): Bundeslebensmittelschlüssel (BLS), Version 4.0 – Deutsche Nährstoffdatenbank. Karlsruhe. DOI: 10.25826/Data20251217-134202-0. Lizenz: Creative Commons Namensnennung 4.0 International (CC BY 4.0).',
          'Lean Bulk verwendet einen reduzierten lokalen Auszug aus 7.140 Lebensmitteln: Originalkennungen, deutsche und englische Namen sowie Kalorien, Protein, verfügbare Kohlenhydrate und Fett je 100 g. Unbekannte Werte bleiben fehlend. App-Kennungen wurden ergänzt; es werden keine fehlenden Nährwerte oder Zubereitungszustände hinzuerfunden.',
        ],
        links: [
          {
            label: 'Originaldaten und Download',
            href: 'https://blsdb.de/download',
          },
          {
            label: 'Dauerhafte Quellenreferenz',
            href: 'https://doi.org/10.25826/Data20251217-134202-0',
          },
          {
            label: 'CC BY 4.0',
            href: 'https://creativecommons.org/licenses/by/4.0/deed.de',
          },
        ],
      },
      {
        id: 'off',
        title: 'Markenprodukte: Open Food Facts',
        paragraphs: [
          'Open Food Facts und Mitwirkende. Datenbank unter Open Database License (ODbL), einzelne Dateninhalte unter Database Contents License (DbCL). Produktbilder stehen, sofern verwendet, unter CC BY-SA nach den Quellenbedingungen.',
          'Allgemeine Katalogwerte sind keine Packungswerte eines konkreten Markenprodukts. Open Food Facts ist eine gemeinschaftlich gepflegte Quelle; Produktabdeckung und Angaben können unvollständig sein. Prüfe bei Bedarf die Verpackung. Manuelle Korrekturen und die Herkunft bleiben in Lean Bulk unterscheidbar.',
        ],
        links: [
          {
            label: 'Nutzungsbedingungen',
            href: 'https://world.openfoodfacts.org/terms-of-use',
          },
          {
            label: 'ODbL 1.0',
            href: 'https://opendatacommons.org/licenses/odbl/1-0/',
          },
          {
            label: 'DbCL 1.0',
            href: 'https://opendatacommons.org/licenses/dbcl/1-0/',
          },
        ],
      },
      {
        id: 'uebungen',
        title: 'Übungen und eigene Piktogramme',
        paragraphs: [
          'Der Katalog enthält 45 ausgewählte Kraftübungen. Auswahl, deutsche Texte und native Vektorpiktogramme stammen von Lean Bulk. Übernommene Kennungen und englische Suchbegriffe beruhen auf dem MIT-lizenzierten Textdatensatz hasaneyldrm/exercises-dataset, Quellstand 7455efae41b330c265e7cd4b78dfa848e7ce5ebd.',
          'Es werden keine Fotos oder Animationen von Gym visual verwendet. Die Lizenz des Textdatensatzes ist keine Medienfreigabe für solche Bilder.',
        ],
        links: [
          {
            label: 'Ursprünglicher Textdatensatz',
            href: 'https://github.com/hasaneyldrm/exercises-dataset/tree/7455efae41b330c265e7cd4b78dfa848e7ce5ebd',
          },
          {
            label: 'Vollständige MIT-Lizenz',
            href: '/licenses/exercises-MIT.txt',
          },
        ],
      },
      {
        id: 'schrift',
        title: 'Schrift und Website-Icons',
        paragraphs: [
          'Nunito Sans: The Nunito Sans Project Authors. Lizenz: SIL Open Font License 1.1. Die Schriftdateien werden lokal von dieser Website ausgeliefert; dein Browser lädt sie nicht von Google Fonts.',
          'Website-Icons: Lucide, ISC-Lizenz. App-Icon und App-Abbildungen werden aus dem Lean-Bulk-Projekt verwendet.',
        ],
        links: [
          {
            label: 'Nunito Sans: vollständige Lizenz',
            href: '/fonts/OFL.txt',
          },
          {
            label: 'Lucide-Lizenz',
            href: 'https://lucide.dev/license',
          },
        ],
      },
      {
        id: 'rechner',
        title: 'Grundlagen der Rechenhilfen',
        paragraphs: [
          'Erwachsenen-Rechner: Mifflin-St Jeor (1990) als Grundgleichung, ergänzt um einen angegebenen Aktivitätsfaktor und die in der App erläuterten Aufbau-/Erhaltungsregeln. Jugendmodus: National Academies, Dietary Reference Intakes for Energy (2023), mit gesonderten altersbezogenen Regeln. Verbrauchsschätzungen für Sport orientieren sich am Adult Compendium of Physical Activities (2024).',
          'Eine zitierte Grundgleichung bestätigt weder alle Produktentscheidungen noch eine individuelle Eignung. Faktoren, Zielraten, Rundungen und Check-in-Grenzen sind Rechenregeln der App. Alle Ergebnisse bleiben Schätzungen.',
        ],
        links: [
          {
            label: 'Mifflin-St Jeor: Originalpublikation',
            href: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
          },
          {
            label: 'Dietary Reference Intakes for Energy (2023)',
            href: 'https://nap.nationalacademies.org/catalog/26818/dietary-reference-intakes-for-energy',
          },
          {
            label: 'Adult Compendium',
            href: 'https://pacompendium.com/',
          },
        ],
      },
      {
        id: 'beratung',
        title: 'Information und Beratung',
        paragraphs: [
          'Lean Bulk ersetzt keine ärztliche oder ernährungsfachliche Beratung. Für Hilfe bei belastendem Ess- und Gewichtsverhalten verweist die App auf das Bundesinstitut für Öffentliche Gesundheit (BIÖG).',
        ],
        links: [
          {
            label: 'BIÖG: Hilfe bei Essstörungen',
            href: 'https://essstoerungen.bioeg.de',
          },
        ],
      },
    ],
  },
} as const satisfies Record<string, DocumentContent>;
