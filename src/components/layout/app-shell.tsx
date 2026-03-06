import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MobileNav } from './mobile-nav';
import { SiteFooter } from './site-footer';
import { Button, Container } from '@/components/ui';
import { conversion, navigation, profile } from '@/content';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative z-10">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-40 pt-4">
        <Container size="xl">
          <div className="surface-card-muted rounded-full px-4 py-3 sm:px-5">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                  <Image
                    src="/logo.png"
                    alt="Burk-Solutions Logo"
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                    priority
                  />
                </span>
                <span className="hidden sm:block">
                  <span className="block text-sm font-semibold tracking-[-0.02em]">
                    {profile.company}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/52">
                    {profile.role}
                  </span>
                </span>
              </Link>

              <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/68 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <Button asChild variant="primary" size="sm" data-testid="header-cta">
                  <Link href="/contact">
                    {conversion.primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main id="content" className="relative z-10">
        <Container size="xl" className="pb-20 pt-6 sm:pt-8 md:pt-10">
          {children}
          <SiteFooter />
        </Container>
      </main>
    </div>
  );
}
