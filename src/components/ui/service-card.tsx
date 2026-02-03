'use client';

import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { conversion, type Service } from '@/content';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  variant?: 'full' | 'compact';
}

export function ServiceCard({ service, className, variant = 'compact' }: ServiceCardProps) {
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
    className?: string;
  }>;

  if (variant === 'compact') {
    return (
      <GlassCard hover className={cn('group flex h-full flex-col gap-5 p-6', className)}>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted shadow-glow-sm transition-all duration-300 group-hover:scale-[1.04]">
          {IconComponent && <IconComponent className="h-6 w-6 text-accent-solid" />}
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xl font-semibold text-text-primary">{service.shortTitle}</h3>
          <p className="line-clamp-3 text-body-sm text-text-secondary">{service.description}</p>
        </div>

        <div className="mt-auto flex items-start gap-2.5 rounded-2xl border border-success/35 bg-success/10 p-3.5">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          <p className="text-sm font-medium text-success">{service.result}</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={cn('flex h-full flex-col gap-6 p-6 sm:p-7', className)}>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted shadow-glow-sm">
          {IconComponent && <IconComponent className="h-7 w-7 text-accent-solid" />}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-text-primary">{service.title}</h3>
          <p className="text-body-sm text-text-secondary">{service.description}</p>
        </div>
      </div>

      <div className="space-y-2 rounded-2xl border border-border-subtle bg-bg-secondary/45 p-4">
        <h4 className="text-caption uppercase text-text-muted">Für wen</h4>
        <p className="text-sm text-text-secondary">{service.targetAudience}</p>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-success/35 bg-success/10 p-4">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
        <div className="space-y-1">
          <h4 className="text-caption uppercase text-success">Ergebnis</h4>
          <p className="font-medium text-success">{service.result}</p>
        </div>
      </div>

      <div className="mt-auto flex justify-end border-t border-border pt-4">
        <Button asChild variant="primary" size="sm">
          <Link href="/contact">{conversion.primaryCtaLabel}</Link>
        </Button>
      </div>
    </GlassCard>
  );
}
