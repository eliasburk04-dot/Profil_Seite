import { siteMetadata, profile, services } from '@/content';

function OrganizationJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteMetadata.url}/#organization`,
        name: profile.company,
        url: siteMetadata.url,
        logo: `${siteMetadata.url}/logo.png`,
        image: `${siteMetadata.url}/logo.png`,
        description: siteMetadata.description,
        email: profile.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Friedrich-Naumann Straße 11',
            addressLocality: 'Ludwigsburg',
            postalCode: '71636',
            addressRegion: 'Baden-Württemberg',
            addressCountry: 'DE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.8975,
            longitude: 9.1929,
        },
        areaServed: [
            {
                '@type': 'Country',
                name: 'Deutschland',
            },
            {
                '@type': 'Country',
                name: 'Österreich',
            },
            {
                '@type': 'Country',
                name: 'Schweiz',
            },
        ],
        serviceType: services.map((s) => s.title),
        knowsAbout: [
            'Webentwicklung',
            'Web App Entwicklung',
            'Mobile App Entwicklung',
            'React',
            'Next.js',
            'Flutter',
            'TypeScript',
            'Node.js',
            'Responsive Webdesign',
            'SaaS Entwicklung',
            'UI/UX Design',
            'SEO',
        ],
        priceRange: '€€',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [],
        founder: {
            '@type': 'Person',
            name: 'Elias Burk',
            jobTitle: 'Gründer & Entwickler',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

function WebSiteJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteMetadata.url}/#website`,
        url: siteMetadata.url,
        name: profile.company,
        description: siteMetadata.description,
        publisher: {
            '@id': `${siteMetadata.url}/#organization`,
        },
        inLanguage: 'de-DE',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteMetadata.url}/services`,
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

function ServiceJsonLd() {
    const data = services.map((service) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@id': `${siteMetadata.url}/#organization`,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Deutschland',
        },
        serviceType: service.title,
    }));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export { OrganizationJsonLd, WebSiteJsonLd, ServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd };
