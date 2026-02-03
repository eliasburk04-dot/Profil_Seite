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
  email: 'kontakt@burk-solutions.de',
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
      description: 'Wir besprechen, welche Ergebnisse Sie erreichen möchten und worauf es in Ihrem Markt wirklich ankommt.',
    },
    {
      step: 2,
      title: 'Design & Struktur',
      description: 'Wir definieren eine klare Seitenstruktur und ein Design, das Vertrauen schafft und Entscheidungen erleichtert.',
    },
    {
      step: 3,
      title: 'Umsetzung & Tests',
      description: 'Wir setzen Ihr Projekt sauber um, testen gründlich und stimmen die wichtigsten Schritte eng mit Ihnen ab.',
    },
    {
      step: 4,
      title: 'Launch & Betreuung',
      description: 'Nach dem Go-Live begleiten wir weiter mit Wartung, Optimierung und planbaren Weiterentwicklungen.',
    },
  ] satisfies WorkflowStep[],

  competencies: {
    title: 'Was wir können',
    description:
      'Wir bauen digitale Lösungen, die sichtbar Ergebnisse liefern und gleichzeitig im Betrieb ruhig, stabil und erweiterbar bleiben.',
    items: [
      {
        title: 'Websites & Landingpages',
        description: 'Klare Seitenstrukturen, die Vertrauen aufbauen und Interessenten zu konkreten Anfragen führen.',
      },
      {
        title: 'Web-Anwendungen',
        description: 'Digitale Arbeitsbereiche und Kundenportale, die Abläufe vereinfachen und Zeit im Team sparen.',
      },
      {
        title: 'Mobile Lösungen',
        description: 'Apps und mobile Prozesse, die Ihre Leistungen auch unterwegs zugänglich und nutzbar machen.',
      },
      {
        title: 'Wartung & Weiterentwicklung',
        description: 'Kontinuierliche Betreuung, damit Ihr System sicher bleibt und mit neuen Anforderungen Schritt hält.',
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
      answer: 'Nach dem Erstgespräch erhalten Sie in kurzer Zeit einen klaren Vorschlag für Ablauf, Aufwand und nächste Schritte.',
    },
    {
      question: 'Wie läuft die Abrechnung?',
      answer: 'Wir rechnen transparent nach Umfang und Priorität ab. Sie wissen vor dem Start, womit Sie rechnen können.',
    },
    {
      question: 'Bleiben Sie nach dem Launch erreichbar?',
      answer: 'Ja. Wir begleiten auf Wunsch dauerhaft mit Wartung, Anpassungen und geplanter Weiterentwicklung.',
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
  projectsPreviewTitle: 'Ausgewählte Projekte',
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
    'Wir unterstützen von der neuen Website bis zur laufenden Weiterentwicklung – mit klaren Zielen, strukturierter Umsetzung und messbarem Nutzen.',
  detailTitle: 'Im Detail',
  detailDescription: 'Was wir anbieten, für wen es passt und welchen konkreten Nutzen Sie erwarten können.',
  valueTitle: 'Warum mit uns arbeiten?',
  valueDescription: 'Neben sauberer Umsetzung zählt vor allem eine Zusammenarbeit, die im Alltag spürbar entlastet.',
  valueProps: [
    'Klare Kommunikation ohne unnötige Fachbegriffe',
    'Realistische Planung statt leere Versprechen',
    'Transparente Übergabe und nachvollziehbare Entscheidungen',
    'Lösungen, die langfristig wartbar und erweiterbar bleiben',
  ],
  packagesTitle: 'Pakete zur Orientierung',
  packagesDescription: 'Für eine schnelle Einordnung vor dem Erstgespräch.',
  ctaTitle: 'Bereit für den nächsten Schritt?',
  ctaDescription: 'Lassen Sie uns gemeinsam prüfen, welches Vorgehen für Ihr Ziel am sinnvollsten ist.',
} as const;

export const projectsContent = {
  title: 'Unsere Projekte',
  description:
    'Ausgewählte Arbeiten aus Website-, App- und Optimierungsprojekten. Jedes Beispiel zeigt, wie wir Ergebnisse strukturiert und nachvollziehbar erreichen.',
  filterHint: 'Filtern nach Branche oder Kategorie',
  highlightsTitle: 'Highlights',
  highlightsDescription: 'Projekte mit klar messbarem Nutzen und hoher Relevanz für unsere Kunden.',
  moreTitle: 'Weitere Projekte',
  emptyState: 'Keine Projekte gefunden für',
  caseStudyHint: 'Detaillierte Case Studies zu ausgewählten Projekten – Coming Soon.',
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
  whatWeNeedDescription: 'Mit diesen Informationen können wir Ihre Anfrage schnell und sinnvoll einordnen.',
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
  formHint: '* Das Formular ist aktuell ein UI-Entwurf. Bitte nutzen Sie vorerst die E-Mail-Option.',
  fallbackTitle: 'Lieber direkt per E-Mail?',
} as const;

export const orientationPackages: OrientationPackage[] = [
  {
    title: 'Klarer Start',
    subtitle: 'Für neue Auftritte und erste Struktur',
    fitFor: 'Unternehmen, die schnell online klar auftreten möchten.',
    outcome: 'Ein fokussierter Auftritt mit klarer Botschaft und konkretem nächsten Schritt für Interessenten.',
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
    outcome: 'Sichere Updates, saubere Priorisierung und ein System, das mit Ihrem Alltag mitwächst.',
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
    id: 'unternehmenswebsite',
    title: 'Unternehmenswebsite',
    shortTitle: 'Website',
    description: 'Ein klarer digitaler Auftritt, der Vertrauen schafft und den Weg zur Anfrage vereinfacht.',
    targetAudience: 'Unternehmen, die online professionell wirken und besser gefunden werden möchten.',
    result: 'Mehr Sichtbarkeit, klarere Kommunikation, mehr qualifizierte Anfragen.',
    icon: 'Globe',
  },
  {
    id: 'landingpage',
    title: 'Landingpage für Anfragen',
    shortTitle: 'Landingpage',
    description: 'Eine fokussierte Seite für Kampagnen und Angebote mit klarer Führung zum nächsten Schritt.',
    targetAudience: 'Teams, die ein konkretes Angebot effizient vermarkten möchten.',
    result: 'Höhere Abschlussquote und bessere Auswertung der Kampagnenwirkung.',
    icon: 'Target',
  },
  {
    id: 'webapp',
    title: 'Web-App & Kundenportal',
    shortTitle: 'Web-App',
    description: 'Digitale Prozesse für Kunden und Teams, die Arbeit vereinfachen und Abstimmung sparen.',
    targetAudience: 'Unternehmen, die interne Abläufe und Kundenkommunikation digital entlasten wollen.',
    result: 'Weniger manuelle Schritte, klarere Abläufe und bessere Servicequalität.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'wartung',
    title: 'Wartung & Weiterentwicklung',
    shortTitle: 'Wartung',
    description: 'Regelmäßige Pflege, Sicherheitsupdates und planbare Erweiterungen für Ihren Auftritt.',
    targetAudience: 'Unternehmen mit bestehenden Systemen, die verlässlich weiterlaufen sollen.',
    result: 'Stabiler Betrieb, weniger Risiken und planbare Weiterentwicklung.',
    icon: 'Shield',
  },
  {
    id: 'performance',
    title: 'Performance & Optimierung',
    shortTitle: 'Optimierung',
    description: 'Wir verbessern Tempo, Klarheit und Nutzerführung für bessere Ergebnisse im Alltag.',
    targetAudience: 'Unternehmen mit ausbaufähigem Webauftritt oder sinkender Conversion.',
    result: 'Schnellere Seiten, bessere Nutzererfahrung und mehr Anfragen.',
    icon: 'Gauge',
  },
  {
    id: 'automatisierung',
    title: 'Automatisierung & Tools',
    shortTitle: 'Automatisierung',
    description: 'Praktische digitale Helfer für wiederkehrende Aufgaben und klare Prozesse.',
    targetAudience: 'Teams, die Routinearbeit reduzieren und Fehlerquellen minimieren möchten.',
    result: 'Mehr Zeit für wichtige Aufgaben und spürbar weniger manuelle Arbeit.',
    icon: 'Cog',
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  outcome: string;
  useCase?: string;
  featured: boolean;
  links?: {
    live?: string;
    code?: string;
  };
};

export const projects: Project[] = [
  {
    id: 'burk-solutions-website',
    title: 'Burk-Solutions Website',
    description: 'Unser eigener Auftritt als Referenz für eine klare Struktur und schnelle Ladezeiten.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tags: ['Website', 'Positionierung'],
    outcome: 'Sehr schnelle Ladezeiten und klare Nutzerführung bis zur Anfrage.',
    useCase: 'Dienstleister',
    featured: true,
  },
  {
    id: 'dashboard-system',
    title: 'Internes Dashboard',
    description: 'Eine zentrale Arbeitsoberfläche für ein mittelständisches Team mit klaren Rollen und Prozessen.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    tags: ['Dashboard', 'Prozesse'],
    outcome: '20 Stunden Zeitgewinn pro Woche durch strukturierte Abläufe.',
    useCase: 'Mittelstand',
    featured: true,
  },
  {
    id: 'mobile-app-mvp',
    title: 'Mobile App (MVP)',
    description: 'Vom Konzept bis zur marktreifen App in engem Austausch mit dem Gründungsteam.',
    technologies: ['Flutter', 'Firebase'],
    tags: ['Mobile App', 'MVP'],
    outcome: 'Schneller Markteintritt und belastbare Grundlage für den nächsten Wachstumsschritt.',
    useCase: 'Startup',
    featured: true,
  },
  {
    id: 'component-library',
    title: 'Design System',
    description: 'Ein wiederverwendbares Komponenten-Set für konsistente Oberflächen und schnellere Umsetzung.',
    technologies: ['React', 'TypeScript', 'Storybook'],
    tags: ['Design System', 'Teamwork'],
    outcome: 'Deutlich schnellere Umsetzung neuer Funktionen im Kundenteam.',
    useCase: 'Software-Team',
    featured: false,
  },
  {
    id: 'performance-optimization',
    title: 'E-Commerce Optimierung',
    description: 'Strukturierte Optimierung eines Shops mit Fokus auf Tempo, Klarheit und Abschlussquote.',
    technologies: ['Next.js', 'Lighthouse'],
    tags: ['Performance', 'E-Commerce'],
    outcome: 'Weniger Ladezeit und spürbarer Anstieg der Verkäufe.',
    useCase: 'Handel',
    featured: false,
  },
  {
    id: 'automation-tooling',
    title: 'Automatisierung Pipeline',
    description: 'Automatisierte Abläufe für Build, Tests und Auslieferung in einem Entwicklungsteam.',
    technologies: ['GitHub Actions', 'Docker'],
    tags: ['Automatisierung', 'Effizienz'],
    outcome: 'Deutlich kürzere Auslieferungszeiten und weniger manuelle Fehler.',
    useCase: 'Produktteam',
    featured: false,
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
  { label: 'Projekte', href: '/projects', icon: 'FolderKanban' },
  { label: 'Kontakt', href: '/contact', icon: 'Mail' },
];

export const featureFlags = {
  blog: false,
  caseStudies: false,
  downloadableCV: false,
  analytics: false,
  i18n: false,
} as const;

export const siteMetadata = {
  title: 'Burk-Solutions | Websites & digitale Produkte',
  description:
    'Wir entwickeln Websites, Web-Apps und digitale Werkzeuge für Unternehmen. Klar in der Kommunikation, zuverlässig in der Umsetzung und langfristig betreut.',
  url: 'https://burk-solutions.de',
  locale: 'de_DE',
  keywords: ['Website erstellen', 'Webdesign', 'Digitale Lösungen', 'Unternehmenswebsite', 'Web-App', 'Deutschland'],
};
