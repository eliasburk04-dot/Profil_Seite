import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import {
  conversion,
  homeContent,
  profile,
  services,
  servicesContent,
} from '@/content';
import {
  Button,
  CtaBand,
  FAQAccordion,
  GlassCard,
  HeroRibbonBackground,
  ProcessTimeline,
  SectionHeader,
  SectionReveal,
  ServiceCard,
} from '@/components/ui';

export default function HomePage() {
  return (
    <div className="section-stack">
      <SectionReveal>
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 sm:px-8">

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full space-y-10">
            <div className="section-badge w-fit bg-white/5 border border-white/10 text-white/80 rounded-full px-4 py-1.5 flex items-center gap-2 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs tracking-wider uppercase font-semibold">{homeContent.heroBadge}</span>
            </div>

            <div className="space-y-6 w-full">
              <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.04em] font-medium max-w-[900px] mx-auto text-white">
                Websites, Web Apps & <span className="rich-accent">mobile</span> Apps, die den Unterschied <span className="rich-accent">machen.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-white/60">
                {profile.subheadline}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild variant="primary" size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-medium h-auto border border-transparent transition-all">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-[#1c1c1c]/40 text-white hover:bg-[#2c2c2c]/60 border border-white/10 rounded-full px-8 py-6 text-base font-medium h-auto backdrop-blur-xl transition-all">
                <Link href="/services">{conversion.secondaryCtaLabel}</Link>
              </Button>
            </div>


          </div>
        </section>
      </SectionReveal>



      <SectionReveal delay={0.08} className="space-y-6">
        <SectionHeader
          title={homeContent.servicesPreviewTitle}
          description={profile.competencies.description}
          eyebrow={servicesContent.title}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.11} className="space-y-6">
        <SectionHeader title={profile.workflowTitle} description={profile.workflowDescription} />
        <ProcessTimeline steps={profile.workflow} />
      </SectionReveal>


      <SectionReveal delay={0.17} className="space-y-6">
        <SectionHeader
          title={homeContent.miniFaqTitle}
          description={homeContent.miniFaqDescription}
        />
        <FAQAccordion items={profile.miniFaq} />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <CtaBand
          eyebrow="Projektstart"
          title={servicesContent.ctaTitle}
          description={servicesContent.ctaDescription}
          actions={
            <>
              <Button asChild variant="primary" size="lg" data-testid="home-final-cta">
                <Link href="/contact">
                  {conversion.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Leistungen ansehen</Link>
              </Button>
            </>
          }
        />
      </SectionReveal>
    </div>
  );
}
