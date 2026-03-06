import { Minus, Plus } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import type { FAQItem } from '@/content';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <GlassCard key={item.question} variant="subtle" className="p-5 sm:p-6">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[1.05rem] font-semibold leading-[1.3] text-white">{item.question}</p>
              </div>
              <span className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
                <Plus className="h-3.5 w-3.5 transition-all group-open:scale-0 group-open:opacity-0" />
                <Minus className="absolute h-3.5 w-3.5 scale-0 opacity-0 transition-all group-open:scale-100 group-open:opacity-100" />
              </span>
            </summary>
            <div className="pt-4">
              <p className="max-w-3xl text-body-sm text-text-secondary">{item.answer}</p>
            </div>
          </details>
        </GlassCard>
      ))}
    </div>
  );
}
