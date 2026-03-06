import Link from 'next/link';
import {
  AppWindow,
  CheckCircle2,
  Globe,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { conversion, type Service } from '@/content';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  variant?: 'full' | 'compact';
}

const serviceIconMap: Record<string, LucideIcon> = {
  Globe,
  AppWindow,
  Smartphone,
};

export function ServiceCard({ service, className, variant = 'compact' }: ServiceCardProps) {
  const IconComponent = serviceIconMap[service.icon];

  if (variant === 'compact') {
    return (
      <GlassCard hover className={cn('flex h-full flex-col gap-5 p-6 sm:p-7', className)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent-solid">
            {IconComponent && <IconComponent className="h-5 w-5" />}
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-2xs uppercase tracking-[0.18em] text-white/55">
            {service.shortTitle}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-[1.45rem] leading-[1.08] tracking-[-0.03em]">{service.title}</h3>
          <p className="text-body-sm text-text-secondary">{service.description}</p>
        </div>

        <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
          <p className="text-2xs uppercase tracking-[0.18em] text-white/48">Passend für</p>
          <p className="mt-2 text-sm text-text-secondary">{service.targetAudience}</p>
        </div>

        <div className="mt-auto flex items-start gap-3 rounded-[1.4rem] border border-tone-green/20 bg-tone-green/10 p-4">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tone-green" />
          <p className="text-sm font-medium text-tone-green">{service.result}</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={cn('flex h-full flex-col gap-6 p-6 sm:p-8', className)}>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent-solid">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
        <div className="space-y-2">
          <p className="text-2xs uppercase tracking-[0.18em] text-white/55">{service.shortTitle}</p>
          <h3 className="text-[1.7rem] leading-[1.02] tracking-[-0.04em]">{service.title}</h3>
          <p className="text-body-sm text-text-secondary">{service.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.4rem] border border-white/8 bg-black/18 p-4">
          <p className="text-2xs uppercase tracking-[0.18em] text-white/48">Für wen</p>
          <p className="mt-2 text-sm text-text-secondary">{service.targetAudience}</p>
        </div>

        <div className="rounded-[1.4rem] border border-tone-green/20 bg-tone-green/10 p-4">
          <p className="text-2xs uppercase tracking-[0.18em] text-tone-green/90">Ergebnis</p>
          <p className="mt-2 text-sm font-medium text-tone-green">{service.result}</p>
        </div>
      </div>

      <div className="mt-auto flex justify-end pt-2">
        <Button asChild variant="primary">
          <Link href="/contact">{conversion.primaryCtaLabel}</Link>
        </Button>
      </div>
    </GlassCard>
  );
}
