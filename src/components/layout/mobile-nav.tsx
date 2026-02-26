'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Smartphone,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import { navigation, profile } from '@/content';
import { cn } from '@/lib/utils';

const navIconMap: Record<string, LucideIcon> = {
  Home,
  Users,
  Briefcase,
  FolderKanban,
  Mail,
  Smartphone,
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prefetch on hover/focus for immediate navigation feel
  const handlePrefetch = useCallback(
    (href: string) => {
      router.prefetch(href);
    },
    [router]
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-glass-subtle text-text-primary shadow-glass-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-border-glow hover:shadow-glow-sm"
          aria-label="Menü öffnen"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay fixed inset-0 z-40 data-[state=open]:animate-fade-in" />

        <Dialog.Content
          className={cn(
            'glass-card-elevated glass-reflection fixed left-0 top-0 z-50 h-full w-[88vw] max-w-[320px] rounded-none rounded-r-4xl border-l-0',
            'safe-top safe-bottom data-[state=open]:animate-slide-in-left focus:outline-none'
          )}
        >
          <div className="flex h-14 items-center justify-between border-b border-border px-4">
            <div className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
                aria-hidden="true"
              />
              <p className="text-caption uppercase tracking-[0.14em] text-text-secondary">{profile.company}</p>
            </div>
            <Dialog.Close asChild>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-glass-subtle text-text-secondary transition-all duration-200 hover:border-border-strong hover:text-text-primary"
                aria-label="Menü schließen"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-2 p-4" role="navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = navIconMap[item.icon];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onMouseEnter={() => handlePrefetch(item.href)}
                  onFocus={() => handlePrefetch(item.href)}
                  className={cn(
                    'group relative flex h-12 items-center gap-3 rounded-2xl border px-4 text-base font-medium transition-all duration-200',
                    isActive
                      ? 'sidebar-active border-border-accent bg-accent-muted text-text-primary'
                      : 'border-transparent bg-transparent text-text-secondary hover:border-border hover:bg-glass-subtle hover:text-text-primary'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && <span className="absolute left-2.5 top-3 bottom-3 w-0.5 rounded-full bg-accent" aria-hidden="true" />}

                  {IconComponent && (
                    <IconComponent
                      className={cn('h-5 w-5 shrink-0 transition-colors', isActive ? 'text-accent-solid' : 'text-text-muted group-hover:text-text-secondary')}
                    />
                  )}

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
            <div className="rounded-2xl border border-border-subtle bg-bg-secondary/50 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Burk-Solutions Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-text-primary">{profile.name}</p>
                  <p className="truncate text-xs text-text-muted">{profile.role.split(' & ')[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
