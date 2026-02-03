import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Shield } from 'lucide-react';
import { conversion, orientationPackages, profile, services, servicesContent } from '@/content';
import { Button, Divider, GlassCard, GlowButton, SectionHeader, SectionReveal, ServiceCard } from '@/components/ui';

export const metadata: Metadata = {
  title: servicesContent.title,
  description:
    'Burk-Solutions entwickelt Websites, Anwendungen und laufende Betreuungspakete für Unternehmen, Gründer und Teams.',
};

const valueIcons = [MessageSquare, Clock, FileText, Shield] as const;

export default function ServicesPage() {
  return (
    <div className="section-stack">
      <SectionReveal className="space-y-5">
        <h1>{servicesContent.title}</h1>
        <p className="max-w-3xl text-body-lg text-text-secondary">{servicesContent.description}</p>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-3">
            <GlowButton asChild>
              <Link href="/contact">
                {conversion.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlowButton>
            <Button asChild variant="secondary">
              <Link href="/projects">Referenzen ansehen</Link>
            </Button>
          </div>
          <p className="text-sm text-text-muted">{conversion.trustLine}</p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} variant="compact" />
        ))}
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.08} className="space-y-6">
        <SectionHeader title={servicesContent.detailTitle} description={servicesContent.detailDescription} />

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.1} className="space-y-6">
        <SectionHeader title={servicesContent.valueTitle} description={servicesContent.valueDescription} />

        <GlassCard variant="elevated" className="p-6 sm:p-8">
          <ul className="grid gap-5 sm:grid-cols-2">
            {servicesContent.valueProps.map((prop, index) => {
              const Icon = valueIcons[index];
              return (
                <li key={prop} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted shadow-glow-sm">
                    <Icon className="h-4 w-4 text-accent-solid" />
                  </div>
                  <span className="pt-1 text-text-secondary">{prop}</span>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.12} className="space-y-6">
        <SectionHeader title={servicesContent.packagesTitle} description={servicesContent.packagesDescription} />
        <div className="grid gap-4 lg:grid-cols-3">
          {orientationPackages.map((pkg) => (
            <GlassCard key={pkg.title} variant="subtle" className="flex h-full flex-col gap-4 p-5">
              <div>
                <p className="text-caption uppercase tracking-[0.12em] text-text-muted">{pkg.subtitle}</p>
                <h3 className="mt-1 text-xl font-semibold text-text-primary">{pkg.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">Passend für:</span> {pkg.fitFor}
                </p>
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">Ergebnis:</span> {pkg.outcome}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.14} className="space-y-4">
        <GlassCard className="p-5 sm:p-6">
          <h3 className="mb-4 text-caption uppercase tracking-[0.12em] text-text-muted">Unser Versprechen</h3>
          <ul className="grid gap-3 sm:grid-cols-3">
            {profile.contactPromises.map((promise) => (
              <li key={promise} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="text-sm text-text-primary">{promise}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.16} className="space-y-4">
        <Divider />
        <GlassCard variant="elevated" className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-text-primary">{servicesContent.ctaTitle}</h3>
            <p className="text-text-secondary">{servicesContent.ctaDescription}</p>
          </div>
          <GlowButton asChild>
            <Link href="/contact">
              {conversion.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlowButton>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
