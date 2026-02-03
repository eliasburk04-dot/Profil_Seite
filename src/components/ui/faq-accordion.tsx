import { ChevronDown, HelpCircle } from 'lucide-react';
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
        <GlassCard key={item.question} className="p-5">
          <details className="group">
            <summary className="flex list-none cursor-pointer items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-solid" />
                <h3 className="text-base font-semibold text-text-primary">{item.question}</h3>
              </div>
              <ChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 pl-8">
              <p className="leading-relaxed text-text-secondary">{item.answer}</p>
            </div>
          </details>
        </GlassCard>
      ))}
    </div>
  );
}

