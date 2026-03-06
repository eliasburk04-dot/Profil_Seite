'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassInput, GlassSelect, GlassTextarea } from '@/components/ui/glass-input';

type FormDataState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  subject: string;
  message: string;
  website: string;
};

type FieldName = keyof FormDataState;
type FormErrors = Partial<Record<FieldName, string>>;

const initialState: FormDataState = {
  name: '',
  email: '',
  company: '',
  budget: '',
  subject: '',
  message: '',
  website: '',
};

const fieldLimits = {
  name: 80,
  email: 160,
  company: 120,
  subject: 120,
  message: 2000,
} as const;

function clipValue(value: string, maxLength: number) {
  return value.trim().slice(0, maxLength);
}

function validateForm(values: FormDataState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen an.';
  } else if (values.name.trim().length > fieldLimits.name) {
    errors.name = 'Der Name ist zu lang.';
  }

  if (!values.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  } else if (values.email.trim().length > fieldLimits.email) {
    errors.email = 'Die E-Mail-Adresse ist zu lang.';
  }

  if (values.company.trim().length > fieldLimits.company) {
    errors.company = 'Der Firmenname ist zu lang.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Bitte geben Sie einen Betreff an.';
  } else if (values.subject.trim().length > fieldLimits.subject) {
    errors.subject = 'Der Betreff ist zu lang.';
  }

  if (!values.message.trim()) {
    errors.message = 'Bitte beschreiben Sie Ihr Anliegen.';
  } else if (values.message.trim().length < 24) {
    errors.message = 'Bitte geben Sie etwas mehr Kontext, damit wir sinnvoll antworten können.';
  } else if (values.message.trim().length > fieldLimits.message) {
    errors.message = 'Die Nachricht ist zu lang.';
  }

  return errors;
}

function createMailtoHref(values: FormDataState, recipient: string) {
  const bodyLines = [
    `Name: ${clipValue(values.name, fieldLimits.name)}`,
    `E-Mail: ${clipValue(values.email, fieldLimits.email)}`,
    `Unternehmen: ${clipValue(values.company, fieldLimits.company) || 'Nicht angegeben'}`,
    `Budget-Rahmen: ${values.budget || 'Nicht angegeben'}`,
    '',
    clipValue(values.message, fieldLimits.message),
  ];

  const params = new URLSearchParams({
    subject: clipValue(values.subject, fieldLimits.subject),
    body: bodyLines.join('\n'),
  });

  return `mailto:${recipient}?${params.toString()}`;
}

interface ContactFormProps {
  recipientEmail: string;
  formHint: string;
}

export function ContactForm({ recipientEmail, formHint }: ContactFormProps) {
  const [values, setValues] = useState<FormDataState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const draftHref = useMemo(
    () => createMailtoHref(values, recipientEmail),
    [recipientEmail, values]
  );

  const handleChange = (field: FieldName, value: string) => {
    if (hasSubmitted) {
      setHasSubmitted(false);
    }

    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (values.website.trim()) {
      return;
    }

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setHasSubmitted(true);
    }
  };

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit} data-testid="contact-form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Name *
          </label>
          <GlassInput
            id="name"
            name="name"
            autoComplete="name"
            maxLength={fieldLimits.name}
            placeholder="Ihr Name"
            value={values.name}
            onChange={(event) => handleChange('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-[#ffb4b4]">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white">
            E-Mail *
          </label>
          <GlassInput
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            maxLength={fieldLimits.email}
            placeholder={recipientEmail}
            value={values.email}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-[#ffb4b4]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-white">
            Unternehmen
          </label>
          <GlassInput
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={fieldLimits.company}
            placeholder="Ihr Unternehmen (optional)"
            value={values.company}
            onChange={(event) => handleChange('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && (
            <p id="company-error" className="text-sm text-[#ffb4b4]">
              {errors.company}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-white">
            Budget-Rahmen
          </label>
          <GlassSelect
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => handleChange('budget', event.target.value)}
          >
            <option value="">Bitte wählen...</option>
            <option value="Unter 3.000 €">Unter 3.000 €</option>
            <option value="3.000 – 10.000 €">3.000 – 10.000 €</option>
            <option value="10.000 – 25.000 €">10.000 – 25.000 €</option>
            <option value="Über 25.000 €">Über 25.000 €</option>
            <option value="Noch unklar">Noch unklar</option>
          </GlassSelect>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-white">
          Betreff *
        </label>
        <GlassInput
          id="subject"
          name="subject"
          maxLength={fieldLimits.subject}
          placeholder="Worum geht es?"
          value={values.subject}
          onChange={(event) => handleChange('subject', event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          required
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-[#ffb4b4]">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white">
          Nachricht *
        </label>
        <GlassTextarea
          id="message"
          name="message"
          rows={6}
          maxLength={fieldLimits.message}
          placeholder="Beschreiben Sie Ihr Projekt, Ihre Ziele und den gewünschten Zeitrahmen..."
          value={values.message}
          onChange={(event) => handleChange('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        <div className="flex items-center justify-between gap-3">
          {errors.message ? (
            <p id="message-error" className="text-sm text-[#ffb4b4]">
              {errors.message}
            </p>
          ) : (
            <span className="text-xs text-text-muted">Je klarer das Ziel, desto präziser unsere Antwort.</span>
          )}
          <span className="text-xs text-text-muted">
            {values.message.length}/{fieldLimits.message}
          </span>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => handleChange('website', event.target.value)}
        />
      </div>

      {Object.keys(errors).length > 0 && (
        <p role="alert" className="text-sm text-[#ffb4b4]">
          Bitte prüfen Sie die markierten Felder.
        </p>
      )}

      {hasSubmitted && (
        <div
          className="rounded-[1.6rem] border border-tone-green/20 bg-tone-green/10 p-4"
          role="status"
          data-testid="contact-success"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tone-green" />
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="font-medium text-tone-green">Ihr Anfrageentwurf ist vorbereitet.</p>
                <p className="text-sm text-text-secondary">
                  Öffnen Sie jetzt den E-Mail-Entwurf oder schreiben Sie direkt an {recipientEmail}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="primary" size="sm">
                  <a href={draftHref}>
                    E-Mail-Entwurf öffnen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href={`mailto:${recipientEmail}`}>
                    <Mail className="h-4 w-4" />
                    Direkt schreiben
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs text-text-muted">{formHint}</p>
        <Button type="submit" variant="primary" data-testid="contact-submit">
          Nachricht senden
        </Button>
      </div>
    </form>
  );
}
