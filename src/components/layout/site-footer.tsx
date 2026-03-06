import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GlassCard, TagPill } from '@/components/ui';
import { profile, siteFooter } from '@/content';

export function SiteFooter() {
  return (
    <footer className="pt-16 sm:pt-20">
      <GlassCard variant="subtle" className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="surface-card-grid" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_repeat(3,minmax(0,0.65fr))]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                <Image
                  src="/logo.png"
                  alt="Burk-Solutions Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{profile.company}</p>
                <p className="text-2xs uppercase tracking-[0.18em] text-white/52">{profile.role}</p>
              </div>
            </div>

            <p className="max-w-xl text-body-sm text-text-secondary">{siteFooter.summary}</p>

            <div className="flex flex-wrap gap-2">
              <TagPill variant="accent">{profile.availability}</TagPill>
              <TagPill>{profile.location}</TagPill>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xs uppercase tracking-[0.18em] text-white/48">
              {siteFooter.navigationTitle}
            </p>
            <nav className="grid gap-3">
              {siteFooter.navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/72 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-2xs uppercase tracking-[0.18em] text-white/48">
              {siteFooter.legalTitle}
            </p>
            <div className="grid gap-3">
              {siteFooter.legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/72 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-2xs uppercase tracking-[0.18em] text-white/48">
              {siteFooter.contactTitle}
            </p>
            <p className="text-sm text-text-secondary">{siteFooter.contactDescription}</p>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm text-white hover:text-accent-solid">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-10 border-t border-white/10 pt-4">
          <p className="text-sm text-text-muted">{siteFooter.copyright}</p>
        </div>
      </GlassCard>
    </footer>
  );
}
