import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, CheckCircle } from 'lucide-react';
import { aboutContent, conversion, profile } from '@/content';
import { Button, Divider, GlassCard, SectionHeader, SectionReveal } from '@/components/ui';

export const metadata: Metadata = {
  title: aboutContent.title,
  description: 'Erfahren Sie, wie Burk-Solutions Projekte strukturiert umsetzt und langfristig betreut.',
};

export default function AboutPage() {
  return (
    <div className="section-stack">
      <SectionReveal className="space-y-5">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-3">
            <div className="section-badge">
              <Building2 className="h-3.5 w-3.5 text-accent-solid" />
              <span>{profile.company}</span>
            </div>
            <h1>{aboutContent.title}</h1>
            <p className="max-w-3xl text-body text-text-secondary">{aboutContent.subtitle}</p>
          </div>

          <div className="brand-mark hidden sm:flex" aria-hidden="true">
            <Image
              src="/logo.png"
              alt="Burk-Solutions Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <Link href="/contact">
              {conversion.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/services">{conversion.secondaryCtaLabel}</Link>
          </Button>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-4">
        {profile.bio.split('\n\n').map((paragraph) => (
          <p key={paragraph} className="max-w-3xl text-body text-text-secondary">
            {paragraph}
          </p>
        ))}
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.09} className="space-y-6">
        <SectionHeader title={profile.workflowTitle} description={profile.workflowDescription} />

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
          {profile.competencies.items.map((item) => (
            <GlassCard key={item.title} hover className="flex gap-4 p-5">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.15} className="space-y-4">
        <Divider />
        <GlassCard variant="elevated" glow className="p-6 sm:p-8">
          <blockquote className="space-y-4">
            <p className="text-lg font-medium italic leading-relaxed text-text-primary">&ldquo;{aboutContent.quote}&rdquo;</p>
            <footer className="text-sm text-text-muted">— {aboutContent.quoteAuthor}</footer>
          </blockquote>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
