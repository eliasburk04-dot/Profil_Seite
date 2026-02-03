'use client';

import { useMemo, useState } from 'react';
import { Building2, Filter, X } from 'lucide-react';
import { projects, projectsContent } from '@/content';
import { cn } from '@/lib/utils';
import { Button, Divider, GlassCard, ProjectCard, SectionHeader, SectionReveal } from '@/components/ui';

const useCases = Array.from(new Set(projects.map((project) => project.useCase).filter(Boolean) as string[])).sort();
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeFilter) {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeFilter) || project.useCase === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="section-stack">
      <SectionReveal className="space-y-4">
        <h1>{projectsContent.title}</h1>
        <p className="max-w-3xl text-body-lg text-text-secondary">{projectsContent.description}</p>
      </SectionReveal>

      <SectionReveal delay={0.05} className="space-y-4">
        <GlassCard variant="subtle" className="p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-sm text-text-muted">
            <Filter className="h-4 w-4" />
            <span>{projectsContent.filterHint}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase) => (
              <button
                key={useCase}
                onClick={() => setActiveFilter(activeFilter === useCase ? null : useCase)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200',
                  activeFilter === useCase
                    ? 'sidebar-active border-border-accent bg-accent-muted text-text-primary'
                    : 'border-border bg-glass-subtle text-text-secondary hover:-translate-y-0.5 hover:border-border-strong hover:text-text-primary'
                )}
              >
                <Building2 className="h-3.5 w-3.5" />
                {useCase}
              </button>
            ))}

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200',
                  activeFilter === tag
                    ? 'sidebar-active border-border-accent bg-accent-muted text-text-primary'
                    : 'border-border bg-glass-subtle text-text-secondary hover:-translate-y-0.5 hover:border-border-strong hover:text-text-primary'
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent-solid transition-colors hover:text-accent"
            >
              <X className="h-3.5 w-3.5" />
              Filter zurücksetzen
            </button>
          )}
        </GlassCard>
      </SectionReveal>

      <Divider />

      {featuredProjects.length > 0 && (
        <SectionReveal delay={0.08} className="space-y-5">
          <SectionHeader title={projectsContent.highlightsTitle} description={projectsContent.highlightsDescription} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      )}

      {otherProjects.length > 0 && (
        <SectionReveal delay={0.1} className="space-y-5">
          {featuredProjects.length > 0 && <SectionHeader title={projectsContent.moreTitle} />}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      )}

      {filteredProjects.length === 0 && (
        <SectionReveal delay={0.08}>
          <GlassCard className="flex flex-col items-center gap-4 p-8 text-center">
            <p className="text-text-secondary">
              {projectsContent.emptyState} &ldquo;{activeFilter}&rdquo;.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setActiveFilter(null)}>
              Filter zurücksetzen
            </Button>
          </GlassCard>
        </SectionReveal>
      )}

      <SectionReveal delay={0.12} className="space-y-4">
        <Divider glow />
        <GlassCard variant="subtle" className="p-6 text-center">
          <p className="text-text-muted">{projectsContent.caseStudyHint}</p>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
