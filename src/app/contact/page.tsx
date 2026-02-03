import type { Metadata } from 'next';
import { ArrowRight, Calendar, CheckCircle, Clock, Euro, FileText, Mail, MessageSquare } from 'lucide-react';
import { contactContent, conversion, profile } from '@/content';
import {
  Button,
  Divider,
  FAQAccordion,
  GlassCard,
  GlassInput,
  GlassSelect,
  GlassTextarea,
  GlowButton,
  SectionHeader,
  SectionReveal,
} from '@/components/ui';

const needIcons = {
  FileText,
  Calendar,
  Euro,
  MessageSquare,
} as const;

export const metadata: Metadata = {
  title: contactContent.title,
  description:
    'Nehmen Sie Kontakt zu Burk-Solutions auf. Wir antworten schnell, transparent und mit einem klaren Vorschlag für die nächsten Schritte.',
};

export default function ContactPage() {
  return (
    <div className="section-stack">
      <SectionReveal className="space-y-5">
        <h1>{contactContent.title}</h1>
        <p className="max-w-3xl text-body-lg text-text-secondary">{contactContent.description}</p>
        <p className="text-sm text-text-muted">{conversion.trustLine}</p>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <GlassCard className="p-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.contactPromises.map((promise) => (
              <div key={promise} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                <span className="text-sm text-text-primary">{promise}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.08} className="grid gap-4 md:grid-cols-2">
        <GlassCard variant="elevated" className="flex flex-col gap-4 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-accent bg-accent-muted shadow-glow-sm">
            <Mail className="h-6 w-6 text-accent-solid" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text-primary">{contactContent.directMailTitle}</h3>
            <p className="text-text-secondary">{contactContent.directMailDescription}</p>
          </div>
          <GlowButton asChild className="mt-auto w-fit">
            <a href={`mailto:${profile.email}`}>
              {conversion.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </GlowButton>
        </GlassCard>

        <GlassCard className="flex flex-col gap-4 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-glass-medium">
            <Clock className="h-6 w-6 text-text-secondary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text-primary">{contactContent.responseTitle}</h3>
            <p className="text-text-secondary">{contactContent.responseDescription}</p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-sm text-text-muted">
            <span className="h-2 w-2 rounded-full bg-success" />
            {profile.availability}
          </div>
        </GlassCard>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.1} className="space-y-4">
        <SectionHeader title={contactContent.whatWeNeedTitle} description={contactContent.whatWeNeedDescription} />

        <GlassCard className="p-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {contactContent.whatWeNeed.map((entry) => {
              const Icon = needIcons[entry.icon];
              return (
                <li key={entry.title} className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-solid" />
                  <div>
                    <p className="font-medium text-text-primary">{entry.title}</p>
                    <p className="text-sm text-text-secondary">{entry.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.12} className="space-y-4">
        <SectionHeader title={contactContent.faqTitle} description={contactContent.faqDescription} />
        <FAQAccordion items={profile.faq} />
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.14} className="space-y-4">
        <SectionHeader title={contactContent.formTitle} description={contactContent.formDescription} />

        <GlassCard className="p-6 sm:p-8">
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name *
                </label>
                <GlassInput id="name" name="name" placeholder="Ihr Name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  E-Mail *
                </label>
                <GlassInput id="email" type="email" name="email" placeholder="ihre@email.de" required />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-text-primary">
                  Unternehmen
                </label>
                <GlassInput id="company" name="company" placeholder="Ihr Unternehmen (optional)" />
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-text-primary">
                  Budget-Rahmen
                </label>
                <GlassSelect id="budget" name="budget" defaultValue="">
                  <option value="">Bitte wählen...</option>
                  <option value="small">Unter 3.000 €</option>
                  <option value="medium">3.000 – 10.000 €</option>
                  <option value="large">10.000 – 25.000 €</option>
                  <option value="enterprise">Über 25.000 €</option>
                  <option value="unknown">Noch unklar</option>
                </GlassSelect>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-text-primary">
                Betreff *
              </label>
              <GlassInput id="subject" name="subject" placeholder="Worum geht es?" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">
                Nachricht *
              </label>
              <GlassTextarea
                id="message"
                name="message"
                rows={5}
                placeholder="Beschreiben Sie Ihr Projekt oder Anliegen..."
                required
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-text-muted">{contactContent.formHint}</p>
              <Button type="button" variant="primary" disabled>
                Nachricht senden
              </Button>
            </div>
          </form>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.16}>
        <GlassCard variant="subtle" className="flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-medium text-text-primary">{contactContent.fallbackTitle}</p>
            <p className="text-sm text-text-muted">{profile.email}</p>
          </div>
          <Button asChild variant="secondary">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              E-Mail öffnen
            </a>
          </Button>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
