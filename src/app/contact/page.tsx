import { Calendar, Euro, FileText, Mail, MessageSquare } from 'lucide-react';
import { contactContent, conversion, profile } from '@/content';
import {
  ContactForm,
  FAQAccordion,
  GlassCard,
  PageHero,
  SectionHeader,
  SectionReveal,
  TagPill,
} from '@/components/ui';
import { createPageMetadata } from '@/lib/metadata';

const needIcons = {
  FileText,
  Calendar,
  Euro,
  MessageSquare,
} as const;

export const metadata = createPageMetadata({
  title: contactContent.title,
  description:
    'Nehmen Sie Kontakt zu Burk-Solutions auf. Wir antworten schnell, transparent und mit einem klaren Vorschlag für die nächsten Schritte.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="section-stack">
      <SectionReveal>
        <PageHero
          badge={contactContent.title}
          title="Starten Sie Ihr digitales Projekt."
          description={contactContent.description}
          supportingText={conversion.trustLine}
          stats={[
            { value: '24–48h', label: 'typische Rückmeldung' },
            { value: 'Kostenlos', label: 'unverbindliches Erstgespräch' },
            { value: 'Transparent', label: 'klare Einordnung vor dem Start' },
          ]}
        />
      </SectionReveal>

      <SectionReveal
        delay={0.05}
        className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      >
        <div className="space-y-6">
          <GlassCard variant="subtle" className="p-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-accent-solid">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-eyebrow uppercase text-white/48">
                  {contactContent.directMailTitle}
                </p>
                <p className="text-body-sm text-text-secondary">
                  {contactContent.directMailDescription}
                </p>
              </div>
              <a href={`mailto:${profile.email}`} className="text-sm font-medium text-white hover:text-accent-solid">
                {profile.email}
              </a>
            </div>
          </GlassCard>

          <GlassCard variant="subtle" className="p-5 sm:p-6">
            <div className="space-y-4">
              <TagPill variant="accent">{profile.availability}</TagPill>
              <ul className="space-y-3">
                {profile.contactPromises.map((promise) => (
                  <li key={promise} className="text-sm text-text-secondary">
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          <GlassCard variant="subtle" className="p-6 sm:p-7">
            <SectionHeader
              title={contactContent.whatWeNeedTitle}
              description={contactContent.whatWeNeedDescription}
              className="space-y-2"
            />
            <ul className="mt-6 grid gap-4">
              {contactContent.whatWeNeed.map((entry) => {
                const Icon = needIcons[entry.icon];

                return (
                  <li
                    key={entry.title}
                    className="rounded-[1.4rem] border border-white/8 bg-black/18 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-accent-solid">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-white">{entry.title}</p>
                        <p className="text-sm text-text-secondary">{entry.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </GlassCard>

          <GlassCard variant="subtle" className="p-6 sm:p-7">
            <SectionHeader
              title={contactContent.faqTitle}
              description={contactContent.faqDescription}
              className="space-y-2"
            />
            <FAQAccordion items={profile.faq} className="mt-6" />
          </GlassCard>
        </div>

        <GlassCard variant="elevated" className="p-6 sm:p-8">
          <SectionHeader
            title={contactContent.formTitle}
            description={contactContent.formDescription}
            className="space-y-2"
          />
          <div className="mt-6">
            <ContactForm recipientEmail={profile.email} formHint={contactContent.formHint} />
          </div>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
