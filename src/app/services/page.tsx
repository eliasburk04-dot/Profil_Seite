import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Shield } from 'lucide-react';
import { profile, services } from '@/content';
import { Button, Divider, GlassCard, SectionHeader, SectionReveal, ServiceCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Websites, Web-Apps, Wartung und Optimierung – professionelle Entwicklungsdienstleistungen für Unternehmen, Gründer und wachsende Teams.',
};

const valueProps = [
  { icon: MessageSquare, text: 'Klare Kommunikation ohne Tech-Jargon' },
  { icon: Clock, text: 'Realistische Zeitschätzungen' },
  { icon: FileText, text: 'Saubere Übergabe und Dokumentation' },
  { icon: Shield, text: 'Langfristige Wartbarkeit im Fokus' },
];

export default function ServicesPage() {
  return (
    <div className="space-y-11 sm:space-y-12">
      <SectionReveal className="space-y-4">
        <h1>Unsere Leistungen</h1>
        <p className="max-w-3xl text-body-lg text-text-secondary">
          Ob Sie eine neue Website benötigen, eine Web-Anwendung planen oder Unterstützung bei Ihrem bestehenden digitalen
          Produkt brauchen – wir bieten maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button asChild variant="primary">
            <Link href="/contact">
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/projects">Referenzen ansehen</Link>
          </Button>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} variant="compact" />
        ))}
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.08} className="space-y-6">
        <SectionHeader title="Im Detail" description="Was wir anbieten, für wen und welche Ergebnisse Sie erwarten können." />

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.1} className="space-y-6">
        <SectionHeader
          title="Warum mit uns arbeiten?"
          description="Neben technischer Expertise zählt vor allem eins: zuverlässige Zusammenarbeit."
        />

        <GlassCard variant="elevated" className="p-6 sm:p-8">
          <ul className="grid gap-5 sm:grid-cols-2">
            {valueProps.map((prop) => (
              <li key={prop.text} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted shadow-glow-sm">
                  <prop.icon className="h-4 w-4 text-accent-solid" />
                </div>
                <span className="pt-1 text-text-secondary">{prop.text}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.12} className="space-y-4">
        <GlassCard className="p-5 sm:p-6">
          <h3 className="mb-4 text-caption uppercase tracking-[0.12em] text-text-muted">Unser Versprechen</h3>
          <ul className="grid gap-3 sm:grid-cols-3">
            {profile.contactPromises.map((promise, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="text-sm text-text-primary">{promise}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.14} className="space-y-4">
        <Divider />
        <GlassCard variant="elevated" className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-text-primary">Bereit für Ihr Projekt?</h3>
            <p className="text-text-secondary">Lassen Sie uns über Ihre Anforderungen sprechen – unverbindlich und kostenlos.</p>
          </div>
          <Button asChild variant="primary">
            <Link href="/contact">
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
