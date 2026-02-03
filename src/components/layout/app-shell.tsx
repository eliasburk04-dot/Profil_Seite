import { Sidebar } from './sidebar';
import { MobileNav } from './mobile-nav';
import { ScrollReset } from './scroll-reset';
import { GlassPanel } from '@/components/ui/glass-panel';
import { conversion, profile } from '@/content';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="shell-stage relative h-dvh w-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="glow-drift absolute -left-24 top-[8%] h-[560px] w-[860px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="glow-drift-2 absolute right-[-12%] top-[2%] h-[520px] w-[760px] rounded-full bg-violet-500/12 blur-3xl" />
        <div className="glow-drift-3 absolute bottom-[-22%] left-[38%] h-[620px] w-[860px] rounded-full bg-sky-500/14 blur-3xl" />
      </div>

      <main className="relative flex h-full w-full items-center justify-center p-2 sm:p-4 lg:p-6">
        <GlassPanel
          className="shell-frame h-[min(900px,calc(100dvh-1rem))] w-[min(1200px,calc(100vw-1rem))] sm:h-[min(900px,calc(100dvh-2rem))] sm:w-[min(1200px,calc(100vw-2rem))] lg:h-[min(900px,calc(100dvh-3rem))] lg:w-[min(1200px,calc(100vw-3rem))]"
        >
          <div className="shell-layout flex flex-1 gap-3 overflow-hidden p-3 sm:gap-4 sm:p-4 lg:gap-5 lg:p-5">
            <div className="hidden lg:flex lg:w-[272px] lg:shrink-0 lg:items-center lg:justify-center">
              <Sidebar />
            </div>

            <div className="shell-content-surface glass-reflection ambient-light-sweep relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-3xl">
              <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 lg:hidden">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                  {profile.company}
                </span>
                <MobileNav />
              </header>

              <div className="relative flex-1 overflow-hidden">
                <ScrollReset className="shell-content-scroll content-scroll-area h-full overflow-y-auto overflow-x-hidden overscroll-contain pb-10">
                  <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">{children}</div>
                </ScrollReset>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-bg-primary/75 via-bg-primary/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="scroll-hint-bob pointer-events-none absolute bottom-3 right-4 rounded-full border border-border-subtle bg-bg-secondary/55 px-2.5 py-1 text-2xs uppercase tracking-[0.1em] text-text-muted">
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
