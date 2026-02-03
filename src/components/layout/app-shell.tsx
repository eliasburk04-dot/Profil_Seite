'use client';

import { Sidebar } from './sidebar';
import { MobileNav } from './mobile-nav';
import { GlassPanel } from '@/components/ui/glass-panel';
import { StickyCTA } from '@/components/ui';
import { conversion, profile } from '@/content';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-20 -top-24 h-[520px] w-[760px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[-6%] h-[420px] w-[620px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[-18%] left-1/2 h-[540px] w-[780px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <main className="relative flex h-full w-full items-center justify-center p-2 sm:p-4 lg:p-6">
        <GlassPanel
          showTopBar
          className="h-[min(900px,calc(100dvh-1rem))] w-[min(1320px,calc(100vw-1rem))] sm:h-[min(900px,calc(100dvh-2rem))] sm:w-[min(1320px,calc(100vw-2rem))] lg:h-[min(900px,calc(100dvh-3rem))] lg:w-[min(1320px,calc(100vw-3rem))]"
        >
          <div className="flex flex-1 gap-3 overflow-hidden p-3 sm:gap-4 sm:p-4 lg:gap-5 lg:p-5">
            <div className="hidden lg:block">
              <Sidebar />
            </div>

            <div className="glass-card-subtle glass-reflection flex min-w-0 flex-1 flex-col overflow-hidden rounded-3xl">
              <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 lg:hidden">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  {profile.company}
                </span>
                <MobileNav />
              </header>

              <StickyCTA />

              <div className="relative flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto overflow-x-hidden overscroll-contain pb-10">
                  <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">{children}</div>
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute bottom-3 right-4 rounded-full border border-border-subtle bg-bg-secondary/55 px-2.5 py-1 text-2xs uppercase tracking-[0.1em] text-text-muted">
                  {conversion.scrollHint}
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </main>
    </div>
  );
}
