import { NextResponse } from 'next/server';
import { addToWaitlist, normalizeEmail, normalizeSource } from '@/lib/waitlist';

export const runtime = 'nodejs';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Versuche. Warte kurz und probier es dann noch einmal.' },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  // Honeypot: bots fill every field, people never see this one.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true, alreadyListed: false });
  }

  const email = normalizeEmail(body.email);
  if (!email) {
    return NextResponse.json(
      { error: 'Diese E-Mail-Adresse sieht nicht vollständig aus. Prüfe sie bitte noch einmal.' },
      { status: 422 },
    );
  }

  try {
    const { alreadyListed } = await addToWaitlist(email, normalizeSource(body.source));
    return NextResponse.json({ ok: true, alreadyListed });
  } catch (error) {
    console.error('[waitlist] could not store entry', error);
    return NextResponse.json(
      { error: 'Das Speichern hat gerade nicht geklappt. Versuch es in einer Minute noch einmal.' },
      { status: 500 },
    );
  }
}
