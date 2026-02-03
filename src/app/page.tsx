import Link from 'next/link';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';
import { profile, projects, services } from '@/content';
import { Button, Divider, GlassCard, ProjectCard, SectionReveal, ServiceCard } from '@/components/ui';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="space-y-11 sm:space-y-12">
      <SectionReveal className="space-y-7">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-4 sm:space-y-5">
            <div className="section-badge">
              <Users className="h-3.5 w-3.5 text-accent-solid" />
              <span>{profile.role}</span>
            </div>

            <h1 className="max-w-3xl text-display-sm sm:text-display">{profile.headline}</h1>
            <p className="max-w-2xl text-body-lg text-text-secondary">{profile.subheadline}</p>
          </div>

          <div className="brand-mark hidden sm:flex" aria-hidden="true">
            <span className="text-xl font-semibold text-accent-solid">B</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <Link href="/contact">
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/services">Unsere Leistungen</Link>
          </Button>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-4">
        <GlassCard variant="elevated" className="p-5 sm:p-6">
          <h2 className="mb-4 text-caption uppercase tracking-[0.12em] text-text-muted">Was Sie bekommen</h2>
          <ul className="grid gap-3.5 sm:grid-cols-2">
            {profile.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm leading-relaxed text-text-primary">{benefit}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.08} className="space-y-4">
        <h2 className="text-heading-sm">Warum Burk-Solutions?</h2>
        <p className="max-w-3xl text-body text-text-secondary">{profile.pitch}</p>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.12} className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-heading-sm">Unsere Leistungen</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/services">
              Alle ansehen
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

      <SectionReveal delay={0.16} className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-heading-sm">Ausgewählte Projekte</h2>
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
    </div>
  );
}
