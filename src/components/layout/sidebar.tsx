'use client';

import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Briefcase, FolderKanban, Home, Mail, Users, type LucideIcon } from 'lucide-react';
import { navigation, profile } from '@/content';
import { cn } from '@/lib/utils';

const navIconMap: Record<string, LucideIcon> = {
  Home,
  Users,
  Briefcase,
  FolderKanban,
  Mail,
};

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Prefetch all navigation routes during idle time
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefetchAll = () => {
      navigation.forEach((item) => {
        if (item.href !== pathname) {
          router.prefetch(item.href);
        }
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(prefetchAll, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timeoutId = setTimeout(prefetchAll, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, router]);

  const handlePrefetch = useCallback(
    (href: string) => {
      router.prefetch(href);
    },
    [router]
  );

  return (
    <aside
      className="spatial-sidebar group/sidebar"
      aria-label="Navigation"
    >
      <div className="spatial-sidebar-shell">
        <div className="spatial-sidebar-top">
          <div className="spatial-brand">
            <span className="spatial-brand-dot" aria-hidden="true">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
            </span>
            <p className="spatial-brand-label">{profile.company}</p>
          </div>
        </div>

        <nav className="spatial-nav" role="navigation">
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
                  'spatial-nav-item',
                  isActive && 'is-active'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="spatial-nav-icon" aria-hidden="true">
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </span>

                <span className="spatial-nav-label">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
