'use client';

import Link from 'next/link';
import { Briefcase, FolderKanban, Home, Mail, Users, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
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

  return (
    <aside
      className="glass-card-subtle glass-reflection flex h-full w-[248px] shrink-0 flex-col gap-3 overflow-hidden p-3"
      aria-label="Navigation"
    >
      <div className="px-2.5 py-2">
        <p className="text-caption uppercase tracking-[0.14em] text-text-muted">{profile.company}</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1.5" role="navigation">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = navIconMap[item.icon];

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative flex h-11 items-center gap-3 rounded-2xl border px-3.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'sidebar-active border-border-accent bg-accent-muted text-text-primary'
                  : 'border-transparent text-text-secondary hover:-translate-y-[1px] hover:border-border hover:bg-glass-subtle hover:text-text-primary'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && <span className="absolute left-2.5 top-2 bottom-2 w-0.5 rounded-full bg-accent" aria-hidden="true" />}

              {IconComponent && (
                <IconComponent
                  className={cn('h-4 w-4 shrink-0 transition-colors', isActive ? 'text-accent-solid' : 'text-text-muted group-hover:text-text-secondary')}
                />
              )}

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="rounded-2xl border border-border-subtle bg-bg-secondary/45 p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border-accent bg-accent-muted text-sm font-semibold text-accent-solid shadow-glow-sm">
            B
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text-primary">{profile.name}</p>
            <p className="truncate text-xs text-text-muted">{profile.role.split(' & ')[0]}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
