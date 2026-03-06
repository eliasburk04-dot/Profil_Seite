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
  role: 'Websites, Web Apps & Mobile Apps',
  email: 'eliasburk04@gmail.com',
  location: 'Deutschland',
  availability: 'Aktuell verfügbar für neue Projekte',

  headline: 'Wir entwickeln Websites, Web Apps und mobile Apps, die Ergebnisse liefern.',
  subheadline:
    'Für Unternehmen, Gründer und Teams, die mit einer starken Website, einer leistungsfähigen Web-App oder einer eigenen mobilen App wachsen wollen.',

  positioningLine:
    'Von der ersten Idee bis zum fertigen Produkt – wir entwickeln Websites, Web-Anwendungen und native Apps mit klarer Struktur und langfristiger Betreuung.',

  whyBurk: [
    'Wir arbeiten zuverlässig mit klaren Zusagen zu Zeitrahmen, Budget und Zuständigkeiten.',
    'Wir erklären verständlich, damit Entscheidungen schnell und sicher getroffen werden können.',
    'Wir entwickeln so, dass Ihr Projekt langfristig gepflegt und erweitert werden kann.',
  ],

  benefits: [
    'Professionelle Websites, die Vertrauen schaffen und Anfragen bringen.',
    'Web Apps, die Abläufe vereinfachen und Teams spürbar entlasten.',
    'Mobile Apps auf iOS und Android, die Ihre Idee in die Hände Ihrer Nutzer bringen.',
    'Langfristige Betreuung, damit Ihr Produkt mit Ihrem Unternehmen mitwächst.',
  ],

  pitch:
    'Wir entwickeln digitale Produkte in drei klaren Bereichen: Websites & Landingpages, Web Apps und mobile Apps. Kein Overhead, keine leeren Versprechen – sondern Ergebnisse, die Ihr Geschäft voranbringen.',

  bio: `Burk-Solutions entwickelt Websites, Web Apps und mobile Apps für Unternehmen, die digital wachsen wollen. Ob professioneller Webauftritt, leistungsfähige Web-Anwendung oder native App für iOS und Android – wir liefern Lösungen, die im Alltag funktionieren.

Unser Ansatz ist bewusst klar: Wir starten mit Ihren Zielen, wählen die richtige Technologie und setzen dann strukturiert um. So entstehen Produkte, die Nutzer überzeugen und langfristig weiterentwickelt werden können.

Was uns auszeichnet: Wir decken das gesamte Spektrum moderner Software-Entwicklung ab – von responsiven Websites über komplexe Web-Anwendungen bis hin zu nativen mobilen Apps. Alles aus einer Hand, mit einem festen Ansprechpartner.`,

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
    title: 'Was wir entwickeln',
    description:
      'Wir sind spezialisiert auf drei Bereiche: Websites & Landingpages, Web Apps und mobile Apps. Jedes Produkt wird sauber geplant, modern umgesetzt und langfristig betreut.',
    items: [
      {
        title: 'Websites & Landingpages',
        description:
          'Professionelle Webauftritte, die Vertrauen schaffen, Anfragen bringen und auf allen Geräten überzeugen.',
      },
      {
        title: 'Web Apps',
        description:
          'Leistungsfähige Web-Anwendungen wie Dashboards, Portale und interne Tools, die Prozesse vereinfachen.',
      },
      {
        title: 'Mobile Apps',
        description:
          'Native und Cross-Platform-Apps für iOS und Android – von der Idee bis zur Veröffentlichung im Store.',
      },
    ],
  },

  techBackground: {
    title: 'Technik im Hintergrund',
    description:
      'Wir arbeiten mit modernen Technologien und einem sauberen Aufbau, damit Ihr Produkt langfristig stabil, erweiterbar und wartbar bleibt.',
    smallPrint: 'Technik: Next.js · React · Flutter · TypeScript · Node.js',
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
  heroBadge: 'Burk-Solutions · Websites, Web Apps & Apps',
  whySectionTitle: 'Warum Burk-Solutions',
  servicesPreviewTitle: 'Unsere Spezialisierungen',
  miniFaqTitle: 'Häufige Fragen vor dem Start',
  miniFaqDescription: 'Kurze Antworten für schnelle Entscheidungen.',
} as const;

export const aboutContent = {
  title: 'Über uns',
  subtitle: 'Spezialisiert auf Websites, Web Apps und mobile Apps – alles aus einer Hand.',
  quote:
    'Wir entwickeln digitale Produkte, die Nutzer überzeugen, zuverlässig laufen und mit Ihrem Unternehmen wachsen.',
  quoteAuthor: 'Unser Anspruch bei jedem Projekt',
} as const;

export const servicesContent = {
  title: 'Unsere Leistungen',
  description:
    'Wir entwickeln in drei klaren Bereichen: Websites & Landingpages, Web Apps und mobile Apps – von der Idee bis zum fertigen Produkt.',
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
    title: 'Website & Landingpage',
    subtitle: 'Für professionelle Webauftritte',
    fitFor: 'Unternehmen und Gründer, die online überzeugend auftreten und Anfragen generieren möchten.',
    outcome:
      'Ein moderner Webauftritt, der Vertrauen schafft, Interessenten führt und messbar Ergebnisse liefert.',
  },
  {
    title: 'Web App',
    subtitle: 'Für digitale Produkte und interne Tools',
    fitFor: 'Teams, die ein Dashboard, Portal oder eine SaaS-Lösung brauchen, die Abläufe vereinfacht.',
    outcome: 'Eine leistungsfähige Web-Anwendung, die Prozesse automatisiert und im Alltag Zeit spart.',
  },
  {
    title: 'Mobile App',
    subtitle: 'Für iOS und Android',
    fitFor: 'Unternehmen mit einer App-Idee oder dem Bedarf, ihre Lösung mobil zugänglich zu machen.',
    outcome:
      'Eine native oder Cross-Platform-App, die im Store veröffentlicht wird und Nutzer begeistert.',
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
      'Professionelle Webauftritte für Unternehmen, Angebote und Kampagnen – schnell, responsive und optimiert für Anfragen.',
    targetAudience:
      'Unternehmen und Gründer, die online überzeugend auftreten und aus Besuchern Kunden machen möchten.',
    result: 'Mehr Sichtbarkeit, stärkeres Vertrauen und messbar bessere Conversion.',
    icon: 'Globe',
  },
  {
    id: 'web-apps',
    title: 'Web Apps',
    shortTitle: 'Web Apps',
    description:
      'Leistungsfähige Web-Anwendungen wie Dashboards, Kundenportale, SaaS-Plattformen und interne Tools – modern und skalierbar.',
    targetAudience:
      'Teams und Unternehmen, die digitale Produkte brauchen, die Prozesse vereinfachen und im Browser laufen.',
    result: 'Schnellere Abläufe, weniger manuelle Arbeit und ein Produkt, das mit Ihren Anforderungen wächst.',
    icon: 'AppWindow',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    shortTitle: 'Apps',
    description:
      'Native und Cross-Platform-Apps für iOS und Android – von der Konzeption über die Entwicklung bis zur Store-Veröffentlichung.',
    targetAudience:
      'Unternehmen mit einer App-Idee oder dem Ziel, ihre Lösung mobil für Kunden und Teams zugänglich zu machen.',
    result: 'Eine App, die Nutzer begeistert, zuverlässig funktioniert und im App Store überzeugt.',
    icon: 'Smartphone',
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
  title: 'Burk-Solutions | Websites, Web Apps & Mobile Apps entwickeln lassen',
  description:
    'Burk-Solutions entwickelt professionelle Websites, Web Apps und mobile Apps für Unternehmen. Individuell, modern und langfristig betreut – aus Deutschland.',
  url: 'https://burk-solutions.de',
  locale: 'de_DE',
  keywords: [
    // Kern-Keywords
    'Website erstellen lassen',
    'Web App entwickeln',
    'Mobile App entwickeln',
    'App Entwicklung Deutschland',
    'Webentwicklung',
    'Webdesign',
    'Webagentur',
    'Digitalagentur',
    // Leistungsbezogen
    'Website für Unternehmen',
    'Landingpage erstellen',
    'Unternehmenswebsite',
    'Responsive Webdesign',
    'Professionelle Website',
    'Web-Anwendung entwickeln',
    'SaaS Entwicklung',
    'Dashboard entwickeln',
    'Kundenportal erstellen',
    'iOS App entwickeln',
    'Android App entwickeln',
    'Flutter App Entwicklung',
    'Cross-Platform App',
    'React Entwicklung',
    'Next.js Agentur',
    'TypeScript Entwicklung',
    // Zielgruppenbezogen
    'Website für Gründer',
    'Website für Startups',
    'Website für KMU',
    'Digitaler Auftritt Unternehmen',
    'Online Präsenz aufbauen',
    'Webseite modernisieren',
    // Regionale Keywords
    'Webentwickler Deutschland',
    'App Entwickler Deutschland',
    'Webagentur Ludwigsburg',
    'Webdesign Stuttgart',
    'Webentwicklung Baden-Württemberg',
    // Long-Tail
    'Website mit Kontaktformular',
    'Moderne Website erstellen lassen',
    'Web App für Unternehmen',
    'App für Unternehmen entwickeln lassen',
    'Individuelle Softwareentwicklung',
    'Freelancer Webentwicklung',
    'Webprojekt planen',
    'Digitale Lösung für Unternehmen',
  ],
  ogImage: '/logo.png',
};
