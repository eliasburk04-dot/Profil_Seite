import { promises as fs } from 'fs';
import path from 'path';

export interface WaitlistEntry {
  email: string;
  source: string | null;
  createdAt: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const email = raw.trim().toLowerCase();
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return null;
  return email;
}

export function normalizeSource(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const source = raw.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  return source || null;
}

/**
 * Local JSON storage for the pre-launch waitlist.
 * Development only: Vercel's filesystem is read-only, so production needs
 * a real store (e.g. a database or a mailing provider with double opt-in).
 */
const STORE_FILE = path.join(process.cwd(), '.data', 'waitlist.json');

async function readAll(): Promise<WaitlistEntry[]> {
  try {
    return JSON.parse(await fs.readFile(STORE_FILE, 'utf8')) as WaitlistEntry[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
}

let queue: Promise<unknown> = Promise.resolve();

export function addToWaitlist(email: string, source: string | null) {
  const task = queue.then(async () => {
    const entries = await readAll();
    if (entries.some((entry) => entry.email === email)) return { alreadyListed: true };
    entries.push({ email, source, createdAt: new Date().toISOString() });
    await fs.mkdir(path.dirname(STORE_FILE), { recursive: true });
    await fs.writeFile(STORE_FILE, JSON.stringify(entries, null, 2));
    return { alreadyListed: false };
  });
  queue = task.catch(() => undefined);
  return task;
}
