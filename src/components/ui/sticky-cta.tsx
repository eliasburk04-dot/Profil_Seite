import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { conversion } from '@/content';
import { GlowButton } from '@/components/ui/glow-button';
import { Button } from '@/components/ui/button';

export function StickyCTA() {
  return (
    <div className="sticky top-0 z-20 border-b border-border bg-bg-secondary/55 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-text-primary">{conversion.primaryCtaLabel}</p>
          <p className="text-xs text-text-muted">{conversion.trustLine}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <GlowButton asChild size="sm">
            <Link href="/contact">
              {conversion.primaryCtaLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </GlowButton>
          <Button asChild variant="secondary" size="sm">
            <Link href="/services">{conversion.secondaryCtaLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
