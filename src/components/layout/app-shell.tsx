import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from './sidebar';
import { MobileNav } from './mobile-nav';
import { ScrollReset } from './scroll-reset';
import { conversion, profile } from '@/content';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="shell-stage relative z-10 h-dvh w-screen overflow-hidden">
      <main className="relative flex h-full w-full items-center justify-center p-2 sm:p-4 lg:-translate-y-4 lg:p-6">
        <div className="mx-auto h-[min(900px,calc(100dvh-1rem))] w-[min(1320px,calc(100vw-1rem))] sm:h-[min(900px,calc(100dvh-2rem))] sm:w-[min(1320px,calc(100vw-2rem))] lg:h-[min(900px,calc(100dvh-3rem))] lg:w-[min(1320px,calc(100vw-3rem))]">
          <div className="shell-layout flex h-full items-stretch gap-4 overflow-hidden sm:gap-5 lg:gap-7 lg:overflow-visible">
            <div className="hidden h-full lg:block lg:w-[248px] lg:shrink-0">
              <Sidebar />
            </div>

            <div className="shell-content-surface glass-reflection relative flex h-full min-w-0 flex-1 flex-col overflow-hidden rounded-3xl">
              <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 lg:hidden">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    aria-hidden="true"
                  />
                  {profile.company}
                </span>
                <MobileNav />
              </header>

              <div className="relative flex-1 overflow-hidden">
                <ScrollReset className="shell-content-scroll content-scroll-area h-full overflow-y-auto overflow-x-hidden overscroll-contain pb-10">
                  <div className="mx-auto w-full max-w-[960px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">{children}</div>
                </ScrollReset>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-bg-primary/75 via-bg-primary/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 z-10 text-[11px] text-text-muted opacity-55 transition-opacity hover:opacity-90">
                  <span className="mr-2">Rechtliches für Stirnraten-Spiel:</span>
                  <Link
                    href="/stirnraten/datenschutz"
                    className="underline decoration-dotted underline-offset-2 hover:text-text-primary"
                  >
                    Datenschutzerklärung
                  </Link>
                  <span className="mx-1">·</span>
                  <Link
                    href="/stirnraten/impressum"
                    className="underline decoration-dotted underline-offset-2 hover:text-text-primary"
                  >
                    Impressum
                  </Link>
                </div>
                <div className="scroll-hint-bob pointer-events-none absolute bottom-3 right-4 rounded-full border border-border-subtle bg-bg-secondary/55 px-2.5 py-1 text-2xs uppercase tracking-[0.1em] text-text-muted">
                  {conversion.scrollHint}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
