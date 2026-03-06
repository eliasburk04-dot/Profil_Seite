import Link from 'next/link';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { appsContent } from '@/content';
import { GlassCard, PageHero, SectionReveal, TagPill } from '@/components/ui';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Apps – Datenschutz & Impressum',
  description: 'Datenschutzerklärungen und Impressum für unsere mobilen Apps.',
  path: '/apps',
  index: false,
});

export default function AppsPage() {
  return (
    <div className="section-stack">
      <SectionReveal>
        <PageHero
          badge={appsContent.title}
          badgeIcon={<ShieldCheck className="h-3.5 w-3.5 text-accent-solid" />}
          title={appsContent.description}
          description={appsContent.introDescription}
          stats={[
            { value: `${appsContent.apps.length}`, label: 'Apps im Überblick' },
            { value: 'Datenschutz', label: 'schnell auffindbar verlinkt' },
            { value: 'Impressum', label: 'klar je App getrennt' },
          ]}
        />
      </SectionReveal>

      <SectionReveal delay={0.05} className="grid gap-4 lg:grid-cols-2">
        {appsContent.apps.map((app) => (
          <GlassCard
            key={app.name}
            variant="elevated"
            className="flex h-full flex-col gap-5 p-6 sm:p-7"
          >
            <div className="space-y-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted">
                <FileText className="h-5 w-5 text-accent-solid" />
              </div>
              <h2>{app.name}</h2>
              <p className="text-body text-text-secondary">{app.description}</p>
            </div>

            <div className="mt-auto grid gap-3">
              {app.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-between rounded-2xl border border-border-subtle bg-bg-secondary/45 px-4 py-3 text-sm font-medium text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-accent-solid" />
                </Link>
              ))}
            </div>
          </GlassCard>
        ))}
      </SectionReveal>
    </div>
  );
}
