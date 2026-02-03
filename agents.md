# Burk-Solutions Portfolio – AI Agent Guide

> **Purpose**: This document explains the project structure, conventions, and rules for AI agents working on this codebase.

---

## Project Overview

**What is this?**
A professional portfolio and digital services marketing website for Elias Burk / Burk-Solutions. It presents the developer as a trusted partner for web development, mobile apps, and technical consulting.

**Who is the audience?**
- Companies, founders, SMEs, and tech-driven clients looking for professional development services
- The site serves as both portfolio AND sales tool

**Tech Stack:**
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Library**: Custom components with Radix UI primitives
- **Animation**: Framer Motion (minimal, restrained)
- **Icons**: lucide-react
- **Deployment**: Vercel (zero-config)

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with AppShell
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Tailwind
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/             # Layout components
│   │   ├── app-shell.tsx   # Main wrapper with sidebar
│   │   ├── sidebar.tsx     # Desktop navigation
│   │   ├── mobile-nav.tsx  # Mobile drawer navigation
│   │   └── index.ts
│   └── ui/                 # Reusable UI components
│       ├── glass-card.tsx
│       ├── glass-panel.tsx
│       ├── button.tsx
│       ├── tag-pill.tsx
│       ├── container.tsx
│       ├── section-header.tsx
│       ├── divider.tsx
│       ├── project-card.tsx
│       ├── service-card.tsx
│       └── index.ts
├── content/
│   └── index.ts            # ALL CONTENT LIVES HERE
└── lib/
    └── utils.ts            # Utility functions (cn, etc.)
```

---

## Content Editing Rules

### The Single Source of Truth: `src/content/index.ts`

**ALL content must be edited in this file.** This includes:
- Profile information (name, bio, pitch)
- Skills (grouped with descriptions)
- Services (marketing-focused offerings)
- Projects (portfolio items)
- Navigation structure
- Site metadata

**Content types:**
```typescript
profile     // Name, company, headline, bio, workflow
skills      // SkillCategory[] - grouped skills with context
services    // Service[] - detailed service offerings
projects    // Project[] - portfolio items with tags/tech
navigation  // NavItem[] - sidebar links
featureFlags // Feature toggles for future features
siteMetadata // SEO metadata
```

### Adding a New Project

```typescript
// In src/content/index.ts, add to the projects array:
{
  id: 'unique-slug',
  title: 'Project Name',
  description: 'Short description (2-3 sentences)',
  technologies: ['Next.js', 'TypeScript'],
  tags: ['Web', 'Full-Stack'],
  outcome: 'Measurable result or impact',
  featured: true, // Show on home page
  links: {
    live: 'https://...',
    github: 'https://...',
  },
}
```

### Adding a New Service

```typescript
// In src/content/index.ts, add to the services array:
{
  id: 'service-slug',
  title: 'Full Service Name',
  shortTitle: 'Short Name',
  description: 'What this service is',
  problemSolved: 'What problem does it solve?',
  targetAudience: 'Who is it for?',
  approach: 'How do I approach this?',
  technologies: ['Tech', 'Stack'],
  icon: 'LucideIconName', // Must be valid lucide-react icon
}
```

---

## Design System Rules

### Liquid Glass Aesthetic

The design follows an Apple-inspired "Liquid Glass" aesthetic. Key principles:

1. **Restraint**: Subtle effects, never flashy
2. **Depth**: Layered surfaces with gentle blur
3. **Premium feel**: Clean typography, generous spacing
4. **Accessibility**: Focus states, contrast, keyboard navigation

### Color Tokens (in `tailwind.config.ts`)

```typescript
bg-primary      // #0a0c10 - deepest background
bg-surface      // #0f141b - card backgrounds
glass-subtle    // rgba(255,255,255,0.02)
glass-light     // rgba(255,255,255,0.04)
border          // rgba(255,255,255,0.08)
border-accent   // rgba(124,58,237,0.35)
accent          // #7c3aed - primary accent (violet)
text-primary    // #e5e7eb
text-secondary  // #9ca3af
```

### Component Usage

| Component | Use For |
|-----------|---------|
| `GlassCard` | Content containers, cards |
| `GlassPanel` | Large frame containers |
| `Button` | CTAs, actions |
| `TagPill` | Technologies, categories |
| `ProjectCard` | Project grid items |
| `ServiceCard` | Service listings |
| `SectionHeader` | Section titles |
| `Divider` | Visual separation |

---

## Commands

```bash
# Development
npm run dev         # Start dev server (localhost:3000)

# Production
npm run build       # Build for production
npm run start       # Start production server

# Quality
npm run lint        # Run ESLint
npm run format      # Run Prettier
```

---

## Deployment (Vercel)

The project is optimized for zero-config Vercel deployment:

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Deploy
vercel deploy       # Preview deployment
vercel --prod       # Production deployment
```

Or connect the GitHub repo to Vercel for automatic deployments.

---

## Do's and Don'ts

### ✅ DO

- **Keep glass effects subtle** – blur + slight transparency, never overwhelming
- **Update content in `src/content/index.ts`** only – never hardcode text in components
- **Use design tokens** from Tailwind config – never hardcode colors
- **Maintain accessibility** – keyboard navigation, focus states, semantic HTML
- **Test reduced motion** – animations must respect `prefers-reduced-motion`
- **Use TypeScript strictly** – no `any`, proper types for all data
- **Keep bundle size small** – lazy load where possible, check imports
- **Write German content** – English acceptable for technical terms only

### ❌ DON'T

- **Don't add backend without discussion** – project is currently static
- **Don't modify components for content changes** – edit content source instead
- **Don't use excessive animations** – Framer Motion for micro-interactions only
- **Don't break the "website in window" aesthetic** – maintain the frame container
- **Don't skip TypeScript types** – all new code must be fully typed
- **Don't add dependencies without consideration** – keep bundle lean
- **Don't use lorem ipsum** – all text must be real, meaningful content

---

## Future Features (Scaffolded, Not Implemented)

These features are planned but not yet implemented. The architecture supports them:

| Feature | Status | Notes |
|---------|--------|-------|
| Blog/Insights | `featureFlags.blog` | MDX support ready |
| Case Studies | `featureFlags.caseStudies` | Project detail pages |
| Downloadable CV | `featureFlags.downloadableCV` | PDF generation |
| Analytics | `featureFlags.analytics` | Vercel/Plausible hook |
| i18n (DE/EN) | `featureFlags.i18n` | next-intl ready |
| Contact Form Backend | - | Currently UI stub only |

---

## Architecture Decisions

### Why Next.js App Router?
- Best-in-class static generation
- Zero-config Vercel deployment
- Excellent TypeScript support
- Future-proof routing

### Why Custom Components (not full shadcn/ui)?
- More control over Liquid Glass aesthetic
- Smaller bundle size
- Easier to maintain specific design language

### Why Central Content Source?
- Single file for all content edits
- Type-safe content updates
- Easy for non-devs to understand structure
- Prepares for future CMS integration

---

## Key Files for Quick Reference

| File | Purpose |
|------|---------|
| `src/content/index.ts` | ALL content |
| `tailwind.config.ts` | Design tokens |
| `src/app/globals.css` | Global styles |
| `src/components/ui/` | Reusable components |
| `src/components/layout/app-shell.tsx` | Main layout |

---

## Contact for Questions

This project is maintained by Elias Burk.
For technical questions about the codebase, refer to this document first.

---

*Last updated: February 2026*
