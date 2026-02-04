import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Compass, Search, ShieldCheck, Sparkles } from 'lucide-react';
import {
  conversion,
  homeContent,
  profile,
  projects,
  services,
} from '@/content';
import {
  Divider,
  FAQAccordion,
  GlassCard,
  GlowButton,
  ProjectCard,
  SectionHeader,
  SectionReveal,
  ServiceCard,
  Button,
} from '@/components/ui';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="section-stack">
      <SectionReveal className="relative space-y-8">
        <div className="relative z-10 flex items-start justify-between gap-5">
          <div className="space-y-5 sm:space-y-6">
            <div className="section-badge">
              <Search className="h-3.5 w-3.5 text-accent-solid" />
              <span>{homeContent.heroBadge}</span>
            </div>

            <h1 className="hero-headline max-w-3xl text-display-sm sm:text-display">{profile.headline}</h1>
            <p className="max-w-2xl text-body-lg text-text-secondary">{profile.subheadline}</p>
            <p className="max-w-2xl text-body text-text-secondary">{profile.positioningLine}</p>
          </div>

          <div className="brand-mark hidden sm:flex" aria-hidden="true">
            <Image
              src="/logo.png"
              alt="Burk-Solutions Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap gap-3">
            <GlowButton asChild>
              <Link href="/contact">
                {conversion.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlowButton>
            <Button asChild variant="secondary">
              <Link href="/services">{conversion.secondaryCtaLabel}</Link>
            </Button>
          </div>
          <p className="text-sm text-text-muted">{conversion.trustLine}</p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-4">
        <SectionHeader title={homeContent.whySectionTitle} description="Was Kunden an unserer Zusammenarbeit besonders schätzen." />
        <div className="grid gap-4 md:grid-cols-3">
          {profile.whyBurk.map((item, index) => {
            const Icon = index === 0 ? ShieldCheck : index === 1 ? Compass : Sparkles;
            return (
              <GlassCard key={item} variant="subtle" className="why-feature-pill flex h-full gap-3 p-5">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border-accent bg-accent-muted">
                  <Icon className="h-4 w-4 text-accent-solid" />
                </div>
                <p className="text-sm text-text-secondary">{item}</p>
              </GlassCard>
            );
          })}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.08} className="space-y-4">
        <GlassCard variant="elevated" className="p-6 sm:p-7">
          <h2 className="mb-4 text-caption uppercase tracking-[0.12em] text-text-muted">Was Sie bekommen</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profile.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm leading-relaxed text-text-primary">{benefit}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.11} className="space-y-5">
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

      <Divider />

      <SectionReveal delay={0.13} className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-heading-sm">{homeContent.servicesPreviewTitle}</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/services">
              {conversion.secondaryCtaLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.15} className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-heading-sm">{homeContent.projectsPreviewTitle}</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              Alle ansehen
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.17} className="space-y-5">
        <SectionHeader title={homeContent.miniFaqTitle} description={homeContent.miniFaqDescription} />
        <FAQAccordion items={profile.miniFaq} />
      </SectionReveal>

      <SectionReveal delay={0.19}>
        <GlassCard variant="subtle" className="p-5 sm:p-6">
          <h2 className="text-caption uppercase tracking-[0.12em] text-text-muted">{profile.techBackground.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{profile.techBackground.description}</p>
          <p className="mt-3 text-xs text-text-muted">{profile.techBackground.smallPrint}</p>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
