'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { TagPill } from '@/components/ui/tag-pill';
import type { Project } from '@/content';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Building2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <GlassCard hover className={cn('group flex h-full flex-col gap-4 p-5 sm:p-6', className)}>
      {project.useCase && (
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border-subtle bg-bg-secondary/45 px-3 py-1 text-caption text-text-muted">
          <Building2 className="h-3.5 w-3.5" />
          <span>{project.useCase}</span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
        {project.links?.live && (
          <span className="rounded-full border border-border bg-glass-subtle p-2 transition-all duration-200 group-hover:border-border-glow group-hover:bg-accent-muted">
            <ArrowUpRight className="h-4 w-4 text-text-secondary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-solid" />
          </span>
        )}
      </div>

      <p className="line-clamp-3 text-body-sm text-text-secondary">{project.description}</p>

      {project.outcome && (
        <div className="rounded-2xl border border-success/35 bg-success/10 px-4 py-3">
          <p className="text-sm font-medium text-success">{project.outcome}</p>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <TagPill key={tech} size="sm">
            {tech}
          </TagPill>
        ))}
        {project.technologies.length > 4 && (
          <TagPill size="sm" variant="muted">
            +{project.technologies.length - 4}
          </TagPill>
        )}
      </div>
    </GlassCard>
  );
}
