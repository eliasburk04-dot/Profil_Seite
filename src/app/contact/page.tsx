import type { Metadata } from 'next';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Euro,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { profile } from '@/content';
import {
  Button,
  Divider,
  GlassCard,
  GlassInput,
  GlassSelect,
  GlassTextarea,
  SectionHeader,
  SectionReveal,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Nehmen Sie Kontakt auf für Ihr nächstes Projekt. Wir freuen uns auf Ihre Anfrage und melden uns innerhalb von 24–48 Stunden.',
};

export default function ContactPage() {
  return (
    <div className="space-y-11 sm:space-y-12">
      <SectionReveal className="space-y-4">
        <h1>Kontakt aufnehmen</h1>
        <p className="max-w-3xl text-body-lg text-text-secondary">
          Sie haben ein Projekt im Kopf oder möchten über eine mögliche Zusammenarbeit sprechen? Wir freuen uns auf Ihre
          Nachricht und melden uns zeitnah zurück.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <GlassCard className="p-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.contactPromises.map((promise, idx) => (
              <div key={idx} className="flex items-center gap-2">
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
            <h3 className="text-xl font-semibold text-text-primary">Per E-Mail</h3>
            <p className="text-text-secondary">Der direkteste Weg für Projektanfragen und geschäftliche Anliegen.</p>
          </div>
          <Button asChild variant="primary" className="mt-auto w-fit">
            <a href={`mailto:${profile.email}`}>
              E-Mail schreiben
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </GlassCard>

        <GlassCard className="flex flex-col gap-4 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-glass-medium">
            <Clock className="h-6 w-6 text-text-secondary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text-primary">Reaktionszeit</h3>
            <p className="text-text-secondary">
              Wir melden uns in der Regel innerhalb von 24–48 Stunden. Bei dringenden Anfragen gerne im Betreff
              kennzeichnen.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-sm text-text-muted">
            <span className="h-2 w-2 rounded-full bg-success" />
            Aktuell verfügbar für neue Projekte
          </div>
        </GlassCard>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.1} className="space-y-4">
        <SectionHeader
          title="Was wir wissen sollten"
          description="Für eine schnelle und hilfreiche Antwort sind diese Informationen nützlich."
        />

        <GlassCard className="p-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="flex gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent-solid" />
              <div>
                <p className="font-medium text-text-primary">Projektbeschreibung</p>
                <p className="text-sm text-text-secondary">Was soll gebaut werden? Welches Problem lösen Sie damit?</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-accent-solid" />
              <div>
                <p className="font-medium text-text-primary">Zeitrahmen</p>
                <p className="text-sm text-text-secondary">Gibt es einen Termin oder eine Deadline?</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Euro className="mt-0.5 h-4 w-4 shrink-0 text-accent-solid" />
              <div>
                <p className="font-medium text-text-primary">Budget-Rahmen</p>
                <p className="text-sm text-text-secondary">Hilft bei der Einschätzung des möglichen Umfangs.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-accent-solid" />
              <div>
                <p className="font-medium text-text-primary">Bestehende Ressourcen</p>
                <p className="text-sm text-text-secondary">Gibt es bereits Designs oder ein bestehendes System?</p>
              </div>
            </li>
          </ul>
        </GlassCard>
      </SectionReveal>

      <Divider glow />

      <SectionReveal delay={0.12} className="space-y-4">
        <SectionHeader title="Häufige Fragen" description="Antworten auf die wichtigsten Fragen vorab." />

        <div className="space-y-3">
          {profile.faq.map((item, idx) => (
            <GlassCard key={idx} className="p-5">
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
      </SectionReveal>

      <Divider />

      <SectionReveal delay={0.14} className="space-y-4">
        <SectionHeader
          title="Kontaktformular"
          description="Alternativ können Sie das Formular nutzen – wir melden uns zeitnah."
        />

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
                <div className="relative">
                  <GlassSelect id="budget" name="budget" defaultValue="">
                    <option value="">Bitte wählen...</option>
                    <option value="small">Unter 3.000 €</option>
                    <option value="medium">3.000 – 10.000 €</option>
                    <option value="large">10.000 – 25.000 €</option>
                    <option value="enterprise">Über 25.000 €</option>
                    <option value="unknown">Noch unklar</option>
                  </GlassSelect>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                </div>
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
              <p className="text-xs text-text-muted">
                * Das Formular ist aktuell ein UI-Entwurf. Bitte nutzen Sie vorerst die E-Mail-Option.
              </p>
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
            <p className="font-medium text-text-primary">Lieber direkt per E-Mail?</p>
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
