'use client';

import Link from 'next/link';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { FormEvent, useEffect, useId, useState } from 'react';
import { JOINED_EVENT } from './barbell';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; alreadyListed: boolean }
  | { kind: 'error'; message: string };

const JOINED_KEY = 'leanbulk-joined';

interface WaitlistFormProps {
  id?: string;
  tone?: 'dark' | 'light';
}

export function WaitlistForm({ id, tone = 'dark' }: WaitlistFormProps) {
  const inputId = useId();
  const messageId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSource(params.get('ref') ?? params.get('utm_source'));
    try {
      if (window.localStorage.getItem(JOINED_KEY)) setStatus({ kind: 'success', alreadyListed: true });
    } catch {
      // Storage can be blocked in in-app browsers; the form simply starts empty.
    }
    const onJoined = () => setStatus((current) => (current.kind === 'success' ? current : { kind: 'success', alreadyListed: false }));
    window.addEventListener(JOINED_EVENT, onJoined);
    return () => window.removeEventListener(JOINED_EVENT, onJoined);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === 'submitting') return;
    const honeypot = (new FormData(event.currentTarget).get('website') as string) ?? '';
    setStatus({ kind: 'submitting' });
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, website: honeypot }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus({ kind: 'error', message: data.error ?? 'Das hat nicht geklappt. Versuch es gleich noch einmal.' });
        return;
      }
      try {
        window.localStorage.setItem(JOINED_KEY, '1');
      } catch {
        // Not critical: only used to remember the signup on this device.
      }
      setStatus({ kind: 'success', alreadyListed: Boolean(data.alreadyListed) });
      window.dispatchEvent(new Event(JOINED_EVENT));
    } catch {
      setStatus({ kind: 'error', message: 'Keine Verbindung. Prüf dein Netz und versuch es noch einmal.' });
    }
  }

  if (status.kind === 'success') {
    return (
      <div id={id} className={`lb-form lb-form--${tone} lb-form--done`} role="status">
        <span className="lb-form__done-icon">
          <Check aria-hidden="true" strokeWidth={3} />
        </span>
        <p>
          <strong>{status.alreadyListed ? 'Du stehst schon drauf.' : 'Du stehst auf der Liste.'}</strong>{' '}
          Sobald LeanBulk startet, bekommst du eine Mail.
        </p>
      </div>
    );
  }

  const invalid = status.kind === 'error';

  return (
    <form id={id} className={`lb-form lb-form--${tone}`} onSubmit={onSubmit} noValidate>
      <label htmlFor={inputId} className="lb-visually-hidden">
        E-Mail-Adresse
      </label>
      <div className="lb-form__row">
        <input
          id={inputId}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          enterKeyHint="send"
          placeholder="deine@mail.de"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (invalid) setStatus({ kind: 'idle' });
          }}
          aria-invalid={invalid || undefined}
          aria-describedby={messageId}
          className="lb-form__input"
        />
        <button type="submit" className="lb-button" disabled={status.kind === 'submitting'}>
          {status.kind === 'submitting' ? (
            <>
              <Loader2 className="lb-spin" aria-hidden="true" /> Wird eingetragen
            </>
          ) : (
            <>
              Auf die Warteliste <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="lb-honeypot" aria-hidden="true" />
      <p id={messageId} className={invalid ? 'lb-form__error' : 'lb-form__note'} aria-live="polite">
        {invalid ? (
          status.message
        ) : (
          <>
            Eine Mail zum Start, kein Newsletter. Abmelden jederzeit. Mehr in der{' '}
            <Link href="/datenschutz">Datenschutzerklärung</Link>.
          </>
        )}
      </p>
    </form>
  );
}
