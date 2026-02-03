/**
 * Central content source for Burk-Solutions
 * Edit this file to update site content without touching UI components.
 * 
 * IMPORTANT: All copy uses "Wir"-Form (collective voice).
 * Never use "Ich" - always "Wir", "uns", "unser", "Burk-Solutions".
 */

// =============================================================================
// PROFILE & IDENTITY
// =============================================================================

export const profile = {
  name: 'Burk-Solutions',
  company: 'Burk-Solutions',
  role: 'Digitale Lösungen für Unternehmen',
  email: 'kontakt@burk-solutions.de',
  location: 'Deutschland',

  // Primary value proposition - shown in hero (plain German, non-technical)
  headline: 'Wir bauen Websites und digitale Produkte, die Ergebnisse liefern.',
  subheadline: 'Mehr Anfragen, klarer Auftritt, schneller online – wir entwickeln digitale Lösungen für Unternehmen, Gründer und wachsende Teams.',

  // Benefits for hero section (plain German)
  benefits: [
    'Professioneller Auftritt, der Vertrauen schafft',
    'Mehr Anfragen durch klare Nutzerführung',
    'Schnelle Ladezeiten und moderne Technik',
    'Langfristige Betreuung und Weiterentwicklung',
  ],

  // Short pitch for home page
  pitch:
    'Wir denken in Lösungen, nicht in Technik-Jargon. Bei uns bekommen Sie ein digitales Produkt, das funktioniert, gut aussieht und sich langfristig weiterentwickeln lässt – ohne versteckte Kosten oder komplizierte Übergaben.',

  // Longer bio for About page
  bio: `Burk-Solutions ist Ihr Partner für digitale Produkte, die wirklich funktionieren. Wir entwickeln Websites, Web-Anwendungen und digitale Tools für Unternehmen, die online professionell auftreten und mehr Kunden erreichen wollen.

Unser Ansatz: Zuerst verstehen, dann umsetzen. Wir nehmen uns Zeit, Ihre Ziele und Zielgruppen zu verstehen – und liefern dann eine Lösung, die genau passt. Kein Technik-Geplänkel, keine unnötigen Features, sondern das, was Sie wirklich brauchen.

Was uns ausmacht: Wir arbeiten transparent, kommunizieren klar und liefern pünktlich. Nach dem Launch lassen wir Sie nicht allein – wir betreuen, optimieren und entwickeln weiter.`,

  // Workflow description - "So arbeiten wir"
  workflow: [
    {
      step: 1,
      title: 'Ziele & Inhalte klären',
      description:
        'Was wollen Sie erreichen? Wer sind Ihre Kunden? Wir klären gemeinsam, was Ihre Website oder App leisten soll.',
    },
    {
      step: 2,
      title: 'Struktur & Design festlegen',
      description:
        'Wir entwickeln eine klare Struktur und ein Design, das zu Ihrem Unternehmen passt – modern, übersichtlich und auf Ihre Zielgruppe zugeschnitten.',
    },
    {
      step: 3,
      title: 'Umsetzung & Tests',
      description:
        'Wir setzen Ihr Projekt technisch sauber um, testen gründlich und stimmen alles mit Ihnen ab.',
    },
    {
      step: 4,
      title: 'Launch & Betreuung',
      description:
        'Nach dem Go-Live sind wir weiter für Sie da: Wartung, Updates, Optimierungen – alles aus einer Hand.',
    },
  ],

  // Competencies section - outcomes, not jargon
  competencies: {
    title: 'Was wir können',
    description: 'Wir setzen Projekte um, die online sichtbar sind, technisch einwandfrei laufen und langfristig betreut werden können.',
    items: [
      {
        title: 'Websites & Landingpages',
        description: 'Professionelle Unternehmensseiten, die Vertrauen schaffen und Anfragen generieren.',
      },
      {
        title: 'Web-Anwendungen',
        description: 'Digitale Tools, Kundenportale und interne Systeme – genau auf Ihre Prozesse zugeschnitten.',
      },
      {
        title: 'Mobile Apps',
        description: 'Apps für iOS und Android aus einer Entwicklung – effizient und zukunftssicher.',
      },
      {
        title: 'Wartung & Weiterentwicklung',
        description: 'Langfristige Betreuung, Updates und kontinuierliche Verbesserungen.',
      },
    ],
    techNote: 'Technik: TypeScript, Flutter, Python – je nach Projektanforderung.',
  },

  // Contact page promises
  contactPromises: [
    'Antwort innerhalb von 24–48 Stunden',
    'Unverbindliches Erstgespräch kostenlos',
    'Transparente Preise nach Projektumfang',
  ],

  // FAQ for contact page
  faq: [
    {
      question: 'Wie lange dauert ein typisches Projekt?',
      answer: 'Eine einfache Website ist in 2–4 Wochen fertig. Komplexere Web-Anwendungen dauern 6–12 Wochen. Im Erstgespräch geben wir Ihnen eine realistische Einschätzung.',
    },
    {
      question: 'Was brauchen Sie von uns zu Beginn?',
      answer: 'Am besten: Eine kurze Beschreibung, was Sie erreichen wollen, und Beispiele von Websites, die Ihnen gefallen. Texte und Bilder können auch später kommen.',
    },
    {
      question: 'Was kostet eine Website?',
      answer: 'Wir arbeiten transparent nach Projektumfang. Eine professionelle Unternehmensseite beginnt bei ca. 3.000 €. Im Erstgespräch erstellen wir ein unverbindliches Angebot.',
    },
    {
      question: 'Können Sie auch bestehende Websites übernehmen?',
      answer: 'Ja, wir übernehmen gerne Wartung und Weiterentwicklung bestehender Projekte – auch wenn sie nicht von uns gebaut wurden.',
    },
  ],
} as const;

// =============================================================================
// SERVICES (marketing-focused, plain German)
// =============================================================================

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
    description:
      'Eine professionelle Website, die Ihr Unternehmen optimal präsentiert und Vertrauen bei potenziellen Kunden schafft.',
    targetAudience: 'Unternehmen, die eine moderne, professionelle Online-Präsenz benötigen.',
    result: 'Mehr Sichtbarkeit, mehr Vertrauen, mehr Anfragen.',
    icon: 'Globe',
  },
  {
    id: 'landingpage',
    title: 'Landingpage für Anfragen',
    shortTitle: 'Landingpage',
    description:
      'Eine fokussierte Seite für Kampagnen, Produktlaunches oder Dienstleistungen – optimiert für Conversions.',
    targetAudience: 'Unternehmen, die gezielt Leads generieren oder ein Angebot bewerben wollen.',
    result: 'Höhere Conversion-Rate, messbare Ergebnisse.',
    icon: 'Target',
  },
  {
    id: 'webapp',
    title: 'Web-App & Kundenportal',
    shortTitle: 'Web-App',
    description:
      'Digitale Anwendungen, über die Ihre Kunden Bestellungen aufgeben, Termine buchen oder Dokumente einsehen können.',
    targetAudience: 'Unternehmen, die Kundenprozesse digitalisieren und automatisieren wollen.',
    result: 'Weniger manuelle Arbeit, besserer Service, zufriedenere Kunden.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'wartung',
    title: 'Wartung & Weiterentwicklung',
    shortTitle: 'Wartung',
    description:
      'Laufende Betreuung Ihrer Website oder App: Updates, Sicherheit, kleine Anpassungen und Erweiterungen.',
    targetAudience: 'Unternehmen mit bestehenden digitalen Produkten, die gepflegt werden müssen.',
    result: 'Immer aktuell, sicher und performant – ohne eigenen Aufwand.',
    icon: 'Shield',
  },
  {
    id: 'performance',
    title: 'Performance & Optimierung',
    shortTitle: 'Optimierung',
    description:
      'Wir machen Ihre Website schneller, besser auffindbar und effektiver – für mehr Anfragen und bessere Rankings.',
    targetAudience: 'Unternehmen mit langsamen oder veralteten Websites.',
    result: 'Schnellere Ladezeiten, bessere Google-Platzierung, mehr Conversions.',
    icon: 'Gauge',
  },
  {
    id: 'automatisierung',
    title: 'Automatisierung & Tools',
    shortTitle: 'Automatisierung',
    description:
      'Kleine digitale Helfer, die wiederkehrende Aufgaben automatisieren: Formulare, Reports, Benachrichtigungen.',
    targetAudience: 'Teams, die Zeit bei Routineaufgaben sparen wollen.',
    result: 'Weniger manuelle Arbeit, weniger Fehler, mehr Zeit für Wichtiges.',
    icon: 'Cog',
  },
];

// =============================================================================
// PROJECTS (outcome-focused)
// =============================================================================

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
    description:
      'Unsere eigene Website: Modern, schnell und als Referenz für professionelle Web-Entwicklung konzipiert.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tags: ['Website', 'Portfolio'],
    outcome: 'Perfekter Lighthouse-Score, extrem schnelle Ladezeiten.',
    useCase: 'Agentur / Dienstleister',
    featured: true,
  },
  {
    id: 'dashboard-system',
    title: 'Internes Dashboard',
    description:
      'Ein maßgeschneidertes Dashboard für ein mittelständisches Unternehmen mit Echtzeit-Daten und Benutzerrollen.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    tags: ['Dashboard', 'Web-App'],
    outcome: 'Spart dem Team 20 Stunden pro Woche durch automatisierte Prozesse.',
    useCase: 'Mittelstand / Industrie',
    featured: true,
  },
  {
    id: 'mobile-app-mvp',
    title: 'Mobile App (MVP)',
    description:
      'Eine Cross-Platform-App für ein Startup im Gesundheitsbereich – von der Idee zum App-Store in 8 Wochen.',
    technologies: ['Flutter', 'Firebase'],
    tags: ['Mobile App', 'MVP'],
    outcome: 'Erfolgreiche Finanzierungsrunde nach der MVP-Präsentation.',
    useCase: 'Startup / Gesundheit',
    featured: true,
  },
  {
    id: 'component-library',
    title: 'Design System',
    description:
      'Eine wiederverwendbare Komponentenbibliothek für schnellere Entwicklung und konsistentes Design.',
    technologies: ['React', 'TypeScript', 'Storybook'],
    tags: ['Design System', 'Komponenten'],
    outcome: '40% schnellere Feature-Entwicklung für das Kundenteam.',
    useCase: 'Enterprise / Software',
    featured: false,
  },
  {
    id: 'performance-optimization',
    title: 'E-Commerce Optimierung',
    description:
      'Performance-Audit und Optimierung einer E-Commerce-Plattform mit messbaren Ergebnissen.',
    technologies: ['Next.js', 'Lighthouse'],
    tags: ['Performance', 'E-Commerce'],
    outcome: 'Ladezeit um 70% reduziert, +15% mehr Verkäufe.',
    useCase: 'E-Commerce / Handel',
    featured: false,
  },
  {
    id: 'automation-tooling',
    title: 'Automatisierung Pipeline',
    description:
      'Automatisierte Prozesse für ein Entwicklungsteam: Build, Test und Deployment auf Knopfdruck.',
    technologies: ['GitHub Actions', 'Docker'],
    tags: ['Automatisierung', 'DevOps'],
    outcome: 'Deployment-Zeit von 45 auf 5 Minuten reduziert.',
    useCase: 'Software-Team',
    featured: false,
  },
];

// =============================================================================
// NAVIGATION
// =============================================================================

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

// =============================================================================
// FEATURE FLAGS
// =============================================================================

export const featureFlags = {
  blog: false,
  caseStudies: false,
  downloadableCV: false,
  analytics: false,
  i18n: false,
} as const;

// =============================================================================
// METADATA
// =============================================================================

export const siteMetadata = {
  title: 'Burk-Solutions | Websites & digitale Produkte',
  description:
    'Wir entwickeln Websites, Web-Apps und digitale Tools für Unternehmen. Professionell, schnell und mit langfristiger Betreuung. Burk-Solutions – Digitale Lösungen, die Ergebnisse liefern.',
  url: 'https://burk-solutions.de',
  locale: 'de_DE',
  keywords: [
    'Website erstellen',
    'Webdesign',
    'Web-Entwicklung',
    'Unternehmenswebsite',
    'Landingpage',
    'Web-App',
    'Deutschland',
  ],
};
