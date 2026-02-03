import type { Metadata } from 'next';
import { Building2, CheckCircle, Wrench } from 'lucide-react';
import { profile } from '@/content';
import { Divider, GlassCard, SectionHeader, SectionReveal } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Erfahren Sie mehr über Burk-Solutions: Unsere Arbeitsweise, Kompetenzen und was uns antreibt.',
};

export default function AboutPage() {
  return (
    <div className="space-y-11 sm:space-y-12">
      <SectionReveal className="space-y-5">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-2.5">
            <div className="section-badge">
              <Building2 className="h-3.5 w-3.5 text-accent-solid" />
              <span>{profile.company}</span>
            </div>
            <h1>Über uns</h1>
            <p className="text-body text-text-secondary">{profile.role}</p>
          </div>

          <div className="brand-mark hidden sm:flex" aria-hidden="true">
            <span className="text-xl font-semibold text-accent-solid">B</span>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-4">
        {profile.bio.split('\n\n').map((paragraph, index) => (
          <p key={index} className="max-w-3xl text-body text-text-secondary">
            {paragraph}
          </p>
        ))}
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.1} className="space-y-6">
        <SectionHeader
          title="So arbeiten wir"
          description="Unser Prozess ist strukturiert und transparent – von der ersten Idee bis zum Launch und darüber hinaus."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.workflow.map((step) => (
            <GlassCard key={step.step} hover className="flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted text-sm font-semibold text-accent-solid">
                {step.step}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.12} className="space-y-6">
        <SectionHeader title={profile.competencies.title} description={profile.competencies.description} />

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.competencies.items.map((item, idx) => (
            <GlassCard key={idx} hover className="flex gap-4 p-5">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard variant="subtle" className="flex items-start gap-3 p-4">
          <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
          <p className="text-sm text-text-muted">{profile.competencies.techNote}</p>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.14} className="space-y-4">
        <Divider />
        <GlassCard variant="elevated" glow className="p-6 sm:p-8">
          <blockquote className="space-y-4">
            <p className="text-lg font-medium italic leading-relaxed text-text-primary">
              &ldquo;Wir liefern digitale Produkte, die funktionieren, gut aussehen und sich langfristig weiterentwickeln lassen.&rdquo;
            </p>
            <footer className="text-sm text-text-muted">— Unser Anspruch bei jedem Projekt</footer>
          </blockquote>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
