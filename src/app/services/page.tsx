import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { conversion, orientationPackages, profile, services, servicesContent } from '@/content';
import {
  Button,
  CtaBand,
  GlassCard,
  PageHero,
  SectionHeader,
  SectionReveal,
  ServiceCard,
  TagPill,
} from '@/components/ui';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: servicesContent.title,
  description:
    'Burk-Solutions entwickelt Websites, Automatisierungen und Integrationen für Unternehmen mit klaren Zielen und sauberer Umsetzung.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="section-stack">
      <SectionReveal>
        <PageHero
          badge={servicesContent.title}
          title={servicesContent.description}
          description={servicesContent.detailDescription}
          supportingText={profile.positioningLine}
          actions={
            <>
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">Über uns</Link>
              </Button>
            </>
          }
          stats={[
            { value: `${services.length}`, label: 'klare Leistungsbereiche' },
            { value: `${orientationPackages.length}`, label: 'Orientierungspakete' },
            { value: 'Planbar', label: 'klare Entscheidungen statt Projektrauschen' },
          ]}
        />
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-6">
        <SectionHeader
          title={servicesContent.detailTitle}
          description={servicesContent.description}
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08} className="space-y-6">
        <SectionHeader
          title={servicesContent.valueTitle}
          description={servicesContent.valueDescription}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {servicesContent.valueProps.map((item) => (
            <GlassCard key={item} variant="subtle" className="p-5 sm:p-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-2xs uppercase tracking-[0.18em] text-white/52">
                  Burk-Solutions
                </span>
                <p className="text-body-sm text-text-secondary">{item}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.11} className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title={servicesContent.packagesTitle}
            description={servicesContent.packagesDescription}
          />
          <TagPill variant="accent">Zur Orientierung</TagPill>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {orientationPackages.map((pkg, index) => (
            <GlassCard
              key={pkg.title}
              variant={index === 1 ? 'elevated' : 'subtle'}
              className="p-6 sm:p-7"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-2xs uppercase tracking-[0.18em] text-white/48">
                    {pkg.subtitle}
                  </p>
                  <h3 className="text-[1.6rem] leading-[1.02] tracking-[-0.04em]">
                    {pkg.title}
                  </h3>
                </div>

                <div className="rounded-[1.4rem] border border-white/8 bg-black/18 p-4">
                  <p className="text-2xs uppercase tracking-[0.18em] text-white/48">Passend für</p>
                  <p className="mt-2 text-sm text-text-secondary">{pkg.fitFor}</p>
                </div>

                <div className="rounded-[1.4rem] border border-tone-green/20 bg-tone-green/10 p-4">
                  <p className="text-2xs uppercase tracking-[0.18em] text-tone-green/90">Outcome</p>
                  <p className="mt-2 text-sm font-medium text-tone-green">{pkg.outcome}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.14}>
        <CtaBand
          eyebrow="Nächster Schritt"
          title={servicesContent.ctaTitle}
          description={servicesContent.ctaDescription}
          actions={
            <>
              <Button asChild variant="primary" size="lg" data-testid="services-primary-cta">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">Über uns</Link>
              </Button>
            </>
          }
        />
      </SectionReveal>
    </div>
  );
}
