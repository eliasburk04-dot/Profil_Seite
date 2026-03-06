# MONO AI Template Analysis

## Scope

Primary reference: `/Users/eliasburk/Downloads/MONO AI - AI & SaaS Template.html`

The file is a Framer export. The goal for this redesign is not markup reuse. The goal is to reconstruct the visual system and motion language inside the existing Burk-Solutions product.

## High-Level Structure

Observed section flow in the rendered template:

1. Top navigation with compact brand, simple text links, and a pill CTA.
2. Hero header with centered copy and a full-bleed animated background.
3. Trusted-by strip directly under the hero.
4. Editorial “about” section with large copy and supporting cards.
5. Feature / capability cards.
6. Walkthrough / product showcase rows.
7. Testimonial and proof section.
8. Integration ticker / logo zone.
9. Secondary feature grid.
10. FAQ.
11. Final CTA.
12. Footer.

This maps well to Burk-Solutions as:

1. Navbar
2. Hero with ribbon background
3. Trust strip
4. Services overview
5. Process
6. Selected projects
7. FAQ
8. Final CTA
9. Footer

## Visual System

### Palette

The template uses a very dark base with restrained contrast:

- Background: near-black
- Surface: dark graphite / charcoal
- Primary text: white
- Secondary text: white at reduced opacity
- Accent tones: icy blue, warm sand, and soft green

Framer token values visible in the export:

- `#000000`
- `#0e0e0e`
- `#1a1a1a`
- `rgba(255,255,255,0.8)`
- `rgba(255,255,255,0.6)`
- `#7ec4e3`
- `#f2b76c`
- `#7eea9b`

### Typography

Observed font stack usage in the export:

- `Geist` for body and interface text
- `Source Serif 4` italic for emphasized headline words
- `Space Grotesk` for brand treatment

Practical reconstruction decision:

- Keep the current Next.js stack.
- Use a strong sans body/display with a serif italic accent style.
- Recreate the contrast pattern: bold sans headline + italic serif insertions.

### Spacing and Proportions

Observed layout behavior:

- Desktop page width stays around `1320px` inside the main content container.
- Hero copy block is narrower, around `800px`.
- Major section spacing is generous and editorial.
- Buttons are compact pills, around `40px` to `44px` tall.
- Cards use medium radius with light borders, not heavy glassmorphism.

### Buttons and Cards

Primary button pattern:

- White or bright surface
- Dark text
- Full pill radius
- Compact height

Secondary button pattern:

- Transparent or dark translucent fill
- Thin white border
- Same pill geometry

Card pattern:

- Dark surface
- Hairline border
- Subtle inner highlight
- Mild glow only where emphasis is needed

## Hero Background Analysis

### What the template actually does

The hero background is rendered through a video layer, not a procedural Framer animation.

Observed DOM:

- `data-framer-name="Header"` section
- `data-framer-name="Video"` absolute background layer
- Rendered element:
  - `<video src="https://framerusercontent.com/assets/iWlVr4qV5BuFxjhc6g7QcPK5o.mp4" ... autoplay muted loop playsinline>`

Observed behavior:

- Full-bleed media behind the hero content
- Low-opacity presentation
- Darkened by overlay / vignette treatment
- Content remains centered and readable above it

### Reconstruction decision

For Burk-Solutions, the hero animation will be reconstructed as a reusable React component instead of copying the template video asset.

Chosen approach:

- Layered SVG ribbon paths
- Animated transforms for slow drift
- Glow and bloom layers for depth
- Pointer and scroll parallax through Framer Motion
- Reduced-motion fallback to a static composition

Why this approach:

- Keeps the implementation reusable and local
- Avoids shipping a copied template asset
- Preserves Vercel compatibility
- Gives direct control over opacity, performance, and responsiveness

## Motion Language

Observed motion characteristics:

- Slow and cinematic, not aggressive
- Hero content appears with restrained upward reveal
- Ambient movement continues in the background
- Visual depth comes from blur, opacity stacking, and layered parallax

Implementation targets for the redesign:

- Continuous ribbon drift with long-duration loops
- Subtle cursor response on pointer devices
- Mild scroll-linked offset for depth
- Reduced-motion support via static ribbon state

## Component Map For Reconstruction

Planned component system:

- `HeroRibbonBackground`
- `Button`
- `GlassCard`
- `TagPill`
- `SectionHeader`
- `ServiceCard`
- `ProjectCard`
- `FAQAccordion`
- `ContactForm`
- `MobileNav`
- `SiteFooter`

## Stack Decision

No stack migration is required.

Reason:

- Existing project is already Next.js + TypeScript + Tailwind + Framer Motion.
- That stack is sufficient for the required animation and section system.
- A migration would add risk without improving the MVP.
