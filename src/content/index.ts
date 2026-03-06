/**
 * Central content source for Burk-Solutions
 * Alle Texte und Botschaften werden hier gepflegt.
 * Wir-Form ist verpflichtend.
 */

export type WorkflowStep = {
  step: number;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type OrientationPackage = {
  title: string;
  subtitle: string;
  fitFor: string;
  outcome: string;
};

export type ContactNeed = {
  title: string;
  description: string;
  icon: 'FileText' | 'Calendar' | 'Euro' | 'MessageSquare';
};

export type AppLink = {
  label: string;
  href: string;
};

export type AppEntry = {
  name: string;
  description: string;
  links: AppLink[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export const conversion = {
  primaryCtaLabel: 'Kostenloses Erstgespräch',
  secondaryCtaLabel: 'Leistungen ansehen',
  trustLine: 'Antwort innerhalb von 24–48h · unverbindlich · transparent',
  scrollHint: 'Scrollen für mehr',
} as const;

export const profile = {
  name: 'Burk-Solutions',
  company: 'Burk-Solutions',
  role: 'Digitale Lösungen für Unternehmen',
  email: 'eliasburk04@gmail.com',
  location: 'Deutschland',
  availability: 'Aktuell verfügbar für neue Projekte',

  headline: 'Wir bauen digitale Auftritte, die Anfragen bringen und im Alltag zuverlässig laufen.',
  subheadline:
    'Für Unternehmen, Gründer und Teams, die online klarer auftreten, schneller entscheiden und mit weniger Abstimmungsaufwand wachsen wollen.',

  positioningLine:
    'Wir begleiten von der ersten Zielklärung bis zur laufenden Betreuung – mit klaren Schritten, festen Ansprechpartnern und transparenten Entscheidungen.',

  whyBurk: [
    'Wir arbeiten zuverlässig mit klaren Zusagen zu Zeitrahmen, Budget und Zuständigkeiten.',
    'Wir erklären verständlich, damit Entscheidungen schnell und sicher getroffen werden können.',
    'Wir entwickeln so, dass Ihr Projekt langfristig gepflegt und erweitert werden kann.',
  ],

  benefits: [
    'Ein professioneller Auftritt, der Vertrauen schafft und Anfragen erleichtert.',
    'Klare Nutzerführung, damit Interessenten schneller den nächsten Schritt gehen.',
    'Schnelle, stabile Seiten ohne technische Überraschungen im Tagesgeschäft.',
    'Langfristige Betreuung, damit Ihr Auftritt mit Ihrem Unternehmen mitwächst.',
  ],

  pitch:
    'Wir liefern keine komplizierten Prozesse, sondern klare Ergebnisse: mehr Übersicht, weniger Reibung und ein digitales Produkt, das Ihren Vertrieb und Ihr Team spürbar entlastet.',

  bio: `Burk-Solutions ist Ihr Partner für digitale Lösungen, die im Alltag funktionieren. Wir entwickeln Websites, Web-Anwendungen und digitale Werkzeuge für Unternehmen, die online professionell auftreten und Anfragen zuverlässig in Projekte verwandeln möchten.

Unser Ansatz ist bewusst klar: Wir starten mit Ihren Zielen, priorisieren die wichtigsten Schritte und setzen dann strukturiert um. So entstehen Lösungen, die verständlich bleiben und auch intern gut weitergeführt werden können.

Was uns auszeichnet: Wir kommunizieren offen, halten Zusagen ein und denken langfristig. Nach dem Launch bleiben wir an Ihrer Seite, optimieren weiter und sorgen dafür, dass Ihr digitaler Auftritt mit Ihren Anforderungen wächst.`,

  workflowTitle: 'So arbeiten wir',
  workflowDescription:
    'Unser Ablauf ist klar und planbar: Ziele klären, Struktur festlegen, sauber umsetzen, langfristig betreuen.',
  workflow: [
    {
      step: 1,
      title: 'Ziele klären',
      description:
        'Wir besprechen, welche Ergebnisse Sie erreichen möchten und worauf es in Ihrem Markt wirklich ankommt.',
    },
    {
      step: 2,
      title: 'Design & Struktur',
      description:
        'Wir definieren eine klare Seitenstruktur und ein Design, das Vertrauen schafft und Entscheidungen erleichtert.',
    },
    {
      step: 3,
      title: 'Umsetzung & Tests',
      description:
        'Wir setzen Ihr Projekt sauber um, testen gründlich und stimmen die wichtigsten Schritte eng mit Ihnen ab.',
    },
    {
      step: 4,
      title: 'Launch & Betreuung',
      description:
        'Nach dem Go-Live begleiten wir weiter mit Wartung, Optimierung und planbaren Weiterentwicklungen.',
    },
  ] satisfies WorkflowStep[],

  competencies: {
    title: 'Was wir können',
    description:
      'Wir bauen digitale Lösungen, die sichtbar Ergebnisse liefern und gleichzeitig im Betrieb ruhig, stabil und erweiterbar bleiben.',
    items: [
      {
        title: 'Websites & Landingpages',
        description:
          'Klare Seitenstrukturen, die Vertrauen aufbauen und Interessenten zu konkreten Anfragen führen.',
      },
      {
        title: 'Web-Anwendungen',
        description:
          'Digitale Arbeitsbereiche und Kundenportale, die Abläufe vereinfachen und Zeit im Team sparen.',
      },
      {
        title: 'Mobile Lösungen',
        description:
          'Apps und mobile Prozesse, die Ihre Leistungen auch unterwegs zugänglich und nutzbar machen.',
      },
      {
        title: 'Wartung & Weiterentwicklung',
        description:
          'Kontinuierliche Betreuung, damit Ihr System sicher bleibt und mit neuen Anforderungen Schritt hält.',
      },
    ],
  },

  techBackground: {
    title: 'Technik im Hintergrund',
    description:
      'Damit Ihre Lösung langfristig zuverlässig bleibt, arbeiten wir mit einem sauberen Aufbau, klar dokumentierten Entscheidungen und einer Struktur, die spätere Erweiterungen ohne Neustart ermöglicht.',
    smallPrint: 'Technik: TypeScript · Flutter · Python (je nach Projekt)',
  },

  contactPromises: [
    'Antwort innerhalb von 24–48 Stunden',
    'Kostenloses, unverbindliches Erstgespräch',
    'Transparente Preise nach Umfang und Priorität',
  ],

  miniFaq: [
    {
      question: 'Wie schnell können wir starten?',
      answer:
        'Nach dem Erstgespräch erhalten Sie in kurzer Zeit einen klaren Vorschlag für Ablauf, Aufwand und nächste Schritte.',
    },
    {
      question: 'Wie läuft die Abrechnung?',
      answer:
        'Wir rechnen transparent nach Umfang und Priorität ab. Sie wissen vor dem Start, womit Sie rechnen können.',
    },
    {
      question: 'Bleiben Sie nach dem Launch erreichbar?',
      answer:
        'Ja. Wir begleiten auf Wunsch dauerhaft mit Wartung, Anpassungen und geplanter Weiterentwicklung.',
    },
  ] satisfies FAQItem[],

  faq: [
    {
      question: 'Wie lange dauert ein typisches Projekt?',
      answer:
        'Eine klare Unternehmenswebsite ist oft in 2–4 Wochen umsetzbar. Umfangreichere Anwendungen benötigen mehr Zeit. Wir geben im Erstgespräch eine realistische Planung.',
    },
    {
      question: 'Was kostet eine Zusammenarbeit?',
      answer:
        'Wir arbeiten transparent nach Umfang. Sie erhalten eine nachvollziehbare Einschätzung, damit Sie sicher entscheiden können.',
    },
    {
      question: 'Was benötigen wir von Ihnen zu Beginn?',
      answer:
        'Wichtig sind Ihre Ziele, ein grober Zeitrahmen und vorhandene Inhalte. Den Rest strukturieren wir gemeinsam Schritt für Schritt.',
    },
    {
      question: 'Können Sie auch bestehende Projekte übernehmen?',
      answer:
        'Ja. Wir übernehmen laufende Websites und Anwendungen, analysieren den Stand und setzen dann geordnet die nächsten sinnvollen Schritte um.',
    },
    {
      question: 'Wie geht es nach Ihrer Anfrage weiter?',
      answer:
        'Wir melden uns innerhalb von 24–48 Stunden, klären Ihre Ziele in einem Gespräch und senden anschließend einen klaren Vorschlag für den Ablauf.',
    },
  ] satisfies FAQItem[],
} as const;

export const homeContent = {
  heroBadge: 'Burk-Solutions · Digitale Lösungen',
  whySectionTitle: 'Warum Burk-Solutions',
  servicesPreviewTitle: 'Unsere Leistungen',
  miniFaqTitle: 'Häufige Fragen vor dem Start',
  miniFaqDescription: 'Kurze Antworten für schnelle Entscheidungen.',
} as const;

export const aboutContent = {
  title: 'Über uns',
  subtitle: 'Wir verbinden klare Kommunikation mit zuverlässiger Umsetzung.',
  quote:
    'Wir liefern digitale Lösungen, die verständlich bleiben, zuverlässig laufen und Ihrem Team dauerhaft Arbeit abnehmen.',
  quoteAuthor: 'Unser Anspruch bei jedem Projekt',
} as const;

export const servicesContent = {
  title: 'Unsere Leistungen',
  description:
    'Wir bündeln Strategie, Design und Umsetzung in drei klaren Leistungsbereichen: Websites, Automatisierungen und Integrationen.',
  detailTitle: 'Im Detail',
  detailDescription:
    'Was wir anbieten, für wen es passt und welchen konkreten Nutzen Sie erwarten können.',
  valueTitle: 'Warum mit uns arbeiten?',
  valueDescription:
    'Neben sauberer Umsetzung zählt vor allem eine Zusammenarbeit, die im Alltag spürbar entlastet.',
  valueProps: [
    'Klare Kommunikation ohne unnötige Fachbegriffe',
    'Realistische Planung statt leere Versprechen',
    'Transparente Übergabe und nachvollziehbare Entscheidungen',
    'Lösungen, die langfristig wartbar und erweiterbar bleiben',
  ],
  packagesTitle: 'Pakete zur Orientierung',
  packagesDescription: 'Für eine schnelle Einordnung vor dem Erstgespräch.',
  ctaTitle: 'Bereit für den nächsten Schritt?',
  ctaDescription:
    'Lassen Sie uns gemeinsam prüfen, welches Vorgehen für Ihr Ziel am sinnvollsten ist.',
} as const;



export const contactContent = {
  title: 'Kontakt aufnehmen',
  description:
    'Sie planen ein neues digitales Projekt oder möchten ein bestehendes System verbessern? Wir melden uns schnell zurück und klären mit Ihnen den sinnvollsten nächsten Schritt.',
  directMailTitle: 'Per E-Mail',
  directMailDescription: 'Der direkte Weg für Projektanfragen, Rückfragen und Erstgespräche.',
  responseTitle: 'Reaktionszeit',
  responseDescription:
    'Wir antworten in der Regel innerhalb von 24–48 Stunden. Bei dringenden Themen markieren Sie den Betreff gerne entsprechend.',
  whatWeNeedTitle: 'Was wir wissen sollten',
  whatWeNeedDescription:
    'Mit diesen Informationen können wir Ihre Anfrage schnell und sinnvoll einordnen.',
  whatWeNeed: [
    {
      title: 'Projektziel',
      description: 'Was möchten Sie konkret verbessern oder erreichen?',
      icon: 'FileText',
    },
    {
      title: 'Zeitrahmen',
      description: 'Gibt es feste Termine oder interne Meilensteine?',
      icon: 'Calendar',
    },
    {
      title: 'Budget-Rahmen',
      description: 'Eine grobe Einordnung hilft bei der sinnvollen Priorisierung.',
      icon: 'Euro',
    },
    {
      title: 'Bestehende Basis',
      description: 'Gibt es bereits Inhalte, Design oder ein bestehendes System?',
      icon: 'MessageSquare',
    },
  ] satisfies ContactNeed[],
  faqTitle: 'Häufige Fragen',
  faqDescription: 'Antworten auf die wichtigsten Fragen vorab.',
  formTitle: 'Kontaktformular',
  formDescription: 'Alternativ können Sie das Formular nutzen – wir melden uns zeitnah.',
  formHint:
    '* Das Formular erstellt einen E-Mail-Entwurf. So können Sie Ihre Anfrage direkt mit allen Angaben versenden.',
  fallbackTitle: 'Lieber direkt per E-Mail?',
} as const;

export const appsContent = {
  title: 'Apps',
  description: 'Hier finden Sie die Datenschutzerklärungen und Impressums unserer mobilen Apps.',
  introTitle: 'Rechtliches & Informationen',
  introDescription:
    'Alle appbezogenen Datenschutz- und Impressumsseiten sind gebündelt erreichbar und folgen derselben klaren Struktur wie unser Hauptauftritt.',
  apps: [
    {
      name: 'Stirnraten',
      description: 'Das beliebte Ratespiel für Gruppen.',
      links: [
        { label: 'Datenschutzerklärung', href: '/apps/stirnraten/datenschutz' },
        { label: 'Impressum', href: '/apps/stirnraten/impressum' },
      ],
    },
    {
      name: 'EXPOSED – Party Game',
      description: 'Das Partyspiel für unvergessliche Abende.',
      links: [
        { label: 'Datenschutzerklärung', href: '/apps/exposed/datenschutz' },
        { label: 'Impressum', href: '/apps/exposed/impressum' },
      ],
    },
  ] satisfies AppEntry[],
} as const;

export const orientationPackages: OrientationPackage[] = [
  {
    title: 'Klarer Start',
    subtitle: 'Für neue Auftritte und erste Struktur',
    fitFor: 'Unternehmen, die schnell online klar auftreten möchten.',
    outcome:
      'Ein fokussierter Auftritt mit klarer Botschaft und konkretem nächsten Schritt für Interessenten.',
  },
  {
    title: 'Wachstums-Upgrade',
    subtitle: 'Für bestehende Seiten mit mehr Potenzial',
    fitFor: 'Teams, die mehr Anfragen und bessere Abläufe erreichen möchten.',
    outcome: 'Bessere Nutzerführung, höhere Conversion-Chancen und weniger Reibung im Prozess.',
  },
  {
    title: 'Langfristige Betreuung',
    subtitle: 'Für Stabilität und planbare Weiterentwicklung',
    fitFor: 'Unternehmen mit laufendem System und kontinuierlichen Anforderungen.',
    outcome:
      'Sichere Updates, saubere Priorisierung und ein System, das mit Ihrem Alltag mitwächst.',
  },
];

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  targetAudience: string;
  result: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Websites & Landingpages',
    shortTitle: 'Websites',
    description:
      'Klar strukturierte Auftritte für Unternehmen, Angebote und Kampagnen, die Vertrauen schaffen und Anfragen sauber führen.',
    targetAudience:
      'Unternehmen, die online professionell auftreten, Leistungen verständlich erklären und aus Besuchern Gespräche machen möchten.',
    result: 'Mehr Sichtbarkeit, klarere Positionierung und bessere Conversion im Erstkontakt.',
    icon: 'Globe',
  },
  {
    id: 'automatisierungen',
    title: 'Automatisierungen & KI-Workflows',
    shortTitle: 'Automatisierung',
    description:
      'Praktische Systeme für wiederkehrende Abläufe, Lead-Handling, interne Routinen und saubere Übergaben zwischen Tools.',
    targetAudience:
      'Teams, die Zeit verlieren durch manuelle Prozesse, doppelte Pflege oder unklare Zuständigkeiten.',
    result: 'Weniger Reibung im Tagesgeschäft, schnellere Abläufe und mehr Zeit für wertschöpfende Arbeit.',
    icon: 'Cog',
  },
  {
    id: 'integrationen',
    title: 'Integrationen & Kundenportale',
    shortTitle: 'Integrationen',
    description:
      'Digitale Oberflächen, Portale und Systemverbindungen, die Datenflüsse ordnen und Zusammenarbeit spürbar vereinfachen.',
    targetAudience:
      'Unternehmen, die mehrere Tools verbinden, Kunden sauber anbinden oder interne Prozesse digital bündeln möchten.',
    result: 'Ein ruhigerer Betrieb mit klaren Datenwegen, weniger Medienbrüchen und besserer Servicequalität.',
    icon: 'LayoutDashboard',
  },
];



export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'Über uns', href: '/about', icon: 'Users' },
  { label: 'Leistungen', href: '/services', icon: 'Briefcase' },
  { label: 'Kontakt', href: '/contact', icon: 'Mail' },
  { label: 'Apps', href: '/apps', icon: 'Smartphone' },
];

export const featureFlags = {
  blog: false,
  caseStudies: false,
  downloadableCV: false,
  analytics: false,
  i18n: false,
} as const;

export const siteFooter = {
  summary: profile.pitch,
  navigationTitle: 'Seiten',
  contactTitle: 'Kontakt',
  contactDescription: 'Für Projektanfragen, Rückfragen und Erstgespräche.',
  legalTitle: 'Rechtliches',
  navigationLinks: navigation satisfies FooterLink[],
  legalLinks: [
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Apps', href: '/apps' },
  ] satisfies FooterLink[],
  supportLinks: [
    { label: 'Stirnraten Datenschutz', href: '/apps/stirnraten/datenschutz' },
    { label: 'Stirnraten Impressum', href: '/apps/stirnraten/impressum' },
  ] satisfies FooterLink[],
  copyright: `© ${new Date().getFullYear()} Burk-Solutions. Klare digitale Lösungen mit langfristigem Anspruch.`,
} as const;

export const siteLegal = {
  privacy: {
    title: 'Datenschutzerklärung',
    description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
    effectiveDate: 'Stand: 5. März 2026',
    sections: [
      {
        title: '1. Verantwortlicher',
        paragraphs: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website ist Elias Burk, Burk-Solutions, Friedrich-Naumann Straße 11, 71636 Ludwigsburg, Deutschland.',
          `Bei Fragen zum Datenschutz erreichen Sie uns per E-Mail unter ${profile.email}.`,
        ],
      },
      {
        title: '2. Zugriff auf die Website',
        paragraphs: [
          'Beim Aufruf dieser Website werden technisch erforderliche Informationen verarbeitet, damit die Seite ausgeliefert, abgesichert und stabil betrieben werden kann.',
          'Dazu können insbesondere IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Datei, Referrer, Browsertyp und Betriebssystem gehören.',
        ],
      },
      {
        title: '3. Kontaktaufnahme',
        paragraphs: [
          'Wenn Sie uns per E-Mail kontaktieren oder über das Kontaktformular eine Anfrage vorbereiten, verarbeiten wir die von Ihnen mitgeteilten Angaben, um Ihre Anfrage einzuordnen und zu beantworten.',
          'Die Verarbeitung erfolgt ausschließlich für die Kommunikation zu Ihrem Anliegen und nur so lange, wie dies für die Bearbeitung erforderlich ist.',
        ],
      },
      {
        title: '4. Cookies, Analyse und Tracking',
        paragraphs: [
          'Auf dieser Website werden aktuell keine eigenen Analyse- oder Tracking-Dienste eingesetzt.',
          'Es werden keine Marketing-Cookies, keine personalisierten Werbeprofile und keine zusätzlichen Tracking-Skripte für Kampagnenmessung eingebunden.',
        ],
      },
      {
        title: '5. Ihre Rechte',
        paragraphs: [
          'Sie haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch gegen bestimmte Verarbeitungen.',
          'Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.',
        ],
      },
      {
        title: '6. Änderungen dieser Erklärung',
        paragraphs: [
          'Wir passen diese Datenschutzerklärung an, wenn sich Inhalte, technische Abläufe oder gesetzliche Anforderungen ändern.',
        ],
      },
    ] satisfies LegalSection[],
  },
  imprint: {
    title: 'Impressum',
    description: 'Angaben gemäß § 5 DDG für den Webauftritt von Burk-Solutions.',
    effectiveDate: 'Stand: 5. März 2026',
    sections: [
      {
        title: '1. Anbieter',
        paragraphs: ['Elias Burk', 'Friedrich-Naumann Straße 11', '71636 Ludwigsburg, Deutschland'],
      },
      {
        title: '2. Kontakt',
        paragraphs: [`E-Mail: ${profile.email}`, 'Telefon: nicht angegeben'],
      },
      {
        title: '3. Inhaltlich verantwortlich',
        paragraphs: ['Elias Burk', 'Friedrich-Naumann Straße 11', '71636 Ludwigsburg, Deutschland'],
      },
      {
        title: '4. Verbraucherstreitbeilegung',
        paragraphs: [
          'Es besteht keine Bereitschaft und keine Verpflichtung zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.',
        ],
      },
      {
        title: '5. Haftung für Inhalte',
        paragraphs: [
          'Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir übernehmen jedoch keine Gewähr für die Aktualität, Vollständigkeit und Richtigkeit der bereitgestellten Inhalte.',
        ],
      },
      {
        title: '6. Haftung für Links',
        paragraphs: [
          'Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
        ],
      },
      {
        title: '7. Urheberrecht',
        paragraphs: [
          'Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        ],
      },
    ] satisfies LegalSection[],
  },
} as const;

export const siteMetadata = {
  title: 'Burk-Solutions | Websites & digitale Produkte',
  description:
    'Wir entwickeln Websites, Web-Apps und digitale Werkzeuge für Unternehmen. Klar in der Kommunikation, zuverlässig in der Umsetzung und langfristig betreut.',
  url: 'https://burk-solutions.de',
  locale: 'de_DE',
  keywords: [
    'Website erstellen',
    'Webdesign',
    'Digitale Lösungen',
    'Unternehmenswebsite',
    'Web-App',
    'Deutschland',
  ],
  ogImage: '/logo.png',
};
