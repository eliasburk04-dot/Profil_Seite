export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export const CONTACT_EMAIL = 'eliasburk04@gmail.com';

const ADDRESS = ['Elias Burk', 'Friedrich-Naumann Straße 11', '71636 Ludwigsburg, Deutschland'];

export const privacy: LegalDocument = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  effectiveDate: 'Stand: 24. Oktober 2026',
  sections: [
    {
      title: '1. Verantwortlicher',
      paragraphs: [
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist Elias Burk, Friedrich-Naumann Straße 11, 71636 Ludwigsburg, Deutschland.',
        `Bei Fragen zum Datenschutz erreichst du uns per E-Mail unter ${CONTACT_EMAIL}.`,
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
      title: '3. Warteliste',
      paragraphs: [
        'Wenn du dich auf die Warteliste einträgst, speichern wir deine E-Mail-Adresse, den Zeitpunkt der Eintragung und gegebenenfalls, über welchen Link du gekommen bist (zum Beispiel Instagram).',
        'Wir nutzen diese Daten ausschließlich, um dich über den Start der App LeanBulk zu informieren. Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.',
        `Du kannst deine Einwilligung jederzeit widerrufen, zum Beispiel per E-Mail an ${CONTACT_EMAIL}. Deine Daten löschen wir dann umgehend, spätestens aber, wenn die Warteliste nach dem Start nicht mehr benötigt wird.`,
      ],
    },
    {
      title: '4. Kontaktaufnahme',
      paragraphs: [
        'Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir mitgeteilten Angaben, um deine Anfrage zu beantworten, und nur so lange, wie dies dafür erforderlich ist.',
      ],
    },
    {
      title: '5. Cookies, Analyse und Tracking',
      paragraphs: [
        'Auf dieser Website werden keine Analyse- oder Tracking-Dienste und keine Marketing-Cookies eingesetzt.',
        'Nach einer Eintragung merkt sich dein Browser lokal, dass du bereits auf der Warteliste stehst. Diese Information verlässt dein Gerät nicht.',
      ],
    },
    {
      title: '6. Deine Rechte',
      paragraphs: [
        'Du hast nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch gegen bestimmte Verarbeitungen.',
        'Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.',
      ],
    },
    {
      title: '7. Änderungen dieser Erklärung',
      paragraphs: [
        'Wir passen diese Datenschutzerklärung an, wenn sich Inhalte, technische Abläufe oder gesetzliche Anforderungen ändern.',
      ],
    },
  ],
};

export const imprint: LegalDocument = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 DDG.',
  effectiveDate: 'Stand: 24. Oktober 2026',
  sections: [
    { title: '1. Anbieter', paragraphs: ADDRESS },
    { title: '2. Kontakt', paragraphs: [`E-Mail: ${CONTACT_EMAIL}`, 'Telefon: nicht angegeben'] },
    { title: '3. Inhaltlich verantwortlich', paragraphs: ADDRESS },
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
  ],
};
