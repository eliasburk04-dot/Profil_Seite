'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { conversion, navigation, profile } from '@/content';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white"
          aria-label="Menü öffnen"
          data-testid="mobile-nav-trigger"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay fixed inset-0 z-40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(24rem,92vw)] p-4 focus:outline-none">
          <div className="surface-card rounded-[2rem] p-5">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                  <Image
                    src="/logo.png"
                    alt="Burk-Solutions Logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{profile.company}</p>
                  <p className="text-2xs uppercase tracking-[0.18em] text-white/52">
                    {profile.role}
                  </p>
                </div>
              </div>

              <Dialog.Close asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/74"
                  aria-label="Menü schließen"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </div>

            <nav className="mt-6 grid gap-2" aria-label="Mobile Navigation">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-[1.4rem] border px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'border-white/16 bg-white/[0.08] text-white'
                        : 'border-transparent bg-transparent text-white/66 hover:border-white/10 hover:bg-white/[0.04] hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-text-secondary">{conversion.trustLine}</p>
              <Button asChild variant="primary" className="mt-4 w-full">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
