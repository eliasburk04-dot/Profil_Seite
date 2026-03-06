import Link from 'next/link';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { aboutContent, conversion, homeContent, profile, servicesContent } from '@/content';
import {
  Button,
  CtaBand,
  GlassCard,
  PageHero,
  ProcessTimeline,
  SectionHeader,
  SectionReveal,
} from '@/components/ui';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Über Burk-Solutions – Ihre Agentur für Websites, Web Apps & Mobile Apps',
  description:
    'Lernen Sie Burk-Solutions kennen: Ihr Partner für professionelle Websites, Web Apps und mobile Apps. Spezialisiert auf React, Next.js und Flutter – aus Ludwigsburg, Deutschland.',
  path: '/about',
});

export default function AboutPage() {
  const bioParagraphs = profile.bio.split('\n\n');

  return (
    <div className="section-stack">
      <SectionReveal>
        <PageHero
          badge={aboutContent.title}
          title={aboutContent.subtitle}
          description={bioParagraphs[0]}
          supportingText={aboutContent.quote}
          actions={
            <>
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">{conversion.secondaryCtaLabel}</Link>
              </Button>
            </>
          }
          stats={[
            { value: `${profile.workflow.length} Schritte`, label: 'klar definierter Ablauf' },
            { value: 'Verlässlich', label: 'transparente Kommunikation im Projekt' },
            { value: 'Langfristig', label: 'Weiterentwicklung nach dem Launch' },
          ]}
        />
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-6">
        <SectionHeader title={aboutContent.title} description={profile.positioningLine} />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="grid gap-4">
            {bioParagraphs.map((paragraph) => (
              <GlassCard key={paragraph} variant="subtle" className="p-5 sm:p-6">
                <p className="text-body-sm text-text-secondary">{paragraph}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-6 sm:p-7">
            <div className="space-y-5">
              <p className="text-eyebrow uppercase text-white/48">{homeContent.whySectionTitle}</p>
              <ul className="space-y-4">
                {profile.whyBurk.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tone-green" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08} className="space-y-6">
        <SectionHeader
          title={profile.competencies.title}
          description={profile.competencies.description}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {profile.competencies.items.map((item) => (
            <GlassCard key={item.title} variant="subtle" className="p-5 sm:p-6">
              <div className="space-y-3">
                <h3 className="text-[1.35rem] leading-[1.08] tracking-[-0.03em]">{item.title}</h3>
                <p className="text-body-sm text-text-secondary">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.11} className="space-y-6">
        <SectionHeader title={profile.workflowTitle} description={profile.workflowDescription} />
        <ProcessTimeline steps={profile.workflow} />
      </SectionReveal>

      <SectionReveal delay={0.14}>
        <CtaBand
          eyebrow="Zusammenarbeit"
          title={servicesContent.ctaTitle}
          description={profile.pitch}
          actions={
            <>
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Leistungen ansehen</Link>
              </Button>
            </>
          }
        />
      </SectionReveal>
    </div>
  );
}
