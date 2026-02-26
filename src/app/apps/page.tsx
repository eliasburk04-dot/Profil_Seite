import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Apps – Datenschutz & Impressum',
    description: 'Datenschutzerklärungen und Impressum für unsere mobilen Apps.',
    robots: {
        index: false,
        follow: false,
    },
};

const apps = [
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
];

export default function AppsPage() {
    return (
        <div className="section-stack">
            <section className="space-y-4">
                <h1>Apps</h1>
                <p className="text-body text-text-secondary">
                    Hier finden Sie die Datenschutzerklärungen und Impressums unserer mobilen Apps.
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
                {apps.map((app) => (
                    <div
                        key={app.name}
                        className="glass-card space-y-4 rounded-2xl border border-border p-6"
                    >
                        <div className="space-y-1">
                            <h2 className="text-lg font-semibold text-text-primary">{app.name}</h2>
                            <p className="text-sm text-text-muted">{app.description}</p>
                        </div>
                        <ul className="space-y-2">
                            {app.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-accent-solid transition-colors hover:text-accent-hover"
                                    >
                                        {link.label} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}
